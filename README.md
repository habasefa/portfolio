# Habtamu Asefa - portfolio and resume

Static HTML, CSS, and JavaScript. Published at https://habasefa.github.io/portfolio/.

## Files

- `index.html`: professional profile, selected work, experience, skills, and contact.
- `projects.html`: implementation details and status for PrepX, Socratic Loop, Poetic Keyboard, Liqawnt, Ajora, myTorch, and UlcerGuard.
- `Resume.html`: single-column resume; screen and print share the same content.
- `Habtamu_Asefa_Resume.pdf`: generated A4 resume, with selectable text and links.
- `site.css`, `resume.css`: website and resume styles.
- `app.js`: accessible light/dark theme control.
- `.nojekyll`: disables Jekyll processing for the static Pages site.

Run locally with `python3 -m http.server 8080` from the repository root. No build step or package installation is required.

## Content sources - October 5, 2026

- Downloads: 2,600+, provided by Habtamu. Downloads are not interchangeable with registered students.
- Questions answered: 93,173; curriculum topics: 1,824. Retrieved from `https://api.prepx.temaribet.io/public/stats` on October 5, 2026.
- Production stack: inspected manifests and relevant source files in PrepX mobile, API, AI, and vector-search repositories.
- Speech work: inspected Liqawnt's TTS data, training, synthesis, and evaluation code. ASR and speech-to-speech are described as research directions.
- Ajora: package dependencies, README, and its use in PrepX. npm first publication: September 20, 2025. Public repository: https://github.com/habasefa/react-native-ajora.
- myTorch: implementation files for scalar autograd, MLPs, SGD, BPE, and gradient tests. README lags behind the code. Public repository: https://github.com/habasefa/myTorch.
- UlcerGuard: prior thesis history and the public React Native repository at https://github.com/habasefa/UlcerGuard.
- Earlier employment dates and client responsibilities: retained from the existing resume and prior user-provided history; repository creation dates are not treated as employment start dates.

Do not add proficiency or contribution claims merely because a repository was forked. Do not turn a planned feature, dependency, or benchmark described in a README into a completed or independently verified result.

## Project additions - October 10, 2026

- Socratic Loop: user-provided display name; implementation inspected in the private `socratic-ise` repository on `dev`, including the agent runtime, PDF reader, writing editor, citations, and flashcard scheduler. Described as in development, without release or adoption claims.
- Poetic Keyboard: verified repository name `poetic-keyboard`; inspected native Android IME, default writing actions, and Kotlin streaming client. Described as in development. Private repositories are not linked as public source code.
- PrepX study counselor: inspected `prepx-ai` profile/stat tools, counselor instructions, and study-plan tools. Profile and plan functionality is feature-gated; implementation does not establish that the flags are enabled in production.
- PrepX role: CTO, following the user's current professional positioning.

## Resume references

The content and structure follow MIT's guidance on specific accomplishment statements, conservative formatting, and readable technical skills:

- https://capd.mit.edu/resources/resumes/
- https://capd.mit.edu/resources/resumes-writing-about-your-skills/
- https://capd.mit.edu/resources/make-your-resume-ats-friendly/

## PDF regeneration

Use Chromium to print `Resume.html` as A4 with CSS page size, zero browser margins, and browser headers/footers disabled. After regeneration, inspect the rendered page and extracted text. Confirm it fits a single page without shrinking the 10.5-point body text.

## Publishing verification

After committing to `main`, inspect the Pages workflow and verify the public HTML. A successful commit is not proof of a completed deployment.
