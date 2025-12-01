import { NextRequest, NextResponse } from 'next/server';

// In-memory storage that persists across API calls in the same deployment
// For production, replace with a real database (Vercel Postgres, MongoDB, etc.)
let usersDatabase = new Map<string, {
  email: string;
  fullName: string;
  passwordHash: string;
  createdAt: string;
}>();

export async function GET() {
  try {
    const users = Object.fromEntries(usersDatabase);
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error('Error getting users:', error);
    return NextResponse.json({ users: {} }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { users } = body;
    
    if (users) {
      usersDatabase = new Map(Object.entries(users));
      return NextResponse.json({ success: true }, { status: 200 });
    }
    
    return NextResponse.json({ success: false, message: 'No users data provided' }, { status: 400 });
  } catch (error) {
    console.error('Error saving users:', error);
    return NextResponse.json({ success: false, message: 'Error saving users' }, { status: 500 });
  }
}
