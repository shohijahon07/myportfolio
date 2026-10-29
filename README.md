<h1 align="center">Shohijahon Sharifov — Developer Portfolio</h1>

<p align="center">
  Personal portfolio website of a Full-Stack Developer (Java · Spring Boot · React)
</p>

<p align="center">
  <a href="https://shohijahonsharifov.uz/"><img src="https://img.shields.io/badge/Live-shohijahonsharifov.uz-0f172a?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live site"/></a>
  <img src="https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 14"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
</p>

---

## ✨ Sections

| Section | What it shows |
|---|---|
| **Hero** | Name, role and quick links |
| **About** | Short professional summary |
| **Experience** | Work history |
| **Skills** | Technologies with icons |
| **Projects** | Featured projects in a carousel with project cards |
| **Education** | Academic background |
| **Contact** | Contact form (EmailJS) with optional Google reCAPTCHA |

## 🛠️ Tech stack

- **Framework:** Next.js 14 (App Router), React
- **Styling:** Tailwind CSS, SCSS
- **Contact form:** EmailJS + Google reCAPTCHA (server-side verification in `app/api/google`)
- **Analytics:** Google Tag Manager

## 📁 Project structure

```
app/
  api/contact/        contact form endpoint
  api/google/         reCAPTCHA verification
  components/         navbar, footer, homepage sections
  css/                global and card styles
utils/
  data/               personal data, projects, skills, experience, education
```

All content lives in `utils/data/` — update those files to change the text on the site.

## 🚀 Run locally

```bash
npm install
cp .env.example .env
npm run dev
```

Open http://localhost:3000.

### Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS contact form |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `NEXT_PUBLIC_RECAPTCHA_SECRET_KEY` | Google reCAPTCHA |
| `NEXT_PUBLIC_GTM` | Google Tag Manager ID |
| `NEXT_PUBLIC_APP_URL` | Public site URL |

## 🙏 Credits

Based on the open-source [developer-portfolio](https://github.com/said7388/developer-portfolio) template by Abu Said, customized with my own content.

## 📬 Contact

- 🌐 [shohijahonsharifov.uz](https://shohijahonsharifov.uz/)
- ✈️ [@shohijahonsharifov](https://t.me/shohijahonsharifov)
- 💼 [LinkedIn](https://www.linkedin.com/in/shohjahon-sharipov-6454a0326/)
- 🐙 [GitHub profile](https://github.com/shohijahon07)
