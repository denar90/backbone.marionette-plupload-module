/**
 * View module
 * @exports app
 * @exports handlebars
 * @exports plUploader/helpers/pluploader-helper
 * @exports plUploader/templates/template
 *
 * @author Denysov Artem
 * @link hhttps://github.com/denar90
 */

define(['app',
		'handlebars',
		'plUploader/helpers/pluploader-helper',
		'text!plUploader/templates/template.hbs'], function(App, Handlebars, PlUploadHelper, template) {

	App.module("PlUploader.View", function(PlUploader, App, Backbone, Marionette) {
		PlUploader.Item = Marionette.ItemView.extend({
			template: function() {
				template = App.PlUploader.template || Handlebars.compile(template);
				return template;
			},
			onShow: function () {
				new PlUploadHelper(App.PlUploader.plupload);
			}
		});
	});

	return new App.PlUploader.View.Item();
});