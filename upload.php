<?php
header("Access-Control-Allow-Origin: *");

// 1. Handle Image Uploads
if (isset($_FILES['images'])) {
    if (!is_dir('photos')) mkdir('photos', 0777, true);
    
    foreach ($_FILES['images']['tmp_name'] as $key => $tmp_name) {
        $name = $_FILES['images']['name'][$key];
        move_uploaded_file($tmp_name, "photos/" . $name);
    }
}

// 2. Handle JSON Overwrite
if (isset($_POST['json_data'])) {
    if (file_put_contents('articles.json', $_POST['json_data'])) {
        echo "Success: Server updated articles.json and photos/";
    } else {
        http_response_code(500);
        echo "Error: Check folder permissions for articles.json";
    }
}
?>