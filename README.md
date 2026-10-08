<img src="assets/banner.svg" width="100%" alt="Allan Muganyizi Deus, Full-Stack and DevOps Engineer"/>

<p align="center">
  <a href="https://github.com/allan818181"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=3200&pause=900&color=58A6FF&center=true&vCenter=true&width=720&lines=I+build+production+web+systems+and+run+them+on+AWS.;Next.js+%C2%B7+React+%C2%B7+React+Native+%C2%B7+Django;Docker+%C2%B7+GitHub+Actions+%C2%B7+AWS+%C2%B7+PostgreSQL;From+the+first+commit+to+a+monitored+live+system." alt="Typing animation of my focus areas"/></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Open%20to-full--time%20%26%20remote%20roles-3fb950?style=for-the-badge" alt="Open to full-time and remote roles"/>
  <a href="https://www.linkedin.com/in/allan-deus-4b888631a"><img src="https://img.shields.io/badge/LinkedIn-Allan%20Deus-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
  <a href="mailto:allandeus014@gmail.com"><img src="https://img.shields.io/badge/Email-allandeus014%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/></a>
</p>

## About me

I'm a full-stack engineer who also owns what happens after the code is written: infrastructure, deployments, security and monitoring.

- 🚗 **Right now:** I build and run the production platform for **Tanzanite Auto Traders**, a Japanese used car sales company (Tokyo HQ, East Africa office in Dar es Salaam). I designed it, wrote it, and deployed it to AWS with automated, keyless CI/CD.
- 🧱 **How I work:** typed code, small reviewed commits, infrastructure as scripts, nothing manual that a pipeline can do.
- 📱 **Stack:** web (Next.js, React), mobile (React Native, Flutter), backend (Node.js, Django), cloud (AWS, Docker, GitHub Actions).
- 🌍 **Based in** Dar es Salaam (EAT, UTC+3). I work in English and Swahili.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/dashboard-dark.svg"/>
  <img src="assets/dashboard-light.svg" width="100%" alt="Live engineering dashboard, rebuilt every day by GitHub Actions"/>
</picture>

## ⭐ Flagship: Tanzanite Auto Traders (production)

A multilingual car sales platform with a public storefront and three portals (customer, staff, admin), serving **15,000+ vehicles** and **313,000+ photos**. The code is private (client work); here is how it is built and run.

<table>
  <tr>
    <td width="74%"><img src="assets/showcase/tz-home.webp" alt="Tanzanite Auto Traders homepage: search, specialty commercial vehicles and stock highlights"/></td>
    <td width="26%" align="center"><img src="assets/showcase/tz-mobile.webp" alt="Tanzanite homepage on a phone"/></td>
  </tr>
</table>
<table>
  <tr>
    <td width="50%"><img src="assets/showcase/tz-stock.webp" alt="Stock list with filters, brand counts and 15,047 cars in stock"/><p align="center"><sub><b>Stock list</b> · filters, brand counts, infinite scroll</sub></p></td>
    <td width="50%"><img src="assets/showcase/tz-vehicle.webp" alt="Vehicle page with photo gallery, price breakdown and enquiry actions"/><p align="center"><sub><b>Vehicle page</b> · 19-photo gallery, live price breakdown, WhatsApp enquiry</sub></p></td>
  </tr>
</table>

### How it is built

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/architecture-dark.svg"/>
  <img src="assets/architecture-light.svg" width="100%" alt="Architecture: visitors reach Caddy and Next.js on EC2 with Redis and a worker; data in Neon PostgreSQL; photos in S3 behind CloudFront; GitHub Actions deploys images from ECR with a keyless OIDC role"/>
</picture>

| | What I built |
|---|---|
| **Product** | Storefront with smart search, filters and infinite scroll; customer accounts with orders and documents; staff portal with a photo pipeline (ZIP upload, WebP variants, watermarking); admin portal with reports, analytics, content editing and SEO controls |
| **Delivery** | GitHub Actions builds a Docker image, pushes it to ECR and deploys through SSM; database migrations run automatically; a failed health check rolls back to the previous version |
| **Security** | Short-lived OIDC credentials (no long-lived AWS keys), least-privilege IAM, no open SSH port (SSM only), HSTS/CSP headers, rate limiting, role-based access |
| **Operations** | Daily EBS snapshots, budget and SNS alerts, health checks, query monitoring, and cost tuning (e.g. cutting database egress by loading only what each page shows) |

<p>
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/AWS%20EC2%20%C2%B7%20S3%20%C2%B7%20CloudFront%20%C2%B7%20IAM%20%C2%B7%20SSM-FF9900?style=flat-square&logo=amazonwebservices&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white"/>
</p>

