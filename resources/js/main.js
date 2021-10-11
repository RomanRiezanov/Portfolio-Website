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