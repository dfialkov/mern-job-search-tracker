const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({

  company: {
    type: String,
    required: false
  },
  position: {
      type:String, 
      required:false
  },
  recruiterContact: {
    type: String,
    required: true
  },
  offerStatus: {
    type: String,
    enum: ["Application", "Phone Screen", "Onsite", "Offer"],
    required:true
  },
  salary: {
      type: Number,
      required:false
  },
  time:{
      type: Date,
      default: Date.now
  }
});
module.exports = User = mongoose.model("users", UserSchema);