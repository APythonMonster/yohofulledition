"use strict";require(["config"],function(){require(["jquery","jqcookie"],function(){var l=location.search.substring(1).split("=")[1];$.ajax({url:"http://10.31.155.38/test/yohoo_fake/php/details.php",data:{id:l},dataType:"json"}).done(function(e){var n=0;console.log(e),$(".neirong .main .name").html(e.title),$(".neirong .main .price").html("￥"+e.price);var o="";$.each(e.color.split(","),function(i,n){o+='<li><img class="color-name_img" src="'+e.sspicurl.split(",")[i]+'" ><span class="color-name">'+n+"</span></li>"}),$(".main .trade-content .color_ul").html(o),$(".main .trade-content .color_ul li").on("click",function(){n=$(this).index();var o="";$.each(JSON.parse(e.urls)[n],function(i,n){o+='<li><img src="'+n+'" ></li>'}),$(".neirong .main .thumbs ul").html(o),$(".neirong .main .spic img").prop("src",JSON.parse(e.urls)[n][0]),$(".neirong .main .thumbs ul li").on("click",function(){var i=$(this).index();$(".neirong .main .spic img").prop("src",JSON.parse(e.urls)[n][i]),$(".neirong #bf").html('<img id="bpic" src="'+JSON.parse(e.urls)[n][i]+'" >'),r()}),$(".neirong #bf").html('<img id="bpic" src="'+JSON.parse(e.urls)[n][0]+'" >'),r()});var t="";$.each(e.size.split(","),function(i,n){t+="<li>"+n+"</li>"}),$(".neirong .main .size-wrapper").html(t),$(".neirong .main .size-wrapper li").on("click",function(){$(this).index()}),$(".neirong .main .spic img").prop("src",JSON.parse(e.urls)[n][0]);var c="";$.each(JSON.parse(e.urls)[n],function(i,n){c+='<li><img src="'+n+'" ></li>'}),$(".neirong .main .thumbs ul").html(c),$(".neirong .main .thumbs ul li").on("click",function(){var i=$(this).index();$(".neirong .main .spic img").prop("src",JSON.parse(e.urls)[n][i]),$(".neirong #bf").html('<img id="bpic" src="'+JSON.parse(e.urls)[n][i]+'" >'),r()}),$(".neirong #bf").html('<img id="bpic" src="'+JSON.parse(e.urls)[n][0]+'" >');var i=1;function r(){$(".main .wrap");var o=$(".main .spic"),e=$(".main #bpic"),t=$(".main .sf"),i=$(".main #bf");t.hide(),i.hide(),o.on("mouseover",function(){t.show(),i.show()}),t.on("mousemove",function(){var i=event.pageX-o.offset().left-t.width()/2,n=event.pageY-o.offset().top-t.height()/2;i<0?i=0:i>o.width()-t.width()&&(i=o.width()-t.width()),n<0?n=0:n>o.height()-t.height()&&(n=o.height()-t.height()),t.css({left:i+"px",top:n+"px"}),e.css({left:-i*c+"px",top:-n*c+"px"})}),o.on("mouseout",function(){t.hide(),i.hide()}),t.width(function(){return i.width()*o.width()/e.width()}),t.height(function(){return i.height()*o.height()/e.height()});var c=e.width()/o.width()}$("#minus-num").on("click",function(){0==--i&&(i=1),$(".chose-count .num").text(i)}),$("#plus-num").on("click",function(){i++,$(".chose-count .num").text(i)}),r();var s=[],a=[];$.cookie("cookieid")&&$.cookie("cookiecount")&&(s=$.cookie("cookieid").split(","),a=$.cookie("cookiecount").split(",")),$("#add-to-cart").on("click",function(){var i=$(".chose-count .num").text();if(-1!==s.indexOf(l)){var n=s.indexOf(l);a[n]=parseInt(a[n])+parseInt(i),$.cookie("cookiecount",a.toString(),{expires:7})}else s.push(l),a.push(i),$.cookie("cookieid",s.toString(),{expires:7}),$.cookie("cookiecount",a.toString(),{expires:7})})})})});