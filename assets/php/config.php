<?php
$host = 'localhost';
$dbname = 'photographe_db';
$username = 'votre_username';
$password = 'votre_password';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
}
?>
