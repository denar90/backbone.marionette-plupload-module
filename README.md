#Marionette module for plupload

##Getting started

###Quick start

* Clone the repository: `https://github.com/denar90/backbone.marionette-plupload-module`
* Add dependency into your `bower.json` file and run `bower install`

##Usage

###Configuration

* Configure your requirejs file for Core API
````javascript
	require.config({
    	...
    	paths: {
    		...
    		app: 'path-to-app-file',
    		plupload   : '../vendor/plupload/js/plupload.full.min'
    		...
    	}
    	...
    });
````

* Configure your requirejs file for UI Widget
````javascript
	require.config({
    	...
    	paths: {
    		...
    		app: 'path-to-app-file',
    		plupload: '../vendor/plupload/js/plupload.full.min',
    		pluploadUI: '../vendor/plupload/js/jquery.ui.plupload/jquery.ui.plupload'
    		...
    	},
    	...
    	shim: {
			...
			pluploadUI: {
				deps: ['path_to_jquery', 'path_to_jquery-ui']
			}
			...
		}
    });
````

* Configure your requirejs file for Queue Widget
````javascript
	require.config({
    	...
    	paths: {
    		...
    		app: 'path-to-app-file',
    		plupload: '../vendor/plupload/js/plupload.full.min',
			pluploadQueue: '../vendor/plupload/js/jquery.plupload.queue/jquery.plupload.queue',
    		...
    	}
    });
````

###Initialization

* Include and run module

````javascript
	//for example
	
	define(['app', 'plUploader/plUploader'], function(App, PlUploader) {
	
		App.addRegions({
			plUploaderRegion: '#someregion'
		});
        	
    	...
		PlUploader.start({
			region: App.plUploaderRegion,
			plupload: {
				pluploadType: 'core',
				settings: {
					browse_button: 'browse', // this can be an id of a DOM element or the DOM element itself
					url: 'upload.php'
				},
				callbacks: {
					Browse: function() {
						console.log('upload Browse')
					},
					Error: function() {
						console.log('upload error')
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
			}
		});
		...
    	
    });
````

##Options

#### region
* type: Object

Required param.

Region where data will be inserted

#### plupload
* type: Object

````javascript
	
	plupload: {
		pluploadType: '',
		settings: {},
		callbacks: {}
	}
		
````

Options for plupload

#### plupload.pluploadType
* type: String
* default: 'core'

Type of plupload can have be: `core`, `ui`, `queue`

#### plupload.settings
* type: Object

All available [settings for plupload](http://www.plupload.com/docs/).

#### plupload.settings
* type: Object

All available [events for plupload](https://github.com/moxiecode/plupload/wiki/Uploader#events).