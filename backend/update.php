<?php
    include "config.php";
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    $message = array();


    $destino = $data['destino'];
    $llegada= $data['llegada'];
    $salida = $data['salida'];
    $habitaciones = $data['habitaciones'];
    $adultos = $data['adultos'];
    $kids = $data['kids'];
    
    $id = $_GET['id'];

    $sqlStatement ="UPDATE `reserva` SET `destino`='$destino',`llegada`='$llegada',`salida`='$salida',`habitaciones`='$habitaciones',`adultos`='$adultos',`kids`='$kids' WHERE `id`='{$id}';";

    $sql = mysqli_query($con, $sqlStatement);

     if($sql){
        $response["message"] = "OK";
    }else{
        $response["message"] = "KO";
    }
    
    $response["message"] = $sqlStatement;

    echo json_encode($response);


?>
