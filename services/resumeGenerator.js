const genAI = require("../config/gemini");

async function generateResume(userPrompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
You are a professional resume writer.
Generate a polished and well-structured resume in valid JSON format
using ONLY the following user details:

${userPrompt}

Do not add extra explanations or text outside JSON.
`;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (err) {
    throw new Error("Error generating resume: " + err.message);
  }
}

module.exports = { generateResume };
