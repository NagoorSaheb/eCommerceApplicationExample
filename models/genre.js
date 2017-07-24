var mongoose = require('mongoose');

// create schema for genres
var genreSchema = mongoose.Schema({

   name:{
          type: String,
          required : true
        },
   create_date:{
        type: Date,
        default:Date.now
      }

});

var Genre = module.exports = mongoose.model('Genre',genreSchema);

// function to get Genres from database
module.exports.getGenres = function(callback,limit){
  Genre.find(callback).limit(limit);
}

// add genre to database
module.exports.addGenre = function(genre,callback){
  Genre.create(genre,callback);
}


// update genre to database
module.exports.updateGenre = function(id,genre,options,callback){
var query = {_id:id};
var update = {
              name:genre.name
}
  Genre.findOneAndupdate(query,update,options,callback);
}

// delete genre from database
module.exports.removeGenre = function(id,callback){
var query = {_id:id};
  Genre.Remove(query,callback);
}
