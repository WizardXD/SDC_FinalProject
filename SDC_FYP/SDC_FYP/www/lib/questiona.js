$(document).ready(function () {
    $("#uploadimgbtn").bind("click", function () {
        capturePhoto();
    });
}); 



// upload image codes
function capturePhoto() {
    var source = navigator.camera.PictureSourceType.PHOTOLIBRARY;
    navigator.camera.getPicture(_onPhotoURISuccess, _failCapture, {
    quality: 50, destinationType: navigator.camera.DestinationType.FILE_URI,
    sourceType: source});
}

function _failUpload(error) {
    validationMsgs("Error:" + error.code, "Upload Error", "Try Again");
}
function _failCapture(message) {
    validationMsgs("Error:" + message, "Image Error", "Try Again");
}
function _onPhotoURISuccess(imageURI) {
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
    options.mimeType = "image/jpeg";

    var params = new Object();
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
    options.chunkedMode = false;
    options.headers = { Connection: "close" };
    var ft = new FileTransfer();
    ft.upload(imageURI, serverURL() + "/upload.php", _winUpload, _failUpload, options); 

}
function _winUpload(r) {
    if (profileimage !== "") {
        _deleteOldImg(profileimage);
    }
    var arr = JSON.parse(r.response);
    imgNewUserPictureName = arr[0].result;
    $("#imgProfilePicture").attr("src", serverURL() + "/images/" + imgNewUserPictureName + "_s");

    var url = serverURL() + "/savenewimage.php";

    var JSONObject = {
        "userid": localStorage.getItem("userid"),
        "profileimage": imgNewUserPictureName
    };

    $.ajax({
        url: url,
        type: 'GET',
        data: JSONObject,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (arr) {
            _saveImageResult(arr);
        },
        error: function () {
            validationMsg();
        }
    });
}

function _saveImageResult(arr) {
    if (arr[0].result === 1) {
        validationMsgs("Update success", "Validation", "OK");
        profileimage = imgNewUserPictureName;
    }
    else {
        validationMsgs("Update failed", "Validation", "Try Again");
    }
}

function _deleteOldImg(oldImg) {
    var url = serverURL() + "/deleteimg.php";

    var JSONObject = {
        "imgfile": oldImg
    };

    $.ajax({
        url: url,
        type: 'GET',
        data: JSONObject,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",

        success: function (arr) {
            _deleteImgResult(arr);
        },
        error: function () {
            validationMsg();
        }
    });
}

function _deleteImgResult(arr) {
    if (arr[0].result !== "1") {
        validationMsgs("Error deleteing old image", "Upload Error", "Try Again");
    }
}