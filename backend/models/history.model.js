const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const historySchema = new Schema(
    {
        videoId: { type: String, required: true },
        videoTitle: { type: String, required: true },
    },
    {
        timestamps: true
    }
);

const History = mongoose.model('History', historySchema);
module.exports = History;