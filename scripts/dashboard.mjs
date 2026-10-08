// Builds assets/dashboard-dark.svg and assets/dashboard-light.svg from live
// GitHub data. Run by .github/workflows/profile.yml every day and on push.
// Needs GITHUB_TOKEN (the workflow's own token is enough). No dependencies.
import { mkdir, readFile, writeFile } from "node:fs/promises";

const LOGIN = process.env.PROFILE_LOGIN || "allan818181";
const TOKEN = process.env.GITHUB_TOKEN;
if (!TOKEN) throw new Error("GITHUB_TOKEN is not set");

const QUERY = `query($login: String!) {
  user(login: $login) {
    createdAt
    followers { totalCount }
    repositories(ownerAffiliations: OWNER, privacy: PUBLIC, isFork: false, first: 100) {
      totalCount
      nodes {
        isArchived
        stargazerCount
        languages(first: 8, orderBy: { field: SIZE, direction: DESC }) {
          edges { size node { name color } }
        }
      }
    }
    contributionsCollection {
      totalCommitContributions
      restrictedContributionsCount
      contributionCalendar {
        totalContributions
        weeks { contributionDays { contributionCount date } }
      }
    }
  }
}`;

const res = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: { Authorization: `bearer ${TOKEN}`, "Content-Type": "application/json", "User-Agent": LOGIN },
  body: JSON.stringify({ query: QUERY, variables: { login: LOGIN } }),
});
const json = await res.json();
if (!res.ok || json.errors) throw new Error(JSON.stringify(json.errors ?? json));
const u = json.data.user;

// Languages: every repo counts equally (its own percentages, summed), so one
// repo with a lot of generated HTML cannot swamp the rest.
const SKIP = new Set(["PowerShell", "Batchfile", "Procfile", "Dockerfile", "Shell", "Makefile", "Roff", "Meson", "Smarty", "Cython", "Fortran", "C", "C++", "Lua", "Go Template", "Hack", "PLpgSQL"]);
const share = new Map();
const colors = new Map();
for (const repo of u.repositories.nodes) {
  if (repo.isArchived) continue;
  const edges = repo.languages.edges.filter((e) => !SKIP.has(e.node.name));
  const total = edges.reduce((s, e) => s + e.size, 0);
  for (const e of edges) {
    share.set(e.node.name, (share.get(e.node.name) ?? 0) + e.size / total);
    colors.set(e.node.name, e.node.color ?? "#8b949e");
  }
}
const langSum = [...share.values()].reduce((a, b) => a + b, 0) || 1;
const langs = [...share.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6)
  .map(([name, v]) => ({ name, pct: (v / langSum) * 100, color: colors.get(name) }));

const cc = u.contributionsCollection;
const days = cc.contributionCalendar.weeks.flatMap((w) => w.contributionDays);
const lastActive = [...days].reverse().find((d) => d.contributionCount > 0)?.date;
const ago = lastActive ? Math.round((Date.parse(new Date().toISOString().slice(0, 10)) - Date.parse(lastActive)) / 864e5) : null;
const stats = [
  { label: "Contributions (1 yr)", value: cc.contributionCalendar.totalContributions },
  { label: "Public repositories", value: u.repositories.totalCount },
  { label: "Languages in use", value: share.size },
  { label: "Last active", value: ago === null ? "n/a" : ago === 0 ? "Today" : ago === 1 ? "Yesterday" : `${ago} days ago` },
];

// Flagship production system: facts from production-facts.json, plus a live
// health check of its URL when one is set.
const facts = JSON.parse(await readFile("production-facts.json", "utf8"));
let health = { state: "building", text: "Moving to new domain" };
if (facts.healthUrl) {
  try {
    const t0 = Date.now();
    const r = await fetch(facts.healthUrl, { signal: AbortSignal.timeout(15000) });
    health = r.ok ? { state: "ok", text: `Online · ${Date.now() - t0} ms` } : { state: "down", text: `HTTP ${r.status}` };
  } catch {
    health = { state: "down", text: "Unreachable" };
  }
}

const THEMES = {
  dark: { bg: "#0d1117", card: "#161b22", border: "#30363d", text: "#e6edf3", muted: "#8b949e", accent: "#58a6ff", ok: "#3fb950", warn: "#d29922", bad: "#f85149" },
  light: { bg: "#ffffff", card: "#f6f8fa", border: "#d0d7de", text: "#1f2328", muted: "#59636e", accent: "#0969da", ok: "#1a7f37", warn: "#9a6700", bad: "#cf222e" },
};
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");

