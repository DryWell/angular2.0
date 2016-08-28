

fis.hook('commonjs');

fis.unhook('components');
fis.hook('node_modules');

// 服务器程序解析
fis.match('server.js',{
	useCompile:false
});

fis.match('/router',{
	useCompile:false
})

//---npm包编译打包
fis.match('/node_modules/**.js',{
	isMod : true,
	useSameNameRequire: true,
	packTo:'dist/angular2.js'
});

// ---静态资源不解析
fis.match('/bower_components/**',{
	useCompile:false,
});

//--依赖库打包
fis.match('/bower_components/fis-mod/mod.js',{
	packTo:'dist/libs.js',
	packOrder:-100
});

fis.match('/bower_components/babel-polyfill/browser-polyfill.js',{
	packTo:'dist/libs.js',
	packOrder:-99
});

// ---自编写组件打包，ES6
fis.match('modules/**.js',{
	isMod:true,
	rExt:'.js',
	parser:fis.plugin('typescript'),
	packTo:'dist/app.js',
});

