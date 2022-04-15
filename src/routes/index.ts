import express from 'express';
import images from './api/images';

const app = express();
const port = 3000;

app.get('/', (req, res) =>{
res.send('working!');
});



app.listen(port, () =>{
console.log('server started at http://localhost:${port}');
});