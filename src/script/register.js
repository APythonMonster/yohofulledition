require(['config'], function () {
    require(['jquery', 'jqcookie'], function () {
        let lock = false;
        let reg = /^1[3578]\d{9}$/;
        $('.phone-num').on('input', function () {
        let username = $('.phone-num').val();
        if (reg.test(username)) {
            $('.phonetest').text('√')
            $('.phonetest').css('color', 'green')
            $('.phone-num').on('blur', function () {
                $.ajax({
                    url: "http://10.31.155.38/test/yohoo_fake/php/registry.php",
                    type: "POST",
                    data: {
                        xingming: $('.phone-num').val(),
                    },
                    success: function (data) {
                        if (data == 1) {
                            $('.phonetest').text('手机号已注册')
                            $('.phonetest').css('color', 'red')
                            lock = false;
                        } else {
                            $('.phonetest').text('可以使用')
                            $('.phonetest').css('color', 'green')//18857468103
                            lock = true;
                        }
                    }
                })
            })
        } else {
            $('.phonetest').text('格式不正确')
            $('.phonetest').css('color', 'red')
            lock = false;
        }
    })
        $('#form1').submit(function () {
            if (!lock) {
                return false;
            }
        })
    })
})



// 手机号注册
// $('.phone-num').on('input', function () {
// let reg = /^1[3578]\d{9}$/;
// let username = $('.phone-num').val();
//     if (reg.test(username)) {
        // $('.phonetest').text('√')
        // $('.phonetest').css('color', 'green')
//         $('.phone-num').on('blur', function () {
//             $.post("http://10.31.155.38/test/yohoo_fake/php/registry.php",
//                 {
//                     xingming: username,
//                 },
//                 function (data) {
//                     console.log(data)
//                     if (data == 1) {

//                         $('.phonetest').text('手机号已注册')
//                         $('.phonetest').css('color', 'red')

//                     } else {
//                         $('.phonetest').text('可以使用')
//                         $('.phonetest').css('color', 'green')//18857468103
//                     }
//                 });
//         })
//     } else {
//         $('.phonetest').text('格式不正确')
//         $('.phonetest').css('color', 'red')
//     }
// })
// // 密码填写
// $('.pwd').on('blur', function () {
//     if ($('.pwd').val() != '') {
//         $('.pwdtest').text('√')
//         $('.pwdtest').css('color', 'green')
//     } else {
//         $('.pwdtest').text('不能为空')
//         $('.pwdtest').css('color', 'red')
//     }
// })
