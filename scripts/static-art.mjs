// Builds the static profile art: assets/architecture-{dark,light}.svg. Run by hand after editing: node scripts/static-art.mjs
import { mkdir, writeFile } from "node:fs/promises";

const FONT = `-apple-system, "Segoe UI", Helvetica, Arial, sans-serif`;

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
<text x="266" y="62" class="g">Amazon Lightsail · Docker Compose · eu-west-2</text>
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
${box(790, 60, 170, "PostgreSQL 16", "daily dumps to S3")}
${box(790, 170, 170, "Amazon S3", "photos · documents", t.aws)}
${box(790, 290, 170, "CloudFront CDN", "WebP · cached at edge", t.aws)}
${box(140, 330, 160, "GitHub Actions", "build · test · deploy")}
${box(380, 330, 140, "Amazon ECR", "Docker images", t.aws)}
<text x="500" y="414" class="s" text-anchor="middle">Keyless OIDC role · deploy via SSM Run Command · auto-rollback on failed health check</text>
</svg>`;
}

await mkdir("assets", { recursive: true });
for (const [name, t] of Object.entries(THEMES)) await writeFile(`assets/architecture-${name}.svg`, arch(t));
console.log("static art written");
