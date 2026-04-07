const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const requirementSchema = new Schema({
  eventName: { type: String, required: true },
  eventType: { type: String, required: true },
  eventDate: {
    single: { type: Date },
    range: {
      start: { type: Date },
      end: { type: Date }
    }
  },
  location: { type: String, required: true },
  venue: { type: String },
  hiringFor: { type: String, enum: ['planner', 'performer', 'crew'], required: true },
  categoryData: {
    type: Schema.Types.Mixed,
    default: {}
  },
  contactInfo: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true }
  },
  description: { type: String },
  urgency: { type: String },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'active', 'closed'], default: 'pending' }
});

module.exports = mongoose.model('Requirement', requirementSchema);
