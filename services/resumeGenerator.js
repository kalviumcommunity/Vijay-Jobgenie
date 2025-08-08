const genAI = require("../config/gemini");

async function generateResume(userPrompt) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
      
      topP: 0.9
    },
  });

  // System Prompt
  const systemPrompt = `
You are JobGenie, an AI-powered professional resume writer.
Your goal: Convert the given user details into a well-structured, ATS-friendly resume in JSON format.
Rules:
1. Keep JSON keys in camelCase.
2. Ensure correct grammar and formatting.
3. Do not include unnecessary commentary or explanations in the output.
4. Only return valid JSON, no extra text.
`;

  const prompt = `${systemPrompt}\n\nUser Data:\n${userPrompt}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return text;
}

module.exports = { generateResume };
