//requiring dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//estimate request schema and model
const EstimateRequestShema = new Schema({
  project: { type: String, required: true },
  developer: {type: Schema.Types.ObjectId, ref: 'Developer', required: true},
  title: { type: String, required: true },
  projectManager: {type: Schema.Types.ObjectId, ref: 'ProjectManager', required: true},
  dueDate: { type: Date, required: true },
  taskDescription: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now },
  status: {type: String, required: true, enum: ['Created', 'Draft', 'Submitted', 'Estimated'], default: 'Created'}
});

//defining request model
const request = mongoose.model("estimaterequests", EstimateRequestShema);
module.exports = request;
