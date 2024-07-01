import { formatDay } from "./formatDay.js";

const goals = [
  {
    id: 1,
    title: "Build a SASS app",
    description: "The goal of the SASS app is still to be known though",
  },

  {
    id: 2,
    title: "Finish in the top ten of HNG 11",
    description:
      "To achieve this, I have to enagage more in the HNG community, build quality projects, and follow project requirements",
  },

  {
    id: 3,
    title: "Build a network of developer friends, UI designer",
    description:
      "I will collaborate with other devs and UI designers to bring projects to life",
  },
  {
    id: 4,
    title: "Get a remote job as a frontend developer.",
    description: "Apply for jobs massively",
  },
  {
    id: 5,
    title: "Attend a React Conference",
    description: "We will be there",
  },
  {
    id: 6,
    title: "Become a fullstack developer",
    description:
      "Have a well rounded knowledge of building fullstack web applications",
  },
  {
    id: 7,
    title: "Become a web3 developer",
    description: "Gain skills in building dApps, and web 3 projects",
  },

  {
    id: 8,
    title: "Participate and win a hackathon",
    description:
      "Gain experience from hackathons, build projects with other developers.",
  },
  {
    id: 9,
    title: "Become a senior fullstack developer",
    description:
      "Gain experience and get the skillset required to obtain this title",
  },
];

const day = new Date().getUTCDate();
const year = new Date().getUTCFullYear();
const month = new Date().getUTCMonth();
const UTC_TIME = new Date().toUTCString();
console.log(UTC_TIME);

const currentDayText = document.querySelector(".currentDay");

const currentTimeUTCText = document.querySelector(".currentTime");

currentTimeUTCText.textContent = `UTC time: ${UTC_TIME}`;

currentDayText.textContent = `Today's Date: <${formatDay(day)}/>`;

const goalsList = document.querySelector(".goals--list");
goalsList.innerHTML = "";
goals.forEach((goal) => {
  let goalItem = `
        <div class="smartlify--goal">
                <h3>${goal.title}</h3>
                <p>${goal.description}</p>
        </div>
        `;

  goalsList.innerHTML += goalItem;
});
