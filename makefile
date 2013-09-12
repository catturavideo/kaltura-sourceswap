default: sourcetoggle.min.js sourcetoggle-button.min.js

sourcetoggle.min.js:
	uglifyjs -mt < sourcetoggle.js > sourcetoggle.min.js

sourcetoggle-button.min.js:
	uglifyjs -mt < sourcetoggle-button.js > sourcetoggle-button.min.js
