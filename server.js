var koa = require('koa')
var router = require('koa-router')()
var serve = require('koa-serve')
var favicon = require('koa-favicon')
var path = require('path');
var fs = require('fs');

var app = koa();
var port = '18080';
var homeFile = path.resolve(__dirname,'./views/index.html');

app.name = 'poetapp';
app.use(serve('static'));  //---设置静态文件目录
app.use(serve('dist'))
app.use(router.routes(),router.allowedMethods())  //---设置路由

//---路由
router.get('/',function* (next){  //---首页
	this.type = 'text/html; charset=utf-8';
	this.body = fs.readFileSync(homeFile);
});

app.listen(port)