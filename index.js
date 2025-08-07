const { generateResume } = require("./services/resumeGenerator");

const userPrompt = `
Name: Vijay Kumar
Title: Full Stack Developer
Summary: Passionate developer with 3+ years of experience in building scalable web applications.
Skills: JavaScript, React, Node.js, MongoDB, Express
Experience:
- Software Engineer at TechCorp (2021 - 2023)
- Intern at WebWorld (2020)
Education: B.Tech in Computer Science
Certifications: AWS Certified Developer
`;

generateResume(userPrompt)
  .then((resume) => console.log("✅ Resume:\n", resume))
  .catch((err) => console.error("❌ Error:", err));
