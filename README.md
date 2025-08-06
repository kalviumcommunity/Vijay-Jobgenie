# 🧞‍♂️ JobGenie — Your AI Career Assistant

JobGenie is your intelligent, all-in-one career assistant designed to empower students, job seekers, and professionals to navigate their career journeys with confidence. Whether you're building your first resume, tailoring your profile to a specific job, or crafting the perfect cover letter — JobGenie has your back, powered by cutting-edge AI.

---

## 🧠 What Can JobGenie Do?

- ✍️ **Resume Generation** — Create ATS-friendly, professional resumes tailored to your skills and the job role.
- 📄 **Cover Letter Assistant** — Generate personalized cover letters for each job application.
- 📌 **Job Description Analyzer** — Understand the key skills and requirements in any job post.
- 🎯 **Skill Match & Suggestions** — Receive recommendations for relevant skills to add based on your goals.
- 🔍 **Real-time Insights** — Get job market-aligned suggestions using retrieval-augmented generation (RAG).

---

## ⚙️ How It Works (Under the Hood)

### 🔁 System Prompt vs. User Prompt

- **System Prompt:** Guides the AI’s behavior — “You are a professional career advisor helping users build the perfect resume.”
- **User Prompt:** Comes from the user — e.g., “Generate a resume for a computer science graduate applying for a data analyst role.”

This layered prompting helps ensure more accurate and personalized outputs.

---

### 🎛️ Tuning Parameters

We fine-tune:
- **Temperature**: 0.5–0.7 for balance between creativity and factual consistency.
- **Top-p (nucleus sampling)**: To control randomness and keep the responses focused.
- **Max tokens**: Managed based on output type (resume, cover letter, etc.).

---

### 📐 Structured Output

JobGenie delivers clean, formatted outputs in:
- **JSON** (for API/backend processing)
- **Markdown/Plain Text** (for UI display or PDF conversion)
- **PDF-ready layout** for resumes and letters

---

### 🛠️ Function Calling (For Developers)

JobGenie uses structured **function calling** to:
- Generate and organize different resume sections.
- Analyze job descriptions and extract role-specific keywords.
- Map skills to industries using skill-library functions.

---

### 📚 Retrieval-Augmented Generation (RAG)

To ensure outputs are current and domain-relevant:
- JobGenie uses RAG to pull live examples, industry-specific jargon, and up-to-date templates from a curated dataset and job boards.
- This makes resume and cover letter generation highly adaptive.

---

## 🚀 How to Use

1. Visit the JobGenie web interface.
2. Choose your goal: `Build Resume`, `Analyze Job Description`, or `Create Cover Letter`.
3. Fill out the required fields (e.g., education, experience, job link).
4. Get your personalized documents instantly.
5. Download as PDF or copy for edits.

---

## 👥 Who It's For

- Students and freshers exploring opportunities.
- Professionals wanting to upgrade resumes.
- Anyone tired of generic resume templates and cover letters.

---

## 🤝 Contributing

Have ideas? Found bugs? Want to enhance it?  
Contributions are welcome! Please submit issues or pull requests in the GitHub repository.

---

*Let JobGenie handle the heavy lifting, while you focus on landing the job of your dreams!*
