(function(factory) {
	if (typeof exports === 'object') {
		module.exports = factory(require('marionette'));
	} else if (typeof define === 'function' && define.amd) {
		define(['marionette'], factory);
	}
}(function(Marionette) {
	//= marionette.pluploader.js
	return Marionette.PlUploader;
}));
