import { getAllUsers, saveAllUsers } from './userStorage';

interface User {
  email: string;
  fullName: string;
  passwordHash: string;
  createdAt: string;
}

// Hash password using Web Crypto API (works in edge runtime)
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Sign up a new user
export async function signUp(email: string, fullName: string, password: string): Promise<{ success: boolean; message: string }> {
  const users = await getAllUsers();
  const emailLower = email.toLowerCase();
  
  // Check if user already exists
  if (users.has(emailLower)) {
    return { success: false, message: 'Email already registered' };
  }

  // Create new user
  const passwordHash = await hashPassword(password);
  users.set(emailLower, {
    email: emailLower,
    fullName,
    passwordHash,
    createdAt: new Date().toISOString()
  });

  // Save to persistent storage
  await saveAllUsers(users);

  return { success: true, message: 'Account created successfully' };
}

// Log in a user
export async function login(email: string, password: string): Promise<{ success: boolean; message: string; user?: { email: string; fullName: string } }> {
  const users = await getAllUsers();
  const emailLower = email.toLowerCase();
  const user = users.get(emailLower);
  
  if (!user) {
    return { success: false, message: 'Invalid email or password' };
  }

  const passwordHash = await hashPassword(password);
  if (user.passwordHash !== passwordHash) {
    return { success: false, message: 'Invalid email or password' };
  }

  return {
    success: true,
    message: 'Login successful',
    user: {
      email: user.email,
      fullName: user.fullName
    }
  };
}

// Get user by email (for verification)
export async function getUserByEmail(email: string): Promise<{ email: string; fullName: string } | null> {
  const users = await getAllUsers();
  const user = users.get(email.toLowerCase());
  
  if (!user) return null;
  
  return {
    email: user.email,
    fullName: user.fullName
  };
}
