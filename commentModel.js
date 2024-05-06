import mongoose from "mongoose";

const commentModel = new mongoose.Schema({
    text: { type: String, required: true },
    postedBy: { type: String, required: true },
    postedAt: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', commentModel);
export default Comment;