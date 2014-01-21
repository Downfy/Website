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
            $('#appIconImage').attr("src", '/resources' + data.result.fileName);
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
            $('#appIconImage').removeClass('img-thumbnail');
            $('#appIconImage').addClass('img-circle');
            $('#appIconInput').val(data.result.fileName);
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