window.ydoc_plugin_search_json = {
  "文档": [
    {
      "title": "ydoc",
      "content": "This is home page of documents book.",
      "url": "/documents/index.html",
      "children": []
    },
    {
      "title": "Installation",
      "content": "...",
      "url": "/documents/installation.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/intro.html",
      "children": [
        {
          "title": "1. 内容简介",
          "url": "/documents/intro.html#1.-内容简介",
          "content": "1. 内容简介本书全面介绍 JavaScript 核心语法，从最简单的开始讲起，循序渐进、由浅入深，力求清晰易懂。所有章节都带有大量的代码实例，便于理解和模仿，可以用到实际项目中，即学即用。本书适合初学者当作 JavaScript 语言的入门教程，也适合当作日常使用的参考手册。"
        },
        {
          "title": "2. 自序",
          "url": "/documents/intro.html#2.-自序",
          "content": "2. 自序我想写这本书，主要原因是自己需要。编程时，往往需要查阅资料，确定准确用法。理想的 JavaScript 参考书，应该简明易懂，一目了然，告诉我有哪些注意点，提供代码范例。如果涉及重要概念，还应该适当讲解。可是大多数时候，现实都不是如此。找到的资料冗长难懂，抓不住重点，有时还很陈旧，跟不上语言标准和浏览器的快速发展，且大多数是英文资料。学习过程中，我做了很多 JavaScript 笔记。多年累积，数量相当庞大。遇到问题，我首先查自己的笔记，如果笔记里没有，再到网上查，最后回过头把笔记补全。终于有一天，我意识到可以把笔记做成书，这就是这本书的由来。正因为脱胎于笔记，这本教程跟其他 JavaScript 书籍有所不同。作为教程，本书对所有重要概念都进行了讲解，努力把复杂的问题讲得简单，希望一两分钟内就能抓住重点。本书还可以作为参考手册，罗列了主要用法和各种 API 接口，并给出可以立即运行的代码。所有章节按照语言的 API 编排，方便以后的查阅。如果你发现某处出现陌生的新概念，请不要担心，可以继续阅读下去。以后查阅这些章节的时候，你会发现很方便找到某个知识点相关的所有内容。"
        },
        {
          "title": "3. 什么是 JavaScript 语言？",
          "url": "/documents/intro.html#3.-什么是-javascript-语言？",
          "content": "3. 什么是 JavaScript 语言？JavaScript 是一种轻量级的脚本语言。所谓“脚本语言”，指的是它不具备开发操作系统的能力，而是只用来编写控制其他大型应用程序的“脚本”。JavaScript 是一种嵌入式（embedded）语言。它本身提供的核心语法不算很多，只能用来做一些数学和逻辑运算。JavaScript 本身不提供任何与 I/O（输入/输出）相关的 API，都要靠宿主环境（host）提供，所以 JavaScript 只合适嵌入更大型的应用程序环境，去调用宿主环境提供的底层 API。目前，已经嵌入 JavaScript 的宿主环境有多种，最常见的环境就是浏览器，另外还有服务器环境，也就是 Node 项目。从语法角度看，JavaScript语言是一种“对象模型”语言。各种宿主环境通过这个模型，描述自己的功能和操作接口，从而通过 JavaScript 控制这些功能。但是，JavaScript 并不是纯粹的“面向对象语言”，还支持其他编程范式（比如函数式编程）。这导致几乎任何一个问题，JavaScript 都有多种解决方法。阅读本书的过程中，你会震惊地发现，JavaScript 语法是多么的灵活。JavaScript 的核心语法部分相当精简，只包括两个部分：基本的语法构造（比如操作符、控制结构、语句）和标准库（就是一系列具有各种功能的对象比如Array、Date、Math等）。除此之外，各种宿主环境提供额外的 API（即只能在该环境使用的接口），以便 JavaScript 调用。以浏览器为例，它提供的额外 API 可以分成三大类。\n浏览器控制类：操作浏览器\nDOM 类：操作网页的各种元素\nWeb 类：实现互联网的各种功能\n\n如果宿主环境是服务器，则会提供各种操作系统的 API，比如文件操作 API、网络通信 API等等。这些你都可以在 Node 环境中找到。本书主要介绍 JavaScript 核心语法和浏览器网页开发的基本知识，不涉及 Node。全书可以分成以下四大部分。\n基本语法\n标准库\n浏览器 API\nDOM\n\nJavaScript 语言有多个版本。本书的内容基于 ECMAScript 5.1 版本，这是最普遍支持的版本，也是学习 JavaScript 的基础。ES6 和更新的语法请参考我写的《ECMAScript 6入门》。"
        },
        {
          "title": "4. 为什么学习 JavaScript？",
          "url": "/documents/intro.html#4.-为什么学习-javascript？",
          "content": "4. 为什么学习 JavaScript？JavaScript 语言有一些显著特点，使得它非常值得学习。它既适合作为学习编程的入门语言，也适合当作日常开发的工作语言。它是目前最有希望、前途最光明的计算机语言之一。"
        },
        {
          "title": "4.1 操控浏览器的能力",
          "url": "/documents/intro.html#4.-为什么学习-javascript？-4.1-操控浏览器的能力",
          "content": "4.1 操控浏览器的能力JavaScript 的发明目的，就是作为浏览器的内置脚本语言，为网页开发者提供操控浏览器的能力。它是目前唯一一种通用的浏览器脚本语言，所有浏览器都支持。它可以让网页呈现各种特殊效果，为用户提供良好的互动体验。目前，全世界几乎所有网页都使用 JavaScript。如果不用，网站的易用性和使用效率将大打折扣，无法成为操作便利、对用户友好的网站。对于一个互联网开发者来说，如果你想提供漂亮的网页、令用户满意的上网体验、各种基于浏览器的便捷功能、前后端之间紧密高效的联系，JavaScript 是必不可少的工具。"
        },
        {
          "title": "4.2 广泛的使用领域",
          "url": "/documents/intro.html#4.-为什么学习-javascript？-4.2-广泛的使用领域",
          "content": "4.2 广泛的使用领域近年来，JavaScript 的使用范围，慢慢超越了浏览器，正在向通用的系统语言发展。（1）浏览器的平台化随着 HTML5 的出现，浏览器本身的功能越来越强，不再仅仅能浏览网页，而是越来越像一个平台，JavaScript 因此得以调用许多系统功能，比如操作本地文件、操作图片、调用摄像头和麦克风等等。这使得 JavaScript 可以完成许多以前无法想象的事情。（2）NodeNode 项目使得 JavaScript 可以用于开发服务器端的大型项目，网站的前后端都用 JavaScript 开发已经成为了现实。有些嵌入式平台（Raspberry Pi）能够安装 Node，于是 JavaScript 就能为这些平台开发应用程序。（3）数据库操作JavaScript 甚至也可以用来操作数据库。NoSQL 数据库这个概念，本身就是在 JSON（JavaScript Object Notation，JavaScript 对象表示法）格式的基础上诞生的，大部分 NoSQL 数据库允许 JavaScript 直接操作。基于 SQL 语言的开源数据库 PostgreSQL 支持 JavaScript 作为操作语言，可以部分取代 SQL 查询语言。（4）跨移动平台JavaScript 也正在成为手机应用的开发语言。一般来说，安卓平台使用 Java 语言开发，iOS 平台使用 Objective-C 或 Swift 语言开发。许多人正在努力，让 JavaScript 成为各个平台的通用开发语言。PhoneGap 项目就是将 JavaScript 和 HTML5 打包在一个容器之中，使得它能同时在 iOS 和安卓上运行。Facebook 公司的 React Native 项目则是将 JavaScript 写的组件，编译成原生组件，从而使它们具备优秀的性能。Mozilla 基金会的手机操作系统 Firefox OS，更是直接将 JavaScript 作为操作系统的平台语言。（5）内嵌脚本语言越来越多的应用程序，将 JavaScript 作为内嵌的脚本语言，比如 Adobe 公司的著名 PDF 阅读器 Acrobat、Linux 桌面环境 GNOME 3。（6）跨平台的桌面应用程序Chromium OS、Windows 8 等操作系统直接支持 JavaScript 编写应用程序。Mozilla 的 Open Web Apps 项目、Google 的 Chrome App 项目、Github 的 Electron 项目、以及 TideSDK 项目，都可以用来编写运行于 Windows、Mac OS 和 Android 等多个桌面平台的程序，不依赖浏览器。（7）小结可以预期，JavaScript最终将能让你只用一种语言，就开发出适应不同平台（包括桌面端、服务器端、手机端）的程序。早在2013年9月的统计之中，JavaScript 就是当年 Github 上使用量排名第一的语言。著名程序员 Jeff Atwood 甚至提出了一条 “Atwood 定律”：“所有可以用 JavaScript 编写的程序，最终都会出现 JavaScript 的版本。”(Any application that can be written in JavaScript will eventually be written in JavaScript.)\n"
        },
        {
          "title": "4.3 易学性",
          "url": "/documents/intro.html#4.-为什么学习-javascript？-4.3-易学性",
          "content": "4.3 易学性相比学习其他语言，学习 JavaScript 有一些有利条件。（1）学习环境无处不在只要有浏览器，就能运行JavaScript程序；只要有文本编辑器，就能编写JavaScript程序。这意味着，几乎所有电脑都原生提供JavaScript学习环境，不用另行安装复杂的IDE（集成开发环境）和编译器。（2）简单性相比其他脚本语言（比如 Python 或 Ruby），JavaScript 的语法相对简单一些，本身的语法特性并不是特别多。而且，那些语法中的复杂部分，也不是必需要学会。你完全可以只用简单命令，完成大部分的操作。（3）与主流语言的相似性JavaScript 的语法很类似 C/C++ 和 Java，如果学过这些语言（事实上大多数学校都教），JavaScript 的入门会非常容易。必须说明的是，虽然核心语法不难，但是 JavaScript 的复杂性体现在另外两个方面。首先，它涉及大量的外部 API。JavaScript 要发挥作用，必须与其他组件配合，这些外部组件五花八门，数量极其庞大，几乎涉及网络应用的各个方面，掌握它们绝非易事。其次，JavaScript 语言有一些设计缺陷。某些地方相当不合理，另一些地方则会出现怪异的运行结果。学习 JavaScript，很大一部分时间是用来搞清楚哪些地方有陷阱。Douglas Crockford 写过一本有名的书，名字就叫《JavaScript: The Good Parts》，言下之意就是这门语言不好的地方很多，必须写一本书才能讲清楚。另外一些程序员则感到，为了更合理地编写 JavaScript 程序，就不能用 JavaScript 来写，而必须发明新的语言，比如 CoffeeScript、TypeScript、Dart 这些新语言的发明目的，多多少少都有这个因素。尽管如此，目前看来，JavaScript 的地位还是无法动摇。加之，语言标准的快速进化，使得 JavaScript 功能日益增强，而语法缺陷和怪异之处得到了弥补。所以，JavaScript 还是值得学习，况且它的入门真的不难。"
        },
        {
          "title": "4.4 强大的性能",
          "url": "/documents/intro.html#4.-为什么学习-javascript？-4.4-强大的性能",
          "content": "4.4 强大的性能JavaScript 的性能优势体现在以下方面。（1）灵活的语法，表达力强。JavaScript 既支持类似 C 语言清晰的过程式编程，也支持灵活的函数式编程。可以用来写并发处理（concurrent）。这些语法特性已经被证明非常强大，可以用于许多场合，尤其适用异步编程。JavaScript 的所有值都是对象，这为程序员提供了灵活性和便利性。因为你可以很方便地、按照需要随时创造数据结构，不用进行麻烦的预定义。JavaScript 的标准还在快速进化中，并不断合理化，并添加更适用的语法特性。（2）支持编译运行。JavaScript 语言本身，虽然是一种解释型语言，但是在现代浏览器中，JavaScript 都是编译后运行。程序会被高度优化，运行效率接近二进制程序。而且，JavaScript 引擎正在快速发展，性能将越来越好。（3）事件驱动和非阻塞式设计。JavaScript 程序可以采用事件驱动（event-driven）和非阻塞式（non-blocking）设计，在服务器端适合高并发环境，普通的硬件就可以承受很大的访问量。"
        },
        {
          "title": "4.5 开放性",
          "url": "/documents/intro.html#4.-为什么学习-javascript？-4.5-开放性",
          "content": "4.5 开放性JavaScript 是一种开放的语言。它的标准 ECMA-262 是 ISO 国际标准，写得非常详尽明确；该标准的主要实现（比如 V8 和 SpiderMonkey 引擎）都是开放的，而且质量很高。这保证了这门语言不属于任何公司或个人，不存在版权和专利的问题。语言标准由 TC39 委员会负责制定，该委员会的运作是透明的，所有讨论都是开放的，会议记录都会对外公布。不同公司的 JavaScript 运行环境，兼容性很好，程序不做调整或只做很小的调整，就能在所有浏览器上运行。"
        },
        {
          "title": "4.6 社区支持和就业机会",
          "url": "/documents/intro.html#4.-为什么学习-javascript？-4.6-社区支持和就业机会",
          "content": "4.6 社区支持和就业机会全世界程序员都在使用 JavaScript，它有着极大的社区、广泛的文献和图书、丰富的代码资源。绝大部分你需要用到的功能，都有多个开源函数库可供选用。作为项目负责人，你不难招聘到数量众多的 JavaScript 程序员；作为开发者，你也不难找到一份 JavaScript 的工作。"
        },
        {
          "title": "5. 实验环境",
          "url": "/documents/intro.html#5.-实验环境",
          "content": "5. 实验环境JavaScript 的上手非常方便，只要电脑安装了浏览器，就可以用来实验了。只要打开 Chrome 浏览器的“开发者工具”（Developer Tools），就可以在它的“控制台”（console）运行 JavaScript 代码。进入“控制台”，有两种方法。\n快捷键。在 Chrome 浏览器中，直接按Option + Command + J（Mac）或者Ctrl + Shift + J（Windows / Linux）。\n\n\n菜单。从“工具”（Tools）菜单中打开“开发者工具”，然后点击 Console 选项卡。“开发者工具”的快捷键是 F12，或者Option + Command + I（Mac）以及Ctrl + Shift + I（Windows / Linux）。\n\n进入控制台以后，就可以在提示符后输入代码，然后按Enter键，代码就会执行。如果按Shift + Enter键，就是代码换行，不会触发执行。建议阅读本教程时，将代码复制到控制台进行实验。将下面的程序复制到“控制台”，按下回车后，就可以看到运行结果。function greetMe(yourName) {  console.log('Hello ' + yourName);\n}\n\ngreetMe('World')\n// Hello World\n"
        },
        {
          "title": "6. 许可证",
          "url": "/documents/intro.html#6.-许可证",
          "content": "6. 许可证本教程采用创意共享“署名—非商业性使用”许可证（Creative Commons Attribution-NonCommercial license）。所有内容不仅可以免费阅读，还可以自由使用（比如转载），只需遵守两个条件：\n署名：必须保留原作者的署名。\n\n\n非商业性使用：除非得到正式许可，否则不得用于商业目的。\n\n事实上，你还可以得到这本教程的源码。它就放在Github上，欢迎克隆和提交Pull Request。"
        },
        {
          "title": "7. 参考书目",
          "url": "/documents/intro.html#7.-参考书目",
          "content": "7. 参考书目写作过程中，我参考了以下书籍（排名不分先后）。Nicholas C. Zakas, Professional JavaScript for Web Developers, 3 edition, Wrox, 2012\nAxel Rauschmayer, The Past, Present, and Future of JavaScript, O’Reilly, 2012\nCody Lindley, JavaScript Enlightenment, O’Reilly, 2012\nCody Lindley, DOM Enlightenment, O’Reilly, 2013\nRebecca Murphey, jQuery Fundamentals, 2011\nAaron Frost, JS.next: A Manager’s Guide, O’Reilly, 2013\nJohn Resig, Bear Bibeault, Secrets of the JavaScript Ninja, Manning, 2012\nEric Elliott, Programming JavaScript Applications, O’Reilly, 2013\n邱俊涛, JavaScript核心概念及实践，人民邮电出版社，2013\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/history.html",
      "children": [
        {
          "title": "1. JavaScript的诞生",
          "url": "/documents/history.html#1.-javascript的诞生",
          "content": "1. JavaScript的诞生JavaScript 因为互联网而生，紧随着浏览器的出现而问世。回顾它的历史，就要从浏览器的历史讲起。1990年底，欧洲核能研究组织（CERN）科学家Tim Berners-Lee，在全世界最大的电脑网络——互联网的基础上，发明了万维网（World Wide Web），从此可以在网上浏览网页文件。最早的网页只能在操作系统的终端里浏览，也就是说只能使用命令行操作，网页都是在字符窗口中显示，这当然非常不方便。1992年底，美国国家超级电脑应用中心（NCSA）开始开发一个独立的浏览器，叫做Mosaic。这是人类历史上第一个浏览器，从此网页可以在图形界面的窗口浏览。1994年10月，NCSA的一个主要程序员Marc Andreessen联合风险投资家Jim Clark，成立了Mosaic通信公司（Mosaic Communications），不久后改名为Netscape。这家公司的方向，就是在Mosaic的基础上，开发面向普通用户的新一代的浏览器Netscape Navigator。1994年12月，Navigator发布了1.0版，市场份额一举超过90%。Netscape 公司很快发现，Navigator浏览器需要一种可以嵌入网页的脚本语言，用来控制浏览器行为。当时，网速很慢而且上网费很贵，有些操作不宜在服务器端完成。比如，如果用户忘记填写“用户名”，就点了“发送”按钮，到服务器再发现这一点就有点太晚了，最好能在用户发出数据之前，就告诉用户“请填写用户名”。这就需要在网页中嵌入小程序，让浏览器检查每一栏是否都填写了。管理层对这种浏览器脚本语言的设想是：功能不需要太强，语法较为简单，容易学习和部署。那一年，正逢Sun公司的Java语言问世，市场推广活动非常成功。Netscape公司决定与Sun公司合作，浏览器支持嵌入Java小程序（后来称为Java applet）。但是，浏览器脚本语言是否就选用Java，则存在争论。后来，还是决定不使用Java，因为网页小程序不需要Java这么“重”的语法。但是，同时也决定脚本语言的语法要接近Java，并且可以支持Java程序。这些设想直接排除了使用现存语言，比如Perl、Python和TCL。1995年，Netscape公司雇佣了程序员Brendan Eich开发这种网页脚本语言。Brendan Eich有很强的函数式编程背景，希望以Scheme语言（函数式语言鼻祖LISP语言的一种方言）为蓝本，实现这种新语言。1995年5月，Brendan Eich只用了10天，就设计完成了这种语言的第一版。它是一个大杂烩，语法有多个来源：基本语法：借鉴C语言和Java语言。\n数据结构：借鉴Java语言，包括将值分成原始值和对象两大类。\n函数的用法：借鉴Scheme语言和Awk语言，将函数当作第一等公民，并引入闭包。\n原型继承模型：借鉴Self语言（Smalltalk的一种变种）。\n正则表达式：借鉴Perl语言。\n字符串和数组处理：借鉴Python语言。\n为了保持简单，这种脚本语言缺少一些关键的功能，比如块级作用域、模块、子类型（subtyping）等等，但是可以利用现有功能找出解决办法。这种功能的不足，直接导致了后来JavaScript的一个显著特点：对于其他语言，你需要学习语言的各种功能，而对于JavaScript，你常常需要学习各种解决问题的模式。而且由于来源多样，从一开始就注定，JavaScript的编程风格是函数式编程和面向对象编程的一种混合体。Netscape 公司的这种浏览器脚本语言，最初名字叫做 Mocha，1995年9月改为LiveScript。12月，Netscape公司与Sun公司（Java语言的发明者和所有者）达成协议，后者允许将这种语言叫做JavaScript。这样一来，Netscape公司可以借助Java语言的声势，而Sun公司则将自己的影响力扩展到了浏览器。之所以起这个名字，并不是因为JavaScript本身与Java语言有多么深的关系（事实上，两者关系并不深），而是因为Netscape公司已经决定，使用Java语言开发网络应用程序，JavaScript可以像胶水一样，将各个部分连接起来。当然，后来的历史是Java语言的浏览器插件失败了，JavaScript反而发扬光大。1995年12月4日，Netscape 公司与 Sun 公司联合发布了 JavaScript 语言。当时的意图是将 JavaScript 作为 Java 的补充，用来操作网页。1996年3月，Navigator 2.0 浏览器正式内置了 JavaScript 脚本语言。"
        },
        {
          "title": "2. JavaScript与ECMAScript的关系",
          "url": "/documents/history.html#2.-javascript与ecmascript的关系",
          "content": "2. JavaScript与ECMAScript的关系1996年8月，微软模仿JavaScript开发了一种相近的语言，取名为JScript（JavaScript是Netscape的注册商标，微软不能用），首先内置于IE 3.0。Netscape公司面临丧失浏览器脚本语言的主导权的局面。1996年11月，Netscape公司决定将JavaScript提交给国际标准化组织ECMA（European Computer Manufacturers Association），希望JavaScript能够成为国际标准，以此抵抗微软。ECMA的39号技术委员会（Technical Committee 39）负责制定和审核这个标准，成员由业内的大公司派出的工程师组成，目前共25个人。该委员会定期开会，所有的邮件讨论和会议记录，都是公开的。1997年7月，ECMA组织发布262号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为ECMAScript。这个版本就是ECMAScript 1.0版。之所以不叫JavaScript，一方面是由于商标的关系，Java是Sun公司的商标，根据一份授权协议，只有Netscape公司可以合法地使用JavaScript这个名字，且JavaScript已经被Netscape公司注册为商标，另一方面也是想体现这门语言的制定者是ECMA，不是Netscape，这样有利于保证这门语言的开放性和中立性。因此，ECMAScript和JavaScript的关系是，前者是后者的规格，后者是前者的一种实现。在日常场合，这两个词是可以互换的。ECMAScript只用来标准化JavaScript这种语言的基本语法结构，与部署环境相关的标准都由其他标准规定，比如DOM的标准就是由W3C组织（World Wide Web Consortium）制定的。ECMA-262标准后来也被另一个国际标准化组织ISO（International Organization for Standardization）批准，标准号是ISO-16262。"
        },
        {
          "title": "3. JavaScript与Java的关系",
          "url": "/documents/history.html#3.-javascript与java的关系",
          "content": "3. JavaScript与Java的关系JavaScript和Java是两种不一样的语言，但是它们之间存在联系。JavaScript的基本语法和对象体系，是模仿Java而设计的。但是，JavaScript没有采用Java的静态类型。正是因为JavaScript与Java有很大的相似性，所以这门语言才从一开始的LiveScript改名为JavaScript。基本上，JavaScript这个名字的原意是“很像Java的脚本语言”。在JavaScript语言中，函数是一种独立的数据类型，以及采用基于原型对象（prototype）的继承链。这是它与Java语法最大的两点区别。JavaScript语法要比Java自由得多。另外，Java语言需要编译，而JavaScript语言则是运行时由解释器直接执行。总之，JavaScript的原始设计目标是一种小型的、简单的动态语言，与Java有足够的相似性，使得使用者（尤其是Java程序员）可以快速上手。"
        },
        {
          "title": "4. JavaScript的版本",
          "url": "/documents/history.html#4.-javascript的版本",
          "content": "4. JavaScript的版本1997年7月，ECMAScript 1.0发布。1998年6月，ECMAScript 2.0版发布。1999年12月，ECMAScript 3.0版发布，成为JavaScript的通行标准，得到了广泛支持。2007年10月，ECMAScript 4.0版草案发布，对3.0版做了大幅升级，预计次年8月发布正式版本。草案发布后，由于4.0版的目标过于激进，各方对于是否通过这个标准，发生了严重分歧。以Yahoo、Microsoft、Google为首的大公司，反对JavaScript的大幅升级，主张小幅改动；以JavaScript创造者Brendan Eich为首的Mozilla公司，则坚持当前的草案。2008年7月，由于对于下一个版本应该包括哪些功能，各方分歧太大，争论过于激进，ECMA开会决定，中止ECMAScript 4.0的开发（即废除了这个版本），将其中涉及现有功能改善的一小部分，发布为ECMAScript 3.1，而将其他激进的设想扩大范围，放入以后的版本，由于会议的气氛，该版本的项目代号起名为Harmony（和谐）。会后不久，ECMAScript 3.1就改名为ECMAScript 5。2009年12月，ECMAScript 5.0版正式发布。Harmony项目则一分为二，一些较为可行的设想定名为JavaScript.next继续开发，后来演变成ECMAScript 6；一些不是很成熟的设想，则被视为JavaScript.next.next，在更远的将来再考虑推出。TC39的总体考虑是，ECMAScript 5与ECMAScript 3基本保持兼容，较大的语法修正和新功能加入，将由JavaScript.next完成。当时，JavaScript.next指的是ECMAScript 6。第六版发布以后，将指ECMAScript 7。TC39预计，ECMAScript 5会在2013年的年中成为JavaScript开发的主流标准，并在此后五年中一直保持这个位置。2011年6月，ECMAscript 5.1版发布，并且成为ISO国际标准（ISO/IEC 16262:2011）。到了2012年底，所有主要浏览器都支持ECMAScript 5.1版的全部功能。2013年3月，ECMAScript 6草案冻结，不再添加新功能。新的功能设想将被放到ECMAScript 7。2013年12月，ECMAScript 6草案发布。然后是12个月的讨论期，听取各方反馈。2015年6月，ECMAScript 6正式发布，并且更名为“ECMAScript 2015”。这是因为TC39委员会计划，以后每年发布一个ECMAScirpt的版本，下一个版本在2016年发布，称为“ECMAScript 2016”。除了ECMAScript的版本，很长一段时间中，Netscape公司（以及继承它的Mozilla基金会）在内部依然使用自己的版本号。这导致了JavaScript有自己不同于ECMAScript的版本号。1996年3月，Navigator 2.0内置了JavaScript 1.0。JavaScript 1.1版对应ECMAScript 1.0，但是直到JavaScript 1.4版才完全兼容ECMAScript 1.0。JavaScript 1.5版完全兼容ECMAScript 3.0。目前的JavaScript 1.8版完全兼容ECMAScript 5。"
        },
        {
          "title": "5. 周边大事记",
          "url": "/documents/history.html#5.-周边大事记",
          "content": "5. 周边大事记JavaScript伴随着互联网的发展一起发展。互联网周边技术的快速发展，刺激和推动了JavaScript语言的发展。1996年，样式表标准CSS第一版发布。1997年，DHTML（Dynamic HTML，动态HTML）发布，允许动态改变网页内容。这标志着DOM模式（Document Object Model，文档对象模型）正式应用。1998年，Netscape公司开源了浏览器套件，这导致了Mozilla项目的诞生。几个月后，美国在线（AOL）宣布并购Netscape。1999年，IE 5部署了XMLHttpRequest接口，允许JavaScript发出HTTP请求，为后来大行其道的Ajax应用创造了条件。2000年，KDE项目重写了浏览器引擎KHTML，为后来的WebKit和Blink引擎打下基础。这一年的10月23日，KDE 2.0发布，第一次将KHTML浏览器包括其中。2001年，微软公司时隔5年之后，发布了IE浏览器的下一个版本Internet Explorer 6。这是当时最先进的浏览器，它后来统治了浏览器市场多年。2001年，Douglas Crockford提出了JSON格式，用于取代XML格式，进行服务器和网页之间的数据交换。JavaScript可以原生支持这种格式，不需要额外部署代码。2002年，Mozilla项目发布了它的浏览器的第一版，后来起名为Firefox。2003年，苹果公司发布了Safari浏览器的第一版。2004年，Google公司发布了Gmail，促成了互联网应用程序（Web Application）这个概念的诞生。由于Gmail是在4月1日发布的，很多人起初以为这只是一个玩笑。2004年，Dojo框架诞生，为不同浏览器提供了同一接口，并为主要功能提供了便利的调用方法。这标志着JavaScript编程框架的时代开始来临。2004年，WHATWG组织成立，致力于加速HTML语言的标准化进程。2005年，苹果公司在KHTML引擎基础上，建立了WebKit引擎。2005年，Ajax方法（Asynchronous JavaScript and XML）正式诞生，Jesse James Garrett发明了这个词汇。它开始流行的标志是，2月份发布的Google Maps项目大量采用该方法。它几乎成了新一代网站的标准做法，促成了Web 2.0时代的来临。2005年，Apache基金会发布了CouchDB数据库。这是一个基于JSON格式的数据库，可以用JavaScript函数定义视图和索引。它在本质上有别于传统的关系型数据库，标识着NoSQL类型的数据库诞生。2006年，jQuery函数库诞生，作者为John Resig。jQuery为操作网页DOM结构提供了非常强大易用的接口，成为了使用最广泛的函数库，并且让JavaScript语言的应用难度大大降低，推动了这种语言的流行。2006年，微软公司发布IE 7，标志重新开始启动浏览器的开发。2006年，Google推出 Google Web Toolkit 项目（缩写为GWT），提供Java编译成JavaScript的功能，开创了将其他语言转为JavaScript的先河。2007年，Webkit引擎在iPhone手机中得到部署。它最初基于KDE项目，2003年苹果公司首先采用，2005年开源。这标志着JavaScript语言开始能在手机中使用了，意味着有可能写出在桌面电脑和手机中都能使用的程序。2007年，Douglas Crockford发表了名为《JavaScript: The good parts》的演讲，次年由O’Reilly出版社出版。这标志着软件行业开始严肃对待JavaScript语言，对它的语法开始重新认识，2008年，V8编译器诞生。这是Google公司为Chrome浏览器而开发的，它的特点是让JavaScript的运行变得非常快。它提高了JavaScript的性能，推动了语法的改进和标准化，改变外界对JavaScript的不佳印象。同时，V8是开源的，任何人想要一种快速的嵌入式脚本语言，都可以采用V8，这拓展了JavaScript的应用领域。2009年，Node.js项目诞生，创始人为Ryan Dahl，它标志着JavaScript可以用于服务器端编程，从此网站的前端和后端可以使用同一种语言开发。并且，Node.js可以承受很大的并发流量，使得开发某些互联网大规模的实时应用变得容易。2009年，Jeremy Ashkenas发布了CoffeeScript的最初版本。CoffeeScript可以被转化为JavaScript运行，但是语法要比JavaScript简洁。这开启了其他语言转为JavaScript的风潮。2009年，PhoneGap项目诞生，它将HTML5和JavaScript引入移动设备的应用程序开发，主要针对iOS和Android平台，使得JavaScript可以用于跨平台的应用程序开发。2009，Google发布Chrome OS，号称是以浏览器为基础发展成的操作系统，允许直接使用JavaScript编写应用程序。类似的项目还有Mozilla的Firefox OS。2010年，三个重要的项目诞生，分别是NPM、BackboneJS和RequireJS，标志着JavaScript进入模块化开发的时代。2011年，微软公司发布Windows 8操作系统，将JavaScript作为应用程序的开发语言之一，直接提供系统支持。2011年，Google发布了Dart语言，目的是为了结束JavaScript语言在浏览器中的垄断，提供更合理、更强大的语法和功能。Chromium浏览器有内置的Dart虚拟机，可以运行Dart程序，但Dart程序也可以被编译成JavaScript程序运行。2011年，微软工程师Scott Hanselman提出，JavaScript将是互联网的汇编语言。因为它无所不在，而且正在变得越来越快。其他语言的程序可以被转成JavaScript语言，然后在浏览器中运行。2012年，单页面应用程序框架（single-page app framework）开始崛起，AngularJS项目和Ember项目都发布了1.0版本。2012年，微软发布TypeScript语言。该语言被设计成JavaScript的超集，这意味着所有JavaScipt程序，都可以不经修改地在TypeScript中运行。同时，TypeScript添加了很多新的语法特性，主要目的是为了开发大型程序，然后还可以被编译成JavaScript运行。2012年，Mozilla基金会提出asm.js规格。asm.js是JavaScript的一个子集，所有符合asm.js的程序都可以在浏览器中运行，它的特殊之处在于语法有严格限定，可以被快速编译成性能良好的机器码。这样做的目的，是为了给其他语言提供一个编译规范，使其可以被编译成高效的JavaScript代码。同时，Mozilla基金会还发起了Emscripten项目，目标就是提供一个跨语言的编译器，能够将LLVM的位代码（bitcode）转为JavaScript代码，在浏览器中运行。因为大部分LLVM位代码都是从C / C++语言生成的，这意味着C / C++将可以在浏览器中运行。此外，Mozilla旗下还有LLJS（将JavaScript转为C代码）项目和River Trail（一个用于多核心处理器的ECMAScript扩展）项目。目前，在可以被编译成JavaScript的语言列表上，共有将近40种语言。2013年，Mozilla基金会发布手机操作系统Firefox OS，该操作系统的整个用户界面都使用JavaScript。2013年，ECMA正式推出JSON的国际标准，这意味着JSON格式已经变得与XML格式一样重要和正式了。2013年5月，Facebook发布UI框架库React，引入了新的JSX语法，使得UI层可以用组件开发。2014年，微软推出JavaScript的Windows库WinJS，标志微软公司全面支持JavaScript与Windows操作系统的融合。2014年11月，由于对Joyent公司垄断Node项目、以及该项目进展缓慢的不满，一部分核心开发者离开了Node.js，创造了io.js项目，这是一个更开放、更新更频繁的Node.js版本，很短时间内就发布到了2.0版。三个月后，Joyent公司宣布放弃对Node项目的控制，将其转交给新成立的开放性质的Node基金会。随后，io.js项目宣布回归Node，两个版本将合并。2015年3月，Facebook公司发布了React Native项目，将React框架移植到了手机端，可以用来开发手机App。它会将JavaScript代码转为iOS平台的Objective-C代码，或者Android平台的Java代码，从而为JavaScript语言开发高性能的原生App打开了一条道路。2015年4月，Angular框架宣布，2.0版将基于微软公司的TypeScript语言开发，这等于为JavaScript语言引入了强类型。2015年5月，Node模块管理器npm超越CPAN，标志着JavaScript成为世界上软件模块最多的语言。2015年5月，Google公司的Polymer框架发布1.0版。该项目的目标是生产环境可以使用WebComponent组件，如果能够达到目标，Web开发将进入一个全新的以组件为开发基础的阶段。2015年6月，ECMA标准化组织正式批准了ECMAScript 6语言标准，定名为《ECMAScript 2015 标准》。JavaScript语言正式进入了下一个阶段，成为一种企业级的、开发大规模应用的语言。这个标准从提出到批准，历时10年，而JavaScript语言从诞生至今也已经20年了。2015年6月，Mozilla 在 asm.js 的基础上发布 WebAssembly 项目。这是一种JavaScript语言编译后的二进制格式，类似于Java的字节码，有利于移动设备加载JavaScript脚本，解析速度提高了20+倍。这意味着将来的软件，会发布JavaScript二进制包。2016年6月，《ECMAScript 2016 标准》发布。与前一年发布的版本相比，它只增加了两个较小的特性。2017年6月，《ECMAScript 2017 标准》发布，正式引入了 async 函数，使得异步操作的写法出现了根本的变化。2017年11月，所有主流浏览器全部支持 WebAssembly，这意味着任何语言都可以编译成 JavaScript，在浏览器运行。"
        },
        {
          "title": "6. 参考链接",
          "url": "/documents/history.html#6.-参考链接",
          "content": "6. 参考链接Axel Rauschmayer, The Past, Present, and Future of JavaScript\nJohn Dalziel, The race for speed part 4: The future for JavaScript\nAxel Rauschmayer, Basic JavaScript for the impatient programmer\nresin.io, Happy 18th Birthday JavaScript! A look at an unlikely * past and bright future\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/base_syntax.html",
      "children": [
        {
          "title": "1. 语句",
          "url": "/documents/base_syntax.html#1.-语句",
          "content": "1. 语句JavaScript 程序的执行单位为行（line），也就是一行一行地执行。一般情况下，每一行就是一个语句。语句（statement）是为了完成某种任务而进行的操作，比如下面就是一行赋值语句。var a = 1 + 3;这条语句先用var命令，声明了变量a，然后将1 + 3的运算结果赋值给变量a。1 + 3 叫做表达式（expression），指一个为了得到返回值的计算式。语句和表达式的区别在于，前者主要为了进行某种操作，一般情况下不需要返回值；后者则是为了得到返回值，一定会返回一个值。凡是 JavaScript 语言中预期为值的地方，都可以使用表达式。比如，赋值语句的等号右边，预期是一个值，因此可以放置各种表达式。语句以分号结尾，一个分号就表示一个语句结束。多个语句可以写在一行内。var a = 1 + 3 ; var b = 'abc';分号前面可以没有任何内容，JavaScript引擎将其视为空语句。;;;上面的代码就表示3个空语句。表达式不需要分号结尾。一旦在表达式后面添加分号，则 JavaScript 引擎就将表达式视为语句，这样会产生一些没有任何意义的语句。1 + 3;'abc';\n上面两行语句只是单纯地产生一个值，并没有任何实际的意义。"
        },
        {
          "title": "2. 变量",
          "url": "/documents/base_syntax.html#2.-变量",
          "content": "2. 变量"
        },
        {
          "title": "2.1 概念",
          "url": "/documents/base_syntax.html#2.-变量-2.1-概念",
          "content": "2.1 概念变量是对“值”的具名引用。变量就是为“值”起名，然后引用这个名字，就等同于引用这个值。变量的名字就是变量名。var a = 1;上面的代码先声明变量a，然后在变量a与数值1之间建立引用关系，称为将数值1“赋值”给变量a。以后，引用变量名a就会得到数值1。最前面的var，是变量声明命令。它表示通知解释引擎，要创建一个变量a。注意，JavaScript 的变量名区分大小写，A和a是两个不同的变量。变量的声明和赋值，是分开的两个步骤，上面的代码将它们合在了一起，实际的步骤是下面这样。var a;a = 1;\n如果只是声明变量而没有赋值，则该变量的值是undefined。undefined是一个 JavaScript 关键字，表示“无定义”。var a;a // undefined\n如果变量赋值的时候，忘了写var命令，这条语句也是有效的。var a = 1;// 基本等同\na = 1;\n但是，不写var的做法，不利于表达意图，而且容易不知不觉地创建全局变量，所以建议总是使用var命令声明变量。如果一个变量没有声明就直接使用，JavaScript 会报错，告诉你变量未定义。x// ReferenceError: x is not defined\n上面代码直接使用变量x，系统就报错，告诉你变量x没有声明。可以在同一条var命令中声明多个变量。var a, b;JavaScript 是一种动态类型语言，也就是说，变量的类型没有限制，变量可以随时更改类型。var a = 1;a = 'hello';\n上面代码中，变量a起先被赋值为一个数值，后来又被重新赋值为一个字符串。第二次赋值的时候，因为变量a已经存在，所以不需要使用var命令。如果使用var重新声明一个已经存在的变量，是无效的。var x = 1;var x;\nx // 1\n上面代码中，变量x声明了两次，第二次声明是无效的。但是，如果第二次声明的时候还进行了赋值，则会覆盖掉前面的值。var x = 1;var x = 2;\n\n// 等同于\n\nvar x = 1;\nvar x;\nx = 2;\n"
        },
        {
          "title": "2.2 变量提升",
          "url": "/documents/base_syntax.html#2.-变量-2.2-变量提升",
          "content": "2.2 变量提升JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升（hoisting）。console.log(a);var a = 1;\n上面代码首先使用console.log方法，在控制台（console）显示变量a的值。这时变量a还没有声明和赋值，所以这是一种错误的做法，但是实际上不会报错。因为存在变量提升，真正运行的是下面的代码。var a;console.log(a);\na = 1;\n最后的结果是显示undefined，表示变量a已声明，但还未赋值。"
        },
        {
          "title": "3. 标识符",
          "url": "/documents/base_syntax.html#3.-标识符",
          "content": "3. 标识符标识符（identifier）指的是用来识别各种值的合法名称。最常见的标识符就是变量名，以及后面要提到的函数名。JavaScript 语言的标识符对大小写敏感，所以a和A是两个不同的标识符。标识符有一套命名规则，不符合规则的就是非法标识符。JavaScript 引擎遇到非法标识符，就会报错。简单说，标识符命名规则如下。\n第一个字符，可以是任意 Unicode 字母（包括英文字母和其他语言的字母），以及美元符号（$）和下划线_.\n第二个字符及后面的字符，除了 Unicode 字母、美元符号和下划线，还可以用数字0-9。\n\n下面这些都是合法的标识符。arg0_tmp\n$elem\nπ\n下面这些则是不合法的标识符。1a  // 第一个字符不能是数字23  // 同上\n***  // 标识符不能包含星号\na+b  // 标识符不能包含加号\n-d  // 标识符不能包含减号或连词线\n中文是合法的标识符，可以用作变量名。var 临时变量 = 1;JavaScript有一些保留字，不能用作标识符：arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield。\n"
        },
        {
          "title": "4 . 注释",
          "url": "/documents/base_syntax.html#4-.-注释",
          "content": "4 . 注释源码中被 JavaScript 引擎忽略的部分就叫做注释，它的作用是对代码进行解释。Javascript 提供两种注释的写法：一种是单行注释，用//起头；另一种是多行注释，放在/和/之间。// 这是单行注释\n/*\n 这是\n 多行\n 注释\n*/\n此外，由于历史上 JavaScript 可以兼容 HTML 代码的注释，所以也被视为合法的单行注释。x = 1;  x = 3;上面代码中，只有x = 1会执行，其他的部分都被注释掉了。需要注意的是，-->只有在行首，才会被当成单行注释，否则会当作正常的运算。function countdown(n) {  while (n --> 0) console.log(n);\n}\ncountdown(3)\n// 2\n// 1\n// 0\n上面代码中，n --> 0实际上会当作n-- > 0，因此输出2、1、0。"
        },
        {
          "title": "5.区块",
          "url": "/documents/base_syntax.html#5.区块",
          "content": "5.区块JavaScript 使用大括号，将多个相关的语句组合在一起，称为“区块”（block）。对于var命令来说，JavaScript 的区块不构成单独的作用域（scope）。{  var a = 1;\n}\n\na // 1\n上面代码在区块内部，使用var命令声明并赋值了变量a，然后在区块外部，变量a依然有效，区块对于var命令不构成单独的作用域，与不使用区块的情况没有任何区别。在 JavaScript 语言中，单独使用区块并不常见，区块往往用来构成其他更复杂的语法结构，比如for、if、while、function等。"
        },
        {
          "title": "6. 条件语句",
          "url": "/documents/base_syntax.html#6.-条件语句",
          "content": "6. 条件语句JavaScript 提供if结构和switch结构，完成条件判断，即只有满足预设的条件，才会执行相应的语句。"
        },
        {
          "title": "6.1 if 结构",
          "url": "/documents/base_syntax.html#6.-条件语句-6.1-if-结构",
          "content": "6.1 if 结构if结构先判断一个表达式的布尔值，然后根据布尔值的真伪，执行不同的语句。所谓布尔值，指的是 JavaScript 的两个特殊值，true表示真，false表示伪。if (布尔值)  语句;\n\n// 或者\nif (布尔值) 语句;\n上面是if结构的基本形式。需要注意的是，“布尔值”往往由一个条件表达式产生的，必须放在圆括号中，表示对表达式求值。如果表达式的求值结果为true，就执行紧跟在后面的语句；如果结果为false，则跳过紧跟在后面的语句。if (m === 3)  m = m + 1;\n上面代码表示，只有在m等于3时，才会将其值加上1。这种写法要求条件表达式后面只能有一个语句。如果想执行多个语句，必须在if的条件判断之后，加上大括号，表示代码块（多个语句合并成一个语句）。if (m === 3) {  m += 1;\n}\n建议总是在if语句中使用大括号，因为这样方便插入语句。注意，if后面的表达式之中，不要混淆赋值表达式（=）、严格相等运算符（===）和相等运算符（==）。尤其是赋值表达式不具有比较作用。var x = 1;var y = 2;\nif (x = y) {\n  console.log(x);\n}\n// \"2\"\n上面代码的原意是，当x等于y的时候，才执行相关语句。但是，不小心将严格相等运算符写成赋值表达式，结果变成了将y赋值给变量x，再判断变量x的值（等于2）的布尔值（结果为true）。这种错误可以正常生成一个布尔值，因而不会报错。为了避免这种情况，有些开发者习惯将常量写在运算符的左边，这样的话，一旦不小心将相等运算符写成赋值运算符，就会报错，因为常量不能被赋值。if (x = 2) { // 不报错if (2 = x) { // 报错\n至于为什么优先采用“严格相等运算符”（===），而不是“相等运算符”（==），请参考《运算符》章节。"
        },
        {
          "title": "6.2 if…else 结构",
          "url": "/documents/base_syntax.html#6.-条件语句-6.2-if…else-结构",
          "content": "6.2 if…else 结构if代码块后面，还可以跟一个else代码块，表示不满足条件时，所要执行的代码。if (m === 3) {  // 满足条件时，执行的语句\n} else {\n  // 不满足条件时，执行的语句\n}\n上面代码判断变量m是否等于3，如果等于就执行if代码块，否则执行else代码块。对同一个变量进行多次判断时，多个if...else语句可以连写在一起。if (m === 0) {  // ...\n} else if (m === 1) {\n  // ...\n} else if (m === 2) {\n  // ...\n} else {\n  // ...\n}\nelse代码块总是与离自己最近的那个if语句配对。var m = 1;var n = 2;\n\nif (m !== 1)\nif (n === 2) console.log('hello');\nelse console.log('world');\n上面代码不会有任何输出，else代码块不会得到执行，因为它跟着的是最近的那个if语句，相当于下面这样。if (m !== 1) {  if (n === 2) {\n    console.log('hello');\n  } else {\n    console.log('world');\n  }\n}\n如果想让else代码块跟随最上面的那个if语句，就要改变大括号的位置。if (m !== 1) {  if (n === 2) {\n    console.log('hello');\n  }\n} else {\n  console.log('world');\n}\n// world\n"
        },
        {
          "title": "6.3 switch结构",
          "url": "/documents/base_syntax.html#6.-条件语句-6.3-switch结构",
          "content": "6.3 switch结构多个if...else连在一起使用的时候，可以转为使用更方便的switch结构。switch (fruit) {  case \"banana\":\n    // ...\n    break;\n  case \"apple\":\n    // ...\n    break;\n  default:\n    // ...\n}\n上面代码根据变量fruit的值，选择执行相应的case。如果所有case都不符合，则执行最后的default部分。需要注意的是，每个case代码块内部的break语句不能少，否则会接下去执行下一个case代码块，而不是跳出switch结构。var x = 1;\nswitch (x) {\n  case 1:\n    console.log('x 等于1');\n  case 2:\n    console.log('x 等于2');\n  default:\n    console.log('x 等于其他值');\n}\n// x等于1\n// x等于2\n// x等于其他值\n上面代码中，case代码块之中没有break语句，导致不会跳出switch结构，而会一直执行下去。正确的写法是像下面这样。switch (x) {  case 1:\n    console.log('x 等于1');\n    break;\n  case 2:\n    console.log('x 等于2');\n    break;\n  default:\n    console.log('x 等于其他值');\n}\nswitch语句部分和case语句部分，都可以使用表达式。switch(1 + 3) {  case 2 + 2:\n    f();\n    break;\n  default:\n    neverHappens();\n}\n上面代码的default部分，是永远不会执行到的。需要注意的是，switch语句后面的表达式，与case语句后面的表示式比较运行结果时，采用的是严格相等运算符（===），而不是相等运算符（==），这意味着比较时不会发生类型转换。var x = 1;\nswitch (x) {\n  case true:\n    console.log('x 发生类型转换');\n  default:\n    console.log('x 没有发生类型转换');\n}\n// x 没有发生类型转换上面代码中，由于变量x没有发生类型转换，所以不会执行case true的情况。这表明，switch语句内部采用的是“严格相等运算符”，详细解释请参考《运算符》一节。"
        },
        {
          "title": "6.4 三元运算符 ?:",
          "url": "/documents/base_syntax.html#6.-条件语句-6.4-三元运算符-?",
          "content": "6.4 三元运算符 ?:JavaScript还有一个三元运算符（即该运算符需要三个运算子）?:，也可以用于逻辑判断。(条件) ? 表达式1 : 表达式2上面代码中，如果“条件”为true，则返回“表达式1”的值，否则返回“表达式2”的值。var even = (n % 2 === 0) ? true : false;上面代码中，如果n可以被2整除，则even等于true，否则等于false。它等同于下面的形式。var even;if (n % 2 === 0) {\n  even = true;\n} else {\n  even = false;\n}\n这个三元运算符可以被视为if...else...的简写形式，因此可以用于多种场合。var myVar;console.log(\n  myVar ?\n  'myVar has a value' :\n  'myVar do not has a value'\n)\n// myVar do not has a value\n上面代码利用三元运算符，输出相应的提示。var msg = '数字' + n + '是' + (n % 2 === 0 ? '偶数' : '奇数');上面代码利用三元运算符，在字符串之中插入不同的值。"
        },
        {
          "title": "7. 循环语句",
          "url": "/documents/base_syntax.html#7.-循环语句",
          "content": "7. 循环语句循环语句用于重复执行某个操作，它有多种形式。"
        },
        {
          "title": "7.1 while 循环",
          "url": "/documents/base_syntax.html#7.-循环语句-7.1-while-循环",
          "content": "7.1 while 循环While语句包括一个循环条件和一段代码块，只要条件为真，就不断循环执行代码块。while (条件)  语句;\n\n// 或者\nwhile (条件) 语句;\nwhile语句的循环条件是一个表达式，必须放在圆括号中。代码块部分，如果只有一条语句，可以省略大括号，否则就必须加上大括号。while (条件) {  语句;\n}\n下面是while语句的一个例子。var i = 0;\nwhile (i < 100) {\n  console.log('i 当前为：' + i);\n  i = i + 1;\n}\n上面的代码将循环100次，直到i等于100为止。下面的例子是一个无限循环，因为循环条件总是为真。while (true) {  console.log('Hello, world');\n}\n"
        },
        {
          "title": "7.2 for 循环",
          "url": "/documents/base_syntax.html#7.-循环语句-7.2-for-循环",
          "content": "7.2 for 循环for语句是循环命令的另一种形式，可以指定循环的起点、终点和终止条件。它的格式如下。for (初始化表达式; 条件; 递增表达式)  语句\n\n// 或者\n\nfor (初始化表达式; 条件; 递增表达式) {\n  语句\n}\nfor语句后面的括号里面，有三个表达式。初始化表达式（initialize）：确定循环变量的初始值，只在循环开始时执行一次。条件表达式（test）：每轮循环开始时，都要执行这个条件表达式，只有值为真，才继续进行循环。\n递增表达式（increment）：每轮循环的最后一个操作，通常用来递增循环变量。\n下面是一个例子。var x = 3;for (var i = 0; i < x; i++) {\n  console.log(i);\n}\n// 0\n// 1\n// 2\n上面代码中，初始化表达式是var i = 0，即初始化一个变量i；测试表达式是i < x，即只要i小于x，就会执行循环；递增表达式是i++，即每次循环结束后，i增大1。所有for循环，都可以改写成while循环。上面的例子改为while循环，代码如下。var x = 3;var i = 0;\n\nwhile (i < x) {\n  console.log(i);\n  i++;\n}\nfor语句的三个部分（initialize、test、increment），可以省略任何一个，也可以全部省略。for ( ; ; ){  console.log('Hello World');\n}\n上面代码省略了for语句表达式的三个部分，结果就导致了一个无限循环。"
        },
        {
          "title": "7.3 do…while 循环",
          "url": "/documents/base_syntax.html#7.-循环语句-7.3-do…while-循环",
          "content": "7.3 do…while 循环do...while循环与while循环类似，唯一的区别就是先运行一次循环体，然后判断循环条件。do  语句\nwhile (条件);\n\n// 或者\ndo {\n  语句\n} while (条件);\n不管条件是否为真，do...while循环至少运行一次，这是这种结构最大的特点。另外，while语句后面的分号注意不要省略。下面是一个例子。var x = 3;var i = 0;\n\ndo {\n  console.log(i);\n  i++;\n} while(i < x);\n"
        },
        {
          "title": "7.4 break 语句和 continue 语句",
          "url": "/documents/base_syntax.html#7.-循环语句-7.4-break-语句和-continue-语句",
          "content": "7.4 break 语句和 continue 语句break语句和continue语句都具有跳转作用，可以让代码不按既有的顺序执行。break语句用于跳出代码块或循环。var i = 0;\nwhile(i < 100) {\n  console.log('i 当前为：' + i);\n  i++;\n  if (i === 10) break;\n}\n上面代码只会执行10次循环，一旦i等于10，就会跳出循环。for循环也可以使用break语句跳出循环。for (var i = 0; i < 5; i++) {  console.log(i);\n  if (i === 3)\n    break;\n}\n// 0\n// 1\n// 2\n// 3\n上面代码执行到i等于3，就会跳出循环。continue语句用于立即终止本轮循环，返回循环结构的头部，开始下一轮循环。var i = 0;\nwhile (i < 100){\n  i++;\n  if (i % 2 === 0) continue;\n  console.log('i 当前为：' + i);\n}\n上面代码只有在i为奇数时，才会输出i的值。如果i为偶数，则直接进入下一轮循环。如果存在多重循环，不带参数的break语句和continue语句都只针对最内层循环。"
        },
        {
          "title": "7.5 标签（label）",
          "url": "/documents/base_syntax.html#7.-循环语句-7.5-标签（label）",
          "content": "7.5 标签（label）JavaScript 语言允许，语句的前面有标签（label），相当于定位符，用于跳转到程序的任意位置，标签的格式如下。label:  语句\n标签可以是任意的标识符，但不能是保留字，语句部分可以是任意语句。标签通常与break语句和continue语句配合使用，跳出特定的循环。top:  for (var i = 0; i < 3; i++){\n    for (var j = 0; j < 3; j++){\n      if (i === 1 && j === 1) break top;\n      console.log('i=' + i + ', j=' + j);\n    }\n  }\n// i=0, j=0\n// i=0, j=1\n// i=0, j=2\n// i=1, j=0\n上面代码为一个双重循环区块，break命令后面加上了top标签（注意，top不用加引号），满足条件时，直接跳出双层循环。如果break语句后面不使用标签，则只能跳出内层循环，进入下一次的外层循环。continue语句也可以与标签配合使用。top:  for (var i = 0; i < 3; i++){\n    for (var j = 0; j < 3; j++){\n      if (i === 1 && j === 1) continue top;\n      console.log('i=' + i + ', j=' + j);\n    }\n  }\n// i=0, j=0\n// i=0, j=1\n// i=0, j=2\n// i=1, j=0\n// i=2, j=0\n// i=2, j=1\n// i=2, j=2\n上面代码中，continue命令后面有一个标签名，满足条件时，会跳过当前循环，直接进入下一轮外层循环。如果continue语句后面不使用标签，则只能进入下一轮的内层循环。"
        },
        {
          "title": "参考链接",
          "url": "/documents/base_syntax.html#参考链接",
          "content": "参考链接Axel Rauschmayer, A quick overview of JavaScript\n"
        }
      ]
    }
  ]
}