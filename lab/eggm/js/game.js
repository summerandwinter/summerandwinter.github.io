var canvas=document.getElementById("canvas");canvas.setAttribute("width",$(document).width()),canvas.setAttribute("height",$(document).height()),console.log(screen.availHeight);var game,stage,egg,beat,boxs,eggI,loading,ctx=canvas.getContext("2d"),prize={name:"数码相机",img:"",success:!0},prizes=[],count=1,place=0,colorParticles=[],logos=[],eggResource={egg:{name:"舞台金蛋",url:"images/beta/egg.png"},egg1:{name:"金蛋",url:"images/beta/egg1.png"},egg2_1:{name:"金蛋碎开前景",url:"images/beta/egg2_1.png"},egg2_2:{name:"金蛋碎开背景",url:"images/beta/egg2_2.png"},goback:{name:"返回菜单",url:"images/beta/goback.png"},start:{name:"开始菜单",url:"images/beta/start.png"},gs:{name:"光束",url:"images/beta/gs.png"},gs2:{name:"光束2",url:"images/beta/gs2.png"},coin:{name:"金币",url:"images/beta/coin.png"},bg:{name:"列表背景",url:"images/beta/bg.jpg"},stage_bg:{name:"舞台背景",url:"images/beta/stage_bg.jpg"},gash:{name:"裂纹",url:"images/beta/gash.png"},gift:{name:"礼品",url:"images/beta/gift.png"},beat:{name:"锤子",url:"images/beta/beat.png"},bong:{name:"Bong",url:"images/bong.png"},unprize:{name:"无奖",url:"images/unprize.jpg"},color:{name:"彩带花絮",url:"images/beta/color.png"},logo:{name:"logo",url:"images/beta/logo.png"}},Resource=$.extend(eggResource,prizeResource),fireworks=[],particles=[],bongs=[],hue=random(0,255),ResourceTotalCount=0,ResourceCurrentCount=0;for(var i in Resource)Resource.hasOwnProperty(i)&&ResourceTotalCount++;for(var i in console.log(ResourceTotalCount),Resource)Resource.hasOwnProperty(i)&&(console.log(Resource[i].name),Resource[i].image=new Image,Resource[i].image.src=Resource[i].url,Resource[i].image.onload=function(){if(ResourceTotalCount<=++ResourceCurrentCount){for(var e in Resource)Resource.hasOwnProperty(e)&&(Resource[e].width&&(Resource[e].height=Resource[e].width/Resource[e].image.width*Resource[e].image.height),Resource[e].height&&(Resource[e].width=Resource[e].height/Resource[e].image.height*Resource[e].image.width));(game=new Game(canvas)).createGameScene(prize),console.log("ResourceCurrentCount="+ResourceCurrentCount)}});function getRes(e){var a=Resource[e];return a.width||(a.width=a.image.width,a.height=a.image.height),a}function Game(e){var n=this;this.canvas=e,this.ctx=e.getContext("2d"),this.stageW=e.width,this.stageH=e.height,this.cw=window.innerWidth,this.ch=window.innerHeight,this.createGameScene=function(e){this.prize=e,this.start()},this.start=function(){(boxs=$(".prize-egg-a")).bind("click",function(e){var a,t,s;eggI=boxs.index($(this)),$("#close-btn").addClass("hidden"),$("#cancel-btn").removeClass("hidden"),$("#beat-egg-btn").removeClass("hidden"),$("#canvas-box").addClass("top").show(),$("#main").hide(),a=getRes("egg"),t=(n.stageW-a.width)/2,s=(n.stageH-a.height)/2+110,egg=new Egg(n.ctx,t,s),stage=new Stage(n.ctx)}),$(".canvas-tool a").bind("click",function(e){var a=e.target;e.currentTarget,$(a).hasClass("cancel")&&(boxs.eq(eggI).css({opacity:1}).removeClass("doing"),$("#main").show(),$("#canvas-box").removeClass("top").hide()),$(a).hasClass("beat-egg")&&(beat=new Beat(n.ctx),$.ajax({type:"GET",url:"/lab/egg/data.json",data:{},success:function(e){console.log(e);var g=e.prize;(function e(){if(requestAnimFrame(e),2==egg.status&&!prizes.length){var a=getRes(g);console.log(a);var t=(n.stageW-a.width)/2,s=3*(n.stageH-a.height)/7+50;prizes.push(new Prize(n.ctx,t,s,g)),$("#close-btn").removeClass("hidden")}}).call(n)}}),$("#cancel-btn").addClass("hidden"),$("#beat-egg-btn").addClass("hidden")),$(a).hasClass("close")&&(prizes=[],particles=[],stage=egg=null,fireworks=[],bongs=[],$("#main").show(),$("#canvas-box").removeClass("top").hide())})},this.restart=function(){},function e(){requestAnimFrame(e),n.ctx.fillRect(0,0,n.stageW,n.stageH),stage&&(stage.draw(),stage.update()),hue+=.5,egg&&(egg.draw(),egg.update(),1==egg.status&&(bongs.length||0!=egg.bong||(egg.bong=1))),beat&&(beat.draw(),beat.update(),1==beat.status&&(beat=null,egg.status=1));for(var a=fireworks.length;a--;)fireworks[a].draw(),fireworks[a].update(a);for(a=particles.length-1;0<=a;a--)(s=particles[a]).draw(),s.update(a);for(a=prizes.length-1;0<=a;a--){var t=prizes[a];t.draw(),t.update(a)}for(a=bongs.length;a--;)bongs[a].draw(),bongs[a].update(a);for(a=logos.length-1;0<=a;a--){var s;(s=logos[a]).draw(),s.update(a)}loading&&(loading.draw(),loading.update())}.call(n),this.createParticles=function(e,a){},this.createBongs=function(){for(var e=random(20,30),a=n.stageW/2,t=n.stageH-100,s=0;s<e;s++)bongs.push(new Bong(n.ctx,a,t))},this.createBong=function(){var e=n.stageW/2,a=n.stageH-100;bongs.push(new Bong(n.ctx,e,a))},this.createFireworks=function(e,a){},this.fireworkLaunch=function(){},this.fireworksLaunch=function(){}}function getImageData(e){for(var a=ctx.getImageData(0,0,canvas.width,canvas.height),t=0;t<a.width;t++)for(var s=0;s<a.height;s++){var g=4*(s*a.width+t);128<a.data[g+3]&&++place%1==0&&e.push(new ColorParticle(ctx,t,s,a.data[g],a.data[g+1],a.data[g+2],a.data[g+3]))}}