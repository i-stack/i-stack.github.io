function queryDyVideo(url, callback) {
    const newUrl = "https://www.freelibrary.top/requestDyVideoUrl&url=" + url;
    $.ajax({
        url: newUrl,
        dataType: "json",
        type: "GET",
        success: function(e) {
            var data = e.data;
            console.log(data);
            callback(data);
        },
        error: function(e) {
            alert("请求失败，请检查网络并刷新页面。");
        }
    });
}

function queryBiliVideo(url, callback) {
    const newUrl = "https://www.freelibrary.top/requestBiliVideoUrl&url=" + url;
    $.ajax({
        url: newUrl,
        dataType: "json",
        type: "GET",
        success: function(e) {
            var data = e.data;
            console.log(data);
            callback(data);
        },
        error: function(e) {
            alert("请求失败，请检查网络并刷新页面。");
        }
    });
}

function queryIdCard(queryContent, callback) {
    const newUrl = "https://www.freelibrary.top/requestIdcardUrl&idcard=" + queryContent;
    $.ajax({
        url: newUrl,
        dataType: "json",
        type: "GET",
        success: function(e) {
            var data = e.data;
            console.log(data);
            callback(data);
        },
        error: function(e) {
            alert("请求失败，请检查网络并刷新页面。");
        }
    });
}

function queryIP(queryContent, callback) {
    var newUrl = "https://www.freelibrary.top/requestSelfIpUrl";
    if (queryContent.length) {
        newUrl = "https://www.freelibrary.top/requestIpUrl&ip=" + queryContent;
    }
    $.ajax({
        url: newUrl,
        dataType: "json",
        type: "GET",
        success: function(e) {
            var data = e.data;
            console.log(data);
            callback(data);
        },
        error: function(e) {
            alert("请求失败，请检查网络并刷新页面。");
        }
    });
}

function queryMobileUrl(queryContent, callback) {
    const newUrl = "https://www.freelibrary.top/requestMobileUrl&mobile=" + queryContent;
    $.ajax({
        url: newUrl,
        dataType: "json",
        type: "GET",
        success: function(e) {
            var data = e.data;
            console.log(data);
            callback(data);
        },
        error: function(e) {
            alert("请求失败，请检查网络并刷新页面。");
        }
    });
}

function generatorShortlinkUrl(queryContent, callback) {
    const newUrl = "https://www.freelibrary.top/shortlinkUrl&url=" + queryContent;
    $.ajax({
        url: newUrl,
        dataType: "json",
        type: "GET",
        success: function(e) {
            var data = e.data;
            console.log(data);
            callback(data);
        },
        error: function(e) {
            alert("请求失败，请检查网络并刷新页面。");
        }
    });
}

window.queryIP = queryIP;
window.queryIdCard = queryIdCard;
window.queryDyVideo = queryDyVideo;
window.queryMobileUrl = queryMobileUrl;
window.queryBiliVideo = queryBiliVideo;
window.generatorShortlinkUrl = generatorShortlinkUrl;