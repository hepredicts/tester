
/*window.onresize = screen;

function screen(){
    width = window.innerWidth;
    alert(width)
}
let table = document.querySelector("#table");

function add() {
    let task = document.querySelector("#input").value;
    let newRow = table.insertRow(-1); // Inserts a new row at the end of the table
    for (let i = 0; i < 6; i++) { // Create 6 columns
        let cell = newRow.insertCell(i);
        cell.textContent = task; // Set the content of each cell to the task value
    }
    document.querySelector("#input").value = ""; // Clear the input field
}*/

let table = document.querySelector("#table");

function add() {
    let task1 = document.querySelector("#input1").value;
    let task2 = document.querySelector("#input2").value;
    let task3 = document.querySelector("#input3").value;
    let task4 = document.querySelector("#input4").value;
    let task5 = document.querySelector("#input5").value;
    let task6 = document.querySelector("#input6").value;
    
    let newRow = table.insertRow(-1); // Inserts a new row at the end of the table
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    
    cell1.textContent = task1;
    cell2.textContent = task2;
    cell3.textContent = task3;
    cell4.textContent = task4;
    cell5.textContent = task5;
    cell6.textContent = task6;

    // Clear the input fields
    document.querySelector("#input1").value = "";
    document.querySelector("#input2").value = "";
    document.querySelector("#input3").value = "";
    document.querySelector("#input4").value = "";
    document.querySelector("#input5").value = "";
    document.querySelector("#input6").value = "";
}

alert()