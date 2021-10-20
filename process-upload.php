<?php
$target_dir = "./images/";
$target_file = $target_dir . basename($_FILES['fileToUpload']['name']);

if(isset($_POST['btn-upload'])){
    if(file_exists($target_file)){
        echo 'ảnh đã tồn tại';
    }else{
        if(move_uploaded_file($_FILES['fileToUpload']['tmp_name'], $target_file)){
            echo 'tải ảnh thành công';
        }else{
            echo 'Thất bại';
        }
    }
}


?>