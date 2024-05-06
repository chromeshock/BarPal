import express from 'express';
import { getArticles, getArticle, createArticle, updateArticle, deleteArticle } from '../controllers/articleController.js';

//Article API Endpoints

const articleRouter = express.Router();

// Gets all articles
articleRouter.get('/', getArticles); 

articleRouter.get('/:id', getArticle);
articleRouter.post('/', createArticle); 
articleRouter.put('/:id', updateArticle);
articleRouter.delete('/:id', deleteArticle); 


export default articleRouter;