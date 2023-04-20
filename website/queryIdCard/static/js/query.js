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

window.queryIdCard = queryIdCard;