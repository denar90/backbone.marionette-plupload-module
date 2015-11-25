#Marionette module for plupload

##Getting started

###Quick start

* Clone the repository: `https://github.com/denar90/backbone.marionette-plupload-module`
* Add dependency into your `bower.json` file and run `bower install`

##Usage

###Initialization

* Include and run module

````javascript
	//for example
	
	var MyView = Marionette.ItemView.extend({
		template: '<div></div>',
		onShow: function() {
			new Marionette.PlUploader(this, {
				pluploadType: 'queue',
				settings: {
					runtimes : 'html5,flash,silverlight,html4',
					url : "/examples/upload",

					chunk_size : '1mb',
					rename : true,
					dragdrop: true,

					filters : {
						// Maximum file size
						max_file_size : '10mb',
						// Specify what files to browse for
						mime_types: [
							{title : "Image files", extensions : "jpg,gif,png"},
							{title : "Zip files", extensions : "zip"}
						]
					},

					// Resize images on clientside if we can
					resize: {
						width : 200,
						height : 200,
						quality : 90,
						crop: true // crop to exact dimensions
					},


					// Flash settings
					flash_swf_url : '/plupload/js/Moxie.swf',

					// Silverlight settings
					silverlight_xap_url : '/plupload/js/Moxie.xap'
				},
				callbacks: {
					Browse: function() {
						console.log('upload Browse');
					},
					Error: function() {
						console.log('upload error');
					},
					FilesAdded: function(up, files) {
						var html = '';
						plupload.each(files, function(file) {
							html += '<li id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></li>';
						});
						document.getElementById('filelist').innerHTML += html;
						up.start();
					}
				}
			});
		}
	});

	app.mainRegion.show(new MyView());
````

##Options

Options for plupload

#### pluploadType
* type: String
* default: 'core'

Type of plupload can have be: `core`, `ui`, `queue`

#### pluploadContainer
* type: String
* default: '#plupload-container'

#### template
* type: string
* default: '<div id="plupload-container"></div>'

#### settings
* type: Object

All available [settings for plupload](http://www.plupload.com/docs/).

#### callbacks
* type: Object

All available [events for plupload](https://github.com/moxiecode/plupload/wiki/Uploader#events).
