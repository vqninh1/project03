<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="process-upload.php" method="post" enctype="multipart/form-data">
        <div class="avatar" style="width:200px; height:200px">
            <img src="./images/default.jpg" alt="" class="img-fluid" id="avatar">
               
        </div>
        chọn tệp tin để tải lên:
        <input type="file" name="fileToUpload" id="fileToUpload">
        <input type="submit" value="Cập nhật ảnh đại diện" name="btn-upload" id="btn-upload">
    </form>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script scr="./js/myscript.js"></script>
</body>
</html>