require(['config'], function () {
    require(['jquery', 'jqcookie'], function () {
        $.ajax({
            url: 'http://10.31.155.38/test/yohoo_fake/php/rqdp_conn.php',
            dataType: 'json'
        }).done(function (data) {
            let sid = $.cookie('cookieid')
            let str = '';
            sid = sid.split(',');
            // console.log(sid)
            $.each(sid, function (index, value) {
                let count = $.cookie('cookiecount').split(',')[index]
                $.each(data, function (i, v) {
                    // console.log(sid); 
                    // console.log(data[i].sid);
                    if (data[i].sid == sid[index]) {
                        // console.log(v)

                        str += `<li class="clearfix goods_li"sid="${sid[index]}" >
                        <div class="pay-pro td " style="width: 368px;margin-left: 60px;position:relative">
                        <i class=" iconfontselect cart-item-checked singleselect" ></i>
                            <a class="pay-pro-icon" href="javascript:;" target="_blank">
                                <img src="${v.url}" style="width: 64px;height:85px;">
                            </a>
                            <div class="pay-pro-info">
                                <a class="info_dsb" href="javascript:;" target="_blank" >
                                    ${v.title}
                                </a>
                                <em class="pay-pro-detail">
                                    <span>
                                        <b title="">颜色：${v.color.split(',')[0]}</b>
                                        尺码：${v.size.split(',')[0]}<i class="iconfont1" style="font-size: 14px;"></i>
                                    </span>
                                </em>
                            </div>
                        </div>
                        <div class="product-price td " style="width:148px;">
                            <p class="p-product-price p-product-price${index}">¥${v.price}</p>
                        </div>
                        <!-- 数量 -->
                        <div class="num-wraper">
                            <span class="minus-plus pull-left">
                                <i  class="iconfont1 minus-num" style="font-size: 12px;line-height: 26px;"></i>
                            </span>
                            <span  class="num num${index} pull-left">${count}</span>
                            <span class="minus-plus pull-left">
                                <i  class="iconfont1 plus-num" style="font-size: 12px;line-height: 24px;"></i>
                            </span>
                        </div>
                        <!-- 小计 -->
                        <div style="width:160px;margin-top: 32px;" class="sub-total td sub-total${index}">
                            ¥${v.price * count}
                        </div>
                        <!-- 操作 -->
                        <div style="width:100px;margin-top: 22px;" class="cart-operation td">
                            <span class="cart-del-btn cart-del-btn${index}">删除</span>
                            <span class="cart-col-btn">移入收藏</span>
                        </div>
                    </div>
                    </li>
                            `

                    }
                })
            })
            $('.promotion-pool .cart-table .goods_ul').html(str)
            // 判断已选商品数量
            let geshu = tongji()
            function tongji() {
                let geshu = 0;
                $.each($('.singleselect'), function (ind, val) {
                    if ($(this).prop('className').indexOf('cart-item-checked') != -1) {
                        geshu++
                    }
                })
                return geshu;
            }
            // 全选
            $('.allselect').on('click', function () {
                if ($(this).prop('className').indexOf('cart-item-checked') != -1) {//取消
                    $(this).removeClass("cart-item-checked").addClass("cart-item-check")
                    $.each($('.singleselect'), function (i, v) {
                        $(this).removeClass("cart-item-checked").addClass("cart-item-check")
                    })
                } else {//加上
                    $(this).removeClass("cart-item-check").addClass("cart-item-checked")
                    $.each($('.singleselect'), function (i, v) {
                        $(this).removeClass("cart-item-check").addClass("cart-item-checked")
                    })
                }
                geshu = tongji()
                // 渲染已选商品数
                $('.ins').text(geshu)
            })
            let sum = 0;
            $('.singleselect').on('click', function () {
                if ($(this).prop('className').indexOf('cart-item-checked') != -1) {//取消
                    $(this).removeClass("cart-item-checked").addClass("cart-item-check")
                    $('.allselect').removeClass("cart-item-checked").addClass("cart-item-check")
                } else {//加上
                    $(this).removeClass("cart-item-check").addClass("cart-item-checked")
                    sum = 0;
                    $.each($('.singleselect'), function (ind, val) {
                        if ($(this).prop('className').indexOf('cart-item-checked') != -1) {
                            sum++
                        }
                        if (sum == $('.singleselect').size()) {
                            $('.allselect').removeClass("cart-item-check").addClass("cart-item-checked")
                        }

                    })
                }
                geshu = tongji()
                // 渲染已选商品数
                $('.ins').text(geshu)
            })
            // 渲染已选商品数
            $('.ins').text(geshu)
            // 数量增减
            let count = null, temp = null;
            $('.plus-num').each(function (i) {
                $(this).on('click', function () {
                    let totalmoney = 0;
                    count = $(`.num${i}`).text();
                    count++;
                    $(`.num${i}`).text(count)
                    $(`.sub-total${i}`).text('￥' + parseInt($(`.p-product-price${i}`).text().slice(1)) * count)//单个商品总金额变化
                    // 应付金额变化
                    $('.sub-total').each(function(i){
                        totalmoney += parseInt($(this).text().trim().slice(1))
                     })
                     $('.sum').find('strong').text('￥'+totalmoney);
                })
            })
            $('.minus-num').each(function (i) {
                $(this).on('click', function () {
                    let totalmoney = 0;
                    temp = $(`.num${i}`).text();
                    temp--;
                    if (temp == 0) {
                        temp = 1;
                    }
                    $(`.num${i}`).text(temp)
                    $(`.sub-total${i}`).text('￥' + parseInt($(`.p-product-price${i}`).text().slice(1)) * temp)//单个商品总金额变化
                    // 应付金额变化
                    $('.sub-total').each(function(i){
                        totalmoney += parseInt($(this).text().trim().slice(1))
                     })
                     $('.sum').find('strong').text('￥'+totalmoney);
                })
            })

            // 应付金额
            let totalmoney = 0;
            $('.sub-total').each(function(i){
               totalmoney += parseInt($(this).text().trim().slice(1))
            })
            $('.sum').find('strong').text('￥'+totalmoney);

            // 删除单个
            $('.cart-del-btn').each(function(i){
                $(this).on('click',function(){
                    console.log(i)
                    $(`.cart-del-btn${i}`).parent().parent().detach()
                    let idarr = $.cookie('cookieid').split(',');
                    let countarr = $.cookie('cookiecount').split(',');
                    idarr.splice(i,1);
                    countarr.splice(i,1);
                    $.cookie('cookieid', '', { expires: -1 });
                    $.cookie('cookiecount', '', { expires: -1 });
                    $.cookie('cookieid', idarr.toString(), { expires: 7 });
                    $.cookie('cookiecount', countarr.toString(), { expires: 7 });
                })
            })
        })
    })
})