(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{382:function(e,t,n){var i=n(2),a=n(383);i({global:!0,forced:parseInt!=a},{parseInt:a})},383:function(e,t,n){var i=n(0),a=n(3),o=n(1),r=n(12),s=n(215).trim,l=n(216),c=i.parseInt,h=i.Symbol,m=h&&h.iterator,d=/^[+-]?0x/i,u=o(d.exec),g=8!==c(l+"08")||22!==c(l+"0x16")||m&&!a((function(){c(Object(m))}));e.exports=g?function(e,t){var n=s(r(e));return c(n,t>>>0||(u(d,n)?16:10))}:c},421:function(e,t,n){},481:function(e,t,n){var i=n(2),a=n(482),o=n(99);i({target:"Array",proto:!0},{fill:a}),o("fill")},482:function(e,t,n){"use strict";var i=n(15),a=n(100),o=n(21);e.exports=function(e){for(var t=i(this),n=o(t),r=arguments.length,s=a(r>1?arguments[1]:void 0,n),l=r>2?arguments[2]:void 0,c=void 0===l?n:a(l,n);c>s;)t[s++]=e;return t}},483:function(e,t,n){"use strict";n(421)},494:function(e,t,n){"use strict";n.r(t);n(130),n(69),n(133),n(70),n(481),n(36),n(5),n(37),n(30),n(382);function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3e3,o=document.querySelectorAll(".index-tip"),r=(new Date).getTime(),s=0==o.length?0:o[o.length-1].getAttribute("data-top"),l=parseInt(s)+(0!=o.length?o[o.length-1].offsetHeight+17:n),c=document.createElement("div");c.className="index-tip tip-".concat(t," ").concat(r),c.style.top=parseInt(s)+"px",c.setAttribute("data-top",l),"info"==t||1==t?c.innerHTML='<i class="iconfont icon-info icon"></i><p class="tip-info-content">'.concat(e,"</p>"):"success"==t||2==t?c.innerHTML='<i class="iconfont icon-dagouyouquan icon"></i><p class="tip-success-content">'.concat(e,"</p>"):"danger"==t||3==t?c.innerHTML='<i class="iconfont icon-cuowu icon"></i><p class="tip-danger-content">'.concat(e,"</p>"):"warning"!=t&&4!=t||(c.innerHTML='<i class="iconfont icon-gantanhao icon"></i><p class="tip-warning-content">'.concat(e,"</p>")),document.body.appendChild(c);var h=document.getElementsByClassName(r)[0];setTimeout((function(){h.style.top=parseInt(l)+"px",h.style.opacity="1"}),10),setTimeout((function(){h.style.top="0px",h.style.opacity="0.4";for(var e=a(h),t=0;t<e.length;t++){var n=e[t],i=parseInt(n.getAttribute("data-top"))-n.offsetHeight-17;n.setAttribute("data-top",i),n.style.top=i+"px"}setTimeout((function(){h.remove()}),500)}),i)}function a(e){for(var t=[],n=e;n;n=n.nextSibling)1===n.nodeType&&n!==e&&t.push(n);return t}var o={mounted:function(){var e=this,t=document.getElementById("banner-arrow");t&&t.parentNode.removeChild(t);var n=document.createElement("a");n.id="banner-arrow",n.className="banner-arrow",document.getElementsByClassName("banner")[0].append(n),document.getElementById("banner-arrow").addEventListener("click",(function(t){e.scrollFn()}));var i=1,a=!1,o=!1,r=["transparent","rgba(255, 148, 48, .2","rgba(0, 0, 0, .3)","rgba(0, 0, 0, .5)"],s=!1,l=[],c=200,h=800,m="1.4rem",d=!1,u=0,g=200;if(this.$themeConfig.indexImg&&Object.keys(this.$themeConfig.indexImg).length>0&&(i=null==this.$themeConfig.indexImg.navColor?i:this.$themeConfig.indexImg.navColor,a=null==this.$themeConfig.indexImg.switchNavColor?a:this.$themeConfig.indexImg.switchNavColor,o=null==this.$themeConfig.indexImg.bgTimeColor?o:this.$themeConfig.indexImg.bgTimeColor,r=null==this.$themeConfig.indexImg.bgTimeColorArray?r:this.$themeConfig.indexImg.bgTimeColorArray,s=null==this.$themeConfig.indexImg.descFade?s:this.$themeConfig.indexImg.descFade,l=null==this.$themeConfig.indexImg.desc?l:this.$themeConfig.indexImg.desc,m=null==this.$themeConfig.indexImg.descFontSize?m:this.$themeConfig.indexImg.descFontSize,c=null==this.$themeConfig.indexImg.descFadeInTime?c:this.$themeConfig.indexImg.descFadeInTime,h=null==this.$themeConfig.indexImg.descNextTime?h:this.$themeConfig.indexImg.descNextTime,d=null==this.$themeConfig.indexImg.bubble?d:this.$themeConfig.indexImg.bubble,u=null==this.$themeConfig.indexImg.bubblePosition?u:this.$themeConfig.indexImg.bubblePosition,g=null==this.$themeConfig.indexImg.bubbleNum?g:this.$themeConfig.indexImg.bubbleNum),o&&this.bgTimeColor(r),setTimeout((function(){e.noBgBlur()}),100),this.blurText(i),this.watchScroll(i,a),s&&this.textFadeInAndOut(l,m,c,100,h),d){var f=document.createElement("canvas");f.id="canvas",f.style.top=u+"%",document.getElementsByClassName("banner")[0].append(f),this.canvasBubble(g)}},watch:{$route:function(e,t){var n=this;"/"==e.path&&Object.keys(this.$route.query).length>0&&setTimeout((function(){n.clickArrow()}),200)}},methods:{scrollFn:function(){var e=document.getElementsByClassName("banner")[0].clientHeight;window.scrollTo({top:e,behavior:"smooth"})},clickArrow:function(){document.getElementById("banner-arrow").click()},watchScroll:function(e,t){var n=this,i=document.getElementsByClassName("banner")[0].clientHeight;window.onscroll=function(){document.documentElement.scrollTop<i?(n.blurText(e),n.noBgBlur()):(t&&1==e?n.blurText(2):t&&2==e&&n.blurText(1),n.bgBlur())}},bgBlur:function(){document.getElementsByClassName("navbar")[0].className="navbar blur"},noBgBlur:function(){document.getElementsByClassName("navbar")[0].className="navbar navbar1 blur"},blurText:function(e){var t=document.getElementsByClassName("site-name")[0],n=document.getElementsByClassName("search-box")[0],i=document.getElementsByClassName("nav-links")[0];1==e?(t.className="site-name can-hide",i.className="nav-links can-hide",n.className="search-box"):2==e&&(t.className="site-name site-name1 can-hide",i.className="nav-links nav-links1 can-hide",n.className="search-box search-box1")},bgTimeColor:function(e){var t=(new Date).getHours(),n=(new Date).getMinutes(),a=(new Date).getSeconds();t=t<10?"0"+t:t,n=n<10?"0"+n:n,a=a<10?"0"+a:a;var o=document.createElement("div");o.className="banner-color",t>=6&&t<11?(o.style.backgroundColor=e[0],i("早上好 Dafnyer✨,现在是 ".concat(t,":").concat(n,":").concat(a),"info",50,4e3)):t>=12&&t<=16?(o.style.backgroundColor=e[0],i("中午好 Dafnyer✨,现在是 ".concat(t,":").concat(n,":").concat(a),"info",50,4e3)):t>=16&&t<=19?(o.style.backgroundColor=e[1],i("晚上好 Dafnyer✨,现在是 ".concat(t,":").concat(n,":").concat(a),"info",50,4e3)):t>=19&&t<24?(o.style.backgroundColor=e[2],i("凌晨好 Dafnyer✨,现在是 ".concat(t,":").concat(n,":").concat(a,"，该休息啦"),"info",50,4e3)):t>=0&&t<6&&(o.style.backgroundColor=e[3],i("熬夜咯 Dafnyer✨","info",50,4e3)),document.getElementsByClassName("banner")[0].parentNode.append(o)},textFadeInAndOut:function(e,t,n,i,a){var o=document.getElementsByClassName("description")[0];if(o.style.fontSize=t,o){var r=document.createElement("span");r.className="typed",r.innerHTML="|";var s=0,l=0,c=o.innerText;o.innerText="",o.appendChild(document.createElement("span")),o.appendChild(r);var h,m=setInterval(d,n)}function d(){o&&(r.style.animation="none",e instanceof Array&&e.length>0&&(c=e[l]),o.firstChild.innerText=c.substring(0,s++),s>c.length&&(clearInterval(m),r.style.animation="typedBlink 1s infinite",setTimeout((function(){h=setInterval(u,i)}),a)))}function u(){s>=0?(r.style.animation="none",o.firstChild.innerText=c.substring(0,s--)):(clearInterval(h),r.style.animation="typedBlink 1s infinite",setTimeout((function(){++l>=e.length&&(l=0),m=setInterval(d,n)}),a))}},canvasBubble:function(e){var t=document.getElementById("canvas"),n=t.getContext("2d");function i(){this.alive=!0,this.x=Math.round(Math.random()*t.width),this.y=Math.round(Math.random()*t.height),this.diameter=10.8*Math.random(),this.ColorData={Red:Math.round(255*Math.random()),Green:Math.round(255*Math.random()),Blue:Math.round(255*Math.random())},this.alpha=.5,this.color="rgba("+this.ColorData.Red+", "+this.ColorData.Green+","+this.ColorData.Blue+","+this.alpha+")",this.velocity={x:Math.round(Math.random()<.5?-1:1)*Math.random()*.7,y:Math.round(Math.random()<.5?-1:1)*Math.random()*.7}}i.prototype={Draw:function(){n.fillStyle=this.color,n.beginPath(),n.arc(this.x,this.y,this.diameter,0,2*Math.PI,!1),n.fill()},Update:function(){this.alpha<.8&&(this.alpha+=.01,this.color="rgba("+this.ColorData.Red+", "+this.ColorData.Green+","+this.ColorData.Blue+","+this.alpha+")"),this.x+=this.velocity.x,this.y+=this.velocity.y,(this.x>t.width+5||this.x<-5||this.y>t.height+5||this.y<-5)&&(this.alive=!1)}};var a={rArray:[],Init:function(){t.width=window.innerWidth,t.height=window.innerHeight;for(var n=0;n<e;n++)this.rArray.push(new i);this.Update()},Draw:function(){n.clearRect(0,0,t.width,t.height),this.rArray.forEach((function(e){e.Draw()}))},Update:function(){if(a.rArray.length<e)for(var t=a.rArray.length;t<e;t++)a.rArray.push(new i);a.rArray.forEach((function(e){e.Update()})),a.rArray=a.rArray.filter((function(e){return e.alive})),a.Draw(),requestAnimationFrame(a.Update)}};window.onresize=function(){a.rArray=[],t.width=window.innerWidth,t.height=window.innerHeight},a.Init()}}},r=(n(483),n(18)),s=Object(r.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"index-bigimg",staticStyle:{display:"none"}})}),[],!1,null,null,null);t.default=s.exports}}]);