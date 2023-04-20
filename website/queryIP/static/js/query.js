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

window.queryIP = queryIP;