(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{534:function(n,a,s){"use strict";s.r(a);var e=s(18),i=Object(e.a)({},(function(){var n=this,a=n.$createElement,s=n._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"二分查找"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二分查找"}},[n._v("#")]),n._v(" 二分查找")]),n._v(" "),s("p",[n._v("谓词通常用于使其他注释更清晰:")]),n._v(" "),s("div",{staticClass:"language-dafny line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("predicate sorted(a: array<int>)\n   requires a != null\n   reads a\n{\n   forall j, k :: 0 <= j < k < a.Length ==> a[j] <= a[k]\n}\nmethod BinarySearch(a: array<int>, value: int) returns (index: int)\n   requires a != null && 0 <= a.Length && sorted(a)\n   ensures 0 <= index ==> index < a.Length && a[index] == value\n   ensures index < 0 ==> forall k :: 0 <= k < a.Length ==> a[k] != value\n{\n   // This one is a little harder. What should go here?\n}\nmethod BinarySearch(a: array<int>, key: int) returns (index: int)\n   requires a != null && sorted(a)\n   ensures ...\n{\n   ...\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br")])]),s("p",[n._v("我们有和线性搜索一样的后置条件，因为目标是一样的。不同的是，现在我们知道数组是有序的。因为"),s("code",[n._v("Dafny")]),n._v("可以展开函数，所以在方法体中它也知道这一点。然后我们可以用这个性质来证明搜索的正确性。方法体如下所示:")]),n._v(" "),s("div",{staticClass:"language-dafny line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("predicate sorted(a: array<int>)\n   requires a != null\n   reads a\n{\n   forall j, k :: 0 <= j < k < a.Length ==> a[j] <= a[k]\n}\nmethod BinarySearch(a: array<int>, value: int) returns (index: int)\n   requires a != null && 0 <= a.Length && sorted(a)\n   ensures 0 <= index ==> index < a.Length && a[index] == value\n   ensures index < 0 ==> forall k :: 0 <= k < a.Length ==> a[k] != value\n{\n   var low, high := 0, a.Length;\n   while low < high\n      invariant 0 <= low <= high <= a.Length\n      invariant forall i ::\n         0 <= i < a.Length && !(low <= i < high) ==> a[i] != value\n   {\n      var mid := (low + high) / 2;\n      if a[mid] < value\n      {\n         low := mid + 1;\n      }\n      else if value < a[mid]\n      {\n         high := mid;\n      }\n      else\n      {\n         return mid;\n      }\n   }\n   return -1;\n}\n   var low, high := 0, a.Length;\n   while low < high\n      invariant 0 <= low <= high <= a.Length\n      invariant forall i ::\n         0 <= i < a.Length && !(low <= i < high) ==> a[i] != value\n   {\n      var mid := (low + high) / 2;\n      if a[mid] < value\n      {\n         low := mid + 1;\n      }\n      else if value < a[mid]\n      {\n         high := mid;\n      }\n      else\n      {\n         return mid;\n      }\n   }\n   return -1;\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br")])]),s("p",[n._v("这是一个相当标准的二分查找实现。首先，我们声明要搜索的范围。这可以被认为是钥匙可能存在的剩余空间。范围是包含-排他的，意味着它包括指数["),s("code",[n._v("low")]),n._v("，"),s("code",[n._v("high")]),n._v(")。第一个不变量表示这个范围在数组内。第二个表示键不在这个范围之外的任何地方。在"),s("code",[n._v("if")]),n._v("链的前两个分支中，我们发现区间中间的元素不是键，因此我们移动区间以排除该元素及其相应一侧的所有其他元素。当移动范围的下端时，我们需要加上1，因为它在低端是包含的。如果不加1，那么当"),s("code",[n._v("mid == low")]),n._v("时，循环可能会永远继续下去，当"),s("code",[n._v("low + 1 == high")]),n._v("时就会发生这种情况。我们可以改变它，当"),s("code",[n._v("low")]),n._v("和"),s("code",[n._v("high")]),n._v("相差1时，循环退出，但这意味着我们需要在循环之后进行额外的检查，以确定是否在剩下的一个索引中找到键。在上面的公式中，这是不必要的，因为当"),s("code",[n._v("low == high")]),n._v("时，循环退出。但这意味着搜索范围内没有元素留下，因此没有找到键。这可以从循环不变量推导出来:")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("   invariant forall i ::\n               0 <= i < a.Length && !(low <= i < high) ==> a[i] != value\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br")])]),s("p",[n._v("当"),s("code",[n._v("low == high")]),n._v("时，含义的第一部分的否定条件总是为真(因为没有"),s("code",[n._v("i")]),n._v("可以至少或严格小于相同的值)。因此，不变量表示数组中的所有元素都不是键，第二个后置条件成立。正如您所看到的，在这段代码中很容易出现一个错误。有了这些不变量，"),s("code",[n._v("Dafny")]),n._v("不仅可以证明代码是正确的，而且我们自己也可以更容易地理解代码的操作。")]),n._v(" "),s("p",[s("strong",[n._v("练习15.")])]),n._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[n._v("点击查看题目及代码")]),n._v(" "),s("p",[n._v("修改"),s("code",[n._v("BinarySearch")]),n._v("函数体中的赋值，将"),s("code",[n._v("low")]),n._v("设置为"),s("code",[n._v("mid")]),n._v("，或将"),s("code",[n._v("high")]),n._v("设置为"),s("code",[n._v("mid - 1")]),n._v("。在每种情况下，哪里出了问题?")]),n._v(" "),s("div",{staticClass:"language-dafny line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("predicate sorted(a: array<int>)\n   requires a != null\n   reads a\n{\n   forall j, k :: 0 <= j < k < a.Length ==> a[j] <= a[k]\n}\nmethod BinarySearch(a: array<int>, value: int) returns (index: int)\n   requires a != null && 0 <= a.Length && sorted(a)\n   ensures 0 <= index ==> index < a.Length && a[index] == value\n   ensures index < 0 ==> forall k :: 0 <= k < a.Length ==> a[k] != value\n{\n   var low, high := 0, a.Length;\n   while low < high\n      invariant 0 <= low <= high <= a.Length\n      invariant forall i ::\n         0 <= i < a.Length && !(low <= i < high) ==> a[i] != value\n   {\n      var mid := (low + high) / 2;\n      if a[mid] < value\n      {\n         low := mid + 1;\n      }\n      else if value < a[mid]\n      {\n         high := mid;\n      }\n      else\n      {\n         return mid;\n      }\n   }\n   return -1;\n}\nmethod BinarySearch(a: array<int>, value: int) returns (index: int)\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br")])])]),n._v(" "),s("h2",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[n._v("#")])])])}),[],!1,null,null,null);a.default=i.exports}}]);