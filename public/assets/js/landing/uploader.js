/**
 * Created by stanley on 5/28/16.
 */
// regular images
Dropzone.options.myDropzone = {
    acceptedFiles: 'image/*',
    maxFilesize: 8, // MB
    maxFiles: 12,
    parallelUploads: 12,
    url: '/uploadImage/' + UUID,
    init: function() {
        initialize(this, deleteRegularImageUploadURL)
    }
};

// init function
function initialize(self, del_url) {
    // config
    self.options.addRemoveLinks = true;
    self.options.dictRemoveFile = "Delete";

    // events
    self.on("sending", function (file) {
        $('.meter').show();
    });

    self.on("totaluploadprogress", function (progress) {
        $('.roller').width(progress + '%');
    });

    self.on("queuecomplete", function (progress) {
        $('.meter').delay(999).slideUp(999);
    });

    // get md5 from backend and store it inside the uploaded file object
    self.on("success", function (file, res) {
        // console.log(res);
        //var parsed = JSON.parse(res);
        //console.log('parsed: ', parsed);
        file.md5 = 'HIIII';
        console.log('hi');
    });

    // add the previously stored md5 value inside the body of delete request
    self.on("removedfile", function (file) {
        remove_dropzone(file, del_url);
    });
}

function remove_dropzone(file, del_url, callback) {
    var data = {
        UUID: UUID,
        imageMD5: file.md5
    };

    $.ajax({
        url: del_url,
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function () {
            typeof callback === 'function' && callback();
            //console.log();
        },
        error: function () {
            //console.log();
        }
    });
}