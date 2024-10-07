//Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
    // Generate the resume content dynamically
    var resumeHTML = "\n<h1> <b> Shareable Resume</b> </h1> \n \n <h2>Objective:</h2>\n <p>Motivated recent graduate with a degree in Marketing seeking an entry-level position where I can utilize my analytical skills and passion for digital marketing to drive brand engagement and growth.</p>\n\n <br/>\n\n <h2> Personal Information: </h2>\n <br/>\n <p> <b>Name:</b> <span contenteditable=\"true\" spellcheck=\"false\">".concat(name, "</span></p>\n <p> <b>Email:</b> <span contenteditable=\"true\" spellcheck=\"false\">").concat(email, "</span> </p>\n <p> <b>Phone Number:</b> <span contenteditable=\"true\" spellcheck=\"false\"> ").concat(phone, "</span> </p>\n\n <br/>\n\n <h2> Education: </h2>\n <p contenteditable=\"true\" spellcheck=\"false\"> ").concat(education, " </p>\n\n <br/>\n\n <h2> Skills: </h2>\n <p contenteditable=\"true\" spellcheck=\"false\"> ").concat(skills, " </p>\n\n <br/>\n\n <h2> Experience: </h2>\n <p contenteditable=\"true\" spellcheck=\"false\"> ").concat(experience, " </p>\n\n <br/>\n\n <h2>Reference: </h2>\n <p> Shall be furnished upon request </p>\n ");
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username= ").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
