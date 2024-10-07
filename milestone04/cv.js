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
    var resumeHtml = "\n <h1> <b> Editable Resume</b> </h1> \n \n <h2>Objective:</h2>\n <p>Motivated recent graduate with a degree in Marketing seeking an entry-level position where I can utilize my analytical skills and passion for digital marketing to drive brand engagement and growth.</p>\n\n <br/>\n\n <h2> Personal Information: </h2>\n <br/>\n <p> <b>Name:</b> <span contenteditable=\"true\" spellcheck=\"false\">".concat(name, "</span></p>\n <p> <b>Email:</b> <span contenteditable=\"true\" spellcheck=\"false\">").concat(email, "</span> </p>\n <p> <b>Phone Number:</b> <span contenteditable=\"true\" spellcheck=\"false\"> ").concat(phone, "</span> </p>\n\n <br/>\n\n <h2> Education: </h2>\n <p contenteditable=\"true\" spellcheck=\"false\"> ").concat(education, " </p>\n\n <br/>\n\n <h2> Skills: </h2>\n <p contenteditable=\"true\" spellcheck=\"false\"> ").concat(skills, " </p>\n\n <br/>\n\n <h2> Experience: </h2>\n <p contenteditable=\"true\" spellcheck=\"false\"> ").concat(experience, " </p>\n\n <br/>\n\n <h2>Reference: </h2>\n <p> Shall be furnished upon request </p>\n ");
    //Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume display element is missing');
    }
});
