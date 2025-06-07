<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $reply = trim($_POST["reply"] ?? '');

    if (!empty($reply)) {
        // Save to file (append)
        $filename = "replies.txt";
        $timestamp = date("Y-m-d H:i:s");
        $entry = "[$timestamp]\n" . $reply . "\n\n";
        file_put_contents($filename, $entry, FILE_APPEND | LOCK_EX);

        // Optional: Email it to yourself
        $to = "your-email@example.com";  // Replace with your email
        $subject = "New Letter Reply";
        $headers = "From: website@example.com\r\n";
        mail($to, $subject, $entry, $headers);

        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => "Empty reply"]);
    }
} else {
    echo json_encode(["success" => false, "error" => "Invalid request"]);
}
?>
