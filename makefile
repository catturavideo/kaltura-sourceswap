default: sourceswitch.min.js sourceswitch-button.min.js

sourceswitch.min.js:
	uglifyjs -mt < sourceswitch.js > sourceswitch.min.js

sourceswitch-button.min.js:
	uglifyjs -mt < sourceswitch-button.js > sourceswitch-button.min.js
