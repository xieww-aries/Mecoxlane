$(function(){
    //brand
    $.getJSON("../json/product_list.json",function (json) {
        var product_list_brand = json.brand;
        $.each(product_list_brand,function(i){
            $(".product_list_nav_brand").append("<a href='javascript:;'>" + product_list_brand[i] + "</a>");
        });
        $(".product_list_nav_brand a").css({
            "float" : "left",
            "width" : "150px"
        });
        $(".product_list_nav_brand a").click(function(){
            $(".product_list_nav_top").append($(this));
        });
        //brand更多和收起事件
        //设置一个开关
        var oProduct_list_nav_brandOnoff = true;
        $(".product_list_nav_brand span").html("更多");
        $(".product_list_nav_brand span").click(function(){
            oProduct_list_nav_brandOnoff = !oProduct_list_nav_brandOnoff;
            if(oProduct_list_nav_brandOnoff == false){
                $(".product_list_nav_brand span").html("收起");
                $(".product_list_nav_brand").css({
                    "height" : "250px"
                });
            }else if(oProduct_list_nav_brandOnoff == true){
                $(".product_list_nav_brand span").html("更多");
                $(".product_list_nav_brand").css({
                    "height" : "42px"
                });
            }
        })
    });
    //classes
    $.getJSON("../json/product_list.json",function(json){
        var product_list_classes = json.classes;
        $.each(product_list_classes,function(j){
            $(".product_list_nav_classes").append("<a href='javascript:;'>" + product_list_classes[j] + "</a>");
        });
        $(".product_list_nav_classes a").css({
            "float" : "left",
            "margin-right" : "90px"
        })
    });

    //product_list_showStage
    $.getJSON("../json/product_list.json",function(json){
        var oProduct_list_showStage = json.img;
        var oProduct_list_productName = json.product_name;
        var oProduct_list_price = json.product_price;
        $.each(oProduct_list_showStage,function(k){
            $(".product_list_showStage").append("<dl><dt><img src=" + oProduct_list_showStage[k] + "/></dt><dd>" + "<p>" + oProduct_list_productName[k] + "</p><i>" + oProduct_list_price[k] + "</i><a href='javascript:;'></a></dd></dl>")
        })
    });
});
