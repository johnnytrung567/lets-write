const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        content: {
            type: String,
            required: true,
        },
        photo: {
            publicId: { type: String, default: '' },
            url: { type: String, default: '' },
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        categories: {
            type: Array,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Post', PostSchema)
