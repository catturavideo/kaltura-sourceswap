#Cattura SourceToggle for Kaltura's Universal Player
***
This Cattura plugin enables the user to switch between multi-source videos delivered to the Kaltura Platform through our CaptureCast&trade; Pro product. It will also keep position through each switch. Keep in mind that this is for the Universal Player only. 

#Setup
##Step 1 : Player

1. Log into your Kaltura KMC account. 

2. Create or Edit an existing Player (Universal Only)
	
    a. To find the Universal Player click "Studio"

    b. Under the Kaltura Logo to the left of the screen you will find the "Universal" player

3. On the left hand navbar look for the electric plug name ... plugins

4. On this new window click on the "Ui Variables" label

5. Click "[add]" 9 times to create 9 "key" and "value" pairs

6. Fill these 9 "key and 'value' pairs in with thier repective values as per the table below. 
 

| key                      |   | value                                                                             |
|--------------------------|---|-----------------------------------------------------------------------------------|
| switcher.plugin          |   | true                                                                              |
| switcher.path            |   | /content/uiconf/ps/kaltura/kdp/v3.6.9/plugins/facadePlugin.swf                    |
| switcher.relativeTo      |   | video                                                                             |
| switcher.position        |   | before                                                                            |
| switcher.includeInLayout |   | false                                                                             |
| switcher.button          |   | 1                                                                                 |
| Kaltura.LeadWithHTML5    |   | true                                                                              |
| switcher.iframeHTML5Js1  |   | https://dt3nu9g2bp5s4.cloudfront.net/assets/sourcetoggle/2.0.0/js/switcherISG-min.js |
| streamerType  |   | http |

***
##Step2 : Transcoding

1. Click on "Settings" tab on the top menu
 
2. Click on "Transcoding Settings"
 
3. Checkmark "WebM" Conversion flavor

4. Click the "Save Changes" button at the bottom of the page.

    This will only transcode new files not prexisting ones. To transcode those checkout Issue#3 under       "Kaltura Instance Confilcts and Solutions"  below. 


***
##Step 3 : Embeding

1. After Step 1 and 2 go to the 'content' page and select  "preview and embed" under actions  on the video you wish to embed.

2. Make sure to select new player 

3. Make sure Delivery Type is "HTTP Progressive Download" 

4. Make sure Embed type is "Auto" or "Dynamic"

5. Then you are ready to Embed. 




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
  
 * The Kaltura HTML5 v2 player must play for ~1 second after the switch before it is able to seek to the correct position *

 * Non-Cattura captures being played with this plugin will not switch. Single source should be fine but multisouce will not work. Cattura will not support this plugin for Non-Cattura uploads. 

*_This is a known Kaltura issue and tickets have been issued._

***
##Kaltura Instance Confilcts and Solutions###


#####Issue #1: Broken thumbnails

If videos are not populating the dropUp (ie. failed thumbnails and switches).

First and formost make sure all sources are uploaded and presetn. Else please do the following:

1. Go to Settings -> Integration Settings.

2. Look for the section "Entitlement Settings". It should be on the lower left hand corner. 

3. Remove (if it exists) the "cattura perspectives" entitlement.

4. Click "Save Settings"

***

#####Issue #2 Working with Non-Cattura Uploads

If you are using the Cattura Plugin and Non-Cattura Uploads the switcher will not work. 

As a possible work around: 

1. Download and Install Kaltura's Client Side API

2. Under tha "main media" file find the 'partnerData' variable it should be null

3. Make an array of ids filled with the videoIds  you wish to associate. i.e. ['i_eidn33','i_ewen23',...]

4. Set "partnerData" to that array

######Again this is not supported by Cattura and is not guaranteed to work.
***

#####Issue #3 Inconsistance switching and failing to seek

1. Make sure you have completed the "Setup Step 2 : Transcoding" section. 

2. If that is done. Go to the "Content" page. 

3. From there select the source link. A modal will appear titled "Edit Entry"

4. Click on "flavors" on the left hand side.

5. Make sure 'WebM' is one of the transcoding flavors.

6. If not find "WebM" then go to the right hand side and select convert under its actions. 

7. Repeat steps 3 to 6 for all sources/videos associated with that multisource capture.


***
## Changelog ##

#### 1.5.0: Irish Setter Gold  (10/20/2014) ####
* Added Kaltura spinner to smooth out transitions between swtiches
* Fixed race conditions such that video will switch properly each time. 
* Will now work on Chrome,Firefox and IE8 on Mac, Windows and Linux.

#### 1.0.2: Sheepdog Copper ####

* Plugin fails when playing a Non-Cattura Uploaded video. This should be fixed now but will not handle multisource only single source.

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