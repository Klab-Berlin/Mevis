// Modules
// =======
var config	= require('./config.js'),
	tmpl	= require('./tmpl.js');


// create compiled templates ( /w run )
tmpl.create( config.templateDir );
