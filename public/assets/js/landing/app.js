(function(){
    var app = angular.module('pss', [ ]);

    app.controller("PostController", function() {
        this.posts = [{
            title: 'Game Night',
            content: 'This is a test post content'
        },{
            title: 'Game Night (2)',
            content: 'This is a test post (2) content'
        }
        ];
    });

    app.controller("NewPostController", function() {
        this.newPost = {};

        this.createNewPost = function() {
            console.log("INANGI");

        };
    });
})();