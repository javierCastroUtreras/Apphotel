<?php
    include "config.php";
    $data = array(); 
    $id = $_GET['id'];
    $sql ="SELECT * FROM `reserva` WHERE `id` = $id";
    $resultado = mysqli_query($con,$sql);
    $datos = mysqli_fetch_all($resultado, MYSQLI_ASSOC);

    if(!empty($datos)){
        echo json_encode($datos);
    }else{
        echo json_encode([]);
    }

?>