## 🧰 Tech stack

| | |
|---|---|
| **Languages** | <img src="https://skillicons.dev/icons?i=ts,js,python,java,php,dart" alt="TypeScript, JavaScript, Python, Java, PHP, Dart"/> |
| **Frontend & mobile** | <img src="https://skillicons.dev/icons?i=nextjs,react,vite,tailwind,html,css,flutter" alt="Next.js, React, Vite, Tailwind, HTML, CSS, Flutter"/> <img src="https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" height="40" alt="React Native"/> |
| **Backend & data** | <img src="https://skillicons.dev/icons?i=nodejs,express,django,prisma,postgres,mysql,redis,supabase" alt="Node.js, Express, Django, Prisma, PostgreSQL, MySQL, Redis, Supabase"/> |
| **DevOps & cloud** | <img src="https://skillicons.dev/icons?i=aws,docker,githubactions,linux,bash,nginx,git,vercel" alt="AWS, Docker, GitHub Actions, Linux, Bash, Nginx, Git, Vercel"/> |

## 🚀 Featured projects

<p>
  <b>Live demos:</b>&nbsp;
  <a href="https://allan818181.github.io/tanzania-stays/"><img src="https://img.shields.io/badge/Tanzania%20Stays-live-3fb950?style=for-the-badge&logo=githubpages&logoColor=white" alt="Tanzania Stays live demo"/></a>
  <a href="https://allan818181.github.io/aru-connect-mail/"><img src="https://img.shields.io/badge/ARU%20CampusMail-live-3fb950?style=for-the-badge&logo=githubpages&logoColor=white" alt="ARU CampusMail live demo"/></a>
  <a href="https://lucy-portfolio-alpha.vercel.app"><img src="https://img.shields.io/badge/Lucy%20Portfolio-live-3fb950?style=for-the-badge&logo=vercel&logoColor=white" alt="Lucy Portfolio live site"/></a>
</p>

| Project | What it is | Stack |
|---|---|---|
| [**Tanzania Stays**](https://github.com/allan818181/tanzania-stays) · [live](https://allan818181.github.io/tanzania-stays/) | Villa rentals and sales site with availability calendars and a blog | React · TypeScript · Vite |
| [**Meditrack**](https://github.com/allan818181/hospital-system) | Hospital system with five role-based portals: reception, doctor, lab, pharmacy, admin | Django · DRF |
| [**Vegas Hotel AI Concierge**](https://github.com/allan818181/vegas) | AI chat concierge grounded in a real hotel's suites and prices; captures bookings as leads | Node.js · Express · Gemini |
| [**Dar es Salaam Data Portal**](https://github.com/allan818181/dar-data-portal) | Open-data portal: datasets, a pandas/Matplotlib transform engine, REST API, PDF/Excel reports | Django · DRF · pandas |
| [**LBLS Library System**](https://github.com/allan818181/desktop-library-management-system) | Desktop library system: loans, fines, analytics, audit log, report builder | Python · Tkinter · PostgreSQL |
| [**Abode Harmony**](https://github.com/allan818181/property-management-system) | Landlord and tenant property management with receipts and maintenance requests | React · TypeScript · Supabase |
| [**Inventory System**](https://github.com/allan818181/inventory-frontend) | Full-stack inventory: JWT [REST API](https://github.com/allan818181/inventory-system-backend) + React dashboard | Django REST · React · TS |
| [**Salon Website**](https://github.com/allan818181/salon-web) | Bilingual (EN/SW) site, containerized for production | Django · Tailwind · Docker |
| [**CertifyWell**](https://github.com/allan818181/exam-portal) | Online exam portal with token-protected exams and grading | PHP · MySQL · JavaScript |

<p align="center"><a href="https://allan818181.github.io/tanzania-stays/"><img src="assets/showcase/stays.webp" width="80%" alt="Tanzania Stays live site: villa rentals and sales in Tanzania"/></a><br/><sub><b>Tanzania Stays</b> · live on GitHub Pages, deployed by a GitHub Actions workflow</sub></p>

## 📈 Activity

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/allan818181/allan818181/output/snake-dark.svg"/>
  <img src="https://raw.githubusercontent.com/allan818181/allan818181/output/snake-light.svg" width="100%" alt="Contribution graph being eaten by a snake, regenerated daily"/>
</picture>

<p align="center"><sub>The dashboard and the snake above are rebuilt every day by a GitHub Actions workflow in this repository (<code>scripts/dashboard.mjs</code>).</sub></p>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:3fb950,55:1f6feb,100:0d1117&height=110&section=footer" width="100%" alt=""/>
