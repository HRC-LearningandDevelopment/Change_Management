# Managing Change: From Resistance to Readiness

A self-paced e-learning course for Team Leaders and Managers, built from the *Managing Change Facilitator Guide*. Plain HTML, CSS, and JavaScript: no build step, no framework, no backend, no login. Visual system matches *Planning and Prioritising for Results*.

## Deploy to GitHub Pages

1. Create the repository on GitHub.
2. Upload **everything in this folder** to the root of the repository, keeping the folder structure. Include the empty `.nojekyll` file (it stops GitHub from processing the site with Jekyll).
3. In the repository, go to **Settings → Pages**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, and save.
4. The course will be live at `https://<your-org>.github.io/<repo-name>/` within a minute or two.

## Before launch: set the video links

Open `js/config.js` and replace `[VIDEO_1_URL]` and `[VIDEO_2_URL]` with normal YouTube links (`watch?v=`, `youtu.be/`, or `/embed/` all work).

**Also replace the two text summaries in the same file.** They currently summarize the concept each video supports, because the videos weren't available when the course was built. Learners who tick the "I can't watch YouTube" box see only the summary, so it should match the actual video.

Until a URL is set, the player shows a "not set up yet" panel and the summary, so the course still works end to end.

## Cache-busting: bump `?v=N` on every update

Every CSS and JS file is loaded in `index.html` with a version suffix, for example `js/app.js?v=8`. Browsers and GitHub Pages cache aggressively, so **whenever you change any file, increase the number on every tag in `index.html`** (currently `v=8`):

```
sed -i 's/?v=8"/?v=9"/g' index.html
```

If an update "isn't showing up," check in your browser's developer tools (Network tab) that the new `?v=` number loaded before assuming the change didn't work.

## What's where

| Path | Contents |
| --- | --- |
| `index.html` | Page shell and asset tags |
| `js/config.js` | Video URLs, video summaries, storage key |
| `js/content.js` | All course text, activities, answers, coaching key points, quizzes, final check |
| `js/app.js` | Course engine: navigation, activity types, progress, timer, certificate, PDF |
| `css/styles.css` | Brand styles, including `@font-face` for Proxima Nova |
| `fonts/` | Proxima Nova (WOFF, with the original OTF/TTF as fallback) |
| `img/` | HealthRecon Connect logos, hero artwork, favicon |
| `vendor/pdf-lib.min.js` | PDF library for "Download PDF of my answers" (bundled locally, so it works on networks that block CDNs) |

To edit course wording, change `js/content.js`, then bump `?v=N`.

## Course structure

- **Start:** welcome and name for the certificate.
- **Part 1: the foundation** (both roles): The human side of change; Resistance is data. Contains both videos.
- **Part 2: your path:** the learner picks Team Leader (5 modules + capstone with a 30-day plan) or Manager (7 modules + capstone with a change charter).
- **Wrap-up:** 10-question final check (4 shared + 6 path-specific, 80% to pass, retakes allowed), canvas certificate (PNG), and a PDF of every reflection, plan, and activity result.

Activity types: bucket sort (drag or tap), sequencing, matching with connector lines, flip cards, scavenger hunts, branching simulations, team-member diagnosis, rewrite-and-compare, a Kotter heat map, checks for understanding, and multi-field planning tools. Every activity ends with Coaching Key Points.

## Progress and data

Progress, answers, reflections, and time are saved in the learner's browser (`localStorage`) on every interaction. Nothing is sent anywhere. This means progress is tied to one browser on one device; clearing browser data or switching devices starts fresh. Learners can download their PDF as a record. A "Reset my progress" link sits at the bottom of the menu.

Time counts only while the tab is visible and the learner has been active in the last five minutes; gaps from a sleeping laptop or a background tab are ignored.

## Fonts

Proxima Nova is a commercial typeface. Publishing the font files on a public GitHub Pages site makes them downloadable by anyone, so confirm your license covers web embedding on a public site. If it doesn't, make the repository private (with GitHub Pages on a plan that supports it) or swap in licensed web fonts.

## Content governance

This course is a leadership-development resource, not legal, compliance, coding, billing, clinical, HR-policy, or payer-contract advice. Scenarios are de-identified and illustrative. Framework credits: ADKAR (Prosci), the 8-Step Process (Kotter), and SCARF (David Rock).
