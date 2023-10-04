import bookSchema from './bookModel';
import userSchema from './userModel';

const mongoose = require('mongoose');
var uri =
  'mongodb://sanmu:sanmu@ac-gdfl8xo-shard-00-00.9cq5zep.mongodb.net:27017,ac-gdfl8xo-shard-00-01.9cq5zep.mongodb.net:27017,ac-gdfl8xo-shard-00-02.9cq5zep.mongodb.net:27017/?ssl=true&replicaSet=atlas-m9mhrm-shard-0&authSource=admin&retryWrites=true&w=majority';

async function main() {
  mongoose.connect(uri);
}

main()
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.log(err);
  });

const User = mongoose.model('User', userSchema);
const Book = mongoose.model('Book', bookSchema);
export { User, Book };
