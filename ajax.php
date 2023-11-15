<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['caveman'])) {
        $_SESSION["caveman"] = $_POST['caveman'];

        // Process the value as needed (for demonstration, just echoing it)
    } else {
        // Handle missing parameter
        http_response_code(400);
        echo 'Missing parameter: buttonValue';
    }
} else {
    // Handle invalid request method
    http_response_code(405);
    echo 'Method Not Allowed';
}
?>
