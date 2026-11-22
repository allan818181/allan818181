<img src="assets/banner.webp" width="100%" alt="Allan Muganyizi Deus, Full-Stack and DevOps Engineer. Real screens of the systems I built."/>

<p align="center">
  <img src="https://img.shields.io/badge/Open%20to-full--time%20%26%20remote%20roles-3fb950?style=for-the-badge" alt="Open to full-time and remote roles"/>
  <a href="https://www.linkedin.com/in/allan-deus-devops"><img src="https://img.shields.io/badge/LinkedIn-Allan%20Deus-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
  <a href="https://allan.tanzaniteauto.com"><img src="https://img.shields.io/badge/Portfolio-allan.tanzaniteauto.com-34d399?style=for-the-badge&logo=amazonaws&logoColor=white" alt="Portfolio"/></a>
  <a href="mailto:allandeus014@gmail.com"><img src="https://img.shields.io/badge/Email-allandeus014%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/></a>
</p>

## About me

I'm a full-stack engineer who also owns what happens after the code is written: infrastructure, deployments, security and monitoring.

- **Right now:** I build and run the production platform of **Tanzanite Auto Traders**, a Japanese used car sales company (Tokyo HQ, East Africa Regional Office in Dar es Salaam).
- **Latest work:** a multi-school **School Management System**, and the website and school system of **Jehovah Jireh Learning Center** in Dodoma, joined by one login.
- **Member of [Tanzanite Tech Solutions](https://tech.tanzaniteauto.com):** a Tanzanian software company. I work on software and cloud engineering.
- **How I work:** typed code, small reviewed commits, infrastructure as scripts, nothing manual that a pipeline can do.
- **Stack:** web (Next.js, React), mobile (React Native, Flutter), backend (Node.js, Django), cloud (AWS, Docker, GitHub Actions).
- **Location:** Dar es Salaam, Tanzania. I speak and write English and Kiswahili.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/dashboard-dark.svg"/>
  <img src="assets/dashboard-light.svg" width="100%" alt="Dashboard: contributions, public repositories, live production systems and programming languages"/>
</picture>

## Selected work

Every system below is online. Client code is private, so here is what it does and how it is built. Screens of the school system and the farm app show sample data.

<a href="https://tech.tanzaniteauto.com/work/school-management-system"><img src="assets/showcase/plate-sms-wide.webp" width="100%" alt="School Management System: dashboard on a computer and the parent portal on a phone"/></a>

### School Management System

One platform for many schools. Each school has its own badge, colours, sign-in page, levels, grading, fees and private data.

| | What I built |
|---|---|
| **Teaching and exams** | Registers on a phone, timetables with clash checks, lesson plans that follow the timetable and are checked by the Academic Teacher, marks saved while typing, NECTA grades, divisions and positions, a submit, approve and publish workflow, report cards with signatures |
| **Money** | Fee structures, one-click term invoices, numbered receipts, void with reason instead of delete, expenses, budgets with warnings, payroll with NSSF and PAYE, payslips and a bank list |
| **Families** | Parent portal for all children: attendance, results, report cards, fees, homework, timetable and events, in English and Kiswahili |
| **Trust** | Signed QR codes on every document that open the school's own record, 34 permissions with custom and double roles, two-step sign-in, idle sign-out, one year of activity log |
| **Live data** | Every change reaches every open screen in about a second through PostgreSQL LISTEN/NOTIFY and Server-Sent Events |
| **Quality** | More than 150 real-browser end-to-end checks driven over the Chrome DevTools Protocol |

<p><img src="https://img.shields.io/badge/Next.js%2016-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js 16"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"/> <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL"/> <img src="https://img.shields.io/badge/Server--Sent%20Events-1238e0?style=flat-square" alt="Server--Sent Events"/> <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker"/> <img src="https://img.shields.io/badge/Amazon%20Lightsail%20%C2%B7%20SES-FF9900?style=flat-square" alt="Amazon Lightsail %C2%B7 SES"/> <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white" alt="GitHub Actions"/></p>

<details>
<summary><b>More screens of the school system</b></summary>
<br/>
<table>
  <tr>
    <td width="50%"><img src="assets/showcase/sms-results.webp" alt="Class results with averages, positions and grades"/><p align="center"><sub>Class results</sub></p></td>
    <td width="50%"><img src="assets/showcase/sms-fees.webp" alt="Fee status of every pupil"/><p align="center"><sub>Fee status by pupil</sub></p></td>
  </tr>
  <tr>
    <td width="50%"><img src="assets/showcase/sms-attendance.webp" alt="Attendance of the whole school today"/><p align="center"><sub>Attendance today</sub></p></td>
    <td width="50%"><img src="assets/showcase/sms-finance.webp" alt="Accounts dashboard with money in and out by month"/><p align="center"><sub>Accounts</sub></p></td>
  </tr>
  <tr>
    <td width="50%" align="center"><img src="assets/showcase/doc-report.webp" width="330" alt="Printed report card with signatures and QR code"/><p align="center"><sub>Report card</sub></p></td>
    <td width="50%" align="center"><img src="assets/showcase/ph-verify.webp" width="230" alt="The verification page a QR scan opens on a phone"/><p align="center"><sub>What a QR scan opens</sub></p></td>
  </tr>
</table>
</details>

<a href="https://jsch.tanzaniteauto.com"><img src="assets/showcase/plate-jj-wide.webp" width="100%" alt="Jehovah Jireh Learning Center: school website on a computer and a phone"/></a>

### Jehovah Jireh Learning Center

The website and school system of an English medium pre and primary school in Vikonje, Dodoma.

| | What I built |
|---|---|
| **Website** | Eight pages in English and Kiswahili built on the school's own photos, uniform tartan and colours; fees and joining instructions, application form, greetings that speak in four languages; a manager where the school edits every text and photo |
| **School system** | The platform above in the school's badge and colours on its own sign-in address, with its real fee structure, report cards and emails in the school's name |
| **Joined** | One login for parents, teachers and staff, live pupil and staff numbers on the website, single sign-on from the system into the website manager |
| **Craft** | Badge redrawn as a clean vector from the school's own artwork; Lighthouse accessibility 100 on every page |

<p align="center">
  <a href="https://jsch.tanzaniteauto.com"><img src="https://img.shields.io/badge/Open%20the%20website-jsch.tanzaniteauto.com-16245c?style=for-the-badge" height="34" alt="Open the website: jsch.tanzaniteauto.com"/></a>
</p>

<a href="https://tanzaniteauto.com"><img src="assets/showcase/plate-tz-wide.webp" width="100%" alt="Tanzanite Auto Traders: car sales platform on a computer and a phone"/></a>

### Tanzanite Auto Traders

A multilingual car sales platform with a public storefront and three portals (customer, staff, admin), serving **15,000+ vehicles** and **313,000+ photos**.

**How it is built**

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/architecture-dark.svg"/>
  <img src="assets/architecture-light.svg" width="100%" alt="Architecture: visitors reach Caddy and Next.js on Amazon Lightsail with Redis, a worker and PostgreSQL; photos in S3 behind CloudFront; GitHub Actions deploys images from ECR with a keyless OIDC role"/>
</picture>

| | What I built |
|---|---|
| **Product** | Storefront with smart search, filters and infinite scroll; customer accounts with orders and documents; staff portal with a photo pipeline (ZIP upload, WebP variants, watermarking); admin portal with reports, analytics, content editing and SEO controls |
| **Invoicing** | Replaced the sales team's Google Apps Script invoice system: numbered invoices with HS codes, PDF generation, email delivery to customers through Amazon SES, paid and overdue tracking, audit history; every legacy invoice and 384 audit events imported by a repeatable script; staff Android app (Capacitor) moved to the new system |
| **Delivery** | GitHub Actions builds a Docker image, pushes it to ECR and deploys through SSM; database migrations run automatically; a failed health check rolls back to the previous version |
| **Security** | Short-lived OIDC credentials (no long-lived AWS keys), least-privilege IAM, no open SSH port (SSM only), HSTS/CSP headers, rate limiting, role-based access |
| **Operations** | Daily server snapshots and database dumps to S3, health checks, query monitoring, and cost tuning (e.g. moving every system from EC2 and a hosted database to one server with about 1.5 minutes of downtime) |

<p>
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/AWS%20Lightsail%20%C2%B7%20S3%20%C2%B7%20CloudFront%20%C2%B7%20IAM%20%C2%B7%20SSM-FF9900?style=flat-square&logo=amazonwebservices&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white"/>
</p>

<table>
  <tr>
    <td width="50%" valign="top"><a href="https://d.tanzaniteauto.com"><img src="assets/showcase/plate-sl.webp" alt="Shamba Langu farm records app"/></a>
    <h3>Shamba Langu</h3>
    Farm records for livestock owners: animals and flocks, births and breeding reports, eggs, expenses, budgets and worker pay. Installable, with PIN or fingerprint sign-in (WebAuthn), push reminders, English and Kiswahili.<br/><br/><sub>Next.js 16 · PostgreSQL · PWA · WebAuthn · Web Push · AWS</sub></td>
    <td width="50%" valign="top"><a href="https://mj.tanzaniteauto.com"><img src="assets/showcase/plate-mlj.webp" alt="MLJ Legacy Services company website"/></a>
    <h3>MLJ Legacy Services</h3>
    Bilingual website for a Dar es Salaam company with four divisions: full-screen photo stories, catering menu planner, enquiries inbox and a manager where the owner edits every text and photo.<br/><br/><sub>Next.js · TypeScript · Docker · AWS</sub></td>
  </tr>
  <tr>
    <td width="50%" valign="top"><a href="https://tech.tanzaniteauto.com"><img src="assets/showcase/plate-tt.webp" alt="Tanzanite Tech Solutions website"/></a>
    <h3>Tanzanite Tech Solutions</h3>
    Website of the software company where I am a member: four languages with Arabic right-to-left, content manager, customer accounts, website-check tool and live-followed client forms.<br/><br/><sub>Next.js 16 · PostgreSQL · Docker · AWS</sub></td>
    <td width="50%" valign="top"><a href="https://allan.tanzaniteauto.com"><img src="assets/showcase/plate-pf.webp" alt="Portfolio site"/></a>
    <h3>Portfolio</h3>
    Case studies, real incidents and how each system is run. Static site on S3 and CloudFront, built from one CloudFormation template.<br/><br/><sub>HTML · CloudFormation · S3 · CloudFront · GitHub Actions</sub></td>
  </tr>
</table>

## More projects

| Project | What it is | Stack |
|---|---|---|
| **Tanzanite Invoice System** (private, production) | Invoicing inside the Tanzanite staff and admin portals, moved off Google Apps Script: PDF invoices, customer email delivery, payment tracking, audit history and an Android app for staff | Next.js · Prisma · Amazon SES · Capacitor |
| [**Meditrack**](https://github.com/allan818181/hospital-system) | Hospital system with five role-based portals: reception, doctor, lab, pharmacy, admin | Django · DRF |
| [**Vegas Hotel AI Concierge**](https://github.com/allan818181/vegas) | AI chat concierge grounded in a real hotel's suites and prices; captures bookings as leads | Node.js · Express · Gemini |
| [**Dar es Salaam Data Portal**](https://github.com/allan818181/dar-data-portal) | Open-data portal: datasets, a pandas/Matplotlib transform engine, REST API, PDF/Excel reports | Django · DRF · pandas |
| [**LBLS Library System**](https://github.com/allan818181/desktop-library-management-system) | Desktop library system: loans, fines, analytics, audit log, report builder | Python · Tkinter · PostgreSQL |
| [**Abode Harmony**](https://github.com/allan818181/property-management-system) | Landlord and tenant property management with receipts and maintenance requests | React · TypeScript · Supabase |
| [**Inventory System**](https://github.com/allan818181/inventory-frontend) | Full-stack inventory: JWT [REST API](https://github.com/allan818181/inventory-system-backend) + React dashboard | Django REST · React · TS |
| [**Salon Website**](https://github.com/allan818181/salon-web) | Bilingual (EN/SW) site, containerized for production | Django · Tailwind · Docker |
| [**CertifyWell**](https://github.com/allan818181/exam-portal) | Online exam portal with token-protected exams and grading | PHP · MySQL · JavaScript |

## Tech stack

| | |
|---|---|
| **Languages** | <img src="https://skillicons.dev/icons?i=ts,js,python,java,php,dart" alt="TypeScript, JavaScript, Python, Java, PHP, Dart"/> |
| **Frontend & mobile** | <img src="https://skillicons.dev/icons?i=nextjs,react,vite,tailwind,html,css,flutter" alt="Next.js, React, Vite, Tailwind, HTML, CSS, Flutter"/> <img src="https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" height="40" alt="React Native"/> |
| **Backend & data** | <img src="https://skillicons.dev/icons?i=nodejs,express,django,prisma,postgres,mysql,redis,supabase" alt="Node.js, Express, Django, Prisma, PostgreSQL, MySQL, Redis, Supabase"/> |
| **DevOps & cloud** | <img src="https://skillicons.dev/icons?i=aws,docker,githubactions,linux,bash,nginx,git,vercel" alt="AWS, Docker, GitHub Actions, Linux, Bash, Nginx, Git, Vercel"/> |

## Activity

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/allan818181/allan818181/output/snake-dark.svg"/>
  <img src="https://raw.githubusercontent.com/allan818181/allan818181/output/snake-light.svg" width="100%" alt="Contribution graph being eaten by a snake, regenerated daily"/>
</picture>

<p align="center"><sub>The dashboard and the snake above are rebuilt every day by a GitHub Actions workflow in this repository (<code>scripts/dashboard.mjs</code>), which also checks that each production system is online.</sub></p>
