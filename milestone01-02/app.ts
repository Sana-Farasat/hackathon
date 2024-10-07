const personalinfo = document.getElementById("personalinfo") as HTMLElement;

const personalinfobtn = document.getElementById("p-info") as HTMLButtonElement;

personalinfobtn.addEventListener("click", () => {
  if (personalinfo.style.display === "block") {
    personalinfo.style.display = "none";
  } else {
    personalinfo.style.display = "block";
  }
});

const education = document.getElementById("education") as HTMLElement;

const edubtn = document.getElementById("edu") as HTMLButtonElement;

edubtn.addEventListener("click", () => {
  if (education.style.display === "block") {
    education.style.display = "none";
  } else {
    education.style.display = "block";
  }
});

const skills = document.getElementById("skills") as HTMLElement;

const skillsbtn = document.getElementById("Skills") as HTMLButtonElement;

skillsbtn.addEventListener("click", () => {
  if (skills.style.display === "block") {
    skills.style.display = "none";
  } else {
    skills.style.display = "block";
  }
});

const experience = document.getElementById("experience") as HTMLElement;

const expbtn = document.getElementById("exp") as HTMLButtonElement;

expbtn.addEventListener("click", () => {
  if (experience.style.display === "block") {
    experience.style.display = "none";
  } else {
    experience.style.display = "block";
  }
});
