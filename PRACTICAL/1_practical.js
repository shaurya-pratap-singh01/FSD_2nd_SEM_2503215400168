function generateTable() {
    let number = document.getElementById("number").value;
    let tableDiv = document.getElementById("table");
    tableDiv.innerHTML = "";
    for (var i = 1; i <= 10; i++) {
        var result = number * i;
        tableDiv.innerHTML += number + " x " + i + " = " + result + "<br>";
    }
    tableDiv.style.display = "block";
    
}
