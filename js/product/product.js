$(function(){
    $("#etalage").zoom({
        align: "left",              // 当前展示图片的位置，则放大的图片在其相对的位置
        thumb_image_width: 280,     // 当前展示图片的宽
        thumb_image_height: 365,    // 当前展示图片的高
        source_image_width: 600,    // 放大图片的宽
        source_image_height: 780,  // 放大图片的高
        zoom_area_width: 215,       // 放大图片的展示区域的宽
        zoom_area_height: 215,// 放大图片的展示区域的高
        zoom_area_distance: 10,     //
        zoom_easing: true,          // 是否淡入淡出
        description_opacity: 0.7,
        small_thumbs: 2,            // 小图片展示的数量
        smallthumb_inactive_opacity: 0.4,   // 小图片处于非激活状态时的遮罩透明度
        smallthumbs_position: "bottom",     // 小图片的位置
        show_icon: true,
        hide_cursor: false         // 鼠标放到图片时，是否隐藏指针
    });
    $('.spinner').spinner();
    $(".product_show_r_shareToIcon").mouseenter(function(){
        $(".product_show_r_shareTo").css("display","block");
    });
    $(".product_show_r_shareTo").mouseenter(function(){
        $(this).css("display","block");
    });

    $(".product_show_r_shareToIcon").mouseleave(function(){
        $(".product_show_r_shareTo").css("display","none");
    });
    $(".product_show_r_shareTo").mouseleave(function(){
        $(this).css("display","none");
    });

});
