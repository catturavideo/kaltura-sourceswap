(function (kWidget,$) {
    mw.kalturaPluginWrapper(function(){
        var loaded;
        var sources;

        function makeListItem (id, thumbUrl, name,last) {
            if(last == true){
                return "<li class='sourceItem' data-id='"+id+"' style='white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'><img src='"+thumbUrl+"' alt='"+name+"_image' style='width: 60px;float: left;margin-right: 5%;margin-left: 5px;margin-top: 5px;margin-bottom: 5px;'/><span>"+name+"</span></li><div class='afters'></div>";
            }else{
                return "<li class='sourceItem' data-id='"+id+"' style='white-space: nowrap; overflow: hidden; text-overflow: ellipsis; border-bottom: 1px solid gray;'><img src='"+thumbUrl+"' alt='"+name+"_image' style='width: 60px;float: left;margin-right: 5%;margin-left: 5px;margin-top: 5px;margin-bottom: 5px;'/><span>"+name+"</span></li><div class='afters'></div>";
            }
        }

        mw.PluginManager.add( 'switcher', mw.KBaseComponent.extend({
            defaultConfig: {
                parent: "controlsContainer",             
                order: 51,                              
                displayImportance: 'low',               
                align: "right",                         
                cssClass: null,                         
                title: 'Switch',                        
                "media":'{mediaProxy.entry}',
                img: "https://dt3nu9g2bp5s4.cloudfront.net/assets/sourcetoggle/2.0.0/img/cam.png"                         
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
                    var $sourceList = $('<div />')
                                        .attr({
                                            class: 'sourceList hide'
                                        }); 

                    var openSourceList = function(e){
                        var condition = $sourceList.hasClass("hide");
                        $sourceList.toggleClass("hide", !condition).toggleClass("show", condition); 
                        e.stopPropagation();    
                    }

                    this.$el = $('<div />')
                        .addClass ( this.getCssClass())
                        .click(openSourceList)
                        .css({
                            "cursor": "pointer",
                            "position": "relative",
                            "z-index": "900"
                        })
                        .append($img)
                        .append($sourceList);


                    if(sources.length<=1){
                        $img.attr({'src':'https://dt3nu9g2bp5s4.cloudfront.net/assets/sourcetoggle/2.0.0/img/nocam.png'});
                        this.$el.unbind('click',openSourceList);
                        return this.$el;                             
                    }

                    loaded.then(function () {
                        var original = "(" + arguments[0].name + ")";
                        var list     = "<ul style ='list-style: none; position: absolute; right: 0; bottom: 100%; display: block; background-color: #222222; margin: 0; padding: 0px; width: 200px;'>";
                        list += makeListItem(arguments[0].rootEntryId, arguments[0].thumbnailUrl, "Main Media",false);
                        for (var i = 1; i < arguments.length; i++) {
                            var entryTitle = arguments[i].name.replace(original, "");
                            if(arguments.length-1 == i){
                                list += makeListItem(arguments[i].rootEntryId, arguments[i].thumbnailUrl, entryTitle,true);
                            }else{
                                list += makeListItem(arguments[i].rootEntryId, arguments[i].thumbnailUrl, entryTitle,false);
                            }
                        }
                        $sourceList.html(list + "</ul>");

                        $('.sourceItem').mouseenter(function(){
                            $(this).css({
                                    "background": "#B1B1B1",
                                    "color": "#000000"
                            });
                        }).mouseleave(function(){
                            $(this).css({
                                "background": "#222222",
                                "color": "#ffffff"
                            });
                        });
                        $('.afters').css({
                                "content": "",
                                "clear": "both",
                                "display": "table"
                        });
                        $sourceList.find('ul').children().first().addClass("selectedVid").css({"border-right": "5px solid #CE2473"});
                            $sourceList.find('li').click(function(e){
                                if($(e.currentTarget).data('id') != _this.getConfig('media').id){
                                    $(".selectedVid").css({"border-right": "0px"}).removeClass('selectedVid');
                                    $(this).addClass('selectedVid').css({"border-right": "5px solid #CE2473"});
                                    var timeTemp = _this.getPlayer().currentTime; 
                                    var startPlay = function(){
                                        _this.getPlayer().sendNotification('doPlay');
                                        _this.unbind('onChangeMediaDone',startPlay);
                                    }
                                    _this.getPlayer().startTime = timeTemp;
                                    _this.getPlayer().sendNotification( "changeMedia", { 'entryId' : $(e.currentTarget).data('id') });
                                    _this.bind('onChangeMediaDone', startPlay);
                                }
                            });
                    });
                    $(window).click(function(){$sourceList.addClass('hide');});
                }
                return this.$el;
            },
            setup: function(){
                sources     = [];
                sources     = JSON.parse(this.getConfig('media').partnerData)['sources'];
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
})(kWidget,jQuery)
cdn.catturavideo.com/assets/sourcetoggle/2.0.0/js/switcher-min.js