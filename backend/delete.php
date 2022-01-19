<?php
    include "config.php";
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    $response = array();

    $id = $_GET['id'];
    $sqlStatement = "DELETE FROM `reserva` WHERE `id` = {$id} LIMIT 1";

    
    $sql = mysqli_query($con, $sqlStatement);
    
    if($sql){
        $response["message"] = "OK";
    }else{
        $response["message"] = "KO";
    }
    
    $response["message"] = $sqlStatement;

    echo json_encode($response);
?>
