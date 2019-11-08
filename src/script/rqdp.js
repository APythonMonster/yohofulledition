require(['config'], function () {
    require(['jquery'], function () {
        require(['lazyload'], function () {
            $.ajax({
                url: 'http://10.31.155.38/test/yohoo_fake/php/rqdp_conn.php',
                dataType: 'json'
            }).done(function (arrdata) {
                let htmlstr = '';
                $.each(arrdata, function (index, value) {
                    if(index==1 || index == 9){
                        htmlstr += `<li><a href="javascript:;" target="_blank"><img class="lazy" data-original="${value.url}" width="378" height="248"/></li>`;
                    }else{
                        htmlstr += `<li><a href="details.html?sid=${value.sid}" target="_blank"><img class="lazy" data-original="${value.url}" width="185" height="248"/></li>`;
                    }
                });
                $('.singlehot .rqdp_list').html(htmlstr);
            })
            $(function () { //页面加载完成
                $("img.lazy").lazyload({
                    effect: "fadeIn" //效果方式
                });
            });
        })
    })
})
