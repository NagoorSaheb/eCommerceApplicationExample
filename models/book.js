var mongoose = require('mongoose');

// create schema for genres
var bookSchema = mongoose.Schema({

   title:{
          type: String,
          required : true
        },
    genre:{
           type: String,
           required : true
         },
    description:{
            type: String
          },
    author:{
           type: String,
           required : true
         },
   publisher:{
          type: String
        },
    pages:{
           type: String
          },
    image_url:{
           type: String
          },
    buy_url:{
           type: String
          },
   create_date:{
        type: Date,
        default:Date.now
      }

});

var Book = module.exports = mongoose.model('Book',bookSchema);

// function to get Books from database
module.exports.getBooks = function(callback,limit){
  Book.find(callback).limit(limit);
}

// function to get Book by ID from database
module.exports.getBookById = function(id,callback){
  Book.findById(id,callback);
}

// add book to database
module.exports.addBook = function(book,callback){
  Book.create(book,callback);
}

// update book in database
module.exports.updateBook = function(id,book,options,callback){
var query = {_id:id};
var update = {
              title:book.title,
              genre:book.genre,
              description:book.description,
              author:book.author,
              publisher:book.publisher,
              image_url:book.image_url,
              pages:book.pages,
              buy_url:book.buy_url
}
  Book.findOneAndUpdate(query,update,options,callback);
}

// delete book from database
module.exports.removeBook = function(id,callback){
var query = {_id:id};
  Book.Remove(query,callback);
}
