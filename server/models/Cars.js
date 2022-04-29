import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  brand: String,
  model: String,
  version: String,
  type: String,
  year: Number,
  km: Number,
  price: Number,
  transmission: String,
  fuel: String,
  t4x4: {
      type: Boolean,
      default: false,
  },
  armor: {
      type: Boolean,
      default: false,
  },
  addInfo: String,
  mainImg: String,
  othersImg: [String],
  createdAt: {
      type: Date,
      default: new Date(),
  },
})

var Cars = mongoose.model('Cars', postSchema);

export default Cars;