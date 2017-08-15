var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
var Pool = require('pg').Pool;
var config = {
    user: 'raul9687',
    database: 'raul9687',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var articleOne={
    title: 'Article 1',
    content: `<p>
              This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.
          </p>
          <p>
              This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.
          </p>
          <p>
              This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.
          </p>`,
    heading: "This is my 1st web article."
};

var articleTwo={
    title: 'Article 2',
    heading: 'This is my 2nd web article.',
    content: `
     <div class="justify">
          <p>
              <img src="http://cloudpeermedia.com/wp-content/uploads/2014/08/article_writing_1.png" class="img-medium"/>
          </p>
     </div>
    `
};

function createTemplate (data){
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width initial-scale=1">
        <style>
            
        </style>
    </head>
    <body>
        <div class="container">
        <hr/>
        <div>
        <h3>${heading}</h3>
        </div>
        <div class="justify">
            ${content}
        </div>
        </div>
    </body>
</html>
`;

return(htmlTemplate);
}
var counter=0;

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article_1',function(req,res){
    res.send(createTemplate(articleOne));
});

app.get('/article_2',function(req,res){
    res.send(createTemplate(articleTwo));
});

app.get('/article_3',function(req,res){
    res.send('Article 3 will be put up soon!');
});

app.get('/counter',function(req,res){
   counter=counter+1;
   res.send(counter.toString());
});

app.get('/submit-comment', function(req, res){
    var name = req.query.name;
    var comment = req.query.comment;
    
    res.send(name);    
   // pool.query('INSERT INTO comment ("id", "name", "data") VALUES (' + "'" + name + "','" + comment + "'" + ')', function(err, result){
     //   if(err)
     //   {
       //     res.status('500').send(err.toString());
        //}
        //else
        //{
          //  res.send(JSON.stringify(result));
        //}
//    });
    
});

app.get('/load', function(req,res){
    res.send(JSON.stringify(names_comments));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var pool = new Pool(config); 
app.get('/test-db', function(req,res){
    
    pool.query('SELECT * FROM test', function(err, result){
        if(err)
        {
            res.status('500').send(err.toString());
        }
        else
        {
            res.send(JSON.stringify(result));
        }
    });
    
});

app.get('/ui/pp.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'pp.jpg'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
