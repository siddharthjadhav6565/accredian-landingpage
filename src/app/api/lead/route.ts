import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const payload = {
      ...body,
      submittedAt: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        message: 'Lead captured successfully.',
        data: payload,
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: 'Unable to process request.',
      },
      { status: 400 },
    );
  }
}