(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{541:function(s,a,n){"use strict";n.r(a);var e=n(18),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"集合类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集合类型"}},[s._v("#")]),s._v(" 集合类型")]),s._v(" "),n("p",[s._v("值类型表示不依赖于堆状态的某些信息。这些值具有数学特性:一旦创建，就无法修改。比如在序列或者集合中，你不能像将数组更改索引那样更改集合。相反，要在"),n("code",[s._v("set")]),s._v("集合中插入元素，需要创建一个原始set集合和包含新元素的单例集的并集。当然，原始"),n("code",[s._v("set")]),s._v("集合还在。集合对堆的独立性使得值类型在规范中特别好用。")]),s._v(" "),n("p",[s._v("这并不是说你当有值类型在里面时不能更新集合。包含值类型的变量可以更新为同样值类型的新数值。而任何其他具有相同set集合的变量或字段将保持它们的旧值。值类型在超类"),n("code",[s._v("set<object>")]),s._v("中可以包含对堆的引用。在本例中，值类型中的信息是集合中的对象，而不依赖于存储在这些对象中的任何字段的值。而且，所有Dafny的值类型都可以存储在堆上的字段中，除了在规范中，还可以在实际代码中使用。Dafny的内建值类型有集合、序列、多集合和映射。")]),s._v(" "),n("p",[s._v("有关各种集合类型及其操作的完整指南，请参阅Dafny type system文档。注意，如果您想在执行程序中使用这些类型，并且还要考虑性能的话，请在编译时使用Dafny的/optimize选项。")]),s._v(" "),n("h2",{attrs:{id:"集合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集合"}},[s._v("#")]),s._v(" 集合")]),s._v(" "),n("p",[s._v("各种类型的集合构成了Dafny验证的核心工具之一。集合表示没有重复元素的无序集合。与序列一样，集合也是不可变的值类型。这使得它们可以很轻松地在不涉及堆的情况下在注释中使用，因为set一旦创建就无法修改。集合的类型为:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" set<int>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("例如，对于一组整数。通常，集合几乎可以是任何类型，包括对象。具体集合可以通过使用显示符号来指定:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method()\n{\n   var s1 := {}; // the empty set 空集\n   var s2 := {1, 2, 3}; // set contains exactly 1, 2, and 3 包含集合1,2,3\n   assert s2 == {1,1,2,3,3,3,3}; // same as before 跟上个一样\n   var s3, s4 := {1,2}, {1,4};// 平行赋值\n}\n  \n   var s1 := {}; // the empty set 空集\n   var s2 := {1, 2, 3}; // set contains exactly 1, 2, and 3 包含集合1,2,3\n   assert s2 == {1,1,2,3,3,3,3}; // same as before 跟上个一样\n   var s3, s4 := {1,2}, {1,4}; //平行赋值\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("例子演示中展示的"),n("code",[s._v("set")]),s._v("正是我们想要的：只包含指定元素。上面我们还看到为集合定义了相等符号，如果两个集合有完全相同的元素，那么它们就是相等的。也可以使用集合运算符从现有的集创建新的集:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m ()\n{\n   var s1 := {};\n   var s2 := {1, 2, 3};\n   var s3, s4 := {1,2}, {1,4};\n   assert s2 + s4 == {1,2,3,4}; // 集合相加 并集\n   assert s2 * s3 == {1,2} && s2 * s4 == {1}; // 集合相交 交集\n   assert s2 - s3 == {3}; // 集合相减 差集\n}\n\nassert s2 + s4 == {1,2,3,4}; // 集合相加 并集\nassert s2 * s3 == {1,2} && s2 * s4 == {1}; // 集合相交 交集\nassert s2 - s3 == {3}; // 集合相减 差集\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("注意，因为集合中的最多只有一个，不能重复。所以得到的并集只会记录一次重复元素。如果两个集合都是有限的，那么通过这些操作符将得到一个有限集，不能生成一个无限集。与算术运算符不同，集合运算符都是有属于自己的定义。除了通常的集合操作符外，还有一些比较操作符，它们一般具有以下含义:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   assert {1} <= {1, 2} && {1, 2} <= {1, 2}; // 子集\n   assert {} < {1, 2} && !({1} < {1}); //真子集\n   assert !({1, 2} <= {1, 4}) && !({1, 4} <= {1, 4}); // 无关集合\n   assert {1, 2} == {1, 2} && {1, 3} != {1, 2}; // 相等与不相等\n}\n\n   assert {1} <= {1, 2} && {1, 2} <= {1, 2}; // 子集\n   assert {} < {1, 2} && !({1} < {1}); // 真子集\n   assert !({1, 2} <= {1, 4}) && !({1, 4} <= {1, 4}); // 无关集合\n   assert {1, 2} == {1, 2} && {1, 3} != {1, 2}; // 相等与不相等\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("集合与序列一样，集合也支持in和!in操作符来测试元素的成员关系。例如:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   assert 5 in {1,3,4,5};\n   assert 1 in {1,3,4,5};\n   assert 2 !in {1,3,4,5};\n   assert forall x :: x !in {};\n}\t\n\n   assert 5 in {1,3,4,5};\n   assert 1 in {1,3,4,5};\n   assert 2 !in {1,3,4,5};\n   assert forall x :: x !in {};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("集合用于一些注释，包括读取和修改子句。在本例中，它们可以是特定对象类型的集合(如链表中的"),n("code",[s._v("Nodes")]),s._v(")，也可以是泛型引用类型对象的集合。尽管它的名字是这样的，但它可以指向任何对象或数组。这对于将函数或方法可能读取或写入的所有不同类型的位置捆绑在一起非常有用。\n在递减子句中使用时，集合"),n("code",[s._v("sets")]),s._v("按子集排序。这与仅按长度排序的序列"),n("code",[s._v("sequences")]),s._v("不同。为了在递减子句"),n("code",[s._v("decreases")]),s._v("中使用集合，连续值在某种意义上必须是“相关的”，这通常表示它们是递归计算。这个“相关”要求是因为在Dafny中，我们无法获得集合的基数(大小)。他的到大小是某个有限的自然数给出的，但它不可被访问。您可以通过将集合与空集合进行比较来测试它是否为空(当且仅当s没有元素时，s =={}为真)。\n创建集合的一个有用方法是使用"),n("code",[s._v("set comprehension")]),s._v("（包含集？）。通过将所有满足p(x)的T类型的x包含到f(x)中，它定义了一个新集合:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("   set x: T | p(x) :: f(x)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("它以一种让人想起全称量词("),n("code",[s._v("forall")]),s._v(")的方式来定义集合。与量词"),n("code",[s._v("quanifiers")]),s._v("相同的是，该类型通常可以推断出来。与量词相反，符号(|)将谓词(p)与变量(x)分离。返回的集合元素类型是f(x)集合的返回值类型。返回集合的值是f(x)的返回值：x本身只充当p和函数f之间的桥梁。它通常具有与返回集相同的数值类型，但也不一定。")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   assert (set x | x in {0,1,2} :: x * 1) == {0,1,2};\n}\n\n   assert (set x | x in {0,1,2} :: x * 1) == {0,1,2};// assertion violation\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("如果函数是恒等式，那么能以很优美的形式写出表达式")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   assert (set x | x in {0,1,2,3,4,5} && x < 3) == {0,1,2};\n}\n\n   assert (set x | x in {0,1,2,3,4,5} && x < 3) == {0,1,2};//对的\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("一般的集合推导中的非恒等函数容易混淆Dafny。例如，以下式子是正确的，但Dafny无法证明它:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   assert (set x | x in {0,1,2} :: x + 1) == {1,2,3};\n}\n   assert (set x | x in {0,1,2} :: x + 1) == {1,2,3};// assertion violation\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("这种写法有可能创建无限集，这在Dafny中是不允许的。为了防止这种情况发生，Dafny使用启发式方法试图证明结果集是有限的。当创建整数集时，可以通过将整数限定在谓词的至少一个子句中(类似于"),n("code",[s._v("0 <= x < n")]),s._v(")来实现,就写在双冒号::前面就行。要求限定变量在现有的集合中也可以，如上面的"),n("code",[s._v("x in {0,1,2}")]),s._v("。这只在包含部分与谓词的其余部分连接(&&等)时起作用，因为它需要限制要考虑的可能值。")]),s._v(" "),n("h2",{attrs:{id:"序列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#序列"}},[s._v("#")]),s._v(" 序列")]),s._v(" "),n("p",[s._v("序列是一种表示有序列表的Dafny内置数据类型。它们可以用来表示许多有序集合，包括列表、队列、堆栈等。序列是一种不可变的值类型:它们一旦创建就不能被修改。从这个意义上说，它们类似于Java和Python等语言中的string字符串，只是它们可以是任意类型的序列，而不仅仅是字符。序列类型如下:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("seq<int>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("例如，对于一个整数序列。(注意，在Dafny中有一个已知的错误，它阻止你创建自然的序列"),n("code",[s._v("nat")]),s._v("。)例如，这个函数将一个序列作为传入参数:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("predicate sorted(s: seq<int>)\n{\n   forall i,j :: 0 <= i < j < |s| ==> s[i] <= s[j]\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("序列的长度写成|s|，如上量词所示。使用与数组相同的方括号语法访问序列的特定元素。注意，该函数不需要读取子句来访问序列。这是因为序列不是存储在堆上的;它们是值，因此函数在访问它们时不需要声明。序列最强大的属性是注释"),n("code",[s._v("annotations")]),s._v("和函数"),n("code",[s._v("functions")]),s._v("可以创建和操作序列。例如，另一种表示排序性的方法是递归:如果第一个元素比其他元素小，而其余元素都已排序，则整个数组都已排序:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("predicate sorted2(s: seq<int>)\n{\n   0 < |s| ==> (forall i :: 0 < i < |s| ==> s[0] <= s[i]) &&\n               sorted2(s[1..])\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("code",[s._v("s[1..]")]),s._v("是将序列切片。它的意思是从第一个元素开始，取元素直到序列末尾。这不会修改s序列，因为序列是不可变的。相反，它创建了一个新的序列，除了第一个元素之外，所有元素都按相同的顺序排列。这类似于整数的加法，因为原始值没有改变，只是创建了新的值。切片表示为:"),n("code",[s._v("s[i..j]")])]),s._v(" "),n("p",[s._v("也就是在"),n("code",[s._v("0 <= i <= j <= |s|")]),s._v("中Dafny将强制执行这些索引边界。最终序列将恰好有"),n("code",[s._v("j-i")]),s._v("个元素，并且将从元素"),n("code",[s._v("s[i]")]),s._v("开始，如果结果非空，则将连续地遍历序列。这意味着索引j处的元素被排除在切片之外，这反映了用于常规索引的相同的半开区间。\n序列也可以使"),n("code",[s._v("display")]),s._v("注释从自己的元素中构造:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  var s := [1, 2, 3];\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("在这里，我们在一些命令式代码中有一个整数序列变量，其中包含元素1、2和3。这里使用了类型推断得知序列是其中的一些整数。这种表示法允许我们构造空序列和单例序列:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" [] //空序列，可以成为任何类型\n [true] // bool类型的单例序列\t\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("切片表示法"),n("code",[s._v("slice notation")]),s._v("和显示表示法"),n("code",[s._v("display notation")]),s._v("可以用来检查序列的属性:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   var s := [1, 2, 3, 4, 5];\n   assert s[|s|-1] == 5; //访问序列最后一个元素\n   assert s[|s|-1..|s|] == [5]; //切片最后一个元素作为单例序列\n   assert s[1..] == [2, 3, 4, 5]; // 除了第一个元素的序列\n   assert s[..|s|-1] == [1, 2, 3, 4]; // 除了最后一个元素的序列\n   assert s == s[0..] == s[..|s|] == s[0..|s|]; // 整个序列\n}\n\n   var s := [1, 2, 3, 4, 5];\n   assert s[|s|-1] == 5; //access the last element\n   assert s[|s|-1..|s|] == [5]; //slice just the last element, as a singleton\n   assert s[1..] == [2, 3, 4, 5]; // everything but the first\n   assert s[..|s|-1] == [1, 2, 3, 4]; // everything but the last\n   assert s == s[0..] == s[..|s|] == s[0..|s|] == s[..]; // the whole sequence\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("到目前为止，对序列最常见的操作是获取第一个和最后一个元素，以及获取除第一个和最后一个元素以外的所有元素，因为这些通常用于递归函数，如上面的"),n("code",[s._v("sorted2")]),s._v("。除了通过访问或切片来解构序列外，序列还可以使用加号(+)进行连接:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   var s := [1, 2, 3, 4, 5];\n   assert [1,2,3] == [1] + [2,3];\n   assert s == s + [];\n   assert forall i :: 0 <= i <= |s| ==> s == s[..i] + s[i..];\n}\n   assert [1,2,3] == [1] + [2,3];\n   assert s == s + [];\n   assert forall i :: 0 <= i <= |s| ==> s == s[..i] + s[i..];\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("第二个断言给出了连接和切片之间的关系。因为切片操作在一边是排他的，在另一边是包含的，所以元素在连接中只出现一次。注意，连接操作是有关联的:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   assert forall a: seq<int>, b: seq<int>, c: seq<int> ::\n      (a + b) + c == a + (b + c);\n}\n   assert forall a: seq<int>, b: seq<int>, c: seq<int> ::\n      (a + b) + c == a + (b + c);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("但是Z3定理证明者不会意识到这一点，除非它被一个声明事实的断言提示(关于为什么这是必要的更多信息，请参阅引理/归纳法)。")]),s._v(" "),n("p",[s._v("序列还支持in和!in操作符，用于测试序列中的包含情况:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   var s := [1, 2, 3, 4, 5];\n   assert 5 in s;\n   assert 0 !in s;\n}\n   assert 5 in s; // using s from before\n   assert 0 !in s;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("这还允许我们在不关心索引的情况下，对序列中的元素进行量化。例如，我们可以要求一个序列只包含该序列的下标元素:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   var p := [2,3,1,0];\n   assert forall i :: i in p ==> 0 <= i < |s|;\n}\n   var p := [2,3,1,0];\n   assert forall i :: i in p ==> 0 <= i < |s|;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("这是序列中每个单独元素的属性。如果我们想让多个元素相互关联，就需要量化指标，如第一个例子所示。\n有时我们想使用序列来模拟数组的可更新特性。虽然我们不能改变原来的序列，但我们可以创建一个新序列，其中除了更新的元素外，所有元素都是相同的:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   var s := [1,2,3,4];\n   assert s[2 := 6] == [1,2,6,4];\n}\n   s[i := v] // replace index i by v in seq s\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("当然，下标i必须是数组的下标。这个语法只是可以通过常规切片和访问操作完成的操作符的快捷方式。你能填写下面的代码吗?")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function update(s: seq<int>, i: int, v: int): seq<int>\n   requires 0 <= index < |s|\n   ensures update(s, i, v) == s[i := v]\n{\n   s[..i] + [v] + s[i+1..]\n   // This works by concatenating everything that doesn't\n   // change with the singleton of the new value.\n}\nfunction update(s: seq<int>, i: int, v: int): seq<int>\n   requires 0 <= index < |s|\n   ensures update(s, i, v) == s[i := v]\n{\n   // open in the editor to see the answer.\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("你也可以用数组的元素组成一个序列。这是使用与上面相同的“"),n("code",[s._v("slice")]),s._v("”表示法完成的:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   var a := new int[3]; // 3 element array of ints\n   a[0], a[1], a[2] := 0, 3, -1;\n   var s := a[..];\n   assert s == [0, 3, -1];\n}\n   var a := new int[3]; // 3 element array of ints\n   a[0], a[1], a[2] := 0, 3, -1;\n   var s := a[..];\n   assert s == [0, 3, -1];\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("为了获得数组的一部分，可以像常规切片操作一样给出边界:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   var a := new int[3]; // 3 element array of ints\n   a[0], a[1], a[2] := 0, 3, -1;\n   assert a[1..] == [3, -1];\n   assert a[..1] == [0];\n   assert a[1..2] == [3];\n}\n   assert a[1..] == [3, -1];\n   assert a[..1] == [0];\n   assert a[1..2] == [3];\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v('因为序列支持in和!in，这个操作为我们提供了一种简单的方法来表达" '),n("code",[s._v("element not in array")]),s._v(' "属性，即将下面这个:'),n("code",[s._v("forall k :: 0 <= k < a.Length ==> elem != a[k]")]),s._v("\n转化为："),n("code",[s._v("elem !in a[..]")])]),s._v(" "),n("p",[s._v("此外，边界很容易包括:"),n("code",[s._v("forall k :: 0 <= k < i ==> elem != a[k]")]),s._v("\n和这个一样"),n("code",[s._v("elem !in a[..i]")])]),s._v(" "),n("h2",{attrs:{id:"多重集合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多重集合"}},[s._v("#")]),s._v(" 多重集合")]),s._v(" "),n("p",[s._v("多重集合几乎在所有方面都与集合相似，除了它们跟踪每个元素的拷贝数。这使得它们在存储数组中的元素集合时特别有用，例如，当每个元素的拷贝数量相同时。"),n("code",[s._v("multiset")]),s._v("类型几乎与"),n("code",[s._v("set")]),s._v("类型相同:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("   multiset<int>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("类似地，要给出一个multiset字面值，你要写花括号，除非前面有multiset关键字:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  multiset{3,5,7,3}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("小心"),n("code",[s._v("!Multiset({3,3})")]),s._v("不是带有两个3的多集和字面值。大括号必须与关键字相邻，以使其如期望那样运行。")]),s._v(" "),n("p",[s._v("和集合一样，多集合也是无序的。然而，因为它们跟踪每个元素的数量，上面的文字实际上有两个3。")]),s._v(" "),n("p",[s._v("在集合上定义的许多操作也可用于多集合。您可以使用in来测试某个元素是否在"),n("code",[s._v("multiset")]),s._v("中(in表示它至少具有给定值的一个成员)。多集并集(+)意味着从两者中取元素，并将它们相加。如果一个多集有两个3而另一个有一个3，那么它们的多集并集就会有三个3。多集差异(-)的工作原理类似，因为元素的双重性(即每个元素在多集中有多少个)很重要。所以以下:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method test()\n{\n   assert (multiset{1,1,1} - multiset{1,1}) == multiset{1};\n}\n  assert (multiset{1,1,1} - multiset{1,1}) == multiset{1};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("成立，因为我们开始有三个1，然后拿走两个，剩下一个。\n"),n("code",[s._v("Multiset disjoint")]),s._v("(!!)按预期工作，当且仅当两个多集没有共同成员时为真。同样，如果两个多集的每个元素的计数完全相同，那么它们是相等的。\n最后，通过使用带括号的"),n("code",[s._v("multiset")]),s._v("可以从序列和集合中创建多集:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method test()\n{\n   assert multiset([1,1]) == multiset{1,1};\n   assert multiset({1,1}) == multiset{1};\n}\n  assert multiset([1,1]) == multiset{1,1};\n  assert multiset({1,1}) == multiset{1};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("这两个断言都是正确的，因为序列的"),n("code",[s._v("multiset")]),s._v("分别考虑每个元素，而"),n("code",[s._v("set")]),s._v("最多只考虑每个元素中的一个。Dafny允许您编写{1,1}，但这与{1}相同，因为重复的代码会被忽略。因此，当从一个集合生成一个多集合时，多集合中的每个元素都将具有精确的双重性。从序列生成多集特别有用，因为当与数组切片结合时，允许您讨论数组中的元素集(如"),n("code",[s._v("multiset(a[..])")]),s._v(")，这对验证排序算法和一些数据结构非常有帮助。")]),s._v(" "),n("h2",{attrs:{id:"映射"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#映射"}},[s._v("#")]),s._v(" 映射")]),s._v(" "),n("p",[s._v("Dafny中的映射表示关联数组。与目前为止的其他类型不同，它们有两种类型:键类型和值类型。可以根据键检索或查找值。映射类型如下:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  map<U, V>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("其中U是键类型，V是值类型。例如，我们可以有一个从整数到整数的映射"),n("code",[s._v("map<int, int>")]),s._v("。这种类型的字面值可能是"),n("code",[s._v("map[4 := 5, 5 := 6]")]),s._v("。这张地图把4和5联系起来，把5和6联系起来。您可以使用"),n("code",[s._v("m[key]")]),s._v("访问给定键的值，如果"),n("code",[s._v("m")]),s._v("是一个"),n("code",[s._v("map")]),s._v("而"),n("code",[s._v("key")]),s._v("是一个键。所以我们可以这样写:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method test() {\n  var m := map[4 := 5, 5 := 6];\n  assert m[4] == 5;\n}\n var m := map[4 := 5, 5 := 6];\n  assert m[4] == 5;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("这是因为4作为m的键值，会产生5。我们还知道"),n("code",[s._v("m[5] == 6")]),s._v("，因为这是另一个映射。\n每个映射都有一个域，域是该映射具有值的所有键。向地图请求其域外的键是不正确的。所以"),n("code",[s._v("m[7]")]),s._v("没有任何意义，因为m没有给7定义任何值。要测试一个键是否在映射的域中，可以使用in操作符。例如，4在m中，5在m中，但是7 不在m中。有了量词，你可以说定义域是某个集合，如"),n("code",[s._v("forall i :: i in m <==> 0 <= i < 100")]),s._v("(当m的定义域恰好是数字0-99时，结果为真)。另外，如果两个映射的域作为集合是不相交的，那么它们就是不相交的(!!)\n如果m是一个map，那么"),n("code",[s._v("m[i:= j]")]),s._v("是一个新的map，它是将i加到m的域中，然后将键i与值j关联起来的结果。如果i已经有一个值，那么它将在新的map中被覆盖。这也意味着当使用map字面值时，允许重复一个键，但随后第一个值将被重写。所以"),n("code",[s._v("map[3 := 5, 3 := 4] == map[3 := 4]")]),s._v("。注意，如果两个映射具有相同的域，则它们是相等的，并且它们将相同的键映射为相同的值。同样，映射的域必须总是有限的。\n像集合一样，map有map的"),n("code",[s._v("comprehension")]),s._v("。语法几乎和set一样:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("map i: T | p(i) :: f(i)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("区别在于，i是键，它被映射到"),n("code",[s._v("f(i)")]),s._v(","),n("code",[s._v("P(i)")]),s._v("用来确定新映射的定义域是什么。所以:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method test() {\n  var m := map i | 0 <= i < 10 :: 2*i;\n}\n  map i | 0 <= i < 10 :: 2*i\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("就是把0-9的数字变成双打数字的地图。这也是从映射中删除键的方法。例如，这个表达式将键3从一个"),n("code",[s._v("int")]),s._v("到"),n("code",[s._v("int")]),s._v("的映射m中删除:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method test() {\n  var m := map[3 := 5, 4 := 6, 1 := 4];\n  var l := map i | i in m && i != 3 :: m[i];\n  assert l == map[4:= 6, 1 := 4];\n}\n  map i | i in m && i != 3 :: m[i]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);