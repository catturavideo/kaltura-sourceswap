# Cattura SourceSwitch for the Kaltura Player #

The Cattura platform enables you to have multiple source videos uploaded to Kaltura and utilized in the player experience. This plugin enables provides the ability to swap between the sources by clicking a toggle button embeded in the player.

## Setup ##

1.  Create a new player (or edit an existing one) in the studio tab. Create a new custon button, take note of the button number you are using. Label it "Toggle" with the caption "Switch video source". Customize it to meet your needs, displaying text is the most clear solution since the default icon cannot be customized.

	![Step 1](http://i.imgur.com/7rrVluG.png)

2.  Copy the line below and paste into the "plug-in line" field on the Additional parameters field and click "Go".

	sourceToggle.plugin=true&sourceToggle.path=/content/uiconf/ps/kaltura/kdp/v3.6.9/plugins/facadePlugin.swf&sourceToggle.relativeTo=video&sourceToggle.position=before&sourceToggle.includeInLayout=false&sourceToggle.button=1&sourceToggle.onPageJs1=http://cf.cdn.catturavideo.com/assets/js/sourceswitch1.0.0.min.js

	![Step 2](http://i.imgur.com/EWwl8u5.png)

3.  Scroll down to `sourceToggle.button` and change the line underneath to the button number you used. In my case it would be 1.

	![Step 3](http://i.imgur.com/EWAfzDG.png)

## Notes ##

 * This plugin may not work on custom installations of Kaltura. If you have a custom installation please take the steps necessary to update to a version that supports KDP v3.6.9 or greater.

## Changelog ##

#### 1.0.0 ####

Initial release

## License ##

Copyright (c) 2013 Cattura Video

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
