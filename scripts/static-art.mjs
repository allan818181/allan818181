// Builds the static profile art: assets/banner.svg and
// assets/architecture-{dark,light}.svg. Run by hand after editing: node scripts/static-art.mjs
import { mkdir, writeFile } from "node:fs/promises";

const FONT = `-apple-system, "Segoe UI", Helvetica, Arial, sans-serif`;

const banner = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="260" viewBox="0 0 1200 260" role="img" aria-label="Allan Muganyizi Deus, Full-Stack and DevOps Engineer">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#0d1117"/><stop offset=".55" stop-color="#0f2a4a"/><stop offset="1" stop-color="#0b3d2e"/>
  </linearGradient>
  <linearGradient id="line" x1="0" x2="1"><stop offset="0" stop-color="#1f6feb"/><stop offset="1" stop-color="#3fb950"/></linearGradient>
  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#ffffff" stroke-opacity=".05"/></pattern>
</defs>
<style>
  text { font-family: ${FONT}; }
  .name { font-size: 52px; font-weight: 800; fill: #ffffff; letter-spacing: .5px; }
  .role { font-size: 22px; font-weight: 600; fill: #9ecbff; }
  .meta { font-size: 15px; fill: #8b949e; }
  .in { animation: in 1s ease-out both; }
  .in2 { animation: in 1s .25s ease-out both; }
  .in3 { animation: in 1s .5s ease-out both; }
  @keyframes in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
  .flow { stroke-dasharray: 6 10; animation: flow 1.6s linear infinite; }
  @keyframes flow { to { stroke-dashoffset: -32; } }
  .blink { animation: blink 1.1s steps(1) infinite; }
  @keyframes blink { 50% { opacity: 0; } }
</style>
<rect width="1200" height="260" rx="18" fill="url(#bg)"/>
<rect width="1200" height="260" rx="18" fill="url(#grid)"/>
<g transform="translate(840,40)" opacity=".9">
  <path class="flow" d="M10 40 H120 V120 H250" fill="none" stroke="url(#line)" stroke-width="2"/>
  <path class="flow" d="M10 150 H90 V70 H250" fill="none" stroke="url(#line)" stroke-width="2" style="animation-delay:-.8s"/>
  ${[[0, 30], [0, 140], [110, 110], [240, 60], [240, 110]].map(([x, y]) => `<rect x="${x}" y="${y}" width="20" height="20" rx="5" fill="#161b22" stroke="#3fb950"/>`).join("")}
</g>
<text x="60" y="112" class="name in">Allan Muganyizi Deus</text>
<text x="62" y="152" class="role in2">Full-Stack &amp; DevOps Engineer<tspan class="blink" fill="#3fb950"> _</tspan></text>
<text x="62" y="192" class="meta in3">Next.js · React · React Native · Django · AWS · Docker · GitHub Actions</text>
<text x="62" y="218" class="meta in3">Dar es Salaam, Tanzania · UTC+3</text>
</svg>`;

const THEMES = {
  dark: { bg: "#0d1117", box: "#161b22", border: "#30363d", text: "#e6edf3", muted: "#8b949e", group: "#1f6feb", flow: "#3fb950", aws: "#ff9900" },
  light: { bg: "#ffffff", box: "#f6f8fa", border: "#d0d7de", text: "#1f2328", muted: "#59636e", group: "#0969da", flow: "#1a7f37", aws: "#b35c00" },
};

function arch(t) {
  const box = (x, y, w, title, sub, accent = t.border) => `<g transform="translate(${x},${y})">
    <rect width="${w}" height="58" rx="10" fill="${t.box}" stroke="${accent}"/>
    <text x="${w / 2}" y="25" text-anchor="middle" class="b">${title}</text>
    <text x="${w / 2}" y="44" text-anchor="middle" class="s">${sub}</text></g>`;
  const wire = (d, delay = 0) => `<path d="${d}" class="w"/><path d="${d}" class="f" style="animation-delay:${delay}s"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="430" viewBox="0 0 1000 430" role="img" aria-label="Architecture of the Tanzanite Auto Traders platform on AWS">
<style>
  text { font-family: ${FONT}; fill: ${t.text}; }
  .b { font-size: 14px; font-weight: 700; }
  .s { font-size: 11.5px; fill: ${t.muted}; }
  .g { font-size: 12px; font-weight: 700; fill: ${t.group}; }
  .w { fill: none; stroke: ${t.border}; stroke-width: 2; }
  .f { fill: none; stroke: ${t.flow}; stroke-width: 2; stroke-dasharray: 5 12; animation: f 1.4s linear infinite; }
  @keyframes f { to { stroke-dashoffset: -34; } }
</style>
<rect width="1000" height="430" rx="14" fill="${t.bg}" stroke="${t.border}"/>
<rect x="250" y="40" width="480" height="232" rx="12" fill="none" stroke="${t.group}" stroke-dasharray="6 5"/>
<text x="266" y="62" class="g">AWS EC2 · Docker Compose · eu-west-2</text>
${wire("M190 150 H275", 0)}
${wire("M415 150 H480", -.3)}
${wire("M550 179 V195", -.6)}
${wire("M620 140 H700 V89 H790", -.2)}
${wire("M700 224 H750 V199 H790", -.5)}
${wire("M875 228 V290", -.9)}
${wire("M790 319 H110 V179", -.4)}
${wire("M300 359 H380", -.7)}
${wire("M450 330 V272", -.1)}
${box(30, 121, 160, "Visitors", "7 languages · 4 currencies")}
${box(275, 121, 140, "Caddy", "HTTPS · auto TLS")}
${box(480, 121, 140, "Next.js 16", "app + 3 portals", t.group)}
${box(430, 195, 270, "Redis + BullMQ worker", "cache · rate limits · photo pipeline")}
${box(790, 60, 170, "Neon PostgreSQL", "Prisma · migrations")}
${box(790, 170, 170, "Amazon S3", "photos · documents", t.aws)}
${box(790, 290, 170, "CloudFront CDN", "WebP · cached at edge", t.aws)}
${box(140, 330, 160, "GitHub Actions", "build · test · deploy")}
${box(380, 330, 140, "Amazon ECR", "Docker images", t.aws)}
<text x="500" y="414" class="s" text-anchor="middle">Keyless OIDC role · deploy via SSM Run Command · auto-rollback on failed health check</text>
</svg>`;
}

await mkdir("assets", { recursive: true });
await writeFile("assets/banner.svg", banner);
for (const [name, t] of Object.entries(THEMES)) await writeFile(`assets/architecture-${name}.svg`, arch(t));
console.log("static art written");
