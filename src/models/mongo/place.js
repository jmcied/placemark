import Mongoose from "mongoose";

const { Schema } = Mongoose;

const placeSchema = new Schema({
  title: String,
  category: String,
  longitude: Number,
  latitude: Number,
  description: String,
  placemarkid: {
    type: Schema.Types.ObjectId,
    ref: "Placemark",
  },
});

export const Place = Mongoose.model("Place", placeSchema);
