(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{518:function(n,e,s){"use strict";s.r(e);var a=s(18),t=Object(a.a)({},(function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"斐波那契数列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#斐波那契数列"}},[n._v("#")]),n._v(" 斐波那契数列")]),n._v(" "),s("p",[n._v("输入一个整数n，返回斐波那契数列第n项的值。")]),n._v(" "),s("p",[n._v("斐波那契数列的第一、二项是1，1，后面的项是其前两项的加和，容易写出一个递归的式子。")]),n._v(" "),s("div",{staticClass:"language-dafny line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("function Fibonacci(n:int):int   \nrequires n > 0\ndecreases n\n{\n    if n == 1 || n == 2 then 1 else Fibonacci(n - 2) + Fibonacci(n - 1)\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br")])]),s("p",[n._v("注意，斐波那契数列的项显然是从1开始的整数，为了规范程序的正确性，需要加入前置条件"),s("code",[n._v("requires")]),n._v("，限定的布尔表达式为"),s("code",[n._v("n > 0")]),n._v("。")]),n._v(" "),s("p",[n._v("由于返回值是一个整数，我们可以用一条简洁的式子表示斐波那契数列的返回值。注意，由于存在递归项"),s("code",[n._v("Fibonacci(n - 2)")]),n._v("，"),s("code",[n._v("Fibonacci(n - 1)")]),n._v("，我们需要再加上"),s("code",[n._v("decreases n")]),n._v("表示n是逐次减小的(但是不会减为0)，Dafny在执行递归时每次都会检测该条件以保证程序的正确性。")])])}),[],!1,null,null,null);e.default=t.exports}}]);