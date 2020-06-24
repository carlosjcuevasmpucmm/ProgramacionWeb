function validate(){
    var x = document.getElementById("name").value;
    var y = document.getElementById("age").value;

    if (x ==""){
        alert("Llena nombre");
        return false;
    }

    if (isNaN(y) || y<0 || y=="" ){
        alert("Edad invalida");
        return false;
    }

}
