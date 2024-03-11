// loginService.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function login(username: string, password: string): Promise<User | null> {
  // Retrieve user record from the database
  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) {
    return null; // User not found
  }

  // Compare hashed password with input password
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return null; // Passwords don't match
  }

  return user; // User authenticated
}

// Add other authentication-related functions as needed
