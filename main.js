window.onload = function(){
    document.getElementById("btn").onclick = sendRequest;
}

function createXHR(){
        try { return new XMLHttpRequest(); } catch(e) {}
        try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); } catch (e) {}
        try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); } catch (e) {}
        try { return new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) {}
        try { return new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) {}
        alert("XMLHttpRequest not supported");
        return null;
    }
function sendRequest(){
    var xhr = createXHR();
    // cross browser XHR creation
    if (xhr)
    {
    // use XHR
    }
}