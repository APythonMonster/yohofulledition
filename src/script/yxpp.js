require(['config'], function () {
    require(['jquery'], function () {
        // require(['lazyload'], function () {
        $.ajax({
            url: 'http://10.31.155.38/test/yohoo_fake/php/yxpp.php',
            dataType: 'json'
        }).done(function (arrdata) {
            let f_str = '', s_str = '',str = '';
            $.each(arrdata, function (index, value) {
                if (index < 2) {
                    $.each([0, 1, 2, 3, 4, 5], function () {
                        f_str += `<li><a href="details.html?sid=${value.sid}" target="_blank"><img src="${value.url}"/></a></li>`
                    })
                }else{
                    $.each([0,1,2,3,4],function(){
                        s_str += `<li><a href="details.html?sid=${value.sid}" target="_blank"><img src="${value.url}"/></a></li>`
                    })
                    s_str +=  `<li><a href="javascript:;" target="_blank" >MORE &gt;</a></li>`
                }
            });
            str = f_str+s_str;
            $('.preference-brand .logo-brand ul').html(str);
        })
        // $(function () { //页面加载完成
        //     $("img.lazy").lazyload({
        //         effect: "fadeIn" //效果方式
        //     });
        // });
        // })
    })
})
