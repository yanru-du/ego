module.exports = function() {
  // 用于修改字体大小的设置
  window.addEventListener('resize',getBodyFontSize,false);
  window.addEventListener('load',getBodyFontSize,false);
}();

function getBodyFontSize(){
  var html = document.documentElement;
  var width = document.body.clientWidth || document.documentElement.clientWidth;
  html.style.fontSize = width / 75 * 2 + 'px';
}

