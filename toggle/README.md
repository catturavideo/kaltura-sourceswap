#Cattura 'Plain' SourceToggle for Kaltura's Universal Player
***
This Cattura plugin enables the user to switch between multi-source videos delivered to the Kaltura Platform through our CaptureCast&trade; Pro product. It will also keep position through each switch. Keep in mind that this is for the Universal Player only.  Unlike the 'Original' Sourcetoggle this version will go through each source right after each other. 

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
| toggle.plugin          |   | true                                                                              |
| toggle.path            |   | /content/uiconf/ps/kaltura/kdp/v3.6.9/plugins/facadePlugin.swf                    |
| toggle.relativeTo      |   | video                                                                             |
| toggle.position        |   | before                                                                            |
| toggle.includeInLayout |   | false                                                                             |
| toggle.button          |   | 1                                                                                 |
| Kaltura.LeadWithHTML5    |   | true                                                                              |
| toggle.iframeHTML5Js1  |   | https://dt3nu9g2bp5s4.cloudfront.net/assets/sourcetoggle/2.0.0/js/toggle.js |

***

## Notes ##

* Clicking on the camera icon will cause the video to switch to the next video inline. 
* If the camera icon has a **red slash** through it the plugin is unavailable due to this video being a single source entry.

![NoSwitch](http://i.imgur.com/qumfVQ6.png)

***
## Known Issues ##
  
 * The Kaltura HTML5 v2 player must play for ~1 second after the switch before it is able to seek to the correct position *

 * Non-Cattura captures being played with this plugin will not switch. Single source should be fine but multisouce will not work. Cattura will not support this plugin for Non-Cattura uploads. 

*_This is a known Kaltura issue and tickets have been issued._

***
##Kaltura Instance Confilcts and Solutions###
***
#####Issue #1 Using Non-Cattura Uploads

If you are using the Cattura Plugin and Non-Cattura Uploads the switcher will not work. 

As a possible work around: 

1. Download and Install Kaltura's Client Side API
2. Under tha "main media" file find the 'partnerData' variable it should be null
3. Make an array of ids filled with the videoIds  you wish to associate. i.e. ['i_eidn33','i_ewen23',...]
4. Set "partnerData" to that array

######Again this is not supported by Cattura and is not guaranteed to work.   
***
#####Issue #2: Inconsistance Toggling
When you try to toggle to the next video does it sometimes work and othertimes misfire ? You may be missing a web compliant version of the source.  

Try this: 
1. Log into your KMC environment with your administrator account
2. Click on "Settings" tab on the top menu
3. Click on "Transcoding Settings"
4. Checkmark "WebM" Conversion flavor
5. Click the "Save Changes" button at the bottom of the page.

Now each video/source uploaded will have a "WebM" version created. 

***

## Changelog ##

#### 1.5.0 Narcissus Duck  ( 10/20/2014)####

* Added Kaltura spinner to smooth out transitions between swtiches
* Fixed race conditions such that video will switch properly each time. 
* Will now work on Chrome,Firefox and IE8 on Mac, Windows and Linux.

#### 1.0.0 Lily Hen  ####

* Initial release


***
## License ##

Copyright (c) 2013 Cattura Video

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPY