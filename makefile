default: sourcetoggle.min.js sourcetoggle-button.min.js

sourcetoggle.min.js: sourcetoggle.js
	uglifyjs -mt < sourcetoggle.js > sourcetoggle.min.js

sourcetoggle-button.min.js: sourcetoggle-button.js
	uglifyjs -mt < sourcetoggle-button.js > sourcetoggle-button.min.js
