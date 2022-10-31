import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

//express app
const app = express();

//route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to JobCheck' });
});

// listen
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
