import mongoose from 'mongoose';
  // "test": "echo \"Error: no test specified\" && exit 1",
    // "dev": "babel-watch server.js"
const Schema = mongoose.Schema;

let Issue = new Schema({
    name: {
        type: String
    },
    gender: {
        type: String
    },
    address: {
        type: String
    },
    state: {
        type: String
    },
    status: {
        type: String,
        default: 'Open'
    }
});

export default mongoose.model('Issue', Issue);