!function(){function e(){h=window.innerWidth,f=window.innerHeight,g={x:h/2,y:f/2},p=document.getElementById("header"),p.width=h,p.height=f,d=p.getContext("2d"),m=[];for(var e=0;h>e;e+=h/35)for(var t=0;f>t;t+=f/35){var n=e+Math.random()*h/20,i=t+Math.random()*f/20,r={x:n,originX:n,y:i,originY:i};m.push(r)}for(var o=0;o<m.length;o++){for(var a=[],s=m[o],c=0;c<m.length;c++){var v=m[c];if(s!=v){for(var y=!1,w=0;5>w;w++)y||void 0==a[w]&&(a[w]=v,y=!0);for(var w=0;5>w;w++)y||u(s,v)<u(s,a[w])&&(a[w]=v,y=!0)}}s.closest=a}for(var o in m){var b=new l(m[o],2+2*Math.random(),"rgba(255,255,255,0.3)");m[o].circle=b}}function t(){"ontouchstart"in window||window.addEventListener("mousemove",n),window.addEventListener("scroll",i),window.addEventListener("resize",r)}function n(e){var t=posy=0;e.pageX||e.pageY?(t=e.pageX,posy=e.pageY):(e.clientX||e.clientY)&&(t=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,posy=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),g.x=t,g.y=posy}function i(){v=document.body.scrollTop>f?!1:!0}function r(){h=window.innerWidth,f=window.innerHeight,p.width=h,p.height=f}function o(){a();for(var e in m)s(m[e])}function a(){if(v){d.clearRect(0,0,h,f);for(var e in m)m[e].active=.02,m[e].circle.active=.02,c(m[e])}requestAnimationFrame(a)}function s(e){TweenLite.to(e,1+1*Math.random(),{x:e.originX-50+100*Math.random(),y:e.originY-50+100*Math.random(),ease:Circ.easeInOut,onComplete:function(){s(e)}})}function c(e){if(e.active)for(var t in e.closest)d.beginPath(),d.moveTo(e.x,e.y),d.lineTo(e.closest[t].x,e.closest[t].y),d.strokeStyle="rgba(127, 140, 141,"+e.active+")",d.stroke()}function l(e,t,n){var i=this;!function(){i.pos=e||null,i.radius=t||null,i.color=n||null}(),this.draw=function(){i.active&&(d.beginPath(),d.arc(i.pos.x,i.pos.y,i.radius,0,2*Math.PI,!1),d.fillStyle="rgba(127, 140, 141"+i.active+")",d.fill())}}function u(e,t){return Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)}var h,f,p,d,m,g,v=!0;e(),o(),t()}();
