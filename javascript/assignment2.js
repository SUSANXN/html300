

<script>
  
function AddData() {
    var x = document.getElementById("age").value;
    var y = document.getElementById("name").value;
    var letters = '/^[a-zA-Z]+$/';
    if ((parseInt(x) != (x)) && (y == parseInt(y))) {
        alert("Wrong Value Entered");
    } else {
        var rows = "";
        var name = "name";
        var age = document.getElementById("age").value;
        var city = document.getElementById("city").value;

        rows += "<tr><td>" + name + "</td><td>" + gender + "</td><td>" + age + "</td><td>" + city + "</td></tr>";
        $(rows).appendTo("#list tbody");
    }
}
</script>