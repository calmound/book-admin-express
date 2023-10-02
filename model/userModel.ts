import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  nickName: {
    type: String,
  },
});

export default userSchema;
