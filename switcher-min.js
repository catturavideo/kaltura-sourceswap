(function(e,t){mw.kalturaPluginWrapper(function(){function i(e,t,n,r){if(r==true){return"<li class='sourceItem' data-id='"+e+"' style='white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'><img src='"+t+"' alt='"+n+"_image' style='width: 60px;float: left;margin-right: 5%;margin-left: 5px;margin-top: 5px;margin-bottom: 5px;'/><span>"+n+"</span></li><div class='afters'></div>"}else{return"<li class='sourceItem' data-id='"+e+"' style='white-space: nowrap; overflow: hidden; text-overflow: ellipsis; border-bottom: 1px solid gray;'><img src='"+t+"' alt='"+n+"_image' style='width: 60px;float: left;margin-right: 5%;margin-left: 5px;margin-top: 5px;margin-bottom: 5px;'/><span>"+n+"</span></li><div class='afters'></div>"}}var n;var r;mw.PluginManager.add("switcher",mw.KBaseComponent.extend({defaultConfig:{parent:"controlsContainer",order:51,displayImportance:"low",align:"right",cssClass:null,title:"Switch",media:"{mediaProxy.entry}",img:"https://dt3nu9g2bp5s4.cloudfront.net/assets/sourcetoggle/2.0.0/img/cam.png"},getComponent:function(e){var s=this;if(!this.$el){var o=[];if(this.getConfig("img")){o=t("<img />").attr({alt:this.getConfig("title"),src:this.getConfig("img"),"class":"switchButton"}).css({position:"relative","z-index":"999",cursor:"pointer","margin-top":"9px","user-drag":"none","-moz-user-select":"none","-webkit-user-drag":"none"})}var u=t("<div />").attr({"class":"sourceList hide"});var a=function(e){var t=u.hasClass("hide");u.toggleClass("hide",!t).toggleClass("show",t);e.stopPropagation()};this.$el=t("<div />").addClass(this.getCssClass()).click(a).css({cursor:"pointer",position:"relative","z-index":"900"}).append(o).append(u);if(r.length<=1){o.attr({src:"https://dt3nu9g2bp5s4.cloudfront.net/assets/sourcetoggle/2.0.0/img/nocam.png"});this.$el.unbind("click",a);return this.$el}n.then(function(){var e=" ("+arguments[0].name+")";var n="<ul style ='list-style: none; position: absolute; right: 0; bottom: 100%; display: block; background-color: #222222; margin: 0; padding: 0px; width: 200px;'>";n+=i(arguments[0].rootEntryId,arguments[0].thumbnailUrl,"Main Media",false);for(var r=1;r<arguments.length;r++){var o=arguments[r].name.replace(e,"");if(arguments.length-1==r){n+=i(arguments[r].rootEntryId,arguments[r].thumbnailUrl,o,true)}else{n+=i(arguments[r].rootEntryId,arguments[r].thumbnailUrl,o,false)}}u.html(n+"</ul>");t(".sourceItem").mouseenter(function(){t(this).css({background:"#B1B1B1",color:"#000000"})}).mouseleave(function(){t(this).css({background:"#222222",color:"#ffffff"})});t(".afters").css({content:"",clear:"both",display:"table"});u.find("ul").children().first().addClass("selectedVid").css({"border-right":"5px solid #CE2473"});u.find("li").click(function(e){if(t(e.currentTarget).data("id")!=s.getConfig("media").id){t(".selectedVid").css({"border-right":"0px"}).removeClass("selectedVid");t(this).addClass("selectedVid").css({"border-right":"5px solid #CE2473"});var n=s.getPlayer().currentTime;var r=function(){s.getPlayer().sendNotification("doPlay");s.unbind("onChangeMediaDone",r)};s.getPlayer().startTime=n;s.getPlayer().sendNotification("changeMedia",{entryId:t(e.currentTarget).data("id")});s.bind("onChangeMediaDone",r)}})});t(window).click(function(){u.addClass("hide")})}return this.$el},setup:function(){r=[];r=JSON.parse(this.getConfig("media").partnerData)["sources"];if(r.length>=1){r.unshift(this.getConfig("media").id)}else{r=[this.getConfig("media").id]}var i=new e.api({wid:this.getPlayer().evaluate("{configProxy.kw.id}")});var s=function(e){var n=t.Deferred();i.doRequest({service:"media",action:"get",entryId:e},n.resolve);return n.promise()};for(var o=0,u=[];o<r.length;o++){u.push(s(r[o]))}n=t.when.apply(t,u)}}))})})(kWidget,jQuery)