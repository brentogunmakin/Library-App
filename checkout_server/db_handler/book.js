var mongoose = require('mongoose');

var entrySchema = mongoose.Schema({
  index:Number,
  Book_Title:String,
  Author:String,
  ISBN_Number:Number,
  is_Checked_Out:Boolean,
  User_Checked_Out_To:String,
  Expected_Return_Date:Date
  
});

module.exports = mongoose.model('book', entrySchema);