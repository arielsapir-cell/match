# 🎯 Match Quiz Template

A beautiful, mobile-first interactive quiz that lets people discover if you're their perfect match — for jobs, collaborations, or anything else.

**Works on mobile and web.**

---

## Live Demo

> *(Add a link to your deployed version here)*

---

## How to make your own in 3 steps

### 1. Fork or download this template

Click **Fork** on GitHub, or download the files and put them in a new folder.

### 2. Edit `config.js`

Open `config.js` — this is the **only file you need to change**.

```js
const CONFIG = {
  name:       "Your Name",
  role:       "Your Role · Your Specialty",
  photo:      "photo.jpg",       // add your photo to the folder, or leave "" for initials
  linkedin:   "https://linkedin.com/in/your-profile",
  whatsapp:   "https://wa.me/your-number",
  matchScore: 97,                // the % shown at the end (1–100)

  questions: [
    {
      emoji:    "🙋",
      question: "Your question here?",
      type:     "single",        // "single" = one answer, "multi" = multiple
      options:  ["Strong yes", "Would be a great bonus"]
    },
    // ... up to 7 questions
  ]
};
```

**Rules:**
- Maximum **7 questions**
- Each question needs at least 2 options
- `type: "single"` → user picks one answer
- `type: "multi"` → user picks one or more (shown as a grid)

### 3. Deploy to GitHub Pages

1. Push your files to a GitHub repo
2. Go to **Settings → Pages → Source: main branch**
3. Share your link 🎉

---

## What you can customize

| Setting | What it does |
|---|---|
| `name` | Your name (shown everywhere) |
| `role` | Your title (shown on the result card) |
| `photo` | Path to your photo file, or `""` for initials |
| `linkedin` | LinkedIn button URL |
| `whatsapp` | WhatsApp button URL |
| `matchScore` | The % displayed at the end |
| `questions` | Your questions (max 7) |

---

## File structure

```
your-repo/
├── index.html    ← the quiz (no need to edit)
├── config.js     ← edit this
└── photo.jpg     ← add your photo here
```
