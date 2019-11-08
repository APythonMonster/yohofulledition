<?php
include "conn.php";
if(isset($_GET['id'])){
    $sid=$_GET['id'];
    $conn->query('SET NAMES UTF8');
    $result=$conn->query("select * from rqdpgoods where sid=$sid");
    echo json_encode($result->fetch_assoc());
}