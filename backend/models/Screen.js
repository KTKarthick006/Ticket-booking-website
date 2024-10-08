import mongoose from 'mongoose';

const screenSchema = new mongoose.Schema({
  screenNumber: {
    type: Number,
    required: true
  },
  theater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Theater',
    required: true
  },
  seatLayout: {
    seat: [[{
      seatNumber: {
        type: String,
        required: true,
        unique: true
      },
      isAvailable: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: 'regular'
      }
    }]]
  },
  moviesPlaying: [{
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie'
    },
    timings: [{
      type: Date
    }]
  }]
},
{
  timestamps: true
});

export const Screen = mongoose.model('Screen', screenSchema);
