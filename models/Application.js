const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ApplicationSchema = new Schema({
  userEmail:{
    type:String,
    required:true
  },

  company: {
    type: String,
    required: true
  },
  position: {
      type:String, 
      required:false
  },
  recruiterContact: {
    type: String,
    required: false
  },
  appStatus: {
    type: String,
    enum: ["Application", "Phone Screen", "Onsite", "Offer"],
    required:true
  },
  salary: {
      type: String,
      required:false
  },
  time:{
      type: Date,
      default: Date.now()
  }
});
module.exports = Application = mongoose.model("applications", ApplicationSchema);