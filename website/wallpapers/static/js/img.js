var seting = {
    // apiUrl: "https://api.vvhan.com/api/360wallpaperApi.php", // 这个接口已经不维护了,壁纸数量有限
    // apiUrl: "http://wp.birdpaper.com.cn/intf/GetListByCategory", // 这个接口不支持https。个人网站如果是https类型，请自行配置反向代理
    apiUrl: "https://www.freelibrary.top/wpGetListByCategory/", // 这是我个人网站配置的反向代理
    ratio: 0.618,
    types: '360new',
    downApi: 'https://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url='
};
var jigsaw = {
    count: 0,
    halfHtml: '',
    loadBig: false,
    ajaxing: false
};
window.onresize = function() {
    resizeHeight()
};
window.onload = function() {
    loadData(seting.types, true);
    resizeHeight()
};
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() + $(window).height() + 20 >= $(document).height() && $(this).scrollTop() > 20) {
            loadData(seting.types, false)
        }
    })
});

function loadData(types, newload) {
    if (types != seting.types || newload === true) {
        seting.types = types;
        jigsaw = {
            count: 0,
            halfHtml: '',
            loadBig: false,
            ajaxing: false
        };
        $("#walBox").html('');
        $(".onepage-pagination").remove();
        $("body").removeClass();
        $(".jigsaw").removeAttr("style")
    }
    ajax360Wal(seting.types, jigsaw.count, 30)
}
resizeHeight();
function resizeHeight() {
    switch (seting.types) {
    default:
        var newHeight = $("#walBox").width() * (seting.ratio / 2);
        $(".jigsaw .item").css('height', newHeight);
        $(".jigsaw .Hhalf").css('height', newHeight / 2)
    }
    return true
}
function addJigsaw(img, alt) {
    var newHtml;
    var imgWidth, imgHeight;
    jigsaw.count++;
    if (jigsaw.halfHtml !== '') {
        imgWidth = parseInt(screen.width / 4);
        imgHeight = parseInt(imgWidth * seting.ratio);
        newHtml = '<div class="Hhalf oneImg"><a href="' + decode360Url(img, 0, 0, 100) + '" data-fancybox="images"><img  src="' + decode360Url(img, imgWidth, imgHeight, 0) + '" alt="' + alt + '"title="关键字：' + alt + '" class="pimg"></a>    </div></div>';
        contAdd(jigsaw.halfHtml + newHtml);
        jigsaw.halfHtml = '';
        return true
    }
    if (((jigsaw.count - 1) % 5) === 0) {
        jigsaw.loadBig = false
    }
    if ((jigsaw.loadBig === false) && ((Math.floor(Math.random() * 3) === 0) || ((jigsaw.count % 5) === 0))) {
        imgWidth = parseInt(screen.width / 2);
        imgHeight = parseInt(imgWidth * seting.ratio);
        newHtml = '<div class="item half oneImg"><a href="' + decode360Url(img, 0, 0, 100) + '" data-fancybox="images"><img src="' + decode360Url(img, imgWidth, imgHeight, 0) + '" alt="' + alt + '" title="关键字：' + alt + '" class="pimg"></a></div>';
        contAdd(newHtml);
        jigsaw.loadBig = true;
        return true
    }
    imgWidth = parseInt(screen.width / 4);
    imgHeight = parseInt(imgWidth * seting.ratio);
    jigsaw.halfHtml = '<div class="item quater">    <div class="Hhalf oneImg"><a href="' + decode360Url(img, 0, 0, 100) + '" data-fancybox="images"><img src="' + decode360Url(img, imgWidth, imgHeight, 0) + '" alt="' + alt + '" title="关键字：' + alt + '" class="pimg"></a></div>';
    return true
}
function contAdd(html) {
    var myBox = $("#walBox");
    var $newHtml = $(html);
    myBox.append($newHtml);
    $("img", $newHtml).lazyload({
        effect: 'fadeIn',
        threshold: 200
    })
}
function ajax360Wal(cid, start, count) {
    if (jigsaw.ajaxing === true) return false;
    $("#loadmore").html('努力加载中……');
    $("#loadmore").show();
    jigsaw.ajaxing = true;
    $.ajax({
        type: "GET",
        url: seting.apiUrl,
        // data: "cid=" + cid + "&start=" + start + "&count=" + count, // 使用360wallpaperApi接口，打开注释
        data: "cids=" + cid + "&pageno=" + start + "&count=" + count, // 默认使用GetListByCategory接口
        dataType: "json",
        // headers: {
        //     'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Credentials': true,
        //     'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
        //     // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        // },
        success: function(jsonData) {
            // let list = jsonData.data     // 使用360wallpaperApi接口，打开注释
            let list = jsonData.data.list  // 默认使用GetListByCategory接口
            for (var i = 0; i < list.length; i++) {
                console.info(list[i].tag)
                addJigsaw(list[i].url, decode360Tag(list[i].tag))
            }
            resizeHeight();
            jigsaw.ajaxing = false;
            if (list.length === 0) {
                $("#loadmore").html('所有的壁纸都已经加载完啦！')
            } else {
                $("#loadmore").hide()
            }
        }
    });
    return true
}
function decode360Tag(oldTag) {
    if (oldTag.includes('_category_')) {
        return oldTag.match(/_category_[^_]+_/g).join(" ").replace(/_category_([^_]+)_/g, "$1")
    } 
    return oldTag
}
function decode360Url(oldUrl, width, height, quality) {
    return oldUrl.replace("r\/__85", "m\/" + parseInt(width) + "_" + parseInt(height) + "_" + quality)
}
function changeTitle(obj) {
    $('title').html($(obj).html() + ' - 电脑壁纸')
}

loadData(36, true)