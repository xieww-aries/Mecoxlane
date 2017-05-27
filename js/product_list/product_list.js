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
        var oProduct_list_imgSrc = json.img;
        var oProduct_list_productName = json.product_name;
        var oProduct_list_price = json.product_price;
        $.each(oProduct_list_imgSrc,function(k){
            $(".product_list_showStage").append("<dl data-good-id='sp" + k + "'><dt><img src=" + oProduct_list_imgSrc[k] + "/></dt><dd>" + "<p>" + oProduct_list_productName[k] + "</p><i>" + parseFloat( oProduct_list_price[k]) + "</i><a href='javascript:;' class='addToCart'></a></dd></dl>")
        });
        //只做第一个的页面链接效果，后面的商品信息点击链接也是该页面
        $(".product_list_showStage dl dt,.product_list_showStage dl dd p").click(function(){
            location.href = "product.html";
        });
        //购物车cart相关操作
        //1.加载已有的购物信息,使顶部的购物车商品数量信息实时更新
        loadCart();
        //2.给购物车添加点击事件
        $("#buy").click(function(){
            location.href = "cart.html";
            console.log($.cookie("cart"));
        });
        //3.给加入购物车元素添加点击事件
        $(".addToCart").click(function(){
            //页面蒙板出现
            $(".body_mark").css("display","block");
            //弹出加入购物车成功的对话框
            $(".product_list_cartAlert").animate({
                "top" : "300px"
            },500);
            //点击退出对话框按钮和继续购物事件
            $(".product_list_out,.product_list_continueBuy").click(function(){
                $(".product_list_cartAlert").animate({
                    "top" : "-380px"
                },0);
                $(".body_mark").css("display","none");
            });
            //对话框 去结算 按钮事件跳转到购物车页面
            $(".product_list_pay").click(function(){
                location.href = "cart.html";
            });
            //获取商品的id（用来区分不同商品）
            var oProduct_list_id = $(this).parent().parent().attr("data-good-id");
            //获取商品的名称
            var oProduct_list_name = $(this).siblings("p").html();
            //获取商品的价格
            var oProduct_list_price = parseFloat($(this).siblings("i").html());
            //获取图片的src
            var oProduct_list_imgSrc= $(this).parent().siblings("dt").find("img").attr("src");
            //获取cookie中的信息
            var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
            //将获取到的cookie字符串转成对象
            var cartObj = convertCartStrToObj(cartStr);
            //判断该商品是否已经在cookie购物车中存在,如果存在数量+1，不存在则将商品的信息加入到里面去
            if(oProduct_list_id in cartObj){
                cartObj[oProduct_list_id].num += 1;
            }else{
                cartObj[oProduct_list_id] = {
                    name : oProduct_list_name,
                    price : oProduct_list_price,
                    num : 1,
                    imgSrc : oProduct_list_imgSrc
                }
            }
            //将新的购物车信息存入到cookie中去
            //将cookie对象转为字符串
            cartStr = convertCartObjToStr(cartObj);
            //存入cookie
            $.cookie("cart",cartStr,{empires : 7,path : "/"});
            //每次点击加入购物车事件顶部的购物车的数量实时变化
            loadCart();
        });

        //将购物车字符串转为对象
        function convertCartStrToObj(cartStr){
            if(!cartStr){
                return {};
            }
            //例："sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
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
        //将购物车的对象转为字符串
        function convertCartObjToStr(obj){
            var cartStr = "";
            for(var id in obj){
                if(cartStr){
                    cartStr += ":";
                }
                cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].imgSrc;
            }
            return cartStr;
        }

        //加载购物车中的信息,使商品页与购物车页的商品数量一致
        function loadCart(){
            var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
            var cartObj = convertCartStrToObj(cartStr);
            //设置一个变量，存储商品数量的总和
            var total = 0;
            //遍历购物车商品对象，获取数量，计算所有数量的总和
            for(var id in cartObj){
                total += cartObj[id].num;
            }
            //顶部购物车商品数量
            $("#buy span").html(total);
        }
    });
});
