/**
 * Uploader helper module for initialize Plupload
 * @exports app
 * @exports plupload
 *
 * @author Denysov Artem
 * @link hhttps://github.com/denar90
 */

define(['app', 'plupload'], function(App) {
	App.module("PlUploader.Helpers", function(PlUploader, App, Backbone, Marionette) {
		PlUploader.PlUploaderHelper = Marionette.Object.extend({
			/**
			 * Initialize
			 * @param {object} options
			 */
			initialize: function(options) {
				this.initUpload(options);
			},

			/**
			 * Init plupload due to uploader type
			 * @param {object} options
			 * @throws Error Wrong pluploadType
			 */
			initUpload: function(options) {
				var uploader,
					self = this;
				switch (options.pluploadType) {
					case 'ui':
						require(['pluploadUI'], function() {
							$(options.pluploadContainer).plupload(options.settings);
							uploader = $(options.pluploadContainer).plupload('getUploader');
							self.initCallbacks(uploader, options.callbacks);
						});
						break;
					case 'queue':
						require(['pluploadQueue'], function() {
							$(options.pluploadContainer).pluploadQueue(options.settings);
							uploader = $(options.pluploadContainer).pluploadQueue();
							self.initCallbacks(uploader, options.callbacks);
						});
						break;
					case 'core':
						uploader = new plupload.Uploader(options.settings);
						uploader.init();
						self.initCallbacks(uploader, options.callbacks);
						break;
					default:
						throw new Error('Type' + options.pluploadType + ' is wrong. You can only use "core", "ui", "queue" types.');
				}
			},

			/**
			 * Listens callbacks for popover
			 * @param {object} uploader - plupload object
			 * @param {object} callbacks - All available callbacks for plupload
			 */
			initCallbacks: function(uploader, callbacks) {
				// Called after initialization is finished and internal event handlers bound
				uploader.bind('PostInit', function() {
					callbacks.PostInit.apply(uploader, []);
				});

				// Called when file picker is clicked
				uploader.bind('Browse', function(up) {
					callbacks.Browse.apply(uploader, [up]);
				});

				// Called when the position or dimensions of the picker change
				uploader.bind('Refresh', function(up) {
					callbacks.Refresh.apply(uploader, [up]);
				});

				// Called when the state of the queue is changed
				uploader.bind('StateChanged', function(up) {
					callbacks.StateChanged.apply(uploader, [up]);
				});

				// Called when queue is changed by adding or removing files
				uploader.bind('QueueChanged', function(up) {
					callbacks.QueueChanged.apply(uploader, [up]);
				});

				// Called when one of the configuration options is changed
				uploader.bind('OptionChanged', function(up, name, value, oldValue) {
					callbacks.OptionChanged.apply(uploader, [up, name, value, oldValue]);
				});

				// Called right before the upload for a given file starts, can be used to cancel it if required
				uploader.bind('BeforeUpload', function(up, file) {
					callbacks.BeforeUpload.apply(uploader, [up, file]);
				});

				// Called when file successfully files all the filters
				uploader.bind('FileFiltered', function(up, files) {
					callbacks.FileFiltered.apply(uploader, [up, files]);
				});

				// Called when files are added to queue
				uploader.bind('FilesAdded', function(up, files) {
					callbacks.FilesAdded.apply(uploader, [up, files]);
				});

				// Called when files are removed from queue
				uploader.bind('FilesRemoved', function(up, files) {
					callbacks.FilesRemoved.apply(uploader, [up, files]);
				});

				// Called when file has finished uploading
				uploader.bind('FileUploaded', function(up, file, info) {
					callbacks.FileUploaded.apply(uploader, [up, file, info]);
				});

				// Called when file chunk has finished uploading
				uploader.bind('ChunkUploaded', function(up, file, info) {
					callbacks.ChunkUploaded.apply(uploader, [up, file, info]);
				});

				// Called when all files are either uploaded or failed
				uploader.bind('UploadComplete', function(up, files) {
					callbacks.UploadComplete.apply(uploader, [up, files]);
				});

				// Called when uploader is destroyed
				uploader.bind('Destroy', function(up) {
					callbacks.Destroy.apply(uploader, [up]);
				});

				// Called when error occurs
				uploader.bind('Error', function(up, err) {
					callbacks.Error.apply(uploader, [up, err]);
				});
			}
		});
	});

	return App.PlUploader.Helpers.PlUploaderHelper;
});