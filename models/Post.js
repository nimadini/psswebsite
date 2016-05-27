'use strict';

var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

var PostSchema = new mongoose.Schema({
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

    location: {
        type: String
    }
});

PostSchema.plugin(autoIncrement.plugin,
    { model: 'Post', field: 'postId', startAt: 0, incrementBy: 1 });


module.exports = mongoose.model('Post', PostSchema);