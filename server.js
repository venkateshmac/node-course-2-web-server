
const express = require('express');
const hbs = require('hbs');

const PORT = process.env.PORT || 3000;
//To access Express initiate, this will provide you the context of express web context
var app = express();

//HBS package use for templates include. We pass the Dynamic Data to HTML pages
app.set('view engine', 'hbs');

//Access static assets by using the Middlware function in Node JS. We use the same for .CSS files
app.use(express.static(__dirname + '/public'));

//Accessing middleware
app.use((req, res, next) => {
  var now = new Date().toString();
  console.log(`${now} : ${req.method}`);
  next();
} );

//declare http handler to setup a handler of http
//to get a HTTP Handler we use get() method

app.get('/', (request, response) => {
   //  response.send("Hello Express !");

   response.send(
      {
         name:'Venkatesh',
         city:'Seattle',
         likes: [ 'Biking' , 'Hiking']

      }
   );
});

app.get('/about' ,(request, response) => {
  response.render('about.hbs' , {
    pageTitle : 'Hello Welcome to',
    city:'Seattle',
    name:'Venkatesh'
  });
});

// app to listen
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});

//Added Comments
