module.exports = {
	SASS: {
		FN: [
			'node_modules/motion-ui/src',
			'node_modules/foundation-sites/scss'
		],
		UIKIT: [
			'node_modules/uikit/src/scss'
		],
		BOOTS: ['node_modules/bootstrap/scss']
	},

	JS: [
		//	JQUERY
		//'node_modules/jquery/dist/jquery.js',
		//uikit
		'node_modules/uikit/dist/js/uikit.js',
		'node_modules/uikit/dist/js/uikit-icons.js'
	],
	CSS_FOUNDATION: [

	],
	TASKS: [
		'./gulp/tasks/foundation.js',
		'./gulp/tasks/js_app.js',
		// './gulp/tasks/svg.js',
		'./gulp/tasks/copy.js',
		'./gulp/tasks/clear.js',
		'./gulp/tasks/sass.js',
		'./gulp/tasks/pug.js',
		'./gulp/tasks/serve.js',
		'./gulp/tasks/watch.js'
	],
	ROOT: 'build'
};