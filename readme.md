# Cattura SourceSwitch for the Kaltura Player #

The Cattura platform enables you to have multiple source videos uploaded to Kaltura and utilized in the player experience. This plugin enables provides the ability to swap between the sources by clicking a toggle button embeded in the player.

## Setup ##

1.  Create a new player (or edit an existing one) in the studio tab. Create a new custon button, take note of the button number you are using. Label it "Toggle" with the caption "Switch video source". Customize it to meet your needs, displaying text is the most clear solution since the default icon cannot be customized.

	![Step 1](http://i.imgur.com/7rrVluG.png)

2.  Copy the line below and paste into the "plug-in line" field on the Additional parameters field and click "Go".

	sourceToggle.plugin=true&sourceToggle.path=/content/uiconf/ps/kaltura/kdp/v3.6.9/plugins/facadePlugin.swf&sourceToggle.relativeTo=video&sourceToggle.position=before&sourceToggle.includeInLayout=false&sourceToggle.button=1&sourceToggle.onPageJs1=

	![Step 2](http://i.imgur.com/EWwl8u5.png)

3.  Scroll down to `sourceToggle.button` and change the line underneath to the button number you used. In my case it would be 1.

	![Step 3](http://i.imgur.com/EWAfzDG.png)

## Changelog ##

#### 1.0.0 ####

Initial release