"use strict";require(["config"],function(){require(["jquery"],function(){require(["lazyload"],function(){$.ajax({url:"http://10.31.155.38/test/yohoo_fake/php/rqdp_conn.php",dataType:"json"}).done(function(a){var t="";$.each(a,function(a,i){t+=1==a||9==a?'<li><a href="javascript:;" target="_blank"><img class="lazy" data-original="'+i.url+'" width="378" height="248"/></li>':'<li><a href="details.html?sid='+i.sid+'" target="_blank"><img class="lazy" data-original="'+i.url+'" width="185" height="248"/></li>'}),$(".singlehot .rqdp_list").html(t)}),$(function(){$("img.lazy").lazyload({effect:"fadeIn"})})})})});