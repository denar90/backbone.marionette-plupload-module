/**
 * PlUploader module
 * @exports app
 * @exports plUploader/controllers/controller
 *
 * @author Denysov Artem
 * @link https://github.com/denar90
 */

define(['app', 'plUploader/controllers/controller'], function(App, Controller) {
	return App.module("PlUploader", function(PlUploader) {
		$.extend(true, PlUploader, {
			region: null,
			plupload: {
				pluploadType: 'core',
				pluploadContainer: '#plupload-container',
				template: null,
				settings: {},
				callbacks: {
					PostInit: Function.prototype,
					Browse: Function.prototype,
					Refresh: Function.prototype,
					StateChanged: Function.prototype,
					QueueChanged: Function.prototype,
					OptionChanged: Function.prototype,
					BeforeUpload: Function.prototype,
					FileFiltered: Function.prototype,
					FilesAdded: Function.prototype,
					FilesRemoved: Function.prototype,
					FileUploaded: Function.prototype,
					ChunkUploaded: Function.prototype,
					UploadComplete: Function.prototype,
					Destroy: Function.prototype,
					Error: Function.prototype
				}
			}
		});

		var API = {
			render: Controller.render
		};

		PlUploader.on('start', function (options) {
			$.extend(true, PlUploader, options);
			API.render();
		});
	});
});