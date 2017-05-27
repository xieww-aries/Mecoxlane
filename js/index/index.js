$(function(){
    $.getJSON("../json/index.json",function(json){
        var index_imgSrc = json.imgSrc;
        $.each(index_imgSrc,function(i){
            $(".swiper-wrapper").append("<div class='swiper-slide'><img src=" + index_imgSrc[i] + "/></div>")
        })
    });
    //头部搜索按钮事件,退出时有两个事件可以触发，需要对头部搜索的高度进行一个判断
    $(".head_search_icon").click(function(){
        if($(".head_search").height() == 0){
            $(".head_search").animate({
                "height" : "80px"
            },500);
        }else if($(".head_search").height() == 80){
            $(".head_search").animate({
                "height" : "0"
            },500);
        }
    });
    $(".head_search_out").click(function(){
        $(".head_search").animate({
            "height" : "0"
        },500);
    });

    //主页展开效果动画效果1
    $(".index_catalog_beauty_col2_row1_int,.index_catalog_beauty_col2_row1_pic").click(function(){
        $(".index_mark").css("display","block");
        $(".index_catalog_beauty_col2_detail").animate({
            "width" : "324px",
            "height" : "193px"
        },500).animate({
            "height" : "587px",
            "width" : "324px"
        },500);
    });
    $(".index_catalog_beauty_col2_detail_pic i").click(function(){
        $(".index_mark").css("display","none");
        $(".index_catalog_beauty_col2_detail").animate({
            "width" : "324px",
            "height" : "193px"
        },500).animate({
            "height" : "0",
            "width" : "0"
        },500);
    });
    //主页展开动画效果2
    $(".index_catalog_beauty_col3_row1_int,.index_catalog_beauty_col3_row1_pic").click(function(){
        $(".index_mark").css("display","block");
        $(".index_catalog_beauty_col3_detail").animate({
            "width" : "324px",
            "height" : "193px"
        },500).animate({
            "height" : "587px",
            "width" : "324px"
        },500);
    });
    $(".index_catalog_beauty_col3_detail_pic i").click(function(){
        $(".index_mark").css("display","none");
        $(".index_catalog_beauty_col3_detail").animate({
            "width" : "324px",
            "height" : "193px"
        },500).animate({
            "height" : "0",
            "width" : "0"
        },500);
    });

    //顶部的购物车商品信息实时更新
    //获取cookie中的购物车商品信息
    var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
    //将获取的cookie中购物车商品信息字符串转为对象
    var cartObj = convertCartStrToObj(cartStr);
    //设置变量，存储商品总数量
    var total = 0;
    //遍历商品信息的对象
    for(var id in cartObj){
        total += cartObj[id].num;
    }
    //将商品总是放在顶部的购物车数量实时信息中
    $("#index_buy span").html(total);

    //封装函数，将购物车字符串转为对象
    function convertCartStrToObj(cartStr){
        if(!cartStr){
            return {};
        }
        //格式例："sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
        var goods = cartStr.split(":");
        var obj = {};
        for(var i = 0;i < goods.length;i ++){
            var data = goods[i].split(",");
            obj[data[0]] = {
                name : data[1],
                price : parseFloat(data[2]),
                num : parseInt(data[3]),
                imgSrc : data[4]
            }
        }
        return obj;
    }
});