import { NextRequest, NextResponse } from 'next/server';
import { signUp, login } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, email, fullName, password } = body;

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }

    if (action === 'signup') {
      if (!fullName) {
        return NextResponse.json(
          { success: false, message: 'Full name is required for signup' },
          { status: 400 }
        );
      }

      const result = await signUp(email, fullName, password);
      return NextResponse.json(result, { status: result.success ? 200 : 400 });
    }

    if (action === 'login') {
      const result = await login(email, password);
      return NextResponse.json(result, { status: result.success ? 200 : 401 });
    }

    return NextResponse.json(
      { success: false, message: 'Invalid action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Auth API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
