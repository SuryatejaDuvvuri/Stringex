function myFunction(){
    var str = document.getElementById("para").innerHTML;
    var text = str.replace(/Java/i,"Javascript");

    document.getElementById("para").innerHTML = text;



}

