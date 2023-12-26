(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,i(r.key),r)}}function i(t){var i=function(t,i){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(i)?i:String(i)}var n,r,o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$element=t,this.$circle=t.querySelector(".acure-glass-title__circle"),this.width=0,this.height=0,this.mouseX=0,this.mouseY=0,this.circleX=0,this.circleY=0,this.$init()}var i,n;return i=e,(n=[{key:"$addEventListeners",value:function(){var e=this;window.addEventListener("resize",(function(){e.$updateSizes()})),window.addEventListener("mousemove",(function(t){e.mouseX=t.clientX,e.mouseY=t.clientY}))}},{key:"$init",value:function(){this.$updateSizes(),this.$addEventListeners(),this.$moveCircle()}},{key:"$moveCircle",value:function(){var t=this,i=this.$element.getBoundingClientRect(),n=this.mouseX-this.circleX,r=this.mouseY-this.circleY;this.circleX=this.circleX+n*e.SPEED,this.circleY=this.circleY+r*e.SPEED;var o=(this.circleX-i.left)*(1220/this.width),c=(this.circleY-i.top)*(200/this.height);this.$circle.style.transform="translate("+o+"px, "+c+"px)",requestAnimationFrame((function(){t.$moveCircle()}))}},{key:"$updateSizes",value:function(){this.width=this.$element.getBoundingClientRect().width,this.height=this.$element.getBoundingClientRect().height}}])&&t(i.prototype,n),Object.defineProperty(i,"prototype",{writable:!1}),e}();n=o,(r=i(r="SPEED"))in n?Object.defineProperty(n,r,{value:.08,enumerable:!0,configurable:!0,writable:!0}):n[r]=.08;const c=o;console.log("USE CASES"),document.querySelectorAll(".acure-glass-title").forEach((function(e){console.log("GLASS TITLE"),new c(e)}))})();