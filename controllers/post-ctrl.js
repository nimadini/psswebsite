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
                //posts: [
                //    {
                //        title: 'Movie Night (Screening "Hich" by A. Kahani)',
                //        content: 'PSS is hosting a public screening of "Hich", a movie by Abdolreza Kahani. Join us for this free event in SAC Auditorium (SAC 1.402) at 7:15 pm on Tuesday 4/26.\n\n* The movie is in Farsi, with English subtitle.',
                //        images: [
                //            'images/movies/hich'
                //        ],
                //        id: 'id4',
                //        dir: 'ltr'
                //    }]
                posts: posts
            });
        });
}

var tmp = 0;

fs.readFile(req.files.displayImage.path, function (err, data) {
    // ...
    var newPath = __dirname + "/uploads/uploadedFileName";
    fs.writeFile(newPath, data, function (err) {
        res.redirect("back");
    });
});

module.exports.doDecodeAndSave = function(base64Image, cb) {
    var buffer = new Buffer(base64Image, "base64");
    var hash = crypto.createHash('md5').update(buffer).digest("hex");
    var path = exports.PUBLIC_IMAGES_DIR + hash;

    fs.writeFile(path, buffer, {
        encoding: null
    }, function(err) {
        if (err) {
            if (cb) {
                cb(new Error('Failed to write the file ' + path));
            }
            return;
        }
    });
    return hash;
};

function storePost(req, res, next) {
    // Create a new message model, fill it up and save it to Mongodb
    console.log("INPOST");
    var p = new Post();
    p.title = 'test title';
    p.content = 'test content';
    p.images = ['images/movies/hich', 'images/movies/hich'];
    p.id = 'id' + tmp;
    p.dir = 'ltr';

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