require(['config'], function () {
    require(['jquery', 'jqcookie'], function () {
        $('.login-btn ').on('click', function () {
            $.ajax({
                url: 'http://10.31.155.38/test/yohoo_fake/php/login.php',
                type: 'POST',
                data: {
                    username: $('.userin').val(),
                    password: $('.pwdin').val()
                },
                success: function (d) {
                    if (d) {
                        location.href = 'index.html';
                    } else {
                        alert('用户名或者密码错误');
                    }
                }
            })
        })
    })
})