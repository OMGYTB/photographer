<?php
require_once 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $service = $_POST['service'];
    $message = $_POST['message'];
    
    // Envoi de l'email
    $to = "votre@email.com";
    $subject = "Nouveau message de contact - $service";
    
    $email_content = "Nom: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Téléphone: $phone\n";
    $email_content .= "Service: $service\n\n";
    $email_content .= "Message:\n$message\n";
    
    $headers = "From: $email\r\n";
    
    if(mail($to, $subject, $email_content, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'envoi du message']);
    }
}
?>
