#Cattura SourceToggle for the Kaltura Player for HTML5 v2
***
The Cattura platform enables you to have multiple source videos uploaded to Kaltura and utilized in the player experience. This plugin enables provides the ability to swap between the sources (and keep position)  by clicking a toggle button embeded in the player. 

##Setup

1. Log into your Kaltura KMC account. 

2. Create or Edit an existing Player

3.  Copy the line below and paste into the "plug-in line" field on the Additional parameters field and click "Go".

   switcher.plugin=true&switcher.path=/content/uiconf/ps/kaltura/kdp/v3.6.9/plugins/facadePlugin.swf&switcher.relativeTo=video&switcher.position=before&switcher.includeInLayout=false&switcher.button=1&switcher.iframeHTML5Js1= https://dt3nu9g2bp5s4.cloudfront.net/assets/sourcetoggle/2.0.0/js/switcher-min.js


![Step 2](http://i.imgur.com/EWwl8u5.png)

***

## Notes ##

![Switch](http://i.imgur.com/YKDq22v.png)

* Click on the **Camera Icon** and a Drop up will appear. Which contains thumbnails of the video and its title.
* Click on the thumbnail/title to **switch** to that media.
* A **magenta** tab will appear on the right hand side of the current playing video.
* Hovering over a media entry will **highlight** said source
* Clicking on an already playing media source will do nothing. 
* If the camera icon has a **red slash** through it the plugin is unavailable due to this video being a single source entry.

![NoSwitch](http://i.imgur.com/qumfVQ6.png)

***
## Known Issues ##

 * The Kaltura HTML5 v2 player must play for ~1 second after the switch before it is able to seek to the correct position *
 * Onload all thumbnails may not load aswell as a failure to switch to that media. This is a problem with Kaltura unable to seek find thier own entryID number.* 
 
*_This is a known Kaltura issue and tickets have been issued._

***
## Updating Player ## 
*  As of writing this document the HTML5 v2 player has not been released. 
1. Login to KMC and go to studio. 
2. Create or edit an existing player. 
3. Select features
4. Add "Kaltura.LeadWithHTML5" and set to true in Additional parameters
5. Save 
6. Copy the player id 
7. Go to http://player.kaltura.com/kWidget/tests/PlayerVersionUtility.html and log in
8. Paste the id and update player to a V2 player  

***
## Changelog ##

#### 1.0.0: Mercury Boxer####

* Initial release


***
## License ##

Copyright (c) 2013 Cattura Video

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPY