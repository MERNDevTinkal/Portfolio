import { NextRequest, NextResponse } from 'next/server';
import { streamGroqCompletion } from '@/ai/groq';

/**
 * POST /api/groq/chat
 * Handle Groq chat completions
 */
export async function POST(req: NextRequest) {
  try {
    const { message, model = 'openai/gpt-oss-120b' } = await req.json();

    if (!message || message.trim() === '') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const response = await streamGroqCompletion(message, model);

    return NextResponse.json({
      success: true,
      message: response,
      model,
    });
  } catch (error) {
    console.error('Groq API error:', error);
    return NextResponse.json(
      { error: 'Failed to process Groq request' },
      { status: 500 }
    );
  }
}
