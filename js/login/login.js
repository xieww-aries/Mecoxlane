window.onload = function(){
    //获取页面元素
    //跳转到注册的链接
    var oLoginForm_l = document.getElementsByClassName("loginForm_l")[0];
    //用户名
    var oLoginForm_userName = document.getElementsByClassName("loginForm_userName")[0];
    //密码
    var oLoginForm_userPassword = document.getElementsByClassName("loginForm_userPassword")[0];

    //验证码
    var oLoginForm_userCode = document.getElementsByClassName("loginForm_userCode")[0];
    var oLoginForm_userCode_box = document.getElementsByClassName("loginForm_userCode_box")[0];
    //验证码存放的盒子中的数值随机产生
    oLoginForm_userCode_box.innerHTML = Math.floor(Math.random() * 9) + "" + Math.floor(Math.random() * 9) + "" + Math.floor(Math.random() * 9) + "" + Math.floor(Math.random() * 9);
    oLoginForm_userCode_box.onclick = function(){
        this.innerHTML = Math.floor(Math.random() * 9) + "" + Math.floor(Math.random() * 9) + "" + Math.floor(Math.random() * 9) + "" + Math.floor(Math.random() * 9);
    };

    //登录链接
    var oLoginForm_userLogin = document.getElementsByClassName("loginForm_userLogin")[0];
    var oLoginForm_userCode_warn = document.getElementsByClassName("loginForm_userCode_warn")[0];
    var oLoginForm_userCode_icon1 = document.getElementsByClassName("loginForm_userCode_icon1")[0];
    //跳转到注册页的事件
    oLoginForm_l.onclick = function(){
        location.href = "register.html";
    };
    //登录事件
    oLoginForm_userLogin.onclick = function(){

        var login_usn = oLoginForm_userName.value;
        var login_pwd = oLoginForm_userPassword.value;
        //获取cookie中的用户信息
        var login_users = getCookie("registerUsers") ? getCookie("registerUsers") : "";
        //将字符串转为对象
        login_users = convertStrToObj(login_users);
        if(Number(oLoginForm_userCode_box.innerHTML) != Number(oLoginForm_userCode.value)){
            alert("验证码错误！");
        }else {
            if (login_users[login_usn] == login_pwd) {
                //登录成功的事件
                alert("登录成功！");
            } else {
                oLoginForm_userCode_warn.style.display = "block";
                oLoginForm_userCode_icon1.style.display = "block";
            }
        }
    };

    //将字符串转为对象
    function convertStrToObj(str){
        if(!str){ //如果是空字符串
            return {}; //返回空对象
        }
        var users = str.split(":");
        var obj = {};
        for(var i = 0; i < users.length; i ++){
            var userData = users[i].split(",");
            obj[userData[0]] = userData[1];
        }
        return obj;
    }

    //将对象转为字符串
    function convertObjToStr(obj){
        var str = "";
        //遍历对象
        for(var usn in obj){
            var pwd = obj[usn];
            if(str){
                str += ":";
            }
            str += usn + ',' + pwd;
        }
        return str;
    }
};