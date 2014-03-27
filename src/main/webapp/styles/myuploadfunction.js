$(function() {
    var token = $("meta[name='_csrf']").attr("content");
    var header = $("meta[name='_csrf_header']").attr("content");
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
    $('#appIconButton').click(function() {
        $('#progress .progress-bar').removeAttr('style');
    });
    $('#appIconFileUpload').fileupload({
        dataType: 'json',
        done: function(e, data) {
            $('#appIconImage').removeClass('img-thumbnail');
            $('#appIconImage').addClass('img-circle');
            $('#appIconInput').val(data.result.fileName);
            $('#appIconImage').attr("src", '/mystore/resources' + data.result.fileName);
        },
        progressall: function(e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#progress .progress-bar').css(
                    'width',
                    progress + '%'
                    );
        }
    });

    $('#appAPKFileUpload').fileupload({
        dataType: 'json',
        done: function(e, data) {
            if (data.result.fileName !== "") {
                $('#appAPKInput').val(data.result.fileName);
                $('#appAPKSizeInput').val(data.result.fileSize);
                $('#formUploadApk').html("");
                console.log(data.result.fileStatus);
                if (data.result.fileStatus === 3) {
                    $('#formUploadApk').append("<span class=\"text-danger\">File uploaded not support</span>");
                } else if (data.result.fileStatus === 4) {
                    $('#formUploadApk').append("<span class=\"text-danger\">Application is available. If you is owner of application please contact us</span>");
                } else if (data.result.fileStatus === 2) {
                    $('#formUploadApk').append("<span class=\"text-danger\">File upload is exist</span>");
                } else if (data.result.fileStatus === 1) {
                    $('#formUploadApk').append("<span class=\"text-danger\">Upload failure</span>");
                } else {
                    window.location.replace(location.href);
                }
            }
        },
        progressall: function(e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#progress .progress-bar').css(
                    'width',
                    progress + '%'
                    );
        }
    });

    $('#appScreenShootFileUpload').fileupload({
        dataType: 'json',
        done: function(e, data) {

        },
        progressall: function(e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#progress .progress-bar').css(
                    'width',
                    progress + '%'
                    );
            if (progress === 100) {
                window.location.replace(location.href);
            }
        }
    });
});