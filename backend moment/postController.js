import Post from "./Post.js";
import post from "./Post.js";
import PostService from "./PostService.js";
import postService from "./PostService.js";
import FileService from "./FileService.js";

class postController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body, req.files.picture)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll()
            return res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            console.log(req.file)
            const post = await PostService.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await postService.update(req.body)
            res.json(updatedPost)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            const post = await postService.delete(req.params.id)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new postController()