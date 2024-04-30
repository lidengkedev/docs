(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{318:function(s,a,e){"use strict";e.r(a);var n=e(10),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"express-应用程序生成器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#express-应用程序生成器"}},[s._v("#")]),s._v(" Express 应用程序生成器")]),s._v(" "),a("p",[s._v("通过应用生成器工具 express-generator 可以快速创建一个应用的骨架。")]),s._v(" "),a("p",[s._v("你可以通过 npx （包含在 Node.js 8.2.0 及更高版本中）命令来运行 Express 应用程序生成器。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ npx express-generator\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("对于较老的 Node 版本，请通过 npm 将 Express 应用程序生成器安装到全局环境中并使用：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" express-generator\n$ express\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("-h 参数可以列出所有可用的命令行参数：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ express "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v("\n\n  Usage: express "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n  Options:\n\n    -h, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("          输出使用方法\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("       输出版本号\n    -e, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--ejs")]),s._v("           添加对 ejs 模板引擎的支持\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--hbs")]),s._v("           添加对 handlebars 模板引擎的支持\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--pug")]),s._v("           添加对 pug 模板引擎的支持\n    -H, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--hogan")]),s._v("         添加对 hogan.js 模板引擎的支持\n        --no-view       创建不带视图引擎的项目\n    -v, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--view")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("engine"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 添加对视图引擎（view） "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("engine"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 的支持 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ejs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("hbs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("hjs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jade"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("pug"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("twig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("vash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" （默认是 jade 模板引擎）\n    -c, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--css")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("engine"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  添加样式表引擎 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("engine"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 的支持 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("less"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("stylus"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("compass"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("sass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" （默认是普通的 css 文件）\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--git")]),s._v("           添加 .gitignore\n    -f, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--force")]),s._v("         强制在非空目录下创建\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("例如，如下命令创建了一个名称为 myapp 的 Express 应用。此应用将在当前目录下的 myapp 目录中创建，并且设置为使用 Pug 模板引擎（view engine）：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ express "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--view")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pug myapp\n\n   create "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" myapp\n   create "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" myapp/package.json\n   create "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" myapp/app.js\n   create "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" myapp/public\n   create "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" myapp/public/javascripts\n   create "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" myapp/public/images\n   create "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" myapp/routes\n   create "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" myapp/routes/index.js\n   create "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" myapp/routes/users.js\n   create "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" myapp/public/stylesheets\n   create "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" myapp/public/stylesheets/style.css\n   create "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" myapp/views\n   create "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" myapp/views/index.pug\n   create "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" myapp/views/layout.pug\n   create "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" myapp/views/error.pug\n   create "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" myapp/bin\n   create "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" myapp/bin/www\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("然后安装所有依赖包：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" myapp\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("在 MacOS 或 Linux 中，通过如下命令启动此应用：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEBUG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("myapp:* "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在 Windows 命令行中，使用如下命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEBUG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("myapp:* "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在 Windows 的 PowerShell 中，使用如下命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("PS"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$env")]),s._v(":DEBUG"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'myapp:*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后在浏览器中打开 http://localhost:3000/ 网址就可以看到这个应用了。\n通过生成器创建的应用一般都有如下目录结构：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n├── app.js\n├── bin\n│   └── www\n├── package.json\n├── public\n│   ├── images\n│   ├── javascripts\n│   └── stylesheets\n│       └── style.css\n├── routes\n│   ├── index.js\n│   └── users.js\n└── views\n    ├── error.pug\n    ├── index.pug\n    └── layout.pug\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" directories, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" files\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);