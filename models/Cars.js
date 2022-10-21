import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    brand: String,
    model: String,
    version: String,
    type: String,
    year: String,
    km: String,
    motor: String,
    owners: String,
    price: Number,
    transmission: String,
    fuel: String,
    tapizado: String,
    location: String,
    t4x4: {
      type: Boolean,
      default: false,
    },
    armor: {
      type: Boolean,
      default: false,
    },
    power: String,
    accel: String,
    fuelConsumption: String,
    fuelCapacity: String,
    details: String,
    mainImg: String,
    folder: String,
    othersImg: [String],
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    collection: "cars2", // Imagenes en Servidor CDN
    //collection: 'cars' // Imagenes en Mongo
  }
);

let Cars = mongoose.model("Cars", postSchema);

export default Cars;
