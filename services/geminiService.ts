/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are 'MODE83 AI', the assistant for the MODE83 LevelOne showcase. 
      The showcase features games and videos created by students of the MODE83 training program.
      
      Tone: Professional, tech-forward, helpful, and enthusiastic about game development. Use emojis like 🎮, 💻, 🚀, ✨.
      
      Key Info:
      - Projects: Dragys's Island, Level Desert, Clinic Chaos.
      - Training: Game Design, Development, Art & Design.
      - Goal: Showcase student talent and the LEVEL ONE training program.
      
      Keep responses short (under 50 words) and punchy.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "Systems offline. (Missing API Key)";
  }

  try {
    const chat = initializeChat();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Transmission interrupted.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Signal lost. Try again later.";
  }
};