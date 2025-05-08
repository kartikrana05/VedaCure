import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});