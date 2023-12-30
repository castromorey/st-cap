let chooseState, i, countPos, countNeg, finder, floater, disabler, photographer;
countPos = 50;
countNeg = 0;
const audio = new Audio("sounds/wrong.mp3");
const audio2 = new Audio("sounds/good.mp3");
document.querySelector(".countPos").innerHTML = countPos;
// let photoDom = document.querySelector(".photo");
const statesCap = [
  { state: "Alabama", capital: "Montgomery" },
  { state: "Alaska", capital: "Juneau" },
  { state: "Arizona", capital: "Phoenix" },
  { state: "Arkansas", capital: "Little Rock" },
  { state: "California", capital: "Sacramento" },
  { state: "Colorado", capital: "Denver" },
  { state: "Connecticut", capital: "Hartford" },
  { state: "Delaware", capital: "Dover" },
  { state: "Florida", capital: "Tallahassee" },
  { state: "Georgia", capital: "Atlanta" },
  { state: "Hawaii", capital: "Honolulu" },
  { state: "Idaho", capital: "Boise" },
  { state: "Illinois", capital: "Springfield" },
  { state: "Indiana", capital: "Indianapolis" },
  { state: "Iowa", capital: "Des Moines" },
  { state: "Kansas", capital: "Topeka" },
  { state: "Kentucky", capital: "Frankfort" },
  { state: "Louisiana", capital: "Baton Rouge" },
  { state: "Maine", capital: "Augusta" },
  { state: "Maryland", capital: "Annapolis" },
  { state: "Massachusetts", capital: "Boston" },
  { state: "Michigan", capital: "Lansing" },
  { state: "Minnesota", capital: "Saint Paul" },
  { state: "Mississippi", capital: "Jackson" },
  { state: "Missouri", capital: "Jefferson City" },
  { state: "Montana", capital: "Helena" },
  { state: "Nebraska", capital: "Lincoln" },
  { state: "Nevada", capital: "Carson City" },
  { state: "New Hampshire", capital: "Concord" },
  { state: "New Jersey", capital: "Trenton" },
  { state: "New Mexico", capital: "Santa Fe" },
  { state: "New York", capital: "Albany" },
  { state: "North Carolina", capital: "Raleigh" },
  { state: "North Dakota", capital: "Bismarck" },
  { state: "Ohio", capital: "Columbus" },
  { state: "Oklahoma", capital: "Oklahoma City" },
  { state: "Oregon", capital: "Salem" },
  { state: "Pennsylvania", capital: "Harrisburg" },
  { state: "Rhode Island", capital: "Providence" },
  { state: "South Carolina", capital: "Columbia" },
  { state: "South Dakota", capital: "Pierre" },
  { state: "Tennessee", capital: "Nashville" },
  { state: "Texas", capital: "Austin" },
  { state: "Utah", capital: "Salt Lake City" },
  { state: "Vermont", capital: "Montpelier" },
  { state: "Virginia", capital: "Richmond" },
  { state: "Washington", capital: "Olympia" },
  { state: "West Virginia", capital: "Charleston" },
  { state: "Wisconsin", capital: "Madison" },
  { state: "Wyoming", capital: "Cheyenne" },
];

const capitalOnly1 = [
  "Saint Paul",
  "Frankfort",
  "Jefferson City",
  "Richmond",
  "Little Rock",
  "Tallahassee",
  "Honolulu",
  " Oklahoma City",
  "Trenton",
  "Annapolis",
  "Nashville",
  "Providence",
];

const capitalOnly2 = [
  "Atlanta",
  "Baton Rouge",
  "Springfield",
  "Indianapolis",
  " Salt Lake City",
  "Harrisburg",
  "Charleston",
  "Lincoln",
  " Bismarck",
  "Columbia",
  "Carson City",
  "Denver",
  "Boise",
];

const capitalOnly3 = [
  " Albany",
  "Raleigh",
  "Augusta",
  "Dover",
  "Montgomery",
  "Jackson",
  "Hartford",
  "Des Moines",
  "Pierre",
  "Montpelier",
  "Salem",
  "Cheyenne ",
  " Santa Fe",
];

const capitalOnly4 = [
  "Juneau",
  "Phoenix",
  "Sacramento",
  "Helena",
  "Concord",
  "Columbus",
  "Topeka",
  "Boston",
  "Lansing",
  "Austin",
  " Madison",
  "Olympia",
];

let randomly1 = capitalOnly1[Math.floor(Math.random() * capitalOnly1.length)];
let randomly2 = capitalOnly2[Math.floor(Math.random() * capitalOnly2.length)];
let randomly3 = capitalOnly3[Math.floor(Math.random() * capitalOnly3.length)];
let randomly4 = capitalOnly4[Math.floor(Math.random() * capitalOnly4.length)];

let buttons = document.querySelectorAll(".btn");
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", state_name);
}

function state_name() {
  document.querySelector(".Title-main").style.display = "block";
  document.querySelector(".btnGroup-C").style.display = "block";
  chooseState = this.innerText;
  this.disabled = true;
  // this.classList.toggle("backg");

  // photoDom.src = "images/states/state-" + chooseState + ".webp";

  document.querySelector(".question").innerHTML = chooseState;
  finder = statesCap.find((stateFind) => stateFind.state === chooseState);
  floater = finder.capital;
  // photo

  if (capitalOnly1.includes(floater)) {
    document.querySelector(".cap4").textContent = floater;
    document.querySelector(".cap1").textContent = randomly2;
    document.querySelector(".cap2").textContent = randomly3;
    document.querySelector(".cap3").textContent = randomly4;
  } else if (capitalOnly2.includes(floater)) {
    document.querySelector(".cap3").textContent = floater;
    document.querySelector(".cap1").textContent = randomly1;
    document.querySelector(".cap2").textContent = randomly3;
    document.querySelector(".cap4").textContent = randomly4;
  } else if (capitalOnly3.includes(floater)) {
    document.querySelector(".cap1").textContent = floater;
    document.querySelector(".cap2").textContent = randomly1;
    document.querySelector(".cap3").textContent = randomly2;
    document.querySelector(".cap4").textContent = randomly4;
  } else {
    document.querySelector(".cap2").textContent = floater;
    document.querySelector(".cap1").textContent = randomly1;
    document.querySelector(".cap3").textContent = randomly2;
    document.querySelector(".cap4").textContent = randomly3;
  }
}

//https://www.youtube.com/shorts/Q8SX7gaA-wI
//https://www.youtube.com/watch?v=ojunN2JOUIM

let buttons2 = document.querySelectorAll(".butn");
for (j = 0; j < buttons2.length; j++) {
  buttons2[j].addEventListener("click", clicking);
}

let emptyArray = [];
let errorMessage = document.querySelector(".erroMessage");
let goodMessage = document.querySelector(".goodmessage");
let boxmessage = document.querySelector(".boxMessage");
boxmessage.style.display = "none";

function clicking() {
  if (this.innerText != floater) {
    emptyArray.push(finder.state);
    audio.play();
    boxmessage.style.display = "block";
    errorMessage.style.display = "block";

    countNeg = countNeg + 1;

    document.querySelector(".countNeg").innerHTML = countNeg;
    setTimeout(function () {
      errorMessage.style.display = "none";
      boxmessage.style.display = "none";
    }, 1000);
  } else {
    goodMessage.style.display = "block";
    boxmessage.style.display = "block";
    boxmessage.classList.add("borderg");

    // document.querySelector(".photo").style.display = "none";

    audio2.play();
    // mensaje.classList.add("message2");
    countPos = countPos - 1;
    // document.querySelector(".butn").classList.remove("wrong");
    document.querySelector(".countPos").innerHTML = countPos;

    setTimeout(function () {
      goodMessage.style.display = "none";
      // document.querySelector(".photo").style.display = "none";
      boxmessage.classList.remove("borderg");
      boxmessage.style.display = "none";

      document.querySelector(".Title-main").style.display = "none";
      document.querySelector(".btnGroup-C").style.display = "none";
      document.querySelector(".cap3").textContent = "";
      document.querySelector(".cap1").textContent = "";
      document.querySelector(".cap2").textContent = "";
      document.querySelector(".cap4").textContent = "";
    }, 1000);
  }
}

function btnFaults() {
  emptyArray.forEach((el) => {
    document.getElementById("result").innerHTML += `<div>${el}</div><br />`;
  });
}

/* 

<script>
  {
    const myArray = ["stone", "paper", "scissors"];
    function btn-Faults() {
      myArray.forEach((el) => {
        document.getElementById(
          "result"
        ).innerHTML += `<div>${el}</div><br />`;
        // here result is the id of the div present in the dom
      });
    }
  }*/

/*
<button onclick="btn-Faults()">Show faults</button>
  */

// proyecto # 5 node js
//https://pixabay.com/sound-effects/search/wrong/    para bajar sonidos
//https://stackoverflow.com/questions/10876558/display-image-through-html-image-element-object  [imagen objeto]
// https://www.sitepoint.com/community/t/using-images-in-array-object/219080

/*notas:
  no permitir hacerr clic en otro estado sin antes dar respuesta al actual
  poner en rojo el texto de una respuesta mala
  */

//https://www.youtube.com/watch?v=HiXLkL42tMU  git  faztweb

//https://www.youtube.com/watch?v=cGL8nH9HOoE
// https://www.youtube.com/watch?v=3KrjEytC5qc
