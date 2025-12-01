// Server-side user storage using internal API
// This allows users to login from any device across the deployment

interface User {
  email: string;
  fullName: string;
  passwordHash: string;
  createdAt: string;
}

// Get all users from storage API
export async function getAllUsers(): Promise<Map<string, User>> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/users`, {
      method: 'GET',
      cache: 'no-store',
    });
    
    if (response.ok) {
      const data = await response.json();
      return new Map(Object.entries(data.users || {}));
    }
    
    return new Map();
  } catch (error) {
    console.error('Error loading users:', error);
    return new Map();
  }
}

// Save all users to storage API
export async function saveAllUsers(users: Map<string, User>): Promise<void> {
  try {
    const usersObject = Object.fromEntries(users);
    
    await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ users: usersObject }),
      cache: 'no-store',
    });
  } catch (error) {
    console.error('Error saving users:', error);
  }
}
