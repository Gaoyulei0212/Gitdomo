function $cookie(name){
  var argus = arguments;
  switch(argus.length){
    case 1:
      return getCookie(name);
      break;
    case 2: //如果是两个参数判断第二个参数是否是null
      if(argus[1] == null){
        removeCookie(name);
      }else{
        //如果不是，设置cookie 第三参数传入空对象，防止报错
        setCookie(name, argus[1], {});
      }
      break;
    default:
      //三个参数
      setCookie(...argus);
      break;
  }
}
 
function setCookie(name, value, { expires, path, domain, secure }) {
  var cookieStr =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);
  if (expires) {
    cookieStr += ";expires=" + afterOfDate(expires);
  }
  if(path){
    cookieStr += ";path=" + path;
  }
  if(domain){
    cookieStr += ";domain=" + domain;
  }
  if(secure){
    cookieStr += ';secure';
  }
  document.cookie = cookieStr;
}

function getCookie(name) {
  var cookieStr = decodeURIComponent(document.cookie);
  var cookieArr = cookieStr.split("; ");

  var reg = new RegExp("^" + name + "=");

  var res = cookieArr.find(item => reg.test(item));

  if(!res){
    return null;
  }else{
    //name=value
    var arr = res.split("=");
    return arr[1];
  }
}

function removeCookie(name) {
  document.cookie = encodeURIComponent(name) + "=;expires=" + new Date(0);
}

//获取n天后的时间
function afterOfDate(n) {
  var d = new Date();
  var day = d.getDate();
  d.setDate(day + n);
  return d;
}
