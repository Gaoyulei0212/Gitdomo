function startMove(node, cssObj, complete) {
  clearInterval(node.timer);
  node.timer = setInterval(function () {
    var isEnd = true; //假设都到达目的值了
    for (var attr in cssObj) {
      var iTarget = cssObj[attr];
      //获取当前值
      var iCur = null;
      if (attr === "opacity") {
        iCur = parseInt(parseFloat(getStyle(node, attr)) * 100);
      } else {
        iCur = parseInt(getStyle(node, attr));
      }
      var speed = (iTarget - iCur) / 8;
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

      iCur += speed;
      if (attr === "opacity") {
        node.style.opacity = iCur / 100;
        node.style.filter = `alpha(opacity=${iCur})`;
      } else {
        node.style[attr] = iCur + "px";
      }

      if(iCur != iTarget){
        isEnd = false;
      }
    }
    if(isEnd){
      clearInterval(node.timer);
      complete && complete.call(node);
    }
  }, 30);
}

//封装一个跨浏览器兼容的获取当前有效样式的函数
function getStyle(node, cssStyle) {
  return node.currentStyle
    ? node.currentStyle[cssStyle]
    : getComputedStyle(node)[cssStyle];
}
