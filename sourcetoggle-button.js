(function (mw, $, window) {

var
switching = $.Deferred(),
playerReady = $.Deferred(),

template = ['<div class="source-toggle rButton" title="Change Media">',
    '<span class="ui-icon ui-icon-video"></span>',
'</div>'].join("");

mw.bindHelper("Kaltura_CheckConfig", function (event, player, callback) {
    if (!player.isPluginEnabled("sourceToggle")) {
        return callback();
    }

    // Loophole since unbind doesn't seem to be working.
    player.bindHelper("widgetLoaded", function () {
        playerReady.resolve(player);
    });

    // Notification of when a media switch is complete.
    player.bindHelper("onplay", function () {
        switching.resolve();
    });

    callback();
});

// Finish the bootstrapping by waiting on the main deferred.
playerReady.done(function (player) {
    var
    ui = player.getInterface(),
    toggle = new SourceToggle(player),
    playHead = ui.find(".play_head");

    ui.find(".control-bar .kaltura-icon").closest(".rButton").after(template);

    // Doing 2 things at once here, Adding the click binding to toggle the video and sliding over the playhead to compensate for the new button.
    playHead.css("right", parseInt(playHead.css("right")) + ui.find(".source-toggle").on("click", function () {
        if (switching.isResolved()) {
            switching = toggle.toggle(player.evaluate("{video.player.currentTime}"));
        }
    }).outerWidth(true));
});

function SourceToggle (player) {
    var
    t = this, entry, json;

    t.player = player;
    t.current = 0;

    entry = player.evaluate("{mediaProxy.entry}");
    t.sources = [entry.id];

    try {
        json = JSON.parse(entry.partnerData);
        t.sources = t.sources.concat(json.sources || []);
    } catch (e) {}
}

SourceToggle.prototype = {
    toggle: function (currentTime) {
        var
        t = this,
        next = (t.current + 1) % t.sources.length;

        if (t.current == next) {
            return;
        }

        //Play once the media is ready.
        t.player.sendNotification("changeMedia", { entryId: t.sources[next] });
        t.player.setKDPAttribute("mediaProxy", "mediaPlayFrom", currentTime);
        t.current = next;

        return $.Deferred();
    }
};

})(mw, jQuery, window);
