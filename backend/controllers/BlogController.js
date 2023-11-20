const Blog = require('../models/BlogSchema');

// Create a new blog
exports.createBlog = async (req, res) => {
    const { title, description, image } = req.body;
    try {
        const newBlog = new Blog({
            title,
            description,
            image
        });
        await newBlog.save();
        res.status(201).json({
            status: true,
            message: "Blog created successfully",
            data: newBlog
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message
        });
    }
};
// Get all blogs
exports.getBlog = async (req, res) => {
    try {
        const blog = await Blog.find();
        res.status(200).json({
            status: true,
            message: "Blog Fetched successfully",
            data: blog
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message
        });
    }
};
// Get a single blog
exports.getSingleBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        res.status(200).json({
            status: true,
            message: "Single blog",
            data: blog
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message
        });
    }
};
// Update a blog
exports.updateBlog = async (req, res) => {
    const { title, description, image } = req.body;
    try {
        const blog = await Blog.findById(req.params.id);
        if (blog) {
            if (title) blog.title = title;
            if (description) blog.description = description;
            if (image) blog.image = image;
            await blog.save();
            res.status(200).json({
                status: true,
                message: "Blog updated successfully",
                data: blog
            });
        } else {
            res.status(404).json({
                status: false,
                message: "Blog not found"
            });
        }
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message
        });
    }
};
// Delete a blog
exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (blog) {
            await blog.deleteOne();
            res.status(200).json({
                status: true,
                message: "Blog deleted successfully"
            });
        } else {
            res.status(404).json({
                status: false,
                message: "Blog not found"
            });
        }
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message
        });
    }
};

