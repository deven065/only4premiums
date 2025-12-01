// Client-side user storage using localStorage
// This allows users to stay logged in on the same device/browser

export interface User {
  email: string;
  fullName: string;
  passwordHash: string;
  createdAt: string;
}

// Storage key
const USERS_STORAGE_KEY = 'only4premiums_users_db';

// Get all users from localStorage
export async function getAllUsers(): Promise<Map<string, User>> {
  try {
    // Only runs on client-side
    if (typeof window === 'undefined') {
      return new Map();
    }
    
    const stored = localStorage.getItem(USERS_STORAGE_KEY);
    if (stored) {
      const users = JSON.parse(stored);
      return new Map(Object.entries(users));
    }
    
    return new Map();
  } catch (error) {
    console.error('Error loading users from localStorage:', error);
    return new Map();
  }
}

// Save all users to localStorage
export async function saveAllUsers(users: Map<string, User>): Promise<void> {
  try {
    // Only runs on client-side
    if (typeof window === 'undefined') {
      return;
    }
    
    const usersObject = Object.fromEntries(users);
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(usersObject));
  } catch (error) {
    console.error('Error saving users to localStorage:', error);
  }
}
