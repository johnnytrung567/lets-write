const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const User = require('../models/User')
const Post = require('../models/Post')
const cloudinary = require('../utils/cloudinary')

// Get all posts
router.get('/', async (req, res) => {
    const username = req.query.user
    const category = req.query.cat

    try {
        let findCondition = {}

        if (username) {
            const userId = await User.findOne({ username }).select('_id')
            findCondition.user = userId
        } else if (category) {
            findCondition.categories = { $in: [category] }
        }

        const posts = await Post.find(findCondition)
            .populate('user', 'username')
            .sort({ createdAt: -1 })

        res.json({
            success: true,
            posts,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    }
})

// Get post by id
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate(
            'user',
            'username'
        )

        if (!post)
            return res
                .status(400)
                .json({ success: false, message: 'Post not found' })

        res.json({
            success: true,
            post,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    }
})

// Create post
router.post('/', verifyToken, async (req, res) => {
    const { title, content, photo, categories } = req.body

    // Simple validation
    if (!title)
        return res
            .status(400)
            .json({ success: false, message: 'Missing title' })
    else if (!content)
        return res
            .status(400)
            .json({ success: false, message: 'Missing content' })

    try {
        // Check for existing title
        const post = await Post.findOne({ title })
        if (post)
            return res
                .status(400)
                .json({ success: false, message: 'Title already exists' })

        const newPost = new Post({
            title,
            content,
            categories,
            user: req.userId,
        })

        // Upload photo to cloudinary
        if (photo) {
            const result = await cloudinary.uploader.upload(photo, {
                folder: 'lets-write',
                overwrite: true,
            })

            newPost.photo = {
                publicId: result.public_id,
                url: result.secure_url,
            }
        }

        await newPost.save()

        res.json({
            success: true,
            message: 'Post created successfully',
            post: newPost,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    }
})

// Update post
router.put('/:id', verifyToken, async (req, res) => {
    const { title, content, photo, categories } = req.body

    // Simple validation
    if (!title)
        return res
            .status(400)
            .json({ success: false, message: 'Missing title' })
    else if (!content)
        return res
            .status(400)
            .json({ success: false, message: 'Missing content' })

    try {
        // Check for existing post
        const oldPost = await Post.findById(req.params.id)
        if (!oldPost)
            return res
                .status(400)
                .json({ success: false, message: 'Post not found' })

        let updatedPost = {
            title,
            content,
            categories,
        }

        // Update photo on cloudinary
        if (photo) {
            const result = await cloudinary.uploader.upload(photo, {
                public_id: oldPost.photo.publicId,
            })

            updatedPost.photo = {
                publicId: result.public_id,
                url: result.secure_url,
            }
        }

        const updateCondition = { user: req.userId, _id: req.params.id }

        const post = await Post.findOneAndUpdate(updateCondition, updatedPost, {
            new: true,
        })

        if (!post)
            return res.status(400).json({
                success: false,
                message: 'You can only update your post',
            })

        res.json({
            success: true,
            message: 'Post updated successfully',
            post,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    }
})

// Delete post
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        // Check for existing post
        const existPost = await Post.findById(req.params.id)
        if (!existPost)
            return res
                .status(400)
                .json({ success: false, message: 'Post not found' })

        // Delete photo on cloudinary
        await cloudinary.uploader.destroy(existPost.photo.publicId)

        const post = await Post.findOneAndDelete({
            _id: req.params.id,
            user: req.userId,
        })
        if (!post)
            return res.status(400).json({
                success: false,
                message: 'You can only delete your post',
            })

        res.json({
            success: true,
            message: 'Post deleted successfully',
            post,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    }
})

module.exports = router
