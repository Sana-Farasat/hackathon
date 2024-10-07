var personalinfo = document.getElementById('personalinfo');
var personalinfobtn = document.getElementById('p-info');
personalinfobtn.addEventListener('click', function () {
    if (personalinfo.style.display === 'block') {
        personalinfo.style.display = 'none';
    }
    else {
        personalinfo.style.display = 'block';
    }
});
var education = document.getElementById('education');
var edubtn = document.getElementById('edu');
edubtn.addEventListener('click', function () {
    if (education.style.display === 'block') {
        education.style.display = 'none';
    }
    else {
        education.style.display = 'block';
    }
});
var skills = document.getElementById('skills');
var skillsbtn = document.getElementById('Skills');
skillsbtn.addEventListener('click', function () {
    if (skills.style.display === 'block') {
        skills.style.display = 'none';
    }
    else {
        skills.style.display = 'block';
    }
});
var experience = document.getElementById('experience');
var expbtn = document.getElementById('exp');
expbtn.addEventListener('click', function () {
    if (experience.style.display === 'block') {
        experience.style.display = 'none';
    }
    else {
        experience.style.display = 'block';
    }
});
