require(['config'], function () {
    require(['jquery'], function () {
        require(['lazyload'],function(){
            $.ajax({
                url:'http://10.31.155.38/test/yohoo_fake/php/common_conn.php',
                dataType:'json'
            }).done(function(d){
                let clsztr1 = '',clszstr2 = '',clxzstr1='',clxzstr2='',ssxlstr1='',ssxlstr2='',crpsstr1='',crpsstr2='';
                    $.each(d, function (index, value) {
                        // 潮流上装
                        if(index<=1){
                            $.each([0,1,2],function(){
                                clsztr1 += `<li><a href="details.html?sid=${value.sid}" target="_blank"><img class="lazy" data-original="${value.url}" width="185" height="248"></li>`;
                            })
                        }
                        else if(index==2){
                            $.each([0,1,2,3,4],function(){
                                clszstr2 += `<li><a href="details.html?sid=${value.sid}" target="_blank"><img class="lazy" data-original="${value.url}" width="222" height="298"></li>`;
                            })
                        }
                        // 潮流下装
                        else if(index>2 && index<=4){
                            $.each([0,1,2],function(){
                                clxzstr1 += `<li><a href="details.html?sid=${value.sid}" target="_blank"><img class="lazy" data-original="${value.url}" width="185" height="248"></li>`;
                            })
                        }
                        else if(index==5){
                            $.each([0,1,2,3,4],function(){
                                clxzstr2 += `<li><a href="details.html?sid=${value.sid}" target="_blank"><img class="lazy" data-original="${value.url}" width="222" height="298"></li>`;
                            })
                        } 
                        // 时尚鞋履
                        else if(index>5 && index<= 7){
                            $.each([0,1,2],function(){
                                ssxlstr1 += `<li><a href="details.html?sid=${value.sid}" target="_blank"><img class="lazy" data-original="${value.url}" width="185" height="248"></li>`;
                            })
                        }
                        else if(index==8){
                            $.each([0,1,2,3,4],function(){
                                ssxlstr2 += `<li><a href="details.html?sid=${value.sid}" target="_blank"><img class="lazy" data-original="${value.url}" width="222" height="298"></li>`;
                            })
                        }    
                        // 潮人配饰
                        else if(index>8 && index<= 10){
                            $.each([0,1,2],function(){
                                crpsstr1 += `<li><a href="details.html?sid=${value.sid}" target="_blank"><img class="lazy" data-original="${value.url}" width="185" height="248"></li>`;
                            })
                        }
                        else if(index==11){
                            $.each([0,1,2,3,4],function(){
                                crpsstr2 += `<li><a href="details.html?sid=${value.sid}" target="_blank"><img class="lazy" data-original="${value.url}" width="222" height="298"></li>`;
                            })
                        }  
                    });
                    $('#clsz .tpl-types ul').html(clsztr1);
                    $('#clsz .tpl-products ul').html(clszstr2);
                    $('#clxz .tpl-types ul').html(clxzstr1);
                    $('#clxz .tpl-products ul').html(clxzstr2);
                    $('#ssxl .tpl-types ul').html(ssxlstr1);
                    $('#ssxl .tpl-products ul').html(ssxlstr2);
                    $('#crps .tpl-types ul').html(crpsstr1);
                    $('#crps .tpl-products ul').html(crpsstr2);
    
                    $(function () { //页面加载完成
                        $("img.lazy").lazyload({
                            effect: "fadeIn" //效果方式
                        });
                    });
            
            })
        });
       
    })
})