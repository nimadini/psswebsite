var mongoose = require('mongoose');
var post = require('../models/Post');
var Post = mongoose.model('Post');

// This function is responsible for returning all entries for the Post model
function getPosts(req, res, next) {
    // .find() without any arguments, will return all results
    // the `-1` in .sort() means descending order
    Post.find({})
        .lean()
        .exec(function(err, posts) {
            if (err) {
                return res.json({
                    code: 500,
                    message: err
                });
            }
            if (posts.length === 0) {
                return res.json({
                    code: 404,
                    message: err
                });
            }
            res.json({
                code: 200,
                posts: posts
            });
        });
}

function storePost(req, res, next) {
    // Create a new message model, fill it up and save it to Mongodb
    console.log("INPOST");
    var p = new Post();
    p.content = "content 2";
    p.title = "NEW POST 2";
    p.save(function(err, data) {
        if (err) {
            return res.json({
                code: 500,
                message: err
            });
        }

        res.json({
            code: 200
        });
    });
}

module.exports.getPosts = getPosts;
module.exports.storePost = storePost;