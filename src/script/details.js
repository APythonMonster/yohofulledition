require(['config'], function () {
    require(['jquery', 'jqcookie'], function () {
        let sid = location.search.substring(1).split('=')[1];
        $.ajax({
            url: 'http://10.31.155.38/test/yohoo_fake/php/details.php',
            data: {
                id: sid
            },
            dataType: 'json'
        }).done(function (dataarr) {
            let colorindex = 0, sizeindex = 0;
            console.log(dataarr)
            $('.neirong .main .name').html(dataarr.title)//标题
            $('.neirong .main .price').html('￥' + dataarr.price)//价格
            // 颜色和颜色边上的小小图 渲染
            let colorstr = '';

            $.each(dataarr.color.split(','), function (i, v) {
                colorstr += `<li><img class="color-name_img" src="${dataarr.sspicurl.split(',')[i]}" ><span class="color-name">${v}</span></li>`;
            })
            $('.main .trade-content .color_ul').html(colorstr);
            $('.main .trade-content .color_ul li').on('click', function () {
                colorindex = $(this).index();
                let sltstr = '';
                $.each(JSON.parse(dataarr.urls)[colorindex], function (i, v) {
                    sltstr += `<li><img src="${v}" ></li>`;
                })
                $('.neirong .main .thumbs ul').html(sltstr);
                $('.neirong .main .spic img').prop('src', JSON.parse(dataarr.urls)[colorindex][0])
                $('.neirong .main .thumbs ul li').on('click', function () {
                    let currentindex = $(this).index();
                    $('.neirong .main .spic img').prop('src', JSON.parse(dataarr.urls)[colorindex][currentindex])
                    $('.neirong #bf').html(`<img id="bpic" src="${JSON.parse(dataarr.urls)[colorindex][currentindex]}" >`)
                    fdj()
                })
                $('.neirong #bf').html(`<img id="bpic" src="${JSON.parse(dataarr.urls)[colorindex][0]}" >`)
                fdj()
            })
            // $('.neirong .type-chose .color-name').text(dataarr.color)// 颜色
            // $('.neirong .type-chose .color-name_img').prop('src',dataarr.urls.split(',')[0])// 颜色边上的小小图
            // 尺码
            let sizestr = '';
            $.each(dataarr.size.split(','), function (i, v) {
                sizestr += `<li>${v}</li>`;
            })
            $('.neirong .main .size-wrapper').html(sizestr);
            $('.neirong .main .size-wrapper li').on('click', function () {
                sizeindex = $(this).index()
            })
            //小图
            // console.log(JSON.parse(dataarr.urls)[colorindex])
            $('.neirong .main .spic img').prop('src', JSON.parse(dataarr.urls)[colorindex][0])
            //缩略图渲染
            // console.log(JSON.parse(dataarr.urls)["0"][0])
            let sltstr = '';
            $.each(JSON.parse(dataarr.urls)[colorindex], function (i, v) {
                sltstr += `<li><img src="${v}" ></li>`;
            })
            $('.neirong .main .thumbs ul').html(sltstr);

            // let sltstr = '';
            // $.each(dataarr.urls.split(','), function (i, v) {
            //     sltstr += `<li><img src="${v}" ></li>`;
            // })
            // $('.neirong .main .thumbs ul').html(sltstr);

            // 点击缩略图实现左边spic和bpic切换
            $('.neirong .main .thumbs ul li').on('click', function () {
                let currentindex = $(this).index();
                $('.neirong .main .spic img').prop('src', JSON.parse(dataarr.urls)[colorindex][currentindex])
                $('.neirong #bf').html(`<img id="bpic" src="${JSON.parse(dataarr.urls)[colorindex][currentindex]}" >`)
                fdj()
            })
            // 大图渲染
            $('.neirong #bf').html(`<img id="bpic" src="${JSON.parse(dataarr.urls)[colorindex][0]}" >`)
            // 数量
            // 减
            let count = 1;
            $('#minus-num').on('click', function () {
                count--;
                if (count == 0) {
                    count = 1;
                }
                $('.chose-count .num').text(count)
            })
            // 加
            $('#plus-num').on('click', function () {
                count++;
                $('.chose-count .num').text(count)
            })

            // 放大镜功能
            function fdj() {
                const wrap = $('.main .wrap');
                const spic = $('.main .spic');
                const bpic = $('.main #bpic');
                const sf = $('.main .sf');
                const bf = $('.main #bf');
                sf.hide();
                bf.hide();
                spic.on('mouseover', function () {
                    sf.show();
                    bf.show();
                })
                sf.on('mousemove', function () {
                    let l = event.pageX - spic.offset().left - sf.width() / 2;
                    let h = event.pageY - spic.offset().top - sf.height() / 2;
                    if (l < 0) {
                        l = 0
                    } else if (l > spic.width() - sf.width()) {
                        l = spic.width() - sf.width();
                    }
                    if (h < 0) {
                        h = 0
                    } else if (h > spic.height() - sf.height()) {
                        h = spic.height() - sf.height();
                    }
                    sf.css({
                        'left': l + 'px',
                        'top': h + 'px'
                    })
                    bpic.css({
                        'left': - l * bili + 'px',
                        'top': - h * bili + 'px'
                    })
                })
                spic.on('mouseout', function () {
                    sf.hide();
                    bf.hide();
                })
                // 小放的大小
                sf.width(function () {
                    return bf.width() * spic.width() / bpic.width();
                })
                sf.height(function () {
                    return bf.height() * spic.height() / bpic.height();
                })
                // 获取比例
                let bili = function () {
                    return bpic.width() / spic.width();
                }()
                // console.log(bili)
            }
            fdj()
            // 添加到购物车
            let sidarr = [];
            let countarr = [];

            if ($.cookie('cookieid') && $.cookie('cookiecount') ) {
                sidarr = $.cookie('cookieid').split(',');
                countarr = $.cookie('cookiecount').split(',');
            }
            $('#add-to-cart').on('click', function () {
                let sum = $('.chose-count .num').text();//找到总数量
                if (sidarr.indexOf(sid) !== -1) {//第二次
                    let cartindex = sidarr.indexOf(sid)
                    countarr[cartindex] = parseInt(countarr[cartindex]) + parseInt(sum);
                    $.cookie('cookiecount', countarr.toString(), { expires: 7 });
                } else {//第一次
                    // console.log(colorkind,sizekind)
                    sidarr.push(sid);
                    countarr.push(sum);
                    // console.log(sizearr)
                    $.cookie('cookieid', sidarr.toString(), { expires: 7 });
                    $.cookie('cookiecount', countarr.toString(), { expires: 7 });
                }

            })


        })
    })
})

