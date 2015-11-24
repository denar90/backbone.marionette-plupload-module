/**
 * Controller module
 * @exports app
 * @exports plUploader/views/view
 *
 * @author Denysov Artem
 * @link https://github.com/denar90
 */

define(['app', 'plUploader/views/view'], function(App, View) {
	App.module("PlUploader", function(PlUploader) {
		PlUploader.Controller = {
			render: function() {
				PlUploader.region.show(View);
			}
		};
	});

	return App.PlUploader.Controller;
});