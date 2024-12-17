function myFunction() {
    document.getElementById("demo").innerHTML="Paragraph changed.";
}


function myFunction2() {
    const element = document.getElementsByTagName("p");
 
   
    document.getElementById("demo").innerHTML = '<p> The text in first paragraph (index 0) is: <p>' + element[0].innerHTML;
 
}