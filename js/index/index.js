$(function(){
    $.getJSON("../json/index.json",function(json){
        var index_imgSrc = json.imgSrc;
        $.each(index_imgSrc,function(i){
            $(".swiper-wrapper").append("<div class='swiper-slide'><img src=" + index_imgSrc[i] + "/></div>")
        })
    })
});