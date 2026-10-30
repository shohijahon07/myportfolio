import image1 from "/public/projects-image/mr.jpg" ;
import image2 from "/public/projects-image/taxipicture.png";
import image3 from "/public/projects-image/photo_2025-06-14_06-16-50.jpg";
import image4 from "/public/projects-image/press.jpg";
import image5 from "/public/projects-image/test.jpg";
import image6 from "/public/projects-image/snippet.jpg";
import image7 from "/public/projects-image/study.jpg";
import image8 from "/public/projects-image/resume.jpg";
import image9 from "/public/projects-image/zapchast.jpg";
import image10 from "/public/projects-image/lms.jpg";
import image11 from "/public/projects-image/ecommece.jpg";
import image12 from "/public/projects-image/messanger.jpg";
import image13 from "/public/projects-image/image.jpg";
import image14 from "/public/projects-image/olx.jpg";
import image15 from "/public/projects-image/burgesta.jpg";
import image16 from "/public/projects-image/burgesta-menu.jpg";
import image17 from "/public/projects-image/yamato-menu.jpg";
import image18 from "/public/projects-image/uzbekistan-population.jpg";
import image19 from "/public/projects-image/gymdesk.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Uzbekistan Population Dynamics (1991–2026)",
    description:
      "An interactive analytics dashboard that visualizes how Uzbekistan's population changed from 1991 to 2026 (with a 2026 forecast). KPI cards show current population, starting population, total growth and growth rate; an interactive line/bar chart supports period filters (1991–2026, 2000–2026, 2010–2026 or a custom range). Key Highlights: One-click A4 PDF report and CSV export generated in the browser. Full UZ/EN/RU interface and dark/light themes. Loading, empty and error states handled through a REST API with request validation. Fully typed React + TypeScript codebase, deployed on Heroku.",
    tools: ["ReactJS", "TypeScript", "Vite", "TailwindCSS", "Recharts", "NodeJS", "Express", "jsPDF", "Heroku"],
    role: "Full-Stack Developer",
    code: "https://github.com/shohijahon07/uzbekistan-population-dashboard",
    demo: "https://uzbekistan-population-dash-92369a4e0439.herokuapp.com/",
    image: image18,
  },
  {
    id: 2,
    name: "Burgesta — Restaurant Landing Page",
    description:
      "A motion-first marketing landing page for Burgesta, a burger restaurant chain in Tashkent. The hero section uses a 200+ frame image sequence scrubbed by scroll position, giving the burger a cinematic, app-like feel instead of a static hero image. Key Highlights: Custom scroll-driven frame animation (no video file, just synced JPEG frames for crisp quality and small payload). Full UZ/RU/EN localization with instant language switching. Vite-powered React build for fast loads and smooth 60fps scrolling. Deployed on Railway with automatic redeploys on push. This project shows my front-end performance and motion-design skills beyond standard CRUD interfaces.",
    tools: ["ReactJS", "Vite", "Scroll Animation", "i18n", "Railway"],
    role: "Frontend Developer",
    code: "",
    demo: "https://burgesta.uz/",
    image: image15,
  },
  {
    id: 3,
    name: "Burgesta — QR Digital Menu",
    description:
      "A production QR-code digital menu for Burgesta: guests scan the table QR code, browse 90+ dishes across categories (combo, burger, salad, drinks and more) with photos, weight/calorie info and live search, then build a cart to show the waiter — a fully payment-free dine-in flow. A secured public REST API (categories, dishes, gallery) drives multi-language content and a light/dark theme toggle. Key Highlights: Spring Security-protected REST API consumed by a React SPA. Category + search based catalog with instant filtering. Two-service deployment (API + frontend) on Heroku. Part of a reusable digital-menu product line I've built for multiple restaurants (see also YAMATO below).",
    tools: ["ReactJS", "Vite", "Java", "Spring-Boot", "Spring-Security", "REST API", "Heroku"],
    role: "Full-Stack Developer",
    code: "",
    demo: "https://burgesta-menu.uz/",
    image: image16,
  },
  {
    id: 4,
    name: "YAMATO — Pan-Asian Restaurant Digital Menu",
    description:
      "A full production QR-code digital menu for YAMATO (大和), a Pan-Asian restaurant in Tashkent. Guests scan a table QR code, browse the menu in 6 languages (UZ/RU/EN/ZH/KO/JA), build a cart and tap 'Show to waiter' — no online payment, built around how the restaurant actually operates. Ships with an admin panel for managing dishes, categories, images and per-language translations, with at-a-glance completeness indicators for each locale. Key Highlights: Spring Boot 3 (Java 21) + PostgreSQL + Flyway REST API. React, TypeScript, Vite and Tailwind CSS frontend, zero hardcoded UI strings (enforced by a custom i18n-completeness check). Dockerized backend + frontend for one-command deployment. Designed, built and shipped end-to-end using an AI-agent-assisted development workflow (Claude Code) — architecture, backend, frontend and tests in a single focused session, reflecting how I use modern AI tooling to ship production-grade full-stack products faster without cutting corners on quality.",
    tools: ["ReactJS", "TypeScript", "Vite", "TailwindCSS", "Java", "Spring-Boot", "Spring-Security", "Postgresql", "Docker", "AI Agent (Claude Code)"],
    role: "Full-Stack Developer / AI-assisted Engineering",
    code: "",
    demo: "https://yamato-menu.uz/",
    image: image17,
  },
  {
    id: 5,
    name: "GymDesk — Gym Management System (CRM)",
    description:
      "A production CRM for gyms: membership sales, daily passes, partial payments with automatic debt tracking, an owner dashboard and a Telegram bot for members. The reception screen is designed so that a staff member with little computer experience can find a member by the last 4 digits of their phone and finish a payment in 3–5 seconds. Key Highlights: Append-only payment ledger — mistakes are fixed with reversal entries, never edited, so the cash report always reconciles. Debt is calculated, never typed; complimentary memberships are blocked from revenue reports by database constraints. JWT access token in memory + rotating refresh token in an HttpOnly cookie, role-based access (Owner / Admin), idempotent payment endpoints. Telegram bot on a secured webhook with scheduled expiry and debt reminders. Single Docker image deployed on Heroku with PostgreSQL and Flyway migrations.",
    tools: ["Java", "Spring-Boot", "Spring-Security", "JWT", "Postgresql", "ReactJS", "TypeScript", "TailwindCSS", "Telegram Bot (Webhook)", "Docker", "Heroku"],
    role: "Full-Stack Developer",
    code: "",
    demo: "https://gymdesk-crm-353e0b95ec17.herokuapp.com/",
    image: image19,
  },
  {
    id: 6,
    name: "interregional taxi (StartUp Project)",
    description:
      "Role: Full-stack (React/Spring Boot) | Time: 3mo🚀 Results:0.3s load (React/WebP) | 0 breaches (JWT/Spring Sec) | #1 Google ↗120% traffic Cost hack:5VPS(Docker)vs.AWS50 MVP in 6 wks → 4mo zero maintenance 💡 Pitch: Need speed + security + #1 Google? Let’s clone this success! 🔑 SEO, Docker, JWT",
    tools: [
      "React",
      "ReduxSaga",
      "Java",
      "Spring-Boot",
      "Spring-Security",
      "Telegram Bot (Longpooling)",
    ],
    role: "FullStack Developer ",
    code: "https://github.com/shohijahon07/Intercity_Taxi_Project.git",
    demo: "https://startuptaxi-app-project-f3bf3b31abbb.herokuapp.com/",
    image: image2,
  },
  {
    id: 7,
    name: "Miraraboliymadrasasi ",
    description:
      "This project delivers a fully modernized and secure official website for Miraraboli Madrasa, developed pro bono (free of charge) as a community service. It provides the madrasa with a reliable digital presence and an intuitive Admin Panel that allows staff to easily manage daily prayer times and update site content without technical assistance Key Highlights Dynamic Admin Panel for updating prayer times and publishing new content. Robust NGINX deployment with a valid HTTPS SSL certificate ensuring secure and stable access.End-to-end configuration and deployment handled entirely by the developer. This website offers the madrasa a scalable, professional, and maintenance-friendly platform, supporting its mission to share knowledge and serve its community online.",
    tools: ["HTML5",  "CSS3" , "ReactJS", "Postgresql", "Java", "Spring-Boot" , "Spring-Security" , "JWT" , "React Router" ,"NGINX" ],
    role: "Full-Stack developer",
    code: "",
    demo: "https://miraraboliy.uz/",
    image: image1,
  },
  {
    id: 8,
    name: "BodyBalance (StartUp Project)",
    description:
      "This is my own startup project, designed and developed entirely by me.The application analyzes a person’s physical measurements to determine whether they are overweight or not.Key Highlights Built from concept to deployment by a single founder–developer.Accepts user data (such as height and weight) and instantly provides a weight-status evaluation.Includes a Telegram bot interface for quick and user-friendly access.Deployed and maintained independently, ensuring scalability and reliability.This project demonstrates my ability to transform an idea into a working product, covering all stages from ideation and design to coding and deployment." ,



    tools: ["Telegram_bot (Longpooling)"],
    role: "Startup Founder & Developer",
    code: "https://github.com/shohijahon07/BodyBalance.git",
    demo: "https://t.me/SemizlikTest_bot",
    image: image3,
  }
];
