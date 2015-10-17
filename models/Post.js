'use strict';

var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

var PostSchema = new mongoose.Schema({
    uuid: {
        type: String,
        index: {
            unique: true
        }
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    content: {
        type: String
    },

    title: {
        type: String
    },

    images: [{
        type: String
    }],

    time: {
        type: Date
    },

    updateTime: {
        type:Date
    },

    location: [{
        type: Number
    }],

    indexText: {
        type: String
    },

    address: {
        type: String
    },

    fbId: {
        type: String
    }
});

PostSchema.plugin(autoIncrement.plugin,
    { model: 'Post', field: 'postId', unique: false });

PostSchema.index({
    indexText: 'text'
});

PostSchema.index({
    location: '2dsphere'
});

module.exports = mongoose.model('Post', PostSchema);