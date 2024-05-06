import mongoose from "mongoose";

const articleModel = new mongoose.Schema({
    title: { type: String, require: true },
    content: { type: String, required: true },
    author: { type: String, required: true }
});

const Article = mongoose.model('Article', articleModel);
export default Article;
 