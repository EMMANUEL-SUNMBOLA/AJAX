<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Training</title>
</head>
<body>
    <button data-caveman="caveBtn" id="Btn">Don't Click Me</button>
    <?=$_SESSION["caveman"]?>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <!-- CDN link to Jquery -->
    <script src="main.js"></script>
</body>
</html>