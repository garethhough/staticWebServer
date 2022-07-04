const express = require('express'); //Importing the entire express library
const app = express(); //Creating our app object, that houses our server instructions
const port = process.env.PORT || 5001; //Setting the port to PORT, or use port 5001;

app.use ('/static', express.static('public')); //This is a middleware function that will serve static files from the public folder

app.listen (port, () => {
    console.log(`Listening on port ${port}`);
});
//Listening on localhost: 5001 for requests to our webserver

