<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
            <?php
            if(isset($title)){
                echo $title;
            }
            else{
                echo "Pixel-Art";
            }
            ?>
        </title>
    <link rel="stylesheet" href="../styles/style.css">
    <link rel="icon" type="image/icon" href="../../pictures/favicon/favicon.ico">
</head>
<body>