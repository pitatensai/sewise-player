(function(a){a.SewisePlayerSkin={version:"1.0.0"};a.SewisePlayer=a.SewisePlayer||{}})(window);(function(a){a.SewisePlayer.IVodPlayer=a.SewisePlayer.IVodPlayer||{play:function(){},pause:function(){},stop:function(){},seek:function(){},changeClarity:function(){},setVolume:function(){},toPlay:function(){},duration:function(){},playTime:function(){},type:function(){},showTextTip:function(){},hideTextTip:function(){},muted:function(){}}})(window);(function(a){a.SewisePlayerSkin.IVodSkin=a.SewisePlayerSkin.IVodSkin||{player:function(){},started:function(){},paused:function(){},stopped:function(){},seeking:function(){},buffering:function(){},bufferProgress:function(){},loadedProgress:function(){},loadedOpen:function(){},loadedComplete:function(){},programTitle:function(){},duration:function(){},playTime:function(){},startTime:function(){},loadSpeed:function(){},initialClarity:function(){},lang:function(){},logo:function(){},timeUpdate:function(){},
volume:function(){},clarityButton:function(){},timeDisplay:function(){},controlBarDisplay:function(){},topBarDisplay:function(){},customStrings:function(){},fullScreen:function(){},noramlScreen:function(){},initialAds:function(){}}})(window);(function(){SewisePlayerSkin.Utils={stringer:{time2FigFill:function(a){var b,a=Math.floor(a);10>a?b="0"+a:b=""+a;return b},secondsToHMS:function(a){if(!(0>a)){var b=this.time2FigFill(Math.floor(a/3600)),h=this.time2FigFill(a/60%60),a=this.time2FigFill(a%60);return b+":"+h+":"+a}},secondsToMS:function(a){if(!(0>a)){var b=this.time2FigFill(a/60),a=this.time2FigFill(a%60);return b+":"+a}},dateToTimeString:function(a){var b;b=a?a:new Date;var a=b.getFullYear(),h=b.getMonth()+1,f=b.getDate(),k=this.time2FigFill(b.getHours()),
d=this.time2FigFill(b.getMinutes());b=this.time2FigFill(b.getSeconds());return a+"-"+h+"-"+f+" "+k+":"+d+":"+b},dateToTimeStr14:function(a){var b=a.getFullYear(),h=this.time2FigFill(a.getMonth()+1),f=this.time2FigFill(a.getDate()),k=this.time2FigFill(a.getHours()),d=this.time2FigFill(a.getMinutes()),a=this.time2FigFill(a.getSeconds());return b+h+f+k+d+a},dateToStrHMS:function(a){var b=this.time2FigFill(a.getHours()),h=this.time2FigFill(a.getMinutes()),a=this.time2FigFill(a.getSeconds());return b+
":"+h+":"+a},dateToYMD:function(a){var b=a.getFullYear(),h=this.time2FigFill(a.getMonth()+1),a=this.time2FigFill(a.getUTCDate());return b+"-"+h+"-"+a},hmsToDate:function(a){var a=a.split(":"),b=new Date;b.setHours(a[0]?a[0]:0,a[1]?a[1]:0,a[2]?a[2]:0);return b}},language:{zh_cn:{stop:"\u505c\u6b62\u64ad\u653e",pause:"\u6682\u505c",play:"\u64ad\u653e",fullScreen:"\u5168\u5c4f",normalScreen:"\u6062\u590d",soundOn:"\u6253\u5f00\u58f0\u97f3",soundOff:"\u5173\u95ed\u58f0\u97f3",clarity:"\u6e05\u6670\u5ea6",
titleTip:"\u6b63\u5728\u64ad\u653e\uff1a",claritySetting:"\u6e05\u6670\u5ea6\u8bbe\u7f6e",clarityOk:"\u786e\u5b9a",clarityCancel:"\u53d6\u6d88",backToLive:"\u56de\u5230\u76f4\u64ad",loading:"\u7f13\u51b2",subtitles:"\u5b57\u5e55","default":"\u9ed8\u8ba4"},en_us:{stop:"Stop",pause:"Pause",play:"Play",fullScreen:"Full Screen",normalScreen:"Normal Screen",soundOn:"Sound On",soundOff:"Sound Off",clarity:"Clarity",titleTip:"Playing: ",claritySetting:"Definition Setting",clarityOk:"OK",clarityCancel:"Cancel",
backToLive:"Back To Live",loading:"Loading",subtitles:"Subtitles","default":"Default"},lang:{},init:function(a){switch(a){case "en_US":this.lang=this.en_us;break;case "zh_CN":this.lang=this.zh_cn;break;default:this.lang=this.zh_cn}},getString:function(a){return this.lang[a]}}}})();(function(a){SewisePlayerSkin.BannersAds=function(b,h){function f(){B=SewisePlayerSkin.Utils.stringer.dateToYMD(new Date);m=h[B]||h["0000-00-00"];i=0;if(void 0!=m)u=m.length}function k(){for(var a=(new Date).getTime(),b=0;b<u;b++){var g=SewisePlayerSkin.Utils.stringer.hmsToDate(m[b].time).getTime();if(b<u-1){var d=SewisePlayerSkin.Utils.stringer.hmsToDate(m[b+1].time).getTime();if(a>g&&a<d){i=b;j(i);break}}else if(a>g){i=b;j(i);break}}}function d(){var a=(new Date).getTime();if(i<u-1){var b=SewisePlayerSkin.Utils.stringer.hmsToDate(m[i+
1].time).getTime();a>b&&(i++,j(i))}else SewisePlayerSkin.Utils.stringer.dateToYMD(new Date)!=B&&(f(),k())}function j(a){g=m[a].ads[0].picurl;n=m[a].ads[1].picurl;""==g&&""==n||(""==g&&""!=n?g=n:""!=g&&""==n&&(n=g),c.attr("src",g),s.attr("src",n))}var l=a(' <div style="position:absolute; display:table; width:100%; height:100%;"><div style="display:table-cell; text-align:left; vertical-align:middle;"><img style="pointer-events:auto; cursor:pointer; width: auto; height: auto;"></div></div> ');l.appendTo(b);
var c=l.find("img"),l=a(' <div style="position:absolute; display:table; width:100%; height:100%;"><div style="display:table-cell; text-align:right; vertical-align:middle;"><img style="pointer-events:auto; cursor:pointer; width: auto; height: auto;"></div></div> ');l.appendTo(b);var s=l.find("img"),g,n,B,m,i,u;f();void 0!=m&&(1==u&&""==m[0].time?j(0):(k(),setInterval(d,1E4)),c.click(function(a){a.originalEvent.stopPropagation();a=m[i].ads[0].link_url;window.openAdsLink&&"function"==typeof window.openAdsLink?
window.openAdsLink(a):window.open(a,"_blank")}),s.click(function(a){a.originalEvent.stopPropagation();a=m[i].ads[1].link_url;window.openAdsLink&&"function"==typeof window.openAdsLink?window.openAdsLink(a):window.open(a,"_blank")}))}})(window.jQuery);(function(a){SewisePlayerSkin.AdsContainer=function(b,h){var f=b.$container,k=b.$sewisePlayerUi,d=h.banners;if(d){var j=a("<div class='sewise-player-ads-banner'></div>");j.css({position:"absolute",width:"100%",height:"100%",left:"0px",top:"0px",overflow:"hidden","pointer-events":"none"});j.appendTo(f);k.css("z-index",1);SewisePlayerSkin.BannersAds(j,d)}}})(window.jQuery);(function(a){SewisePlayerSkin.ElementObject=function(){this.$sewisePlayerUi=a(".sewise-player-ui");this.$container=this.$sewisePlayerUi.parent();this.$video=this.$container.find("video").get(0);this.$controlbar=this.$sewisePlayerUi.find(".controlbar");this.$playBtn=this.$sewisePlayerUi.find(".controlbar-btns-play");this.$pauseBtn=this.$sewisePlayerUi.find(".controlbar-btns-pause");this.$stopBtn=this.$sewisePlayerUi.find(".controlbar-btns-stop");this.$fullscreenBtn=this.$sewisePlayerUi.find(".controlbar-btns-fullscreen");
this.$normalscreenBtn=this.$sewisePlayerUi.find(".controlbar-btns-normalscreen");this.$soundopenBtn=this.$sewisePlayerUi.find(".controlbar-btns-soundopen");this.$soundcloseBtn=this.$sewisePlayerUi.find(".controlbar-btns-soundclose");this.$volumelineVolume=this.$sewisePlayerUi.find(".controlbar-volumeline-volume");this.$volumelineDragger=this.$sewisePlayerUi.find(".controlbar-volumeline-dragger");this.$volumelinePoint=this.$sewisePlayerUi.find(".controlbar-volumeline-point");this.$playtime=this.$sewisePlayerUi.find(".controlbar-playtime");
this.$totaltime=this.$sewisePlayerUi.find(".controlbar-totaltime");this.$controlBarProgress=this.$sewisePlayerUi.find(".controlbar-progress");this.$progressPlayedLine=this.$sewisePlayerUi.find(".controlbar-progress-playedline");this.$progressPlayedPoint=this.$sewisePlayerUi.find(".controlbar-progress-playpoint");this.$progressLoadedLine=this.$sewisePlayerUi.find(".controlbar-progress-loadedline");this.$progressSeekLine=this.$sewisePlayerUi.find(".controlbar-progress-seekline");this.$logo=this.$sewisePlayerUi.find(".logo");
this.$logoIcon=this.$sewisePlayerUi.find(".logo-icon");this.$topbar=this.$sewisePlayerUi.find(".topbar");this.$programTip=this.$sewisePlayerUi.find(".topbar-program-tip");this.$programTitle=this.$sewisePlayerUi.find(".topbar-program-title");this.$topbarClock=this.$sewisePlayerUi.find(".topbar-clock");this.$buffer=this.$sewisePlayerUi.find(".buffer");this.$bufferTip=this.$sewisePlayerUi.find(".buffer-text-tip");this.$bigPlayBtn=this.$sewisePlayerUi.find(".big-play-btn");this.$claritySwitchBtn=this.$sewisePlayerUi.find(".clarity-switch-btn");
this.$clarityBtnText=this.$sewisePlayerUi.find(".clarity-btn-text");this.defStageWidth=this.$container.width();this.defStageHeight=this.$container.height();this.defLeftValue=parseInt(this.$container.css("left"));this.defTopValue=parseInt(this.$container.css("top"));this.defOffsetX=this.$container.get(0).getBoundingClientRect().left;this.defOffsetY=this.$container.get(0).getBoundingClientRect().top;this.defOverflow=a("body").css("overflow")}})(window.jQuery);(function(a){SewisePlayerSkin.ElementLayout=function(b){function h(){null!=document.fullscreenElement||null!=document.msFullscreenElement||null!=document.mozFullScreenElement||null!=document.webkitFullscreenElement?j.fullScreen():j.normalScreen()}var f=b.$container,k=b.$controlBarProgress,d=b.$playtime,j=this,l=b.defStageWidth,c=b.defStageHeight,s=b.defLeftValue,g=b.defTopValue,n=b.defOffsetX,B=b.defOffsetY,m=b.defOverflow,i=parseInt(l)-265;0>i&&(i+=d.width(),d.hide());k.css("width",i);document.addEventListener("fullscreenchange",
h);document.addEventListener("MSFullscreenChange",h);document.addEventListener("mozfullscreenchange",h);document.addEventListener("webkitfullscreenchange",h);this.fullScreen=function(b){if("not-support"==b){var b=a(window).width(),c=a(window).height()-8;f.css("width",b);f.css("height",c);b=g-B+"px";f.css("left",s-n+"px");f.css("top",b);a("body").css("overflow","hidden")}else f.css("width","100%"),f.css("height","100%");b=parseInt(f.width())-265;0>b?(b+=d.width(),d.hide()):d.show();k.css("width",b)};
this.normalScreen=function(){f.css("width",l);f.css("height",c);f.css("left",s);f.css("top",g);a("body").css("overflow",m);i=parseInt(l)-265;0>i?(i+=d.width(),d.hide()):d.show();k.css("width",i)}}})(window.jQuery);(function(){SewisePlayerSkin.LogoBox=function(a){var b=a.$logoIcon;b.click(function(a){a.originalEvent.stopPropagation()});this.setLogo=function(a){b.css("background","url("+a+") 0px 0px no-repeat");b.attr("href","http://www.foream.cn/")}}})(window.jQuery);(function(){SewisePlayerSkin.TopBar=function(a){var b=a.$topbar,h=a.$programTip,f=a.$programTitle,k=a.$topbarClock;setInterval(function(){var a=SewisePlayerSkin.Utils.stringer.dateToTimeString();k.text(a)},1E3);this.setTitle=function(a){f.text(a)};this.show=function(){b.css("visibility","visible")};this.hide=function(){b.css("visibility","hidden")};this.hide2=function(){b.hide()};this.initLanguage=function(){var a=SewisePlayerSkin.Utils.language.getString("titleTip");h.text(a)}}})(window.jQuery);(function(a){SewisePlayerSkin.ClarityWindow=function(b){var h=b.$container,f,k,d,j="",l="",c,s,g=0,n=0;this.setPlayer=function(a){f=a};this.setControlBar=function(a){k=a};this.initialClarities=function(b){var m=SewisePlayerSkin.Utils.language.getString("claritySetting"),i=SewisePlayerSkin.Utils.language.getString("clarityOk"),u=SewisePlayerSkin.Utils.language.getString("clarityCancel");c=b;s=c.length;for(b=0;b<s;b++){var E;c[b].selected?(E=' checked = "checked" ',g=b,k.updateClarityBtnText(c[b].name)):
E=" ";j+='<input style="width: 20px; height: 18px; " type="radio" name="radio_clarity"'+E+'"value="'+c[b].name+'">'+c[b].name+"\n"}l='<div style="position:absolute; width: 300px; height: 140px; color: #FFF; border: 2px solid #FF9501; padding: 10px; background: rgba(255, 149, 1, 0.3); "><div><div style="float: left; ">'+m+'</div><div style="float: right; "><a href="javascript:;" name="cancel_clarity" style="color: #FFF; font-weight:bold; text-decoration: none; padding: 4px 6px; ">X</a></div></div><div style="width: 100%; height: 40px; padding: 30px 0px 10px 0px; text-align: center; clear: both;">'+
j+'</div><div style="padding: 10px; text-align: center; "><a href="javascript:;" name="confirm_clarity" style="color: #FFF; text-decoration: none; background-color: #FF9501; padding: 5px 10px; margin-right: 20px; ">'+i+'</a><a href="javascript:;" name="cancel_clarity" style="color: #FFF; text-decoration: none; background-color: #FF9501; padding: 5px 10px; margin-left: 20px; ">'+u+"</a></div><div>";d=a("<div></div>");d.html(l);d.css({position:"absolute",left:"50%",top:"50%","margin-left":"-162px",
"margin-top":"-82px"});d.hide();d.appendTo(h);d.click(function(a){a.originalEvent.stopPropagation()});d.find("[name = confirm_clarity]").click(function(a){a.originalEvent.stopPropagation();d.hide();g!=n&&(g=n,k.updateClarityBtnText(c[g].name),f.changeClarity({name:c[g].name,videoUrl:c[g].videoUrl,id:c[g].id,selected:!0}),window.saveClarityName&&"function"==typeof window.saveClarityName?window.saveClarityName(c[g].name):console.log("Not found the saveClarityName function of window"))});d.find("[name = cancel_clarity]").click(function(a){a.originalEvent.stopPropagation();
d.hide();n=g});d.find("[name = radio_clarity]").click(function(b){b.originalEvent.stopPropagation();n=a(b.target).index()})};this.toggle=function(){d.toggle();d.find("[name = radio_clarity]").get(g).checked=!0;n=g}}})(window.jQuery);(function(a){SewisePlayerSkin.ControlBar=function(b,h,f,k){function d(){!1==ba&&(F.show(),G.css("visibility","visible"),f.show(),ba=!0,C=setTimeout(c,ca))}function j(){0!=C&&(clearTimeout(C),C=0)}function l(){0==C&&(C=setTimeout(c,ca))}function c(){F.hide();G.css("visibility","hidden");f.hide();ba=!1}function s(a){a=q+(a.pageX-H);0<a&&a<y&&(z.css("width",a),t.css("left",a-M/2))}function g(b){x.unbind("mousemove",s);a(document).unbind("mouseup",g);V=b.pageX;H!=V&&(q=z.width(),I=q/y,o.seek(I*J));N=
!1}function n(a){e=a.originalEvent;1==e.targetTouches.length&&(e.preventDefault(),a=q+(e.targetTouches[0].pageX-H),0<a&&a<y&&(z.css("width",a),t.css("left",a-M/2)))}function B(a){e=a.originalEvent;t.unbind("touchmove",n);t.unbind("touchend",B);if(1==e.changedTouches.length)V=e.changedTouches[0].pageX,H!=V&&(q=z.width(),I=q/y,o.seek(I*J));N=!1}function m(a){a=p+(a.pageX-K);0<a&&a<v&&(w.css("width",a),r.css("left",a-D/2))}function i(b){x.unbind("mousemove",m);a(document).unbind("mouseup",i);W=b.pageX;
K!=W&&(p=w.width(),A=p/v,o.setVolume(A),T())}function u(a){e=a.originalEvent;1==e.targetTouches.length&&(e.preventDefault(),a=p+(e.targetTouches[0].pageX-K),0<a&&a<v&&(w.css("width",a),r.css("left",a-D/2)))}function E(a){e=a.originalEvent;r.unbind("touchmove",u);r.unbind("touchend",E);if(1==e.changedTouches.length)W=e.changedTouches[0].pageX,K!=W&&(p=w.width(),A=p/v,o.setVolume(A),T())}function T(){0<A?(o.muted(!1),O.show(),L.hide()):(o.muted(!0),O.hide(),L.show())}var x=b.$container,U=b.$video,G=
b.$controlbar,X=b.$playBtn,P=b.$pauseBtn,ia=b.$stopBtn,Y=b.$fullscreenBtn,Q=b.$normalscreenBtn,O=b.$soundopenBtn,L=b.$soundcloseBtn,w=b.$volumelineVolume,R=b.$volumelineDragger,r=b.$volumelinePoint,ja=b.$playtime,ka=b.$totaltime,z=b.$progressPlayedLine,t=b.$progressPlayedPoint,la=b.$progressLoadedLine,S=b.$progressSeekLine,da=b.$buffer,ma=b.$bufferTip,Z=b.$bigPlayBtn,F=b.$claritySwitchBtn,na=b.$clarityBtnText,$=this,o,ea="normal",J=0.1,fa=0,ga="00:00:00",ha="00:00:00",M=0,N=!1,H=0,V=0,q=0,y=0,I=0,
ba=!0,D=0,v=0,p=0,A=0,K=0,W=0,C,aa=!1,ca=5E3,M=t.width(),y=S.width(),D=r.width(),v=R.width();P.hide();Q.hide();L.hide();da.hide();C=setTimeout(c,ca);a(U).css("pointer-events","none");x.click(function(){x.mousemove();aa?o.pause():o.play()});x.dblclick(function(){"normal"==ea?$.fullScreen():$.noramlScreen()});x.bind({mousemove:d,touchmove:d});G.bind({mouseover:j,touchstart:j});G.bind({mouseout:l,touchend:l});G.click(function(a){a.originalEvent.stopPropagation()});X.click(function(){o.play()});P.click(function(){o.pause()});
ia.click(function(){o.stop()});Z.click(function(a){a.originalEvent.stopPropagation();o.play()});Y.click(function(){$.fullScreen()});Q.click(function(){$.noramlScreen()});O.click(function(){o.muted(!0);O.hide();L.show();w.css("width",0);r.css("left",-D/2)});L.click(function(){o.muted(!1);O.show();L.hide();w.css("width",p);r.css("left",p-D/2)});F.click(function(a){a.originalEvent.stopPropagation();k.toggle()});S.mousedown(function(a){q=a.pageX-a.target.getBoundingClientRect().left;y=S.width();z.css("width",
q);t.css("left",q-M/2);I=q/y;o.seek(I*J)});t.mousedown(function(b){this.blur();N=!0;H=b.pageX;q=z.width();y=S.width();x.bind("mousemove",s);a(document).bind("mouseup",g)});t.bind("touchstart",function(a){e=a.originalEvent;t.blur();a=e.targetTouches[0];N=!0;H=a.pageX;q=z.width();y=S.width();t.bind("touchmove",n);t.bind("touchend",B)});R.mousedown(function(a){p=a.pageX-a.target.getBoundingClientRect().left;v=R.width();w.css("width",p);r.css("left",p-D/2);A=p/v;o.setVolume(A);T()});r.mousedown(function(b){this.blur();
K=b.pageX;p=w.width();v=R.width();x.bind("mousemove",m);a(document).bind("mouseup",i)});r.bind("touchstart",function(a){e=a.originalEvent;r.blur();K=e.targetTouches[0].pageX;p=w.width();v=R.width();r.bind("touchmove",u);r.bind("touchend",E)});this.setPlayer=function(a){o=a};this.started=function(){X.hide();P.show();Z.hide();aa=!0};this.paused=function(){X.show();P.hide();Z.show();aa=!1};this.stopped=function(){X.show();P.hide();Z.show();aa=!1};this.setDuration=function(a){J=a;ha=SewisePlayerSkin.Utils.stringer.secondsToMS(J);
ka.text(ha)};this.timeUpdate=function(a){fa=a;ga=SewisePlayerSkin.Utils.stringer.secondsToMS(fa);ja.text(ga);N||(q=100*(fa/J)+"%",z.css("width",q),a=z.width()-M/2,t.css("left",a))};this.loadProgress=function(a){la.css("width",100*a+"%")};this.initVolume=function(a){A=a;p=v*A;w.css("width",p);r.css("left",p-D/2);T()};this.hide2=function(){G.hide()};this.hideClarityBtn=function(){F.hide()};this.updateClarityBtnPosition=function(){F.css("top","0%");F.css("margin-top","-5px")};this.updateClarityBtnText=
function(a){na.text(a)};this.fullScreen=function(){Y.hide();Q.show();var a=x.get(0);a.requestFullscreen?a.requestFullscreen():a.msRequestFullscreen?a.msRequestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen?a.webkitRequestFullscreen():U.webkitEnterFullscreen?(U.play(),U.webkitEnterFullscreen(),Y.show(),Q.hide()):h.fullScreen("not-support");ea="full"};this.noramlScreen=function(){Y.show();Q.hide();document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?
document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():h.normalScreen();ea="normal"};this.showBuffer=function(){da.show()};this.hideBuffer=function(){da.hide()};this.initLanguage=function(){var a=SewisePlayerSkin.Utils.language.getString("loading");ma.text(a)}}})(window.jQuery);(function(a,b){b(document).ready(function(){var a=SewisePlayer.IVodPlayer,b=new SewisePlayerSkin.ElementObject,k=new SewisePlayerSkin.ElementLayout(b),d=new SewisePlayerSkin.LogoBox(b),j=new SewisePlayerSkin.TopBar(b),l=new SewisePlayerSkin.ClarityWindow(b),c=new SewisePlayerSkin.ControlBar(b,k,j,l);SewisePlayerSkin.IVodSkin.player=function(b){a=b;c.setPlayer(a);l.setPlayer(a)};SewisePlayerSkin.IVodSkin.started=function(){c.started()};SewisePlayerSkin.IVodSkin.paused=function(){c.paused()};SewisePlayerSkin.IVodSkin.stopped=
function(){c.stopped()};SewisePlayerSkin.IVodSkin.duration=function(a){c.setDuration(a)};SewisePlayerSkin.IVodSkin.timeUpdate=function(a){c.timeUpdate(a)};SewisePlayerSkin.IVodSkin.loadedProgress=function(a){c.loadProgress(a)};SewisePlayerSkin.IVodSkin.loadedOpen=function(){c.showBuffer()};SewisePlayerSkin.IVodSkin.loadedComplete=function(){c.hideBuffer()};SewisePlayerSkin.IVodSkin.programTitle=function(a){j.setTitle(a)};SewisePlayerSkin.IVodSkin.logo=function(a){d.setLogo(a)};SewisePlayerSkin.IVodSkin.volume=
function(a){c.initVolume(a)};SewisePlayerSkin.IVodSkin.initialClarity=function(a){l.setControlBar(c);l.initialClarities(a)};SewisePlayerSkin.IVodSkin.clarityButton=function(a){"enable"!=a&&c.hideClarityBtn()};SewisePlayerSkin.IVodSkin.timeDisplay=function(){};SewisePlayerSkin.IVodSkin.controlBarDisplay=function(a){"enable"!=a&&c.hide2()};SewisePlayerSkin.IVodSkin.topBarDisplay=function(a){"enable"!=a&&(j.hide2(),c.updateClarityBtnPosition())};SewisePlayerSkin.IVodSkin.customStrings=function(){};SewisePlayerSkin.IVodSkin.fullScreen=
function(){c.fullScreen()};SewisePlayerSkin.IVodSkin.noramlScreen=function(){c.noramlScreen()};SewisePlayerSkin.IVodSkin.initialAds=function(a){a&&SewisePlayerSkin.AdsContainer(b,a)};SewisePlayerSkin.IVodSkin.lang=function(a){SewisePlayerSkin.Utils.language.init(a);c.initLanguage();j.initLanguage()};try{SewisePlayer.CommandDispatcher.dispatchEvent({type:SewisePlayer.Events.PLAYER_SKIN_LOADED,playerSkin:SewisePlayerSkin.IVodSkin})}catch(s){console.log("No Main Player")}})})(window,window.jQuery);