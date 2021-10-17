const project1 = document.getElementById('project_1');
const projectBlock1 = document.getElementById('project_block_1');

function projectDrop1() {
    if(projectBlock1.hidden) {
        projectBlock1.hidden = false;
    } else {
        projectBlock1.hidden = true;
    }    
}

projectBlock1.hidden = true;

project1.onclick = projectDrop1;

const project2 = document.getElementById('project_2');
const projectBlock2 = document.getElementById('project_block_2');

function projectDrop2() {
    if(projectBlock2.hidden) {
        projectBlock2.hidden = false;
    } else {
        projectBlock2.hidden = true;
    }   
}

projectBlock2.hidden = true;

project2.onclick = projectDrop2;

const project3 = document.getElementById('project_3');
const projectBlock3 = document.getElementById('project_block_3');

function projectDrop3() {
    if(projectBlock3.hidden) {
        projectBlock3.hidden = false;
    } else {
        projectBlock3.hidden = true;
    }    
}

projectBlock3.hidden = true;

project3.onclick = projectDrop3;

function calculate() {
    var amount = parseFloat(document.getElementById("amount").value);
    var select = document.getElementById("select");
    var select1 = document.getElementById("select1");
    var result = document.getElementById("result"); 

    if (select.value === "USD" && select1.value === "USD")  {
        result.value = (amount * 1);
    } else if (select.value === "USD" && select1.value === "EUR")  {
        result.value = (amount * 0.86);
    } else if (select.value === "EUR" && select1.value === "USD")  {
        result.value = (amount * 1.16);
    } else if (select.value === "USD" && select1.value === "UAH")  {
        result.value = (amount * 26.39);
    } else if (select.value === "EUR" && select1.value === "UAH")  {
        result.value = (amount * 30.63);
    } else if (select.value === "UAH" && select1.value === "EUR")  {
        result.value = (amount * 0.033);
    } else if (select.value === "UAH" && select1.value === "USD")  {
        result.value = (amount * 0.038);
    }
}