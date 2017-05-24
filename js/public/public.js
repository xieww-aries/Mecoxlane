//页面文档内容加载
$(function(){
    //一级菜单sub鼠标移入事件
    $(".nav a").eq(5).mouseover(function(){
        $(".nav .subNav").stop().animate({
            "width":"74px",
            "height":"100%"
        },200);
    });
    //二级菜单鼠标移入事件
    $(".nav .subNav").mouseover(function(){
        $(this).stop().animate({
            "width":"74px",
            "height":"100%"
        },200);
    });
    //nav一级菜单鼠标移出事件
    $(".nav a").eq(5).mouseout(function(){
        $(".nav .subNav").stop().animate({
            "width":"0",
            "height":"0"
        },200);
    });
    //二级菜单鼠标移出事件
    $(".nav .subNav").mouseout(function(){
        $(this).stop().animate({
            "width":"0",
            "height":"0"
        });
    });


    //rightSider
    $(".rightSider img").eq(1).mouseover(function(){
        $(".consult").stop().animate({
            "right":"64px",
            "opacity":"0.8",
            "z-index":"2"
        },500);
    });
    $(".rightSider img").eq(1).mouseout(function(){
        $(".consult").stop().animate({
            "right":"149px",
            "opacity":"0",
            "z-index":"1"
        },500);
    });
});
