//test prettier - WORKS!
//test eslint - WORKS!
//test typescript - WORKS!
//test jasmine - not working
//test express/nodemon for index - WORKS!
//test routes/express/nodemon for route (images) - DOES NOT WORK - need to review server lesson 9 to see file structure

import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hi leif!');
});

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

const add = (num: number, num2: number): number => {
  return num + num2;
};

export default add;

/*
Set up your server and create an API endpoint. Even though this application is fairly straightforward, you still want to set it up in a scalable way. How can you set up your server and route so that your project remains scalable? Only one endpoint is required. It's best to create this and test that it is working before you move on.
Install Sharp and configure endpoint. Documentation for Sharp can be found here. It is required that you create a separate module for your processing functionality and import it into your route. It is only required that you add resizing, but you may add additional processing if you choose to extend your application. It is also only required that you work with jpg files, so keep that in mind if you choose to use your own images and they are other formats.
Pay close attention to if you need to use asynchronous code or not. If you do, make sure you stay consistent throughout your application.
There is limited information on using Sharp with TypeScript, but don't let that be a blocker. Think about what type the Sharp constructor would return. Have a look at the complete documentation and the examples it provides.
Write your tests. If you haven't already been writing unit tests, now would be the time to start. Think about what you should test? At a minimum, you should have at least one test for your endpoint and at least one test for your image processing, but there are many different tests you could create.
Add caching. Add caching to your application so that repeated requests to your endpoint use pre-stored images rather than regenerating a new image each time.
Test, Debug, and Refactor. Think of edge-cases for your project and how someone may access your project. Should they get different error messages based on what's wrong? Make certain that your user isn't left in the dark when something goes wrong.
Do all of your tests still pass?
Does stopping and restarting your server cause any issues?
Does your user get feedback when something goes wrong?
Is your code easy to follow? Comments?
Is your API production-ready?
Build, Document, and Submit. If everything else has gone well, you should be able to compile your typescript and start up your production server to test that everything still works as expected. Make sure you've provided all necessary information in your readme file, so your reviewer knows how to test your API. If everything works and your documentation is complete, you're ready to submit! Congratulations!*/
