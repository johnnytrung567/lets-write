const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const Category = require('../models/Category')

// Get all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find()

        res.json({
            success: true,
            categories,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    }
})

// Create category
router.post('/', verifyToken, async (req, res) => {
    const { name } = req.body

    // Simple validation
    if (!name)
        return res.status(400).json({ success: false, message: 'Missing name' })

    try {
        // Check for existing category
        const category = await Category.findOne({ name })
        if (category)
            return res
                .status(400)
                .json({ success: false, message: 'Category already exists' })

        const newCat = new Category({ name })

        await newCat.save()

        res.json({
            success: true,
            message: 'Category created successfully',
            post: newCat,
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
