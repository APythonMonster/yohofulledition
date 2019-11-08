require(['config'], function () {
    require(['jquery'], function () {
        $.ajax({
            url: 'http://10.31.155.38/test/yohoo_fake/php/list2.php',
            dataType: 'json'
        }).done(function (data) {

            let str = '';
            $.each(data, function (i, v) {
                str += `<li><a href="javascript:;" target="_blank"></a><img src="${v.url}"></li>`
            })

            $('.preference-brand .img-list').html(str);
            // console.log($('.preference-brand .img-list li').width())
            $('.preference-brand .img-list').css({
                width: $('.preference-brand .img-list li').size() * ($('.preference-brand .img-list li').width() + 8)
            });
            let movedistance = $('.preference-brand .img-list li').size() * ($('.preference-brand .img-list li').width() + 8) / 2;
            let count = 0,timer = null;
            $('.img-brand .prev').on('click', function () {
                // $('.preference-brand .img-list').animate({
                //     left: parseInt($('.preference-brand .img-list').css('left')) - movedistance
                // })
                // let str1 = '', str2 = '', finalstr = '';
                // $.each(data, function (i, v) {
                //     if (i <= 2) {
                //         str1 += `<li><a href="javascript:;" target="_blank"></a><img src="${v.url}"></li>`
                //     } else {
                //         str2 += `<li><a href="javascript:;" target="_blank"></a><img src="${v.url}"></li>`
                //     }
                // })
                // finalstr = str2 + str1;
                // $('.preference-brand .img-list').html(finalstr);
                // $('.preference-brand .img-list').css({
                //     left: 0
                // })

                // 左箭头
                count++;
                $('.preference-brand .img-list').css({
                    left: 0
                })
                $('.preference-brand .img-list').animate({
                    left: parseInt($('.preference-brand .img-list').css('left')) - movedistance
                })
                let str1 = '', str2 = '', finalstr = '';
                $.each(data, function (i, v) {
                    if (i <= 2) {
                        str1 += `<li><a href="javascript:;" target="_blank"></a><img src="${v.url}"></li>`
                    } else {
                        str2 += `<li><a href="javascript:;" target="_blank"></a><img src="${v.url}"></li>`
                    }
                })
                if (count % 2 == 0) {

                    finalstr = str2 + str1;
                    $('.preference-brand .img-list').html(finalstr);
                } else {
                    finalstr = str1 + str2;
                    $('.preference-brand .img-list').html(finalstr);
                }
            })
            // 右箭头
            
                $('.img-brand .next').on('click', function () {
                    next()
                })
            function next(){
                count++;
                    $('.preference-brand .img-list').css({
                        left: -movedistance
                    })
                    $('.preference-brand .img-list').animate({
                        left: parseInt($('.preference-brand .img-list').css('left')) + movedistance
                    })
                    let str1 = '', str2 = '', finalstr = '';
                    $.each(data, function (i, v) {
                        if (i <= 2) {
                            str1 += `<li><a href="javascript:;" target="_blank"></a><img src="${v.url}"></li>`
                        } else {
                            str2 += `<li><a href="javascript:;" target="_blank"></a><img src="${v.url}"></li>`
                        }
                    })
                    if (count % 2 != 0) {

                        finalstr = str2 + str1;
                        $('.preference-brand .img-list').html(finalstr);
                    } else {
                        finalstr = str1 + str2;
                        $('.preference-brand .img-list').html(finalstr);
                    }
            }
            
            timer = setInterval(() => {
                next()
            }, 3000);
            $('.img-brand').on('mouseover',function(){
                clearInterval(timer)
            })
            $('.img-brand').on('mouseout',function(){
                timer = setInterval(function(){
                    next()
                },3000)
            })
        })
    })
})