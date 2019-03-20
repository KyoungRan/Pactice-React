const mongoose = require('mongoose');

const { Schema } = mongoose;

const Post = new Schema({
  title: String,
  body: String,
  tags: [String], // 문자열 배열
  publishedDate: {
    type: Date,
    default: new Date() // 현재 날짜를 기본 값으로 지정
  }
});

const Author = new Schema({
  name: String,
  email: String
});

const Book = new Schema({
  title: String,
  description: String,
  authors: [Author],
  meta: {
    likes: Number
  },
  extra: Schema.Types.Mixed
});

module.exports = mongoose.model('Post', Post);