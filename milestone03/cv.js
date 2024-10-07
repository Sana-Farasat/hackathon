//Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page load
    //Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    //Generate the resume content dynamically
    var resumeHtml = "\n <h1> <b>Resume</b> </h1>\n \n <h2>Objective:</h2>\n <p>Motivated recent graduate with a degree in Marketing seeking an entry-level position where I can utilize my analytical skills and passion for digital marketing to drive brand engagement and growth.</p>\n\n <br/>\n\n <h2> Personal Information: </h2>\n <br/>\n <p> <b>Name:</b> ".concat(name, " </p>\n <p> <b>Email:</b> ").concat(email, " </p>\n <p> <b>Phone Number:</b> ").concat(phone, " </p>\n\n <br/>\n\n <h2> Education: </h2>\n <p> ").concat(education, " </p>\n\n <br/>\n\n <h2> Skills: </h2>\n <p> ").concat(skills, " </p>\n\n <br/>\n\n <h2> Experience: </h2>\n <p> ").concat(experience, " </p>\n\n <br/>\n\n <h2>Reference: </h2>\n <p> Shall be furnished upon request </p>\n ");
    //Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume display element is missing');
    }
});