function render(t) {
  const W = 840, H = 330;
  const updated = new Date().toUTCString().replace(/:\d\d GMT$/, " UTC");
  const tiles = stats.map((s, i) => {
    const x = 24 + i * 200;
    return `<g transform="translate(${x},64)">
      <rect width="184" height="76" rx="10" fill="${t.card}" stroke="${t.border}"/>
      <text x="16" y="38" class="big"${String(s.value).length > 8 ? ' style="font-size:20px"' : ""}>${esc(s.value.toLocaleString("en-US"))}</text>
      <text x="16" y="60" class="small">${esc(s.label)}</text></g>`;
  }).join("");
  let bx = 24;
  const bar = langs.map((l) => {
    const w = (l.pct / 100) * 380;
    const r = `<rect x="${bx.toFixed(1)}" y="196" width="${Math.max(w - 2, 1).toFixed(1)}" height="10" fill="${l.color}"/>`;
    bx += w;
    return r;
  }).join("");
  const legend = langs.map((l, i) => {
    const x = 24 + (i % 2) * 190, y = 232 + Math.floor(i / 2) * 26;
    return `<circle cx="${x + 5}" cy="${y - 4}" r="5" fill="${l.color}"/>
      <text x="${x + 16}" y="${y}" class="label">${esc(l.name)} <tspan class="small">${l.pct.toFixed(1)}%</tspan></text>`;
  }).join("");
  const dot = { ok: t.ok, building: t.warn, down: t.bad }[health.state];
  const panel = `<g transform="translate(440,166)">
    <rect width="376" height="140" rx="10" fill="${t.card}" stroke="${t.border}"/>
    <text x="16" y="28" class="label">${esc(facts.name)}</text>
    <text x="16" y="46" class="small">${esc(facts.tagline)}</text>
    <text x="346" y="28" class="small" text-anchor="end">${esc(health.text)}</text>
    <circle cx="358" cy="24" r="4" fill="${dot}" class="pulse"/><circle cx="358" cy="24" r="4" fill="${dot}"/>
    ${facts.metrics.map((m, i) => `<g transform="translate(${16 + (i % 3) * 120},${70 + Math.floor(i / 3) * 40})"><text class="label" fill="${t.accent}" style="fill:${t.accent}">${esc(m.value)}</text><text y="16" class="small">${esc(m.label)}</text></g>`).join("")}
  </g>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Live GitHub dashboard for ${LOGIN}">
<style>
  text { font-family: -apple-system, "Segoe UI", Helvetica, Arial, sans-serif; fill: ${t.text}; }
  .title { font-size: 18px; font-weight: 700; }
  .big { font-size: 28px; font-weight: 700; fill: ${t.accent}; }
  .label { font-size: 13px; font-weight: 600; }
  .small { font-size: 12px; fill: ${t.muted}; font-weight: 400; }
  .pulse { animation: pulse 2s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
  @keyframes pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: .35; transform: scale(1.6); } }
  .rise { animation: rise .8s ease-out both; }
  @keyframes rise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
</style>
<rect width="${W}" height="${H}" rx="14" fill="${t.bg}" stroke="${t.border}"/>
<circle cx="32" cy="34" r="5" fill="${t.ok}" class="pulse"/>
<circle cx="32" cy="34" r="5" fill="${t.ok}"/>
<text x="46" y="40" class="title">Live engineering dashboard</text>
<text x="${W - 24}" y="40" class="small" text-anchor="end">auto-built by GitHub Actions · ${esc(updated)}</text>
<g class="rise">${tiles}</g>
<text x="24" y="182" class="label">Languages across my repositories</text>
<rect x="24" y="196" width="380" height="10" rx="5" fill="${t.card}"/>
<clipPath id="r"><rect x="24" y="196" width="380" height="10" rx="5"/></clipPath>
<g clip-path="url(#r)">${bar}</g>
${legend}
<g class="rise">${panel}</g>
</svg>`;
}

await mkdir("assets", { recursive: true });
for (const [name, theme] of Object.entries(THEMES)) {
  await writeFile(`assets/dashboard-${name}.svg`, render(theme));
}
console.log("dashboard built:", stats.map((s) => `${s.label}=${s.value}`).join(", "), "|", langs.map((l) => `${l.name} ${l.pct.toFixed(1)}%`).join(", "));
