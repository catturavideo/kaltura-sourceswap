mw.kalturaPluginWrapper(function(){
    var loaded;
    var sources;

    mw.PluginManager.add( 'toggle', mw.KBaseComponent.extend({
 
        defaultConfig: {
            parent: "controlsContainer",    // the container for the button 
            order: 41,                      // the display order ( based on layout )
            displayImportance: 'low',       // the display importance, determines when the item is removed from DOM
            align: "right",                 // the alignment of the button
            title: 'Switch',                        
            "media":'{mediaProxy.entry}',
            img: 'https://dt3nu9g2bp5s4.cloudfront.net/assets/sourcetoggle/2.0.0/img/cam.png'                       // image
        },
         getComponent: function(player) {
                var _this = this;
                if( !this.$el ) {
                    var $img = [];
                    if( this.getConfig('img') ){
                        $img = $( '<img />' )
                            .attr({
                                alt: this.getConfig('title'),
                                src: this.getConfig('img'),
                                class: "switchButton"
                            })
                            .css({
                                "position": "relative",
                                "z-index": "999",
                                "cursor": "pointer",
                                "margin-top": "9px",
                                "user-drag": "none", 
                                "-moz-user-select": "none", 
                                "-webkit-user-drag": "none"
                            });
                    }
                    this.$el = $('<div />')
                        .addClass ( this.getCssClass())
                        .css({
                            "cursor": "pointer",
                            "position": "relative",
                            "z-index": "900"
                        })
                        .append($img);


                    if(sources.length<=1){
                        $img.attr({'src':'https://dt3nu9g2bp5s4.cloudfront.net/assets/sourcetoggle/2.0.0/img/nocam.png'});
                        return this.$el;                             
                    }

                    loaded.then(function () {
                        var position = 1; 
                        var media = [];
                        for(var x = 0; x< arguments.length; x++){
                            media.push(arguments[x].rootEntryId);
                        }
                        var switcher = function(){
                            var timeTemp = _this.getPlayer().currentTime; 
                            var startPlay = function(){
                                _this.getPlayer().sendNotification("doPlay");
                                _this.getPlayer().sendNotification("doSeek", timeTemp);
                                _this.unbind('onChangeMediaDone');
                            }
                            _this.bind('onChangeMediaDone', startPlay);

                            _this.getPlayer().sendNotification( "changeMedia", { 'entryId' : media[position] });
                           
                            // show the spinner while change media is active:
                            _this.bind('playerReady', function(){
                                _this.getPlayer().sendNotification('showSpinner');
                                 _this.unbind('playerReady');
                            });
                           
                            
                            position++
                            if(position == media.length){
                                position = 0;
                            }
                        };
                        $(".toggle").on('click',switcher);
                    });
                }
                return this.$el;
            },
        setup: function(){
            sources     = [];
            var partner = this.getConfig('media');

            partner = partner.partnerData;

            //v2 change to make sure if video is not ours plugin still works
            if(partner == null){
                sources  = undefined;
            }else{
                sources  = JSON.parse(partner)['sources'];
            }
            //v2 chance to make source!=undefined to skip only on video.
            if( sources != undefined && sources.length >=1){
                 sources.unshift(this.getConfig('media').id);
            }else{
                sources = [this.getConfig('media').id];
            }
            var api     = new kWidget.api({ wid: this.getPlayer().evaluate("{configProxy.kw.id}") });
            var requestMediaData = function(element){
                var defer = $.Deferred();
                api.doRequest({
                    service: 'media', 
                    action: 'get',
                    "entryId": element
                }, defer.resolve);
                return defer.promise();
            }
            for (var i = 0, promises = []; i < sources.length; i++) {
                promises.push(requestMediaData(sources[i]));
            }

            loaded = $.when.apply($, promises);

        }    
    }));
 
});