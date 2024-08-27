import { User } from './Models/User.js';

export const seedUsers = async () => {
  try {
    await User.bulkCreate([
      { firstName: 'Gilbert', lastName: 'Dog', email: 'gilbert@dog.com' },
      { firstName: 'John', lastName: 'Smith', email: 'john@smith.com' }
    ])
  } catch (error) {
    console.error('Error seeding data', error);
  }
}

