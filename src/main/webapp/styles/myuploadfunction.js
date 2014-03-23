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
                $('#formUploadApk').append("Version (format x.x.x): <input type=\"text\" class=\"form-control\" style=\"width: 100px\" name=\"appVersion\" value=\"1.0.0\" />");
                $('#formUploadApk').append("<br/><button type=\"submit\" class=\"btn btn-primary\">Upload App</button>");
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
            for (var i = 0; i < data.result.length; i++) {
                var item = data.result[i];
                $('#idScreenShoots').append("<div class=\"col-md-12 col-lg-12\"><div class=\"col-md-3 col-lg-3\"><img class=\"img-thumbnail\" src='" + '/mystore/resources' + item.fileName + "'></div><div class=\"col-md-5 col-lg-5\">File size: " + (parseInt(item.fileSize) / 1024).toFixed(2) + " KB</div><div class=\"col-md-4 col-lg-4\"><button class=\"btn btn-primary start\"><i class=\"glyphicon glyphicon-upload\"><!----></i><span> Start</span></button>&nbsp<button class=\"btn btn-warning cancel\"><i class=\"glyphicon glyphicon-ban-circle\"><!----></i><span> Cancel</span></button></div></div>");
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
});