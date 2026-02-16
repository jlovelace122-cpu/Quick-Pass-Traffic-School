import 'dotenv/config';
import { db } from './index.js';
import { users } from './schema.js';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';

async function createAdmin() {
  const adminEmail = 'admin@quickpasstrafficschool.com';
  const adminPassword = 'Admin123!'; // Change this in production!
  
  console.log('🔐 Creating admin user...');
  
  // Hash password
  const passwordHash = await bcrypt.hash(adminPassword, 10);
  
  // Create admin user
  await db.insert(users).values({
    id: uuidv4(),
    email: adminEmail,
    passwordHash: passwordHash,
    firstName: 'Admin',
    lastName: 'User',
    role: 'admin',
    isVerified: true,
  }).onConflictDoNothing();
  
  console.log('✅ Admin user created!');
  console.log('');
  console.log('📧 Email: ' + adminEmail);
  console.log('🔑 Password: ' + adminPassword);
  console.log('');
  console.log('⚠️  Change this password in production!');
  
  process.exit(0);
}

createAdmin().catch(err => {
  console.error('Error creating admin:', err);
  process.exit(1);
});
