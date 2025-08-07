const genAI = require("../config/gemini");

async function generateResume(userPrompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
You are a professional resume writer. Based on the following user details, generate a polished resume in JSON format:

${userPrompt}
`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return text;
}

module.exports = { generateResume };
