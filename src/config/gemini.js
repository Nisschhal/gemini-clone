// // To run this code you need to install the following dependencies:
// // npm install @google/genai mime
// // npm install -D @types/node

// import { GoogleGenAI } from "@google/genai"

// async function runChat(prompt) {
//   const ai = new GoogleGenAI({
//     apiKey: import.meta.env.VITE_GEMINI_API_KEY,
//   })
//   const config = {
//     thinkingConfig: {
//       thinkingBudget: -1,
//     },
//     responseMimeType: "text/plain",
//   }
//   const model = "gemini-2.5-pro"
//   const contents = [
//     {
//       role: "user",
//       parts: [
//         {
//           text: prompt,
//         },
//       ],
//     },
//   ]

//   const response = await ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   })
//   let fileIndex = 0
//   for await (const chunk of response) {
//     console.log(chunk.text)
//   }
// }

// export default runChat
import { GoogleGenAI } from "@google/genai"

const genAI = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
})

/**
 * Streams Gemini chunks and sends one word at a time
 * @param {string} prompt
 * @param {(word: string) => void} onWord
 * @returns {Promise<void>}
 */
const runChat = async (prompt, onWord) => {
  const result = await genAI.models.generateContentStream({
    model: "gemini-2.5-pro",
    config: {
      responseMimeType: "text/plain",
    },
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  })

  for await (const chunk of result) {
    if (chunk?.text) {
      const words = chunk.text.split(" ")
      for (const word of words) {
        onWord(word + " ")
        await new Promise((r) => setTimeout(r, 30)) // adjust speed here
      }
    }
  }
}

export default runChat
