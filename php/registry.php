<?php

include "conn.php";//引入数据库连接文件

if(isset($_POST['xingming']) || isset($_POST['submit'])){//获取用户名
    $name=@$_POST['xingming'];//取值
    $result=$conn->query("select * from login where username='$name'");//如果能够找到记录，用户名存在的
    if($result->fetch_assoc()){//如果$result->fetch_assoc()有值，返回true,否则就是false;
        echo true;//1 存在
    }else{
        echo false;
    }
}else{
    exit('非法操作');//输出非法操作，终止程序
}

//将表单的值接收，放入数据库。
if(isset($_POST['submit'])){//点击了注册按钮
    $user=$_POST['username'];
    $pass=$_POST['password'];
    $conn->query("insert login values(null,'$user','$pass')");
    header('location:http://10.31.155.38/test/yohoo_fake/src/login.html');//php的跳转
    //echo "<script> location.href='http://localhost/JS1909/Day%2022/loginregistry/src/login.html'; </script>";
}
;