# Habtamu Asefa — Portfolio + Résumé

Personal portfolio site and a matching two-page résumé for **Habtamu Asefa — Full-Stack AI Engineer**.
Developer-terminal / IDE aesthetic (deep slate, burnt-orange accent). Static HTML/CSS/JS — no build step, no framework.

All **content** is the real, verified material from the candidate interview (PrepX, Temaribet, react-native-ajora,
client work). The **design** comes from the Claude Design handoff in `Resume/` (kept locally as reference, gitignored).

## Files (the deployable site)
| File | Role |
|---|---|
| `index.html` | Portfolio single page (hero terminal, about, skills, experience, projects, contact) |
| `projects.html` | Case studies — PrepX, react-native-ajora, UlcerGuard |
| `Resume.html` | Two-page A4 résumé (dark/light toggle + Save-PDF button) |
| `theme.css` | Design tokens (colors, type, spacing) — source of truth |
| `site.css` / `projects.css` / `resume.css` | Component + résumé styles |
| `app.js` | Portfolio interactivity (hero terminal, scroll-reveal, nav spy, theme) |
| `vercel.json` | Clean URLs + security headers for static deploy |
| `Habtamu_Asefa_Resume.pdf` | Pre-generated 2-page résumé PDF (light theme) for emailing |
| `avatar.jpg` | Web-optimized 720×720 head-shot used on the homepage, favicon, and social preview |
| `resume-profile-photo.jpg` | Original full-res photo (source for re-cropping `avatar.jpg`) |

### Swap the photo
Replace `resume-profile-photo.jpg`, then regenerate the square avatar:
```bash
convert resume-profile-photo.jpg -auto-orient -resize 720x720^ -gravity north -extent 720x720 -strip -quality 84 avatar.jpg
```
The photo appears **only on the website** (About section), never on the résumé PDF — US/EU tech résumés
conventionally omit photos for ATS + hiring-bias reasons.

## Run locally
```bash
python3 -m http.server 8080
# open http://localhost:8080/
```

## Deploy (when ready)
Any static host works. Easiest is Vercel or Netlify (drag-and-drop the folder), or GitHub Pages:
```bash
# Vercel
npx vercel --prod
# or GitHub Pages: push to a repo, enable Pages on the default branch (root)
```
Then point a custom domain at it and update the links if needed.

## Regenerate the résumé PDF
The résumé page has a **Save PDF** button — open `Resume.html`, click **Light mode**, then **Save PDF**.
To regenerate headlessly (light theme, 2-page A4):
```bash
sed 's/data-theme="dark"/data-theme="light"/' Resume.html > _resume_print.html
python3 -m http.server 8080 &
google-chrome --headless=new --no-pdf-header-footer \
  --print-to-pdf=Habtamu_Asefa_Resume.pdf "http://localhost:8080/_resume_print.html"
rm _resume_print.html
```

## Notes / open items
- No portfolio domain yet — links use the real Play Store (PrepX) and npm (`react-native-ajora`) URLs.
- For large job boards that prefer a single-column scanner-safe résumé, the PDF here parses cleanly as text;
  a plain one-column variant can be added if a specific ATS rejects it.
