const { generateResume } = require("./services/resumeGenerator");

const examples = [
  {
    input: `
Name: John Doe
Title: Data Scientist
Summary: Expert in data analysis and machine learning with 5+ years of experience.
Skills: Python, TensorFlow, SQL
Experience:
- Data Scientist at DataCorp (2018 - 2023)
Education: M.Sc. in Data Science
Certifications: Google Professional Machine Learning Engineer
    `,
    output: `{
  "name": "John Doe",
  "title": "Data Scientist",
  "summary": "Expert in data analysis and machine learning with 5+ years of experience.",
  "skills": ["Python", "TensorFlow", "SQL"],
  "experience": [
    { "role": "Data Scientist", "company": "DataCorp", "years": "2018 - 2023" }
  ],
  "education": "M.Sc. in Data Science",
  "certifications": ["Google Professional Machine Learning Engineer"]
}`
  },
  {
    input: `
Name: Sarah Lee
Title: UI/UX Designer
Summary: Creative designer with a passion for user-friendly interfaces.
Skills: Figma, Adobe XD, HTML/CSS
Experience:
- UI/UX Designer at DesignHub (2020 - 2023)
Education: B.A. in Graphic Design
Certifications: Adobe Certified Expert
    `,
    output: `{
  "name": "Sarah Lee",
  "title": "UI/UX Designer",
  "summary": "Creative designer with a passion for user-friendly interfaces.",
  "skills": ["Figma", "Adobe XD", "HTML/CSS"],
  "experience": [
    { "role": "UI/UX Designer", "company": "DesignHub", "years": "2020 - 2023" }
  ],
  "education": "B.A. in Graphic Design",
  "certifications": ["Adobe Certified Expert"]
}`
  }
];

const userPrompt = process.argv[2] || "Default prompt text";


generateResume(userPrompt, examples)
  .then((resume) => console.log("✅ Resume:\n", resume))
  .catch((err) => console.error("❌ Error:", err.message));
