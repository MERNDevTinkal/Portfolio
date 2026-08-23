import { Groq } from 'groq-sdk';

/**
 * Groq client initialization
 * Uses GROQ_API_KEY from environment variables
 */
export const groqClient = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

/**
 * Create a chat completion with Groq
 * @param userMessage - The user's message content
 * @param model - The Groq model to use (default: openai/gpt-oss-120b)
 * @returns Stream of completion chunks
 */
export async function createGroqCompletion(
  userMessage: string,
  model: string = 'openai/gpt-oss-120b'
) {
  const completion = await groqClient.chat.completions.create({
    model,
    messages: [
      {
        role: 'user',
        content: userMessage,
      },
    ],
    temperature: 1,
    max_completion_tokens: 2048,
    top_p: 1,
    reasoning_effort: 'medium',
    stream: true,
    stop: null,
  });

  return completion;
}

/**
 * Stream Groq completion and collect all content
 * @param userMessage - The user's message content
 * @param model - The Groq model to use
 * @returns Complete response text
 */
export async function streamGroqCompletion(
  userMessage: string,
  model: string = 'openai/gpt-oss-120b'
): Promise<string> {
  const completion = await createGroqCompletion(userMessage, model);
  let fullResponse = '';

  for await (const chunk of completion) {
    const content = chunk.choices[0]?.delta?.content;
    if (content) {
      fullResponse += content;
    }
  }

  return fullResponse;
}
