const night = document.getElementById('night');
const day = document.getElementById('day');
const wrapper = document.getElementById('wrapper');
const setTimeTitle = document.getElementById('forSetTime-title');
const setTimeHomeNav = document.getElementById('forSetTime-home-nav');
const setTimeAboutNav = document.getElementById('forSetTime-about-nav');
const setTimeProjectsNav = document.getElementById('forSetTime-projects-nav');
const setTimeContactNav = document.getElementById('forSetTime-contact-nav');
const setTimeAboutMe = document.getElementById('forSetTime-about-me');
const setTimeAboutMeText = document.getElementById('forSetTime-about-me-text');
const setTimeProjects = document.getElementById('forSetTime-projects');
const setTimeBlog = document.getElementById('project_1');
const setTimeBlogText = document.getElementById('forSetTime-blog-text');
const setTimeProvizio = document.getElementById('project_2');
const setTimeProvizioText = document.getElementById('forSetTime-provizio-text');
const setTimePiano = document.getElementById('project_3');
const setTimePianoText = document.getElementById('forSetTime-piano-text');
const setTimeAll = document.getElementById('forSetTime-all');
const setTimeHere = document.getElementById('here');
const setTimeLets = document.getElementById('forSetTime-lets');
const setTimeConvert = document.getElementById('forSetTime-convert');
const setTimeAmount = document.getElementById('forSetTime-amount');
const setTimeRocket = document.getElementsByClassName('projects_block_favourite-projects-list-item');
const setTimeBurger = document.getElementsByClassName('menu__span');


function setTimeNight() {
    if (night.hidden) {
        night.hidden = false; 
        day.hidden = true;

        document.body.style.backgroundColor = '#ffffff';
        setTimeTitle.style.color = '#000000';
        setTimeHomeNav.style.color = '#000000';
        setTimeAboutNav.style.color = '#000000';
        setTimeProjectsNav.style.color = '#000000';
        setTimeContactNav.style.color = '#000000';
        setTimeAboutMe.style.color = '#000000';
        setTimeAboutMeText.style.color = '#000000';
        setTimeProjects.style.color = '#000000';
        setTimeBlog.style.color = '#000000';
        setTimeBlogText.style.color = '#000000';
        setTimeProvizio.style.color = '#000000';
        setTimeProvizioText.style.color = '#000000';
        setTimePiano.style.color = '#000000';
        setTimePianoText.style.color = '#000000';
        setTimeAll.style.color = '#000000';
        setTimeLets.style.color = '#000000';
        setTimeConvert.style.color = '#000000';
        setTimeAmount.style.color = '#000000';
        setTimeHere.style.color = '#000000';
        setTimeRocket[0].style.backgroundImage = "url('resources/media/shuttle.png')";
        setTimeRocket[1].style.backgroundImage = "url('resources/media/shuttle.png')";
        setTimeRocket[2].style.backgroundImage = "url('resources/media/shuttle.png')";

    } else {
        night.hidden = true; 
        day.hidden = false;

        document.body.style.backgroundColor = '#000000';
        setTimeTitle.style.color = '#ffffff';
        setTimeHomeNav.style.color = '#ffffff';
        setTimeAboutNav.style.color = '#ffffff';
        setTimeProjectsNav.style.color = '#ffffff';
        setTimeContactNav.style.color = '#ffffff';
        setTimeAboutMe.style.color = '#ffffff';
        setTimeAboutMeText.style.color = '#ffffff';
        setTimeProjects.style.color = '#ffffff';
        setTimeBlog.style.color = '#ffffff';
        setTimeBlogText.style.color = '#ffffff';
        setTimeProvizio.style.color = '#ffffff';
        setTimeProvizioText.style.color = '#ffffff';
        setTimePiano.style.color = '#ffffff';
        setTimePianoText.style.color = '#ffffff';
        setTimeAll.style.color = '#ffffff';
        setTimeLets.style.color = '#ffffff';
        setTimeConvert.style.color = '#ffffff';
        setTimeAmount.style.color = '#ffffff';
        setTimeHere.style.color = '#ffffff';
        setTimeRocket[0].style.backgroundImage = "url('resources/media/shuttle-white.png')";
        setTimeRocket[1].style.backgroundImage = "url('resources/media/shuttle-white.png')";
        setTimeRocket[2].style.backgroundImage = "url('resources/media/shuttle-white.png')";
    }
}

day.hidden = true;

night.onclick = setTimeNight;
day.onclick = setTimeNight;

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