const mongoose = require("mongoose");

const ClientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phones: {
    type: Map,
    of: String
  },
  address: {
    type: Map,
    of: String
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  modifiedAt: {
    type: Date,
    default: new Date(),
  },
});


// ClientSchema.index( 
//   {
//     username: 'text', 
//     email: 'text', 
//     // '$**': 'text'
//   },{
//     weights: {
//       username: 5,
//       email: 1,
//     },
//   }
// ); 

const Client = mongoose.model("clients", ClientSchema);

module.exports = Client;
