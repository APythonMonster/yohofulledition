<?php

include "conn.php";//连接数据库

if(isset($_POST['username']) && isset($_POST['password'])){
    $user=$_POST['username'];
    $pass=$_POST['password'];

    $result=$conn->query("select * from login where username='$user' and password='$pass' ");

    if($result->fetch_assoc()){
        echo true;//用户名和密码存在
    }else{
        echo false;
    }

}else{
    exit('非法操作');
}