var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/book');

// connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

// home page
app.get('/',function(req,res){
  res.send('Please type /api/books or /api/genres');
});

// get all genres
app.get('/api/genres',function(req,res){
   Genre.getGenres(function(err,genres){
      if(err){
        throw err;
      }
      res.json(genres);
   });

});

// add genres to database
app.post('/api/genres',function(req,res){
  var genre = req.body;
   Genre.addGenre(genre,function(err,genre){
      if(err){
        throw err;
      }
      res.json(genre);
   });

});

// update a genre

app.put('/api/genres/:_id',function(req,res){
  var id = req.params._id;
  var genre = req.body;
   Genre.updateGenre(id,genre,{},function(err,genre){
      if(err){
        throw err;
      }
      res.json(genre);
   });

});


// delete a genre

app.delete('/api/genres/:_id',function(req,res){
  var id = req.params._id;
  Genre.removeGenre(id,function(err,genre){
      if(err){
        throw err;
      }
      res.json(genre);
   });

});

// get all books
app.get('/api/books',function(req,res){
   Book.getBooks(function(err,books){
      if(err){
        throw err;
      }
      res.json(books);
   });
});

// add books to database
app.post('/api/books',function(req,res){

  var book = req.body;

   Book.addBook(book,function(err,book){
      if(err){
        throw err;
      }
      res.json(book);
   });
});

// get a book by Id

app.get('/api/books/:_id',function(req,res){
   Book.getBookById(req.params._id,function(err,book){
      if(err){
        throw err;
      }
      res.json(book);
   });

});

// update book data

app.put('/api/books/:_id',function(req,res){
  var id = req.params._id;
  var book = req.body;
   Book.updateBook(id,book,{},function(err,book){
      if(err){
        throw err;
      }
      res.json(book);
   });

});

// delete a book by Id

app.delete('/api/books/:_id',function(req,res){
  var id = req.params._id;
  Book.removeBook(id,function(err,book){
      if(err){
        throw err;
      }
      res.json(book);
   });

});



app.listen(3200);
console.log('Running on port 3200...');
