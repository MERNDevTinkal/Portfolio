import { streamGroqCompletion } from '@/ai/groq';

/**
 * Groq Chat Flow
 * Handles conversational interactions using Groq
 */
export async function groqChatFlow(userMessage: string): Promise<string> {
  if (!userMessage || userMessage.trim() === '') {
    throw new Error('User message cannot be empty');
  }

  const response = await streamGroqCompletion(userMessage);
  return response;
}

/**
 * Groq Blog Content Generation
 * Generate blog content using Groq's reasoning capabilities
 */
export async function groqGenerateBlogContent(topic: string): Promise<string> {
  const prompt = `You are an expert technical writer. Generate a comprehensive blog post about the following topic:\n\nTopic: ${topic}\n\nProvide a well-structured blog post with an introduction, main sections, and conclusion.`;

  const response = await streamGroqCompletion(prompt);
  return response;
}

/**
 * Groq Blog Title Generation
 * Generate multiple blog title options using Groq
 */
export async function groqGenerateBlogTitles(
  topic: string,
  count: number = 5
): Promise<string[]> {
  const prompt = `Generate ${count} creative and engaging blog post titles for the following topic:\n\nTopic: ${topic}\n\nProvide only the titles, one per line, without numbering or additional text.`;

  const response = await streamGroqCompletion(prompt);
  const titles = response
    .split('\n')
    .filter((title) => title.trim() !== '')
    .slice(0, count);

  return titles;
}
