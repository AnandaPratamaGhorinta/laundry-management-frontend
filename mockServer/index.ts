import express, { Request, Response } from 'express';

const app = express();

app.get('/users', (request: Request, response: Response) => {
  response.json([
    { id: 546, username: 'John' },
    { id: 894, username: 'Mary' },
    { id: 326, username: 'Jane' }
  ]);
});

app.delete('/users', (request: Request, response: Response) => {
  response.json({ result: 'success' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
