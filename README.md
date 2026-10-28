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
- PrepX role: Lead Software Engineer as a functional title, per Habtamu's October 15 clarification; official title was CTO. Mobile application and AI agent built single-handedly; backend and dashboard contributions confirmed by Habtamu.

## Resume references

The content and structure follow MIT's guidance on specific accomplishment statements, conservative formatting, and readable technical skills:

- https://capd.mit.edu/resources/resumes/
- https://capd.mit.edu/resources/resumes-writing-about-your-skills/
- https://capd.mit.edu/resources/make-your-resume-ats-friendly/

## PDF regeneration

Use Chromium to print `Resume.html` as A4 with CSS page size, zero browser margins, and browser headers/footers disabled. After regeneration, inspect the rendered page and extracted text. Confirm it fits a single page without shrinking the 10.5-point body text.

## Publishing verification

After committing to `main`, inspect the Pages workflow and verify the public HTML. A successful commit is not proof of a completed deployment.

## October 15, 2026 update

User-confirmed: Liqawnt Labs is a low-resource audio startup with tokenization, TTS, and ASR scope; Pocket TTS fine-tuning on Amharic is in progress. micro-vLLM is a from-scratch learning project in progress. Inference accounting/benchmarking is ongoing. The serving benchmark suite and Tool-Use RL Lab are proposed projects, explicitly planned, with no results claimed. David Silver course taken; Sutton/Barto and Sergey Levine study ongoing. Keep planned work outside completed accomplishments.

The compact CV prioritizes technical work; Temaribet and myTorch remain on the portfolio. Body text remains 10.5pt.

## Screening audit - October 15, 2026

The main resume targets software/applied AI roles; Resume-Audio.html and Habtamu_Asefa_Audio_Resume.pdf emphasize speech adaptation. PrepX and Liqawnt are concurrent roles ordered by relevance. Coursework and proposed RL/benchmark projects were removed from application resumes and the public portfolio. The private job-search roadmap and bullet bank retain future milestones. No benchmark gains, completed RL runs, GPU expertise, or specialist years have been invented. The four-year total is omitted from the summary pending clarification of the 2023 employment start.

## Evidence clarification - October 15, 2026

Habtamu confirms paid software work began mid-2022, leadership of a four-person PrepX team, Pocket TTS adaptation using 200 hours of Amharic speech, preparation of an internal benchmark, and RL experiments targeting intonation, prosody, and accent. He identifies WER and native-speaker ratings as evaluation measures. Reported 10% improvement over SOTA is retained in private notes only pending named baseline, before/after scores, and definition of improvement. No reward algorithm, number of raters, held-out split, or significance claim has been inferred. Corrected PrepX ownership text previously inserted beneath unrelated projects.

## Current weekly metrics - October 15, 2026

Habtamu reports approximately 30,000 questions answered per week and approximately 200 students joining per week. These replace the older downloads and cumulative question figures in current resumes and portfolio cards; historical sourcing above is retained as history. Counts are approximate and user-reported, not independently retrieved. Rust added to the language list per Habtamu.

## Editorial pass - October 15, 2026

Removed repeated solo/independent wording from resumes and public portfolio; exact sole-ownership facts remain in project history. Grouped TypeScript/JavaScript and Node.js/NestJS, separated skill categories, emphasized torchaudio in the audio version, removed redundant Expo/Nginx from the compact resume skills while retaining them where relevant in experience. Kept Rust as user-reported; no proficiency level or production Rust claim added. Removed generic collaboration filler, shortened summaries, and retained scope-specific ownership verbs. The website carries a broader skills list than each targeted application resume.

## GoNumbers, client correction, and UlcerGuard - October 15

Reviewed gonumbers-app and gonumbers-api with authenticated read access. Mobile source contains SIP.js registration with FreeSWITCH, WebRTC media handling, CallKeep controls, virtual-number selection, messaging screens and Socket.IO synchronization. Some calling integration is disabled for testing in the checked-in call context; no deployed/production-ready claim is made. These mobile/API repositories are private and are not linked as public portfolio artifacts. Native eSIM profile provisioning was not verified, so copy describes digital/virtual numbers rather than claiming eSIM activation implementation.

Habtamu corrected US bar-exam work: critical mobile bug fixes, library upgrades and mobile feature updates; backend/deployment ownership removed.

UlcerGuard source confirms react-native-bluetooth-classic pressure acquisition, timestamp/region parsing, pressureUpdate Socket.IO emission, server broadcast and a React streaming dashboard. History UI/API also inspected. Arduino hardware and pressure-imbalance alerts are user-confirmed. Copy uses Bluetooth rather than asserting BLE, and makes no clinical-outcome claim.

## Consolidated client experience

Replaced Freelance & Agency with Software Engineer | Client Projects and one paragraph covering Dymnd, the US bar-exam mobile app, and Keyring. Dymnd and bar-exam contributions remain specifically attributed. Habtamu confirms Keyring was a project he worked on; its detailed responsibilities have not yet been recovered. The accessible recent-chat listing did not surface a Keyring report. No Keyring technology, outcome, client identity or specialization has been invented.

## October 28 portfolio split

- `index.html` is the software engineering portfolio: full stack, web, backend, mobile and applied agents/automation.
- `ml-systems.html` is the separate ML systems and speech portfolio: Liqawnt, micro-vLLM (in development) and myTorch.
- `projects.html` contains software case studies; `ml-projects.html` contains ML case studies. Old ML anchors on `projects.html` link to their new case studies.
- `Resume.html` and `Habtamu_Asefa_Software_Engineer.pdf` serve the software resume.
- `Resume-ML.html` and `Habtamu_Asefa_ML_Systems_Resume.pdf` serve the ML resume. Legacy `Resume-Audio.html`, `Habtamu_Asefa_Audio_Resume.pdf` and `Habtamu_Asefa_Resume.pdf` remain available.
- Search scope is user-reported October 28: 250,000+ searchable items across questions, curriculum topics and schools. Approximate weekly acquisition/activity figures remain dated October 15.
- Client corrections: Dymnd is real-time habit tracking and an AI habit-development advisor; Themis Bar is mobile maintenance/features; Remimb is the Bluetooth keyring companion project. React Native/Expo marketplace work describes implemented UI screens, not verified payment processing or a commercial launch.
- Next.js dashboard, Express/Prisma API and Agno workflow evidence were checked October 28. GoNumbers uses Prisma with MongoDB in the inspected schema. LangGraph/n8n are user-confirmed skills; no specific unverified outcome is claimed.

The application PDF files are generated and visually checked separately in the Job Hunt workspace, then copied here. HTML resume pages carry matching content; the PDF download is the canonical application artifact.
