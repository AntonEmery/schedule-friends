import express from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './database.js';
import { User } from './Models/User.js';
import { seedUsers } from "./seed-data.js"

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

sequelize.sync()
.then(async () => {
  console.log('Database synced');
  await seedUsers();
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
})
.catch((err) => {
  console.error('Error syncing database', err);
});

app.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});
