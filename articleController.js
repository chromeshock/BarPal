import Article from '../models/articleModel.js';

export const getArticles = async(req, res) => {
    try {
        const article = await Article.get(req.params.id);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getArticle = async(req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createArticle = async(req, res) => {
    const article = new Article(req.body);
    try {
        const newArticle = await article.save();
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteArticle = async(req, res) => {
    try {
        const deletedArticle = await Article.findByIdAndDelete(req.params.id);
        if (!deletedArticle) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.status(204).send(); // 204 No Content is often used for successful deletes
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateArticle = async(req, res) => {
    try {
        const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedArticle) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json(updatedArticle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
