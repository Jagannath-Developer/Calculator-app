function calculate() {
    var p = document.getElementById("input").value;
    if (p === "") {
        alert("enter any value")
    } else {
        var result = eval(p);
        document.getElementById("output").value = result;
        console.log(result);
    }

}
function display(value) {
    var wrong_number = document.getElementById("input").value;
    var last_number = wrong_number[wrong_number.length -1]
    if (last_number === undefined) {
        document.getElementById("input").value += value
    }
    else {
        if (last_number != "+" || last_number != "." || last_number != "-" || last_number != "*" || last_number != "/") {
            console.log("last_number:",last_number);
            
            document.getElementById("input").value += value
            console.log("value_number:",value);
        }
        else{
            console.log("failed");
        }
        
    }
    // document.getElementById("input").value += value


}
function clearAll() {
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
}
function clearSianle() {
    var value_result = document.getElementById("input").value;
    // console.log(value_result);
    value_result = value_result.substring(0, value_result.length - 1);
    // console.log(value_result);
    document.getElementById("input").value = value_result;
}

//=============== flower
const button = document.querySelector(".button");

button.addEventListener("click", (e) => {
    e.preventDefault;
    button.classList.add("animate");
    setTimeout(() => {
        button.classList.remove("animate");
    }, 600);
});