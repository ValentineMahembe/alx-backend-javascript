import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 1245;
app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});

export default app;
