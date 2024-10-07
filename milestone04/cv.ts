//Get references to the form and display area
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById(
  "resume-display"
) as HTMLDivElement;

//Handle form submission
form.addEventListener("submit", (event: Event) => {
  event.preventDefault(); //prevent page load

  //Collect input values
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLInputElement)
    .value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;
  const experience = (document.getElementById("experience") as HTMLInputElement)
    .value;

  //Generate the resume content dynamically
  const resumeHtml = `
 <h1> <b> Editable Resume</b> </h1> 
 
 <h2>Objective:</h2>
 <p>Motivated recent graduate with a degree in Marketing seeking an entry-level position where I can utilize my analytical skills and passion for digital marketing to drive brand engagement and growth.</p>

 <br/>

 <h2> Personal Information: </h2>
 <br/>
 <p> <b>Name:</b> <span contenteditable="true" spellcheck="false">${name}</span></p>
 <p> <b>Email:</b> <span contenteditable="true" spellcheck="false">${email}</span> </p>
 <p> <b>Phone Number:</b> <span contenteditable="true" spellcheck="false"> ${phone}</span> </p>

 <br/>

 <h2> Education: </h2>
 <p contenteditable="true" spellcheck="false"> ${education} </p>

 <br/>

 <h2> Skills: </h2>
 <p contenteditable="true" spellcheck="false"> ${skills} </p>

 <br/>

 <h2> Experience: </h2>
 <p contenteditable="true" spellcheck="false"> ${experience} </p>

 <br/>

 <h2>Reference: </h2>
 <p> Shall be furnished upon request </p>
 `;
  //Display the generated resume
  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHtml;
  } else {
    console.error("The resume display element is missing");
  }
});
