const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const postSchema = new Schema({
  postDescription: {
    type: String,
    required: "You need to leave a description!",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  address: {
    type: String,
    required: [
      true,
      "Please enter address where you would like to hold your Yard Gems",
    ],
    trim: true,
  },
  // date to hold the sell for buyers
  dateOfSale: {
    type: String,
    required: [true, "Enter a date to hold the sale"],
  },
  image: {
    type: String,
  },
  postAuthor: {
    type: String,
  },
  postName: {
    type: String,
  },
  lat: {
    type: Number, // maybe  aflloat
  },
  lng: {
    type: Number,
  },

  // date of when the user create a sale post
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Post = model("Post", postSchema);

module.exports = Post;
