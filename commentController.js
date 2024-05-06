import Comment from "../models/commentModel.js";


export const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({}); // Assuming Comment is your model
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getComment = async (req, res) => {
  try {
        const comment = await comment.findById(req.params.id);
    if (!comment) {
            return res.status(404).send(`message: 'Comment not found'`);
        }
        res.json(comment);
    } catch (error) {
        res.status(500).json({ Message: error.message });
    }};

export const createComment = async (req, res) => {
    const comment = new Comment(req, body);
    try {
        const newComment = await comment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateComment = async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidation: true });
        if (!updateComment) {
            return res.status(404).json({ message: 'Bar not found'});
        }
        res.json(updatedComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }};

export const deleteComment = async (req, res) => {
try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);
        if (!deletedComment) {
            return res.status(404).json({ message: 'Bar not found' });
        }
        res.status(204).send(); // 204 No Content is often used for successful deletes
    } catch (error) {
        res.status(500).json({ message: error.message });
}};
