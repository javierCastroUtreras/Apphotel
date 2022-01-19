<?php
    include "config.php";
    
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    
    $response = array();

    $destino = $data["destino"];
    $llegada = $data["llegada"];
    $salida = $data["salida"];
    $habitaciones =$data["habitaciones"];
    $adultos = $data["adultos"];
    $kids = $data["kids"];
   // $imagen = $data['imagen'];

/*
    $destino = $_POST["destino"];
    $llegada = $_POST"llegada"];
    $salida = $_POST["salida"];
    $habitaciones =$_POST["habitaciones"];
    $adultos = $_POST["adultos"];
    $kids = $_POST["kids"];
    $imagen = $_FILES['imagen'];

    $response["message"] = $imagen;
    echo json_encode($response);
//imagen
    $nombre_imagen = $imagen['name'];
    $tipo_imagen = $imagen['type'];
    $tamaño_imagen = $imagen['size'];


    $target_dir = "img/";
    $target_file = $target_dir . basename($imagen["name"]);

    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

    if (move_uploaded_file($imagen["tmp_name"], $target_file)) {
        $message = "The file ". htmlspecialchars( basename( $imagen["name"])). " has been uploaded.";
    } else {
        $message = "Sorry, there was an error uploading your file.";
    }
     $response["message"] = $message;
     echo json_encode($response);



  //  $carpeta_destino = $_SERVER['DOCUMENT_ROOT'].'/ionic/img/';
    //movemos la imagen del directorio temporal al directorio escogido
  //  move_uploaded_file($imagen['tmp_name'],$carpeta_destino.$nombre_imagen);


    

*/

$sqlStatement = "INSERT INTO `reserva`(`destino`, `llegada`, `salida`, `habitaciones`, `adultos`, `kids`) VALUES ('$destino','$llegada','$salida', $habitaciones, $adultos, $kids)";
    
 
   
    $sql = mysqli_query($con, $sqlStatement);
    
    if($sql){
        $response["message"] = "OK";
    }else{
        $response["message"] = "KO";
    }
    
    $response["message"] = $sqlStatement;

    echo json_encode($response);
?>
