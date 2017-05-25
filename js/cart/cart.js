$(function(){
    //取出在cookie中存储的购物车信息
    var cartStr = $.cookie("cart") ? $.cookie("cart") : "";

    if (cartStr) {
        //将cookie中商品字符串转为字符串
        var cartObj = convertCartStrToObj(cartStr);
        //遍历所有的商品
        for (var id in cartObj) {
            //商品的信息对象
            var cart_good = cartObj[id];
            var cart_str = "<tr  class='goodInfo' data-good-id='" + id + "'>" +
                "<td><input type='checkbox' class='cart_info_singleCheck'/></td>" +
                "<td class='cart_dl'><img src='" + cart_good.imgSrc + "'/><span>" + cart_good.name + "</span></td>" +
                "<td>" + cart_good.price + "</td>" +
                "<td class='cart_plus_minus'><a href='javascript:;' class='minus'>-</a><input type='text' value=" + cart_good.num + "><a href='javascript:;' class='cart_plus'>+</a></td>" +
                "<td class='total'>" + cart_good.price * cart_good.num + "</td>" +
                "<td><a href='javascript:;' class='del'>X&nbsp;删除</a></td>" +
                "</tr>";
            //将str加入到table中
            $(".cart_info table").append(cart_str);
            loadCart();
        }
        //给删除按钮添加事件
        $(".cart_info .del").click(function () {
            //在页面上删除该商品信息，并获取该商品的id，用于后面在cookie中删除该商品的信息
            var delId = $(this).parent().parent().remove().attr("data-good-id");
            //从cookie中删除该商品
            var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
            var cartObj = convertCartStrToObj(cartStr);

            //更新页面上总计的商品数量和总价格
            total -= cartObj[delId].num;
            sum -= cartObj[delId].price*cartObj[delId].num;
            $(".cart_info_account i span").html(total);
            $(".cart_info_account i h2").html("￥" + sum);

            delete cartObj[delId];

            //将新商品信息放到cookie中
            $.cookie("cart", convertCartObjToStr(cartObj), {
                expires: 7,
                path: "/"
            });
            //删除按钮点击事件后重新加载顶部购物车的数量显示
            loadCart();
        });
        //给增加按钮添加事件
        $(".cart_plus").click(function () {
            var plusId = $(this).parent().parent().attr("data-good-id");
            var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
            var cartObj = convertCartStrToObj(cartStr);
            cartObj[plusId].num += 1;
            //将页面上显示的数量为1
            $(this).siblings("input").val("" + cartObj[plusId].num);
            //更新页面上的小计
            $(this).parent().siblings(".total").html(cartObj[plusId].num * cartObj[plusId].price);
            //更新页面上总计的商品数量和总价格
            total += 1;
            sum += cartObj[plusId].price
            $(".cart_info_account i span").html(total);
            $(".cart_info_account i h2").html("￥" + sum);
            //将信息放回到cookie中
            $.cookie("cart", convertCartObjToStr(cartObj), {
                expires: 7,
                path: "/"
            });
            //点击增加按钮事件后重新加载顶部购物车的数量显示
            loadCart();
        });
        //给减少按钮添加事件
        $(".minus").click(function () {
            var minusId = $(this).parent().parent().attr("data-good-id");
            var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
            var cartObj = convertCartStrToObj(cartStr);
            if (cartObj[minusId].num > 1) {
                cartObj[minusId].num -= 1;
                //将页面上的数量减少1显示
                $(this).siblings("input").val("" + cartObj[minusId].num);
                //更新页面上的小计
                $(this).parent().siblings(".total").html(cartObj[minusId].num * cartObj[minusId].price);
                //更新页面上总计的商品数量和总价格
                total -= 1;
                sum -= cartObj[minusId].price;
                $(".cart_info_account i span").html(total);
                $(".cart_info_account i h2").html("￥" + sum);
                //将信息放回cookie
                $.cookie("cart", convertCartObjToStr(cartObj), {
                    expires: 7,
                    path: "/"
                });
            }
            //点击减少按钮事件后重新加载顶部购物车的数量显示
            loadCart();
        });
        //给该数量的input添加失焦事件
        $(".cart_plus_minus input").blur(function () {
            var selfId = $(this).parents('.goodInfo').attr("data-good-id");
            var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
            var cartObj = convertCartStrToObj(cartStr);
            total = total - cartObj[selfId].num;
            sum = sum - cartObj[selfId].num * cartObj[selfId].price;
            //判断用户输入的信息是否符合正则标准
            var cart_reg = /^\d+$/;
            if (!cart_reg.test($(this).val())) {
                cartObj[selfId].num = 1;
                $(this).val("1");
                $(this).parent().siblings(".total").html(cartObj[selfId].num * cartObj[selfId].price);
            } else {
                //修改一下数量
                cartObj[selfId].num = parseInt($(this).val());
            }
            $(this).val("" + cartObj[selfId].num);
            //更新页面上的小计
            $(this).parent().siblings(".total").html(cartObj[selfId].num * cartObj[selfId].price);
            //更新页面上的商品数量和总价的统计信息，需要在上面改变商品数量和总价之前获取到数量和总价，先行删除后，在加上后面输入信息的商品数量，以此来改变商品数量和总价的统计信息
            total = total + parseInt($(this).val());
            sum = sum + parseInt($(this).val()) * cartObj[selfId].price;
            $(".cart_info_account i span").html(total);
            $(".cart_info_account i h2").html("￥" + sum);

            //修改cookie中的信息
            $.cookie("cart", convertCartObjToStr(cartObj), {
                expires: 7,
                path: "/"
            });
            //失焦事件后重新加载顶部购物车的数量显示
            loadCart();
        });

        //获取已选的商品的数量总和和价格总和并在页面中动态输出
        var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
        var cartObj = convertCartStrToObj(cartStr);
        //设置一个变量，存储商品数量的总和
        var total = 0;
        //设置变量，存储所有商品的价格总和
        var sum = 0;
        //遍历购物车商品对象，获取数量，计算所有数量的总和
        for (var id in cartObj) {
            total += cartObj[id].num;
            sum += cartObj[id].num * cartObj[id].price;
        }
        //将统计信息的元素加入到页面当中
        $(".cart_info_account").append("<i class='cart_result'>共&nbsp;&nbsp;&nbsp;&nbsp;<span>" + total + "</span>&nbsp;&nbsp;&nbsp;&nbsp;件商品 商品应付总额 (不包含运费) ：<br/>(满99元包邮，不含EMS及港澳台)<h2>￥" + sum + "</h2></i>");

        //复选框的全选和全不选选事件
        $(".cart_info_all").click(function () {
            //alert(this.checked);
            if (this.checked) {
                $(".cart_info_singleCheck").each(function(){
                    this.checked = true;
                });
                $(".cart_info_all").attr("checked",true);
            } else {
                $(".cart_info_singleCheck").removeAttr("checked");
            }
        });
        //非全选框点击取消全选:先知道点击那个非全选框后其checked属性值变为false
        $(".cart_info_singleCheck").click(function(){
            if(this.checked == false){
                $(".cart_info_all").attr("checked",false);
            }
        })
    } else {
        $(".cart_info_none").css({
            "display": "block"
        });
    }

    //清空购物车事件
    $(".cart_info_clearCart").click(function(){
        var clearId = $(".cart_info .del").each(function(){
            $(this).parent().parent().remove().attr("data-good-id");
        });
        //从cookie中删除该商品
        var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
        var cartObj = convertCartStrToObj(cartStr);
        for(var i = 0;i < cartObj.length;i ++){
            delete cartObj[clearId[i]];
        }
        //
        $(".cart_info_account i span").html(0);
        $(".cart_info_account i h2").html("￥" + 0);
        //将新商品信息放到cookie中
        $.cookie("cart",'', {
            expires: -1,
            path: "/"
        });
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