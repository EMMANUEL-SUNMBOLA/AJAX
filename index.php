<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Training</title>
</head>
<body>
    <button data-caveman="caveBtn1" class="addToCartBtn">Add to Cart 1</button>
    <button data-caveman="caveBtn2" class="addToCartBtn">Add to Cart 2</button>
    <!-- Add more buttons as needed -->

    <div class="disp">
        <!-- Display added products here -->
    </div>

    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script>
        $(document).ready(function () {
            $('.addToCartBtn').click(function () {
                let name = $(this).data('caveman');
                sendToPhp(name);
            });
        });

        function sendToPhp(name) {
            $.ajax({
                type: "POST",
                url: "index.php",
                data: { caveman: name },
                success: function (response) {
                    // Reload the content of the div with class 'disp' after the AJAX request is complete
                    $('.disp').html(response);

                    // Now, fetch the button data again and update the div
                    $('.disp').load('index.php .disp');
                },
                error: function (error) {
                    console.error("Error:", error);
                },
            });
        }
    </script>
</body>
</html>
