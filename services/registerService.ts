import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient();

export async function registerUser(username: string, email: string, password: string, registrationDate: Date): Promise<void> {
  // Check if username already exists
  const existingUsername = await prisma.user.findUnique({
    where: { username },
  });

  if (existingUsername) {
    throw new Error('Username already exists');
  }

  // Check if email already exists
  const existingEmail = await prisma.user.findUnique({
    where: { email },
  });

  if (existingEmail) {
    throw new Error('Email already exists');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user record in the database
  await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
      createdAt: registrationDate, // Set registration date
    },
  });
}
