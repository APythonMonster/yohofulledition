"use strict";require(["config"],function(){require(["jquery"],function(){$.ajax({url:"http://10.31.155.38/test/yohoo_fake/php/list2.php",dataType:"json"}).done(function(r){var i="";$.each(r,function(e,r){i+='<li><a href="javascript:;" target="_blank"></a><img src="'+r.url+'"></li>'}),$(".preference-brand .img-list").html(i),$(".preference-brand .img-list").css({width:$(".preference-brand .img-list li").size()*($(".preference-brand .img-list li").width()+8)});var t=$(".preference-brand .img-list li").size()*($(".preference-brand .img-list li").width()+8)/2,a=0,e=null;function n(){a++,$(".preference-brand .img-list").css({left:-t}),$(".preference-brand .img-list").animate({left:parseInt($(".preference-brand .img-list").css("left"))+t});var i="",n="",e="";$.each(r,function(e,r){e<=2?i+='<li><a href="javascript:;" target="_blank"></a><img src="'+r.url+'"></li>':n+='<li><a href="javascript:;" target="_blank"></a><img src="'+r.url+'"></li>'}),e=a%2!=0?n+i:i+n,$(".preference-brand .img-list").html(e)}$(".img-brand .prev").on("click",function(){a++,$(".preference-brand .img-list").css({left:0}),$(".preference-brand .img-list").animate({left:parseInt($(".preference-brand .img-list").css("left"))-t});var i="",n="",e="";$.each(r,function(e,r){e<=2?i+='<li><a href="javascript:;" target="_blank"></a><img src="'+r.url+'"></li>':n+='<li><a href="javascript:;" target="_blank"></a><img src="'+r.url+'"></li>'}),e=a%2==0?n+i:i+n,$(".preference-brand .img-list").html(e)}),$(".img-brand .next").on("click",function(){n()}),e=setInterval(function(){n()},3e3),$(".img-brand").on("mouseover",function(){clearInterval(e)}),$(".img-brand").on("mouseout",function(){e=setInterval(function(){n()},3e3)})})})});