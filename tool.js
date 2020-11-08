//时间戳版本 节流
function throttle(funcName, delay){
  var preTime = 0;
  var curTime = Date.now();
  return function(){
    const context = this;
    const args = [...arguments];
    curTime = Date.now();
    if(curTime - preTime >= delay){
      funcName.apply(context, args);
      preTime = curTime;
    }
  }
}
function antiShake(funcName, delay){
  var timer = null;
  return function(){
    const content = this;
    const args = [...arguments];

    clearTimeout(timer);
    timer = setTimeout(function(){
      funcName.apply(content, args);
    }, delay);
  }
}
