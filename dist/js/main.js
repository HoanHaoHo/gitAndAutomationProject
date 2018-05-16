"use strict";var level=1;document.getElementById("lvl").innerHTML=level;var HighestLevel=1;document.getElementById("high").innerHTML=HighestLevel;var Enemy=function(e,t,n){this.x=e,this.y=t,this.speed=Math.floor(100*Math.random()),this.sprite="images/enemy-bug.png"};Enemy.prototype.update=function(e){this.x=this.x+this.speed*e,510<this.x&&(this.x=-20),this.x<player.x+25&&this.x+55>player.x&&this.y<player.y+60&&this.y+40>player.y&&(HighestLevel=level=1,document.getElementById("high").innerHTML=HighestLevel,player.reset()),2===level&&(this.x=this.x+this.speed*e+1),3===level&&(this.x=this.x+this.speed*e+1.5),4===level&&(this.x=this.x+this.speed*e+2),5===level&&(this.x=this.x+this.speed*e+2.5),6===level&&(this.x=this.x+this.speed*e+3),7===level&&(this.x=this.x+this.speed*e+3.5),8===level&&(this.x=this.x+this.speed*e+4),9===level&&(this.x=this.x+this.speed*e+5),10===level&&alert("You are too fast , we will update new version for you later!!!")},Enemy.prototype.render=function(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)};var Player=function(e,t){this.x=e,this.y=t,this.sprite="images/char-boy.png"};Player.prototype.update=function(){},Player.prototype.render=function(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)},Player.prototype.handleInput=function(e){"left"===e&&35<this.x&&(this.x=this.x-100),"right"===e&&this.x<400&&(this.x=this.x+100),"up"===e&&(50<this.y?this.y=this.y-90:(this.reset(),level++,document.getElementById("lvl").innerHTML=level,HighestLevel++,document.getElementById("high").innerHTML=HighestLevel)),"down"===e&&this.y<400&&(this.y=this.y+100)},Player.prototype.reset=function(){this.x=200,this.y=400};var enemy1=new Enemy(-20,50,300),enemy2=new Enemy(-10,135,200),enemy3=new Enemy(5,220,200),enemy4=new Enemy(50,300,500),enemy5=new Enemy(-100,50,400),allEnemies=[enemy1,enemy2,enemy3,enemy4,enemy5],player=new Player(200,400);document.addEventListener("keyup",function(e){player.handleInput({37:"left",38:"up",39:"right",40:"down"}[e.keyCode])});var Engine=function(e){var n,t=e.document,i=e.window,s=t.createElement("canvas"),r=s.getContext("2d");function a(){var t,e=Date.now();t=(e-n)/1e3,allEnemies.forEach(function(e){e.update(t)}),player.update(),function(){var e,t,n=["images/water-block.png","images/stone-block.png","images/stone-block.png","images/stone-block.png","images/grass-block.png","images/grass-block.png"];for(r.clearRect(0,0,s.width,s.height),e=0;e<6;e++)for(t=0;t<5;t++)r.drawImage(Resources.get(n[e]),101*t,83*e);allEnemies.forEach(function(e){e.render()}),player.render()}(),n=e,i.requestAnimationFrame(a)}s.width=505,s.height=606,t.body.appendChild(s),Resources.load(["images/stone-block.png","images/water-block.png","images/grass-block.png","images/enemy-bug.png","images/char-boy.png","images/char-cat-girl.png","images/char-horn-girl.png","images/enemy-bug.png"]),Resources.onReady(function(){n=Date.now(),a()}),e.ctx=r}(void 0);!function(){var n={},i=[];function t(e){if(n[e])return n[e];var t=new Image;t.onload=function(){n[e]=t,s()&&i.forEach(function(e){e()})},n[e]=!1,t.src=e}function s(){var e=!0;for(var t in n)n.hasOwnProperty(t)&&!n[t]&&(e=!1);return e}window.Resources={load:function(e){e instanceof Array?e.forEach(function(e){t(e)}):t(e)},get:function(e){return n[e]},onReady:function(e){i.push(e)},isReady:s}}();