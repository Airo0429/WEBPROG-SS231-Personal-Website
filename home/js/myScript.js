function myFunction() {
    document.getElementById("demo").innerHTML="Paragraph changed.";
}


function myFunction2() {
    const element = document.getElementsByTagName("br");
 
document.getElementById("demo").innerHTML = 'The text in first <h2> tag (index 0) is: ' + element[0].innerHTML;
}