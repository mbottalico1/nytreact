var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title required"
  },
  date: {
  	type: Date,
  	default: Date.now,
  	required: "Date required"
  },
  url: {
  	type: String,
  	required: true,
  	required: "URL required",
  	unique: true
  }
});

// Create the Model
var Article = mongoose.model('Article', ArticleSchema);

// Export it for use elsewhere
module.exports = Article;