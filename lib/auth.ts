import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';

const USERS_FILE = path.join(process.cwd(), 'data', 'users.json');
const SECRET_KEY = process.env.AUTH_SECRET_KEY || 'your-secret-key-change-this';

interface User {
  email: string;
  fullName: string;
  passwordHash: string;
  createdAt: string;
}

interface UsersData {
  users: User[];
}

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify({ users: [] }, null, 2));
  }
}

// Hash password using SHA-256
function hashPassword(password: string): string {
  return crypto.createHmac('sha256', SECRET_KEY)
    .update(password)
    .digest('hex');
}

// Read users from file
function readUsers(): UsersData {
  ensureDataDir();
  try {
    const data = fs.readFileSync(USERS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return { users: [] };
  }
}

// Write users to file
function writeUsers(data: UsersData): void {
  ensureDataDir();
  fs.writeFileSync(USERS_FILE, JSON.stringify(data, null, 2));
}

// Sign up a new user
export function signUp(email: string, fullName: string, password: string): { success: boolean; message: string } {
  const usersData = readUsers();
  
  // Check if user already exists
  const existingUser = usersData.users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (existingUser) {
    return { success: false, message: 'Email already registered' };
  }

  // Create new user
  const newUser: User = {
    email: email.toLowerCase(),
    fullName,
    passwordHash: hashPassword(password),
    createdAt: new Date().toISOString()
  };

  usersData.users.push(newUser);
  writeUsers(usersData);

  return { success: true, message: 'Account created successfully' };
}

// Log in a user
export function login(email: string, password: string): { success: boolean; message: string; user?: { email: string; fullName: string } } {
  const usersData = readUsers();
  
  const user = usersData.users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user) {
    return { success: false, message: 'Invalid email or password' };
  }

  const passwordHash = hashPassword(password);
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
export function getUserByEmail(email: string): { email: string; fullName: string } | null {
  const usersData = readUsers();
  const user = usersData.users.find(u => u.email.toLowerCase() === email.toLowerCase());
  
  if (!user) return null;
  
  return {
    email: user.email,
    fullName: user.fullName
  };
}
