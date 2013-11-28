function removeVietnameseSign() {
    // code by Minit - www.canthoit.info - 13-05-2009
    var str = document.getElementById('_name_id').value;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str
    .replace(
        /!|@|\$|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\'| |\"|\&|\#|\[|\]|~/g,
        "-");
    str = str.replace(/-+-/g, "-"); // thay thế 2- thành 1-
    str = str.replace(/^\-+|\-+$/g, "");// cắt bỏ ký tự - ở đầu và cuối chuỗi
    document.getElementById('_url_id').value = str;
};

function viewQuickviewLayer(num, align) {
    var item = new Array;
    var quickviewLayer = new Array;

    item = document.getElementsByName("item_" + align);
    quickviewLayer = document.getElementsByName("quickviewLayer_" + align);

    for ( var i = 0; i < item.length; i++) {
        if (!!item[i])
            item[i].style.zIndex = 1;
        if (!!quickviewLayer[i])
            quickviewLayer[i].style.display = 'none';
    }
    var selectItem = document.getElementById("item_" + align + num);
    var selectQuickviewLayer = document.getElementById("quickviewLayer_"
        + align + num);
    if (!!selectItem)
        selectItem.style.zIndex = 10;
    if (!!selectQuickviewLayer)
        selectQuickviewLayer.style.display = 'block';
    return false;
}

function hideQuickviewLayer(num, align) {
    document.getElementById("item_" + align + num).style.zIndex = 1;
    document.getElementById("quickviewLayer_" + align + num).style.display = 'none';
    return false;
}

var checked = false;
function checkedAll() {
    if (checked == false) {
        checked = true;
    } else {
        checked = false;
    }
    for ( var i = 0; i < document.getElementById('thumbnail').elements.length; i++) {
        var element = document.getElementById('thumbnail').elements[i];
        if (element.type == 'checkbox') {
            element.checked = checked;
        }
    }
}
function checkedAllElement(name) {
    if (checked == false) {
        checked = true;
    } else {
        checked = false;
    }
    for ( var i = 0; i < document.getElementById('thumbnail').elements.length; i++) {
        var element = document.getElementById('thumbnail').elements[i];
        if (element.type == 'checkbox' && element.name == name) {
            element.checked = checked;
        }
    }
}