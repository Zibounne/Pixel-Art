<?php
try {
    //Initialisation
    $pdo = new PDO(
        'mysql:dbname='.DB_NAME.
        ';host='.DB_HOST, DB_USER, DB_PASSWORD);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die('Erreur : ' . $e->getMessage());
}