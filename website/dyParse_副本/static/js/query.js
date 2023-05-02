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

window.queryDyVideo = queryDyVideo;