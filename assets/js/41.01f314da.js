(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{527:function(n,s,a){"use strict";a.r(s);var e=a(18),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[n._v("#")]),n._v(" 函数")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function abs(x: int): int\n{\n   ...\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br")])]),a("p",[n._v("这声明了一个名为' abs '的函数，它接受一个整数，并返回一个整数(第二个' int ')。与方法不同，方法的体中可以有各种各样的语句，函数体必须由一个正确类型的表达式组成。这里我们的body必须是一个整数表达式。为了实现绝对值函数，我们需要使用一个 ' if '表达式。' if '表达式类似于其他语言中的三元运算符。")]),n._v(" "),a("div",{staticClass:"language-dafny line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function abs(x: int): int\n{\n   if x < 0 then -x else x\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br")])]),a("p",[n._v("显然，条件必须是布尔表达式，两个分支必须具有相同的类型。您可能会想，如果与方法相比，函数的功能如此有限，为什么还会有人为函数费心呢?函数的强大之处在于它们可以直接在规范中使用。我们可以这样写:")]),n._v(" "),a("div",{staticClass:"language-dafny line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function abs(x: int): int\n{\n   if x < 0 then -x else x\n}\nmethod m()\n{\n   assert abs(3) == 3;\n}\n   assert abs(3) == 3;\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br")])]),a("p",[n._v("事实上，我们不仅可以直接编写这个语句而不捕获一个局部变量，甚至不需要编写方法中所做的所有后置条件(尽管函数通常可以并且确实有前置条件和后置条件)。正是函数的局限性让Dafny做到了这一点。与方法不同，在考虑其他函数时，Dafny不会忘记函数体。因此，它可以扩展上述断言中的“abs”的定义，并确定结果实际上是“3”。")]),n._v(" "),a("p",[a("strong",[n._v("练习4.")]),n._v(" "),a("em",[n._v("编写一个函数' max '，返回两个给定整数参数中较大的一个。使用' assert '编写测试方法，检查函数是否正确。")])]),n._v(" "),a("div",{staticClass:"language-dafny line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function max(a: int, b: int): int\n{\n   // Fill in an expression here.\n}\nmethod Testing() {\n  // Add assertions to check max here.\n}\nfunction max(a: int, b: int): int { ... }\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br")])]),a("p",[n._v("关于函数的一个警告是，它们不仅可以出现在注释中，而且只能出现在注释中。你不能这样写:")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("   var v := abs(3);\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br")])]),a("p",[n._v("因为这不是注释。函数从来不是最终编译的程序的一部分，它们只是帮助我们验证代码的工具。有时在实际代码中使用函数是很方便的，所以可以定义一个“函数方法”，它可以从实际代码中调用。请注意，对于哪些函数可以是函数方法有一些限制(详细信息请参阅参考资料)。")]),n._v(" "),a("p",[a("strong",[n._v("练习5.")]),n._v(" "),a("em",[n._v("将练习4中的测试方法更改为将' max '的值捕获到一个变量，然后使用该变量执行练习4中的检查。Dafny会拒绝这个程序，因为你正在从真正的代码中调用' max '。使用“函数方法”修复这个问题。")])]),n._v(" "),a("div",{staticClass:"language-dafny line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function max(a: int, b: int): int\n{\n   // Use your code from Exercise 4\n}\nmethod Testing() {\n  // Add assertions to check max here. Be sure to capture it to a local variable\n}\nfunction max(a: int, b: int): int { ... }\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br")])]),a("p",[a("strong",[n._v("练习6.")]),n._v(" "),a("em",[n._v("现在我们有了一个' abs '函数，改变' abs '方法的后置条件来使用' abs '。在确认该方法之后仍然进行验证，将' Abs '的主体更改为也使用' Abs '。(这样做之后，您将会意识到，使用一个方法来做与函数方法完全相同的事情并没有多大意义。)")])]),n._v(" "),a("div",{staticClass:"language-dafny line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function abs(x: int): int\n{\n   if x < 0 then -x else x\n}\nmethod Abs(x: int) returns (y: int)\n  // Use abs here, then confirm the method still verifies.\n{\n   // Then change this body to also use abs.\n   if x < 0 {\n      return -x;\n   } else {\n      return x;\n   }\n}\nfunction abs(x: int): int\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br")])]),a("p",[n._v("与方法不同，函数可以出现在表达式中。因此，我们可以做一些事情，比如实现数学斐波纳契函数:")]),n._v(" "),a("div",{staticClass:"language-dafny line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function fib(n: nat): nat\n{\n   if n == 0 then 0 else\n   if n == 1 then 1 else\n                  fib(n - 1) + fib(n - 2)\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br")])]),a("p",[n._v("这里我们使用“nat”，即自然数(非负整数)的类型，这通常比将所有内容都注释为非负更方便。我们可以把这个函数变成函数方法。但这将是非常缓慢的，因为这个版本的计算斐波纳契数具有指数复杂度。有很多更好的方法来计算斐波那契函数。但是这个函数仍然有用，因为我们可以让Dafny证明一个快速版本确实符合数学定义。我们可以两全其美:保证正确性和我们想要的性能。\n我们可以像下面这样定义一个方法:")]),n._v(" "),a("div",{staticClass:"language-dafny line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function fib(n: nat): nat\n{\n   if n == 0 then 0 else\n   if n == 1 then 1 else\n                  fib(n - 1) + fib(n - 2)\n}\nmethod ComputeFib(n: nat) returns (b: nat)\n   ensures b == fib(n)\n{\n   // ...\n}\nmethod ComputeFib(n: nat) returns (b: nat)\n   ensures b == fib(n)\n{\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br")])]),a("p",[n._v("我们还没有编写主体，所以Dafny会抱怨后置条件不成立。我们需要一个算法来计算第n个斐波那契数。其基本思想是保持一个计数器，并重复计算相邻的斐波那契数对，直到达到所需的数。为此，我们需要一个循环。在Dafny中，这是通过一个 ' while '循环完成的。while循环如下所示:")]),n._v(" "),a("div",{staticClass:"language-dafny line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("method m(n: nat)\n{\n   var i := 0;\n   while i < n\n   {\n      i := i + 1;\n   }\n}\n   var i := 0;\n   while i < n\n   {\n      i := i + 1;\n   }\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br")])]),a("p",[n._v("这是一个简单的循环，只增加' i '直到' n '。这将构成我们计算斐波那契数列的循环的核心。")])])}),[],!1,null,null,null);s.default=t.exports}}]);