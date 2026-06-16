# 🎯 Match Quiz Template

An interactive quiz that lets people discover if you're their perfect match — for jobs, dates, collaborations, or anything else.

**Mobile + web. No code needed. Free to host.**

---

## See it in action

[Live example →](https://arielsapir-cell.github.io/match)

---

## How it works

Someone opens your link → answers a few questions → sees a match score and your contact buttons (LinkedIn / WhatsApp).

**There's only one outcome — you.**
No matter what the user answers, they always land on your profile at the end.
The questions aren't a filter — they're a conversation starter that builds engagement before showing your contact details.

---

## Make your own in 3 steps

### Step 1 — Get the files

Click the green **Code** button above → **Download ZIP** → unzip it.

You only need the `template/` folder. It has 2 files:
- `index.html` — the quiz (don't touch this)
- `config.js` — **this is the only file you edit**

### Step 2 — Edit `config.js`

Open `config.js` in any text editor (Notepad works fine) and fill in your details:

```js
const CONFIG = {
  name:       "Jane Smith",
  role:       "UX Designer · Tel Aviv",
  photo:      "photo.jpg",      // put your photo in the same folder, or "" for initials
  linkedin:   "https://linkedin.com/in/jane-smith",
  whatsapp:   "https://wa.me/972501234567",
  matchScore: 95,               // the % shown at the end (1–100)

  questions: [
    {
      emoji:    "🎨",
      question: "Do you need someone who turns complex problems into clean designs?",
      type:     "single",       // "single" = pick one  |  "multi" = pick several
      options:  ["That's exactly what I need", "Would be a great bonus"]
    },
    // add more questions here... max 7
  ]
};
```

### Step 3 — Preview & go live

**Preview locally first:** just open `index.html` in Chrome, Firefox, or Safari — no setup needed.

**Go live for free with GitHub Pages:**
1. Create a free account on [github.com](https://github.com)
2. Create a new repository and upload your files (`index.html`, `config.js`, your photo)
3. Go to **Settings → Pages → Source: main branch → Save**
4. Your link will be: `https://your-username.github.io/your-repo-name`
5. Share it 🎉

---

## Question types

| `type` | What it looks like | When to use |
|---|---|---|
| `"single"` | Vertical list, pick one | Yes/no or preference questions |
| `"multi"` | Grid of chips, pick several | "What strengths matter most?" |

Maximum **7 questions**. Extra ones are ignored automatically.

---

## Files

```
template/
├── index.html    ← the quiz engine (no need to edit)
├── config.js     ← edit this with your details and questions
└── photo.jpg     ← add your photo here (optional)
```
