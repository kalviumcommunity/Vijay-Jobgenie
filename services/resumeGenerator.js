const genAI = require("../config/gemini");

async function generateResume(userPrompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Example training prompts & outputs
  const examples = `
Example 1:
Input:
Name: John Doe
Title: Data Scientist
Summary: Expert in data analysis and machine learning with 5+ years of experience.
Skills: Python, TensorFlow, SQL
Experience:
- Data Scientist at DataCorp (2018 - 2023)
Education: M.Sc. in Data Science
Certifications: Google Professional Machine Learning Engineer

Output:
{
  "name": "John Doe",
  "title": "Data Scientist",
  "summary": "Expert in data analysis and machine learning with 5+ years of experience.",
  "skills": ["Python", "TensorFlow", "SQL"],
  "experience": [
    {
      "role": "Data Scientist",
      "company": "DataCorp",
      "years": "2018 - 2023"
    }
  ],
  "education": "M.Sc. in Data Science",
  "certifications": ["Google Professional Machine Learning Engineer"]
}

Example 2:
Input:
Name: Sarah Lee
Title: UI/UX Designer
Summary: Creative designer with a passion for user-friendly interfaces.
Skills: Figma, Adobe XD, HTML/CSS
Experience:
- UI/UX Designer at DesignHub (2020 - 2023)
Education: B.A. in Graphic Design
Certifications: Adobe Certified Expert

Output:
{
  "name": "Sarah Lee",
  "title": "UI/UX Designer",
  "summary": "Creative designer with a passion for user-friendly interfaces.",
  "skills": ["Figma", "Adobe XD", "HTML/CSS"],
  "experience": [
    {
      "role": "UI/UX Designer",
      "company": "DesignHub",
      "years": "2020 - 2023"
    }
  ],
  "education": "B.A. in Graphic Design",
  "certifications": ["Adobe Certified Expert"]
}
`;

  // Add actual user prompt after examples
  const finalPrompt = `
You are a professional resume writer.  
Follow the same JSON format as shown in the examples below.  
Do NOT include extra text or explanations outside the JSON.  

${examples}

Now generate the resume for the following details:

${userPrompt}
`;

  const result = await model.generateContent(finalPrompt);
  const response = await result.response;
  const text = response.text();

  return text;
}

module.exports = { generateResume };
