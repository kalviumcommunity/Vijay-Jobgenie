const genAI = require("../config/gemini");

/**
 * Generate a resume using dynamic prompting.
 * @param {string} userPrompt - The actual user input.
 * @param {Array} examples - Array of objects { input: string, output: string }
 */
async function generateResume(userPrompt, examples = []) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  let exampleText = "";
  examples.forEach((ex, idx) => {
    exampleText += `
Example ${idx + 1}:
Input:
${ex.input}

Output:
${ex.output}
`;
  });

  const finalPrompt = `
You are a professional resume writer.  
Follow the same JSON format as shown in the examples below.  
Do NOT include any extra text or explanations outside the JSON.

${exampleText}

Now generate the resume for the following details:

${userPrompt}
`;

  const result = await model.generateContent(finalPrompt);
  const response = await result.response;
  const text = response.text();

  return text;
}

module.exports = { generateResume };
