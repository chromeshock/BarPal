import express from 'express';
import { getComments, getComment, createComment, updateComment, deleteComment } from '../controllers/commentController.js';

// Comment API Endpoints

const commentRouter = express.Router();

commentRouter.get('/', getComments);
commentRouter.get('/:id', getComment);
commentRouter.post('/', createComment);
commentRouter.put('/:id', updateComment);
commentRouter.delete('/:id', deleteComment);

export default commentRouter;


