//1.创建cookie
function setCookie(key,value,expires){
	var cookieText = encodeURIComponent(key) + "=" + encodeURIComponent(value) + ";path=/";
	//设置过期时间
	if(typeof expires == "number"){
		var date = new Date();
		date.setDate(date.getDate() + expires);
		cookieText += ";expires=" + date;
	}	
	document.cookie = cookieText;
}
//2.获取cookie
function getCookie(key){
	var arr = document.cookie.split("; ");
	for(var i = 0; i < arr.length; i ++){
		var list = arr[i].split("=");
		if(list[0] == encodeURIComponent(key)){
			return decodeURIComponent(list[1]);
		}
		
	}
}
//3.删除cookie
function removeCookie(key){
	document.cookie = encodeURIComponent(key) + "=;expires=" + new Date(0) + ";path=/";
}

