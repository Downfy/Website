$(function() {
    $('#appIconButton').click(function() {
        $('#progress .progress-bar').removeAttr('style');
    });
    $('#appFileUpload').fileupload({
        dataType: 'json',
        done: function(e, data) {
            $('#appIconImage').removeClass('img-thumbnail');
            $('#appIconImage').addClass('img-circle');
            $('#appIconInput').val(data.result.fileName);
            $.each(data.result, function(index, file) {
                $('#appIconInput').val(file.fileName);
            });
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