# Dewmini Navarathne — Portfolio

React + Vite single-page portfolio with Framer Motion animations and an EmailJS contact form.

## Run it

```bash
npm install
cp .env.example .env      # then add your EmailJS keys
npm run dev               # http://localhost:5173
npm run build             # production build in dist/
```

## Before you publish — checklist

| Item | Where |
|---|---|
| Your photo (square, at least 800×800) | `public/profile.jpg` |
| Your CV PDF | `public/Dewmini_Navarathne_CV.pdf` |
| GitHub, LinkedIn, Medium URLs | `profile.socials` in `src/data/portfolio.js` |
| "View Application" link for each project | `link` fields in `src/data/portfolio.js` |
| Project screenshots (optional; illustrated covers show until then) | `public/projects/*.png`, then set `image: "/projects/name.png"` |
| Pneumonia Detection description | `otherProjects` in `src/data/portfolio.js` |
| EmailJS keys | `.env` |

All site text lives in `src/data/portfolio.js`, so content changes never touch the components.

## EmailJS setup

1. Create a free account at emailjs.com.
2. **Email Services** → add Gmail (or another provider) → copy the **Service ID**.
3. **Email Templates** → create a template using these variables, then copy the **Template ID**:
   - Subject: `Portfolio message: {{subject}}`
   - Body: `From {{from_name}} ({{reply_to}}):\n\n{{message}}`
   - Set the template's **Reply To** field to `{{reply_to}}` so replies go to the sender.
4. **Account → General** → copy the **Public Key**.
5. Put all three in `.env`. When deploying (Vercel, Netlify), add the same three variables in the host's environment settings.

## Structure

```
src/
  data/portfolio.js     all content (profile, projects, skills, experience)
  components/
    Navbar.jsx          sticky nav, active-section pill, mobile menu
    Hero.jsx            photo, orbiting tech icons, animated mantra
    About.jsx           bio, education, what I'm exploring, certifications
    Skills.jsx          filterable tool grid (Devicon logos, monogram fallback)
    Strengths.jsx
    Experience.jsx      animated timeline
    Projects.jsx        5 featured case studies + more projects
    Contact.jsx         EmailJS form with validation and status messages
```

Animations respect the visitor's "reduce motion" setting via `MotionConfig reducedMotion="user"`.
