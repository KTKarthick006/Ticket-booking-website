import mongoose from 'mongoose';

const theaterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  screens: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Screen'
  }]
},
{
  timestamps: true
});

export const Theater = mongoose.model('Theater', theaterSchema);
