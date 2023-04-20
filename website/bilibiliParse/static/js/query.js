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

window.queryBiliVideo = queryBiliVideo;