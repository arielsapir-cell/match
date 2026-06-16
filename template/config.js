const CONFIG = {

  // ─── Your Details ─────────────────────────────────────────────────────────
  name:       "Your Name",
  role:       "Your Role · Your Specialty",
  photo:      "photo.jpg",               // path to your photo, or "" to show initials
  linkedin:   "https://linkedin.com/in/your-profile",
  whatsapp:   "https://wa.me/your-number",
  matchScore: 97,                        // 1–100 — the % shown at the end

  // ─── Questions ────────────────────────────────────────────────────────────
  // Maximum 7 questions. Extra ones are ignored.
  // type: "single" → pick one answer  |  "multi" → pick one or more
  questions: [
    {
      emoji:    "🙋",
      question: "Write your first question here?",
      type:     "single",
      options:  [
        "Strong yes — that's a must",
        "Would be a great bonus"
      ]
    },
    {
      emoji:    "🚀",
      question: "Write your second question here?",
      type:     "single",
      options:  [
        "Absolutely — that's exactly what I need",
        "Would be a great bonus"
      ]
    },
    {
      emoji:    "💡",
      question: "Write your third question here?",
      type:     "single",
      options:  [
        "That's the dream",
        "Would be a great bonus"
      ]
    },
    {
      emoji:    "⭐",
      question: "What matters most to you? (pick all that apply)",
      type:     "multi",
      options:  [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
        "Option 5",
        "Option 6"
      ]
    }
  ]

};
