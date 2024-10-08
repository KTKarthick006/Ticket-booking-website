import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  genre: [{
    type: String,
    required: true
  }],
  language: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  poster: {
    type: String,
    required: true
  },
  showtimes: [{
    theater: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Theater'
    },
    screens: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Screen'
    }]
  }]
},
{
  timestamps: true
});

export const Movie = mongoose.model('Movie', movieSchema);
