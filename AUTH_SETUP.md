# Secure File-Based Authentication System

## Overview
User credentials are stored securely in an encrypted file without requiring a database. This is perfect for small to medium-sized applications.

## How It Works

### 1. **Password Security**
- Passwords are hashed using SHA-256 with HMAC
- The `AUTH_SECRET_KEY` acts as a salt for additional security
- Original passwords are never stored

### 2. **File Storage**
- User data is stored in `data/users.json`
- The `data/` directory is protected by `.gitignore` (won't be committed to Git)
- File structure:
```json
{
  "users": [
    {
      "email": "user@example.com",
      "fullName": "John Doe",
      "passwordHash": "hashed_password_string",
      "createdAt": "2025-12-01T10:30:00.000Z"
    }
  ]
}
```

### 3. **API Endpoints**
- **POST /api/auth** - Handles both signup and login
  - Action: `signup` - Creates new account
  - Action: `login` - Authenticates user

## Security Features

✅ **Password Hashing** - Passwords are never stored in plain text
✅ **Secret Key Protection** - Uses environment variable for encryption
✅ **Email Uniqueness** - Prevents duplicate registrations
✅ **Automatic File Creation** - Creates `data/users.json` automatically
✅ **Git Protection** - User data never committed to repository

## Configuration

### Environment Variable
Add to your `.env.local`:
```
AUTH_SECRET_KEY=o4p-secure-auth-key-2025-change-in-production
```

**⚠️ IMPORTANT:** Change this to a random string for production!

### Generate a Random Secret Key
Run this in PowerShell:
```powershell
-join ((65..90) + (97..122) + (48..57) | Get-Random -Count 32 | ForEach-Object {[char]$_})
```

## File Structure

```
only4premiums/
├── lib/
│   └── auth.ts              # Core authentication logic
├── app/
│   └── api/
│       └── auth/
│           └── route.ts     # API endpoint
├── data/
│   ├── .gitignore          # Protects user data
│   └── users.json          # User credentials (auto-created)
└── components/
    └── CheckoutModal.tsx    # Uses authentication
```

## Usage in Code

### Signup Example
```typescript
const response = await fetch('/api/auth', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    action: 'signup',
    email: 'user@example.com',
    fullName: 'John Doe',
    password: 'securePassword123'
  })
});

const data = await response.json();
// { success: true, message: "Account created successfully" }
```

### Login Example
```typescript
const response = await fetch('/api/auth', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    action: 'login',
    email: 'user@example.com',
    password: 'securePassword123'
  })
});

const data = await response.json();
// { success: true, message: "Login successful", user: { email, fullName } }
```

## Security Best Practices

### ✅ DO:
- Change `AUTH_SECRET_KEY` to a random string
- Keep `.env.local` file private
- Use HTTPS in production
- Backup `data/users.json` regularly

### ❌ DON'T:
- Commit `.env.local` to Git
- Share your `AUTH_SECRET_KEY`
- Store plain text passwords
- Commit `data/users.json` to Git

## Production Deployment

When deploying to production:

1. **Set Environment Variable**
   ```bash
   AUTH_SECRET_KEY=your-random-production-key-here
   ```

2. **Secure the Data Directory**
   - Ensure proper file permissions
   - Regular backups of `users.json`
   - Consider encryption at rest

3. **Monitor File Size**
   - As users grow, consider migrating to a database
   - File-based auth is best for < 1000 users

## Backup & Recovery

### Backup Users
```powershell
Copy-Item data\users.json data\users.backup.json
```

### Restore from Backup
```powershell
Copy-Item data\users.backup.json data\users.json
```

## Migration to Database (Future)

If you need to scale, the authentication logic can easily be adapted to use:
- MongoDB
- PostgreSQL
- MySQL
- Firebase Auth

The same API endpoints will work - just replace the file storage in `lib/auth.ts`.

## Troubleshooting

### Issue: "Email already registered"
- User already has an account
- Use login instead of signup

### Issue: "Invalid email or password"
- Check credentials
- Password is case-sensitive

### Issue: File permission errors
- Ensure the app can write to `data/` directory
- Check folder permissions

## Files Created

- `lib/auth.ts` - Authentication logic with file storage
- `app/api/auth/route.ts` - API endpoint for login/signup
- `data/.gitignore` - Protects user data from Git
- `AUTH_SETUP.md` - This documentation

## Support

For issues or questions, check the main README or contact support.
