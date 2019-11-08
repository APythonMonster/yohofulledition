require(['config'], function () {
    require(['jquery'], function () {
        
            const loutinav = $('#loutinav');
            const navli = $('#loutinav ul li').not('.last');
            const backtop = $('.last');
            const louceng = $('.louceng');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 200) {
                    loutinav.show();
                } else {
                    loutinav.hide();
                }
                // 滑动改变
                louceng.each(function (i, e) {
                    if ($(window).scrollTop() < $(e).offset().top + $(e).height() / 2) {
                        navli.eq(i).siblings('li').removeClass('active');
                        navli.eq(i).addClass('active');
                        return false
                    }
                })
            })
            // 点击跳转
            navli.on('click', function () {
                $(this).addClass('active').siblings('li').removeClass('active');
                let $loucengtop = louceng.eq($(this).index()).offset().top;
                $('html').animate({
                    scrollTop: $loucengtop
                })
            })
            backtop.on('click', function () {
                $('html,body').animate({
                    scrollTop: 0
                });
            });
        
    })
})
