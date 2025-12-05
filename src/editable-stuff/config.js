// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Hunter",
  middleName: "",
  lastName: "King",
  message: " Passionate about learning about the world's technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/kingerkoder",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/hunterking.JPG"),
  imageSize: 375,
  message: "homepage": "https://kingerkoder.github.io/home"
    "My name is Hunter King. I’m a freshman student from Michigan Technological University, majoring in Data Science. My passion lies in pursuing a career in sports, particularly football, and I aim to enhance my understanding of technological concepts to support this goal. I currently play college football as well.",
  resume: require("../editable-stuff/Resume.pdf"),
};

// PROJECTS SECTION
// Setting up project length will automatically fetch you that number of recently updated projects, or you can set this field to 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specific projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "kingerkoder", //i.e."johnDoe12Gh"
  reposLength: 1,
  specificRepos: [kingerkoder.github.io],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Git", value: 65 },
    { name: "Linux", value: 55 },
    { name: "Bash", value: 60 },
    { name: "JavaScript", value: 70 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for data science internship opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "hunterk@mtu.edu",
};

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
