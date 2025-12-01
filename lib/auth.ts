// Simple persistent storage using environment variable or in-memory fallback
// In production with a database, replace this with proper database calls
let usersStore: Map<string, { email: string; fullName: string; passwordHash: string; createdAt: string }>;

// Initialize users store from environment or create new one
function initializeUsersStore() {
  if (!usersStore) {
    usersStore = new Map();
    // In a real implementation, this would load from a database
    // For now, users persist during the runtime session
  }
  return usersStore;
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
  const users = initializeUsersStore();
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

  return { success: true, message: 'Account created successfully' };
}

// Log in a user
export async function login(email: string, password: string): Promise<{ success: boolean; message: string; user?: { email: string; fullName: string } }> {
  const users = initializeUsersStore();
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
export function getUserByEmail(email: string): { email: string; fullName: string } | null {
  const users = initializeUsersStore();
  const user = users.get(email.toLowerCase());
  
  if (!user) return null;
  
  return {
    email: user.email,
    fullName: user.fullName
  };
}
