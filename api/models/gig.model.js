import mongoose from "mongoose";
const { Schema } = mongoose;

const GigSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    totalRatings: {
      type: Number,
      required: true,
    },
    starNumbers: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    coverImg: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    shortTitle: {
      type: String,
      required: true,
    },
    shortDesc: {
      type: String,
      required: true,
    },
    deliveryTime: {
      type: Number,
      default:0,
    },
    revisionTime: {
      type: Number,
      default:0,
    },
    features: {
      type: [String],
      required: false, 
    },
    sales:{
        type:Number,
        default:0,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Gig", GigSchema);
