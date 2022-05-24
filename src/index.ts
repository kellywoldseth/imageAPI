//Create server
import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

app.use('/', routes);

//start the Express server
app.listen(port, (): void => {
  console.log(`server started at localhost:${port}`);
});

export default app;
