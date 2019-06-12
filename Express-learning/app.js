let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let port = process.env.PORT || 3000;

let urlencodedParser = bodyParser.urlencoded({extended:false});

app.use('/assets', express.static(__dirname + '/public'));

//setting up the view engine 
//a view engine is required if you want a template type of system where you
//can create an HTML template with placeholders for dynamic content and then have 
//dynamic values inserted into the page on the server
app.set('view engine', 'ejs');

//creating your own middleware
app.use('/', function(req, res, next){
    console.log('Requested URL : ' + req.url);
    next();
});

// app.get('/', function(req, res){
//     res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World!</h1></body></html>');
// });

app.get('/', function(req, res){
    res.render('index');    
});

//pattern matching
// app.get('/person/:id/:name', function(req, res){
//     res.send('<html><head></head><body><h1>Hello : ' + req.params.id + ' ' + req.params.name + '</h1></body></html>');
// });
app.get('/person/:id/:name', function(req, res){
    res.render('person', {ID : req.params.id,
                        NAME : req.params.name,
                        Qstr : req.query.qstr});    
});

//posting to the person page
app.post('/person', urlencodedParser, function(req, res){
      res.send('Thank You');
      console.log(req.body.firstname);
      console.log(req.body.lastname);
      console.log(req.body);
});


app.get('/api', function(req, res){
    res.send({ firstname : "rahul",
            secondname : "pandey"});
});
app.listen(port);