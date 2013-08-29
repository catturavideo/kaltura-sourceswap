(function (kWidget) {

function wrapBind(kdp, event, callback)
{
    var ns;

    do
    {
        ns = ("" + Math.random()).substr(1);
    }
    while (ns.charAt(0) !== ".");

    kdp.kBind(event + ns, function () {
        callback();
        kdp.kUnbind(ns);
    });
}

function SourceToggle(kdp)
{
    var t = this,
        entry,
        json;

    t.kdp = kdp;
    t.current = 0;

    entry = t.getOption("mediaProxy.entry");
    t.sources = [entry.id];

    try
    {
        json = JSON.parse(entry.partnerData);
        t.sources = t.sources.concat(json.sources || []);
    }
    catch (e) {}
}

SourceToggle.prototype = {
    toggle: function (currentTime)
    {
        var t = this,
            next = (t.current + 1) % t.sources.length;

        if (t.current == next)
        {
            return;
        }

        //Play once the media is ready.
        t.kdp.sendNotification("changeMedia", { entryId: t.sources[next] });
        t.kdp.setKDPAttribute("mediaProxy", "mediaPlayFrom", currentTime);
        t.current = next;
    },

    getOption: function (cfg)
    {
        return this.kdp.evaluate("{" + cfg + "}");
    },

    getConfig: function (cfg)
    {
        return this.getOption("sourceToggle." + cfg);
    }
};

kWidget.addReadyCallback(function (playerId) {
    var kdp = document.getElementById(playerId);

    wrapBind(kdp, "mediaReady", function () {
        var toggle = new SourceToggle(kdp),
            fn = "customFunc" + (toggle.getConfig("button") || 1);

        window[fn] = function () {
            toggle.toggle(toggle.getOption("video.player.currentTime"));
        };
    });
});

})(kWidget);
