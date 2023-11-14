$(document).ready(function(){
//$(document).ready means the script should only activate the function when the page has finished loading.....
    $('#Btn').click(function(){
    // we can use $("then any selector we want I guess..... like css and javascript getElementBy .....")
        let name = $(this).data('data')
    // $(this) is signalling to the function that the element that activated the function should be fetched ....
        sendToPhp(name);
    // sendToPhp will send the data to my php script for handling
    //I'm learning AJAX because of my project, I need to send data from the home page to a subsection of the page after they click the button.... so I will be focusing more on how I will get AJAX to work with PHP how i Want it to
    })
})