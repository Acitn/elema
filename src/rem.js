// //- 设置html标签font-size
// (function (doc, win) {
//     var _root = doc.documentElement,
//         resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize',
//         resizeCallback = function () {
//             var clientWidth = _root.clientWidth,
//                 fontSize = 20;
//             if (!clientWidth) return;
//             if(clientWidth < 640) {
//                 fontSize = 100 * (clientWidth / 375);
//             } else {
//                 fontSize = 200;
//             }
//             _root.style.fontSize = fontSize + 'px';
//         };
//     if (!doc.addEventListener) return;
//     win.addEventListener(resizeEvent, resizeCallback, false);
//     doc.addEventListener('DOMContentLoaded', resizeCallback, false);
//   })(document, window);

// 基准大小
const baseSize = 200
//  设置 rem 函数
function setRem () {
  //  当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 750
  //  设置页面根节点字体大小
  console.log(scale)
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}

//  初始化
setRem()
//  改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}
