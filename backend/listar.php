<?php
include "config.php";
$sql = "SELECT * FROM reserva";
$resultado = mysqli_query($con,$sql);
$datos = mysqli_fetch_all($resultado, MYSQLI_ASSOC);

if(!empty($datos)){
    echo json_encode($datos);
}else{
    echo  json_encode([]);
}

?>