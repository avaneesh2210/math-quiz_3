function send() {
    get_number1 = document.getElementById("number1").value;
    get_number2 = document.getElementById("number2").value;
    console.log("number1 = " + get_number1);
    console.log("number2 = " + get_number2);
    into = "x";
    question_number = "<h4 id='number_display'> Q. " + get_number1 + into  + get_number2  + "</h4>";
    input_box = "<br>Answer : <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}