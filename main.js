// $(document).ready(function(){
// //$(document).ready means the script should only activate the function when the page has finished loading.....
//     $('#Btn').click(function(){
//     // we can use $("then any selector we want I guess..... like css and javascript getElementBy .....")
//         let name = $(this).data('caveman');
//     // $(this) is signalling to the function that the element that activated the function should be fetched ....
//         sendToPhp(name);
//     // sendToPhp will send the data to my php script for handling
//     //I'm learning AJAX because of my project, I need to send data from the home page to a subsection of the page after they click the button.... so I will be focusing more on how I will get AJAX to work with PHP how i Want it to
//     })
// })

// function sendToPhp(name){
//     $.ajax({
//         type: "POST",
//     //POST method
//         url: "ajax.php",
//     // Data will be sent to
//         data: {caveman: name},
//     // Data to be sent
//         success: function(response) {
//             // Handle the response without reloading the page
//             $('.disp').html(response);
//             console.log("Response from PHP:", response);
        
//             $('.disp').load('index.php .disp', { caveman: updatedName });
//         // partial reload to make the page load new data without having to reload the entire page
//         },
//         error: function(error) {
//             console.error("Error:", error);
//         }
//     });
// }

// function sendToPhp(name) {
//     $.ajax({
//         type: "POST",
//         url: "index.php",
//         data: { caveman: name },
//         success: function (response) {
//             // Reload the content of the div with class 'disp' after the AJAX request is complete
//             $('.disp').html(response);

//             // Now, fetch the button data again and update the div
//             let updatedName = $('#Btn').data('caveman');
//             $('.disp').load('index.php .disp', { caveman: updatedName });
//         },
//         error: function (error) {
//             console.error("Error:", error);
//         },
//     });
// }
