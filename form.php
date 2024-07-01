<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['name']) && isset($data['email']) && isset($data['phone']) && isset($data['message'])) {
    $name = htmlspecialchars($data['name']);
    $email = htmlspecialchars($data['email']);
    $phone = htmlspecialchars($data['phone']);
    $message = htmlspecialchars($data['message']);

    $to = 'dev.vinayakpawar@gmail.com';
    $subject = "New Enquiry from $name";
    $body = "Dear Mayur Wagh,\n\nYou have received a new enquiry\nName: $name\nEmail: $email\nPhone: $phone\nMessage: $message\n\nSource: mayurelectricals.serv00.net";
    $headers = "From: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'Email sent successfully.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to send email.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid input data.']);
}
