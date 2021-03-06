const mongoose = require('mongoose');

const revenueSchema = new mongoose.Schema(
  {
    _id: String,
    id: {
      type: String,
      required: true,
      unique: true,
    },
    success: {
      type: Date,
      default: null,
    },
    amount: {
      type: Number,
      required: true,
    },
    percentage: {
      type: String,
      default: '10%',
    },
    payment: {
      type: String,
      ref: 'Payment',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Revenue = mongoose.model('Revenue', revenueSchema);
module.exports =  revenue;


