window.onload = function() {
    //获取页面元素
    //用户手机
    //以手机号码作为用户名
    var oRegisterForm_userPhone = document.getElementsByClassName("registerForm_userPhone")[0];
    var oRegisterForm_userPhone_icon_1_1 = document.getElementsByClassName("registerForm_userPhone_icon_1_1")[0];
    var oRegisterForm_userPhone_warn1 = document.getElementsByClassName("registerForm_userPhone_warn1")[0];
    var oRegisterForm_userPhone_warn2 = document.getElementsByClassName("registerForm_userPhone_warn2")[0];
    //用户手机正则
    //设置变量开关用来监控
    //用户名/用户手机
    var oRegisterForm_userPhone_onOff = true;
    oRegisterForm_userPhone.onblur = function () {
        var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        if (reg.test(oRegisterForm_userPhone.value) == false) {
            oRegisterForm_userPhone_icon_1_1.style.display = "block";
            oRegisterForm_userPhone_warn1.style.display = "block";
            oRegisterForm_userPhone_warn2.style.display = "none";
            oRegisterForm_userPhone_onOff = false;
        }
        if (oRegisterForm_userPhone.value == "") {
            oRegisterForm_userPhone_icon_1_1.style.display = "block";
            oRegisterForm_userPhone_warn2.style.display = "block";
            oRegisterForm_userPhone_warn1.style.display = "none";
            oRegisterForm_userPhone_onOff = false;
        }
        return oRegisterForm_userPhone_onOff;
    };
    oRegisterForm_userPhone.onfocus = function () {
        oRegisterForm_userPhone_icon_1_1.style.display = "none";
        oRegisterForm_userPhone_warn1.style.display = "none";
        oRegisterForm_userPhone_warn2.style.display = "none";
    };

    //用户验证码
    //设置验证码开关监测
    var oRegisterForm_userCode_onOff = true;
    var oRegisterForm_userCode = document.getElementsByClassName("registerForm_userCode")[0];
    var oRegisterForm_userCode_warn1 = document.getElementsByClassName("registerForm_userCode_warn1")[0];
    var oRegisterForm_userCode_warn2 = document.getElementsByClassName("registerForm_userCode_warn2")[0];
    var oRegisterForm_userCode_icon_1 = document.getElementsByClassName("registerForm_userCode_icon_1")[0];
    var oRegisterForm_userCode_box = document.getElementsByClassName("registerForm_userCode_box")[0];
    //验证码随机产生
    oRegisterForm_userCode_box.innerHTML = Math.floor(Math.random() * 9) + "" + Math.floor(Math.random() * 9) + "" + Math.floor(Math.random() * 9) + "" + Math.floor(Math.random() * 9);
    // var oRegisterForm_userCode_boxValue = Number(oRegisterForm_userCode_box.innerHTML);
    oRegisterForm_userCode_box.onclick = function(){
        this.innerHTML = Math.floor(Math.random() * 9) + "" + Math.floor(Math.random() * 9) + "" + Math.floor(Math.random() * 9) + "" + Math.floor(Math.random() * 9);
    };
    //用户验证码正则
    oRegisterForm_userCode.onblur = function () {
        var reg = /^.{4}$/;
        if (reg.test(oRegisterForm_userCode.value) == false) {
            oRegisterForm_userCode_warn1.style.display = "none";
            oRegisterForm_userCode_warn2.style.display = "block";
            oRegisterForm_userCode_icon_1.style.display = "block";
            oRegisterForm_userCode_onOff = false;
        }
        if (oRegisterForm_userCode.value == "") {
            oRegisterForm_userCode_warn1.style.display = "block";
            oRegisterForm_userCode_warn2.style.display = "none";
            oRegisterForm_userCode_icon_1.style.display = "block";
            oRegisterForm_userCode_onOff = false;
        }
        return oRegisterForm_userCode_onOff;
    };
    oRegisterForm_userCode.onfocus = function () {
        oRegisterForm_userCode_warn1.style.display = "none";
        oRegisterForm_userCode_warn2.style.display = "none";
        oRegisterForm_userCode_icon_1.style.display = "none";
    };

    //用户手机短信验证
    var oRegisterForm_userPhoneCode = document.getElementsByClassName("registerForm_userPhoneCode")[0];
    var oRegisterForm_userPhoneCode_box = document.getElementsByClassName("registerForm_userPhoneCode_box")[0];
    var oRegisterForm_userPhoneCodeSend;
    oRegisterForm_userPhoneCode_box.onclick = function(){
        oRegisterForm_userPhoneCodeSend = Math.floor(Math.random() * 9) + "" + Math.floor(Math.random() * 9) + "" + Math.floor(Math.random() * 9) + "" + Math.floor(Math.random() * 9);
        alert(oRegisterForm_userPhoneCodeSend);
    };

    //用户密码
    //获取的用户密码
    //用户密码的开关监测
    var oRegisterForm_userPassword_onOff = true;
    var oRegisterForm_userPassword = document.getElementsByClassName("registerForm_userPassword")[0];
    var oRegisterForm_userPassword_warn1 = document.getElementsByClassName("registerForm_userPassword_warn1")[0];
    var oRegisterForm_userPassword_warn2 = document.getElementsByClassName("registerForm_userPassword_warn2")[0];
    var oRegisterForm_userPassword_warn3 = document.getElementsByClassName("registerForm_userPassword_warn3")[0];
    var oRegisterForm_userPassword_warn4 = document.getElementsByClassName("registerForm_userPassword_warn4")[0];
    var oRegisterForm_userPassword_icon_3_1 = document.getElementsByClassName("registerForm_userPassword_icon_3_1")[0];
    //用户密码正则
    oRegisterForm_userPassword.onblur = function () {
        var reg = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,16}$/;
        if (oRegisterForm_userPassword.value == "") {
            oRegisterForm_userPassword_warn1.style.display = "block";
            oRegisterForm_userPassword_warn2.style.display = "none";
            oRegisterForm_userPassword_warn3.style.display = "none";
            oRegisterForm_userPassword_warn4.style.display = "none";
            oRegisterForm_userPassword_icon_3_1.style.display = "block";
            oRegisterForm_userPassword_onOff = false;
        }
        if (oRegisterForm_userPassword.value.length < 6 && oRegisterForm_userPassword.value != "") {
            oRegisterForm_userPassword_warn1.style.display = "none";
            oRegisterForm_userPassword_warn2.style.display = "block";
            oRegisterForm_userPassword_warn3.style.display = "none";
            oRegisterForm_userPassword_warn4.style.display = "none";
            oRegisterForm_userPassword_icon_3_1.style.display = "block";
            oRegisterForm_userPassword_onOff = false;
        }
        if (oRegisterForm_userPassword.value.length > 16) {
            oRegisterForm_userPassword_warn1.style.display = "none";
            oRegisterForm_userPassword_warn2.style.display = "none";
            oRegisterForm_userPassword_warn3.style.display = "block";
            oRegisterForm_userPassword_warn4.style.display = "none";
            oRegisterForm_userPassword_icon_3_1.style.display = "block";
            oRegisterForm_userPassword_onOff = false;
        }

        if (reg.test(oRegisterForm_userPassword.value) == false && oRegisterForm_userPassword.value != "" && oRegisterForm_userPassword.value.length < 16 && oRegisterForm_userPassword.value.length > 6) {
            oRegisterForm_userPassword_warn1.style.display = "none";
            oRegisterForm_userPassword_warn2.style.display = "none";
            oRegisterForm_userPassword_warn3.style.display = "none";
            oRegisterForm_userPassword_warn4.style.display = "block";
            oRegisterForm_userPassword_icon_3_1.style.display = "block";
            oRegisterForm_userPassword_onOff = false;
        }
        return oRegisterForm_userPassword_onOff;
    };
    oRegisterForm_userPassword.onfocus = function () {
        oRegisterForm_userPassword_warn1.style.display = "none";
        oRegisterForm_userPassword_warn2.style.display = "none";
        oRegisterForm_userPassword_warn3.style.display = "none";
        oRegisterForm_userPassword_warn4.style.display = "none";
        oRegisterForm_userPassword_icon_3_1.style.display = "none";
    };

    //用户密码验证
    //获取的用户密码的确认
    //用户确认密码的开关监测
    var oRegisterForm_userConfirmPassword_onOff = true;
    var oRegisterForm_userConfirmPassword = document.getElementsByClassName("registerForm_userConfirmPassword")[0];
    var oRegisterForm_userConfirmPassword_warn1 = document.getElementsByClassName("registerForm_userConfirmPassword_warn1")[0];
    var oRegisterForm_userConfirmPassword_warn2 = document.getElementsByClassName("registerForm_userConfirmPassword_warn2")[0];
    var oRegisterForm_userConfirmPassword_icon4_1 = document.getElementsByClassName("registerForm_userConfirmPassword_icon4_1")[0];
    oRegisterForm_userConfirmPassword.onblur = function () {
        if (oRegisterForm_userConfirmPassword.value == "") {
            oRegisterForm_userConfirmPassword_warn1.style.display = "block";
            oRegisterForm_userConfirmPassword_warn2.style.display = "none";
            oRegisterForm_userConfirmPassword_icon4_1.style.display = "block";
            oRegisterForm_userConfirmPassword_onOff = false;
        }
        if (oRegisterForm_userConfirmPassword.value != oRegisterForm_userPassword.value && oRegisterForm_userConfirmPassword.value != "") {
            oRegisterForm_userConfirmPassword_warn1.style.display = "none";
            oRegisterForm_userConfirmPassword_warn2.style.display = "block";
            oRegisterForm_userConfirmPassword_icon4_1.style.display = "block";
            oRegisterForm_userConfirmPassword_onOff = false;
        }
        return oRegisterForm_userConfirmPassword_onOff;
    };
    oRegisterForm_userConfirmPassword.onfocus = function () {
        oRegisterForm_userConfirmPassword_warn1.style.display = "none";
        oRegisterForm_userConfirmPassword_warn2.style.display = "none";
        oRegisterForm_userConfirmPassword_icon4_1.style.display = "none";
        return oRegisterForm_userConfirmPassword_onOff = false;
    };
    //获取注册链接
    var oRegister_userRegister = document.getElementsByClassName("register_userRegister")[0];
    var oRegisterForm_userCheckBox = document.getElementsByClassName("registerForm_userCheckBox")[0];
    //注册按钮点击事件
    oRegister_userRegister.onclick = function () {
        var register_usn = oRegisterForm_userPhone.value;
        var register_pwd = oRegisterForm_userPassword.value;
        var register_users = getCookie("registerUsers") ? getCookie("registerUsers") : "";
        //清空所有的cookie值
        document.cookie = "";
        //将字符串转为对象
        register_users = convertStrToObj(register_users);
        //判断复选框是否选中
        if(Number(oRegisterForm_userCode_box.innerHTML) != Number(oRegisterForm_userCode.value)){
            alert("验证码错误！");
        }else {
            if(Number(oRegisterForm_userPhoneCode.value) != oRegisterForm_userPhoneCodeSend){
                alert("手机验证码错误！");
            }else {
                if (oRegisterForm_userCheckBox.checked) {
                    //判断 register_usn 属性是否在 register_users 对象中
                    if (register_usn in register_users) {
                        alert("该用户信息已被注册！");
                        return;
                    } else {
                        //未被注册，则将用户信息加到cookie中
                        register_users[register_usn] = register_pwd;
                        //将用户对象转为字符串
                        var userStr = convertObjToStr(register_users);
                        //在 cookie 中设置用户信息
                        setCookie("registerUsers", userStr, 7);
                        console.log(decodeURIComponent(document.cookie));
                        //判断开关：即上面所有正则的判断结果
                        if (oRegisterForm_userConfirmPassword_onOff && oRegisterForm_userPassword_onOff && oRegisterForm_userCode_onOff && oRegisterForm_userPhone_onOff) {
                            alert("注册成功！");
                        }
                    }
                } else {
                    //提示信息
                    alert("请同意麦考林用户服务协议!")
                }
            }
        }

    };
    var oRegisterForm_l = document.getElementsByClassName("registerForm_l")[0];
    oRegisterForm_l.onclick = function(){
        location.href = "../html/login.html";
    };

//封装一个将字符串转为对象的方法
    function convertStrToObj(str) {
        if (!str) {
            return {};
        }
        var users = str.split(":");
        var obj = {};
        for (var i = 0; i < users.length; i++) {
            var userData = users[i].split(",");
            obj[userData[0]] = userData[1];
        }
        return obj;
    }

//封装一个将对象转为字符串的函数
    function convertObjToStr(obj) {
        var str = "";
        for (var usn in obj) {
            var pwd = obj[usn];
            if (str) {
                str += ":";
            }
            str += usn + "," + pwd;
        }
        return str;
    }
};





