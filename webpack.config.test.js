var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

/* small hack to build map of node modules used for excluding from webpack */
var nodeModules = {};
fs.readdirSync('node_modules')
.filter(function (x) {
	return ['.bin'].indexOf(x) === -1;
})
.forEach(function (mod) {
	nodeModules[mod] = 'commonjs ' + mod;
});

/* helper function to get into build directory */
var libPath = function(name) {
	if ( null === name ) {
		return path.join('build');
	}

	return path.join('build', name);
}

module.exports = {
	entry: './test/test.ts',
	target: 'node',
	output: {
		filename: libPath('test.js')
	},
	resolve: {
		extensions: ['', '.ts', '.js']
	},
	module: {
		preLoaders: [{ test: /\.ts$/, loader: 'tslint' }],
		loaders: [{ test: /\.ts$/, loader: 'babel-loader!ts-loader' }]
	},
	tslint: {
		emitErrors: true,
		failOnHint: true
	},
	externals: nodeModules,
	ts: {
		compiler: 'typescript',
		configFileName: 'tsconfig.test.json'
	}
}
