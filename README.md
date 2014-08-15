#Cattura SourceToggle for Kaltura's Universal Player
***
This Cattura plugin enables the user to switch between multi-source videos delivered to the Kaltura Platform through our CaptureCast&trade; Pro product. It will also keep position through each switch. Keep in mind that this is for the Universal Player only. 

##Setup

1. Log into your Kaltura KMC account. 

2. Create or Edit an existing Player (Universal Only)
	
    a. To find the Universal Player click "Studio"

    b. Under the Kaltura Logo to the left of the screen you will find the "Universal" player

3. On the left hand navbar look for the electric plug name ... plugins

4. On this new window click on the "Ui Variables" label

5. Click "[add]" 8 times to create 8 "key" and "value" pairs

6. Fill these 8 "key and 'value' pairs in with thier repective values as per the table below. 
 

| key                      |   | value                                                                             |
|--------------------------|---|-----------------------------------------------------------------------------------|
| switcher.plugin          |   | true                                                                              |
| switcher.path            |   | /content/uiconf/ps/kaltura/kdp/v3.6.9/plugins/facadePlugin.swf                    |
| switcher.relativeTo      |   | video                                                                             |
| switcher.position        |   | before                                                                            |
| switcher.includeInLayout |   | false                                                                             |
| switcher.button          |   | 1                                                                                 |
| Kaltura.LeadWithHTML5    |   | true                                                                              |
| switcher.iframeHTML5Js1  |   | https://dt3nu9g2bp5s4.cloudfront.net/assets/sourcetoggle/2.0.0/js/switcher-min.js |

***

## Notes ##

![Switch](http://i.imgur.com/jNymEl5.png)

* Click on the **Camera Icon** and dropUP will appear. Which contains thumbnails of the video and its title.
* Click on the thumbnail/title to **switch** to that media.
* A **magenta** tab will appear on the right hand side of the current playing video.
* Hovering over a media entry will **highlight** said source
* Clicking on an already playing media source will do nothing. 
* If the camera icon has a **red slash** through it the plugin is unavailable due to this video being a single source entry.

![NoSwitch](http://i.imgur.com/qumfVQ6.png)

***
## Known Issues ##
 * If a source is missing thumbnail broken the plugin will fail to switch, fail to load or crash the player all together. We are currently working on a solution but the easiest solution is to make sure the sources are present before playing. 

 * The Kaltura HTML5 v2 player must play for ~1 second after the switch before it is able to seek to the correct position *

*_This is a known Kaltura issue and tickets have been issued._

***
##Kaltura Instance Confilcts and Solutions###

If videos are not populating the dropUp (ie. failed thumbnails and switches).

First and formost make sure all sources are uploaded and presetn. Else please do the following:
1. Go to Settings -> Integration Settings.
2. Look for the section "Entitlement Settings". It should be on the lower left hand corner. 
3. Remove (if it exists) the "cattura perspectives" entitlement.
4. Click "Save Settings"

***

## Changelog ##

#### 1.0.1: Dalmatian Silver ####

* When using with a single video the player should not crash now. 

#### 1.0.0: Mercury Boxer####

* Initial release


***
## License ##

Copyright (c) 2013 Cattura Video

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPY