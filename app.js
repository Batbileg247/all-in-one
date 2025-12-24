const qa = document.getElementById("qa");
const video = document.getElementById("bgVideo");
const btn = document.getElementById("toggleBtn");
const nextBtn = document.getElementById("nextBtn");
const pervBtn = document.getElementById("pervBtn");
const videoChange = document.getElementById("videoChange");
const videoContainer = document.querySelector(".background");

//slider
const slide = [
  {
    addrs: "./videos/star.mp4",
  },
  {
    addrs: "./videos/winter.mp4",
  },
  {
    addrs: "./videos/kids.mp4",
  },
];

let id = 0;

nextBtn.addEventListener("click", () => {
  if (id < slide.length - 1) {
    id++;
    updateVideo();
  }
});

pervBtn.addEventListener("click", () => {
  if (id > 0) {
    id--;
    updateVideo();
  }
});

// Helper function to keep code DRY (Don't Repeat Yourself)
function updateVideo() {
  videoContainer.innerHTML = ` 
    <video autoplay muted loop playsinline id="bgVideo">
      <source src="${slide[id].addrs}" type="video/mp4" />
    </video>`;
    
  // Toggle button visibility
  pervBtn.classList.toggle("btn-hide", id === 0);
  nextBtn.classList.toggle("btn-hide", id === slide.length - 1);
}
//QA

const quas = [
  { id: 1, question: "Whose birth does Christmas celebrate?", answer: "Jesus" },
  {
    id: 2,
    question: "Donald Trump appears in which Home Alone Movie?",
    answer: "Home Alone 2",
  },
  {
    id: 3,
    question: "What do people traditionally put on top of a Christmas tree?",
    answer: "An angel",
  },
  {
    id: 4,
    question:
      "In Home Alone, where are the McCallisters going on vacation when they leave Kevin behind?",
    answer: "Paris",
  },
  {
    id: 5,
    question: "When is Christmas celebrated in Russia?",
    answer: "7th of January",
  },
  {
    id: 6,
    question:
      "In what country did the tradition of putting up a Christmas tree begin?",
    answer: "Germany",
  },
];

const renderAll = () => {
  qa.innerHTML = quas
    .map(
      (item) => `
    <div class="questions">
      <div class="questions-text">${item.question}</div>
      <button class="answers-button">+</button>
    </div>
    <div class="answers" style="display: none;">
      ${item.answer}
    </div>
  `
    )
    .join("");
};

qa.addEventListener("click", (event) => {
  if (event.target.classList.contains("answers-button")) {
    const button = event.target;
    const questionContainer = button.parentElement;
    const answerDiv = questionContainer.nextElementSibling;
    if (answerDiv.style.display === "none") {
      answerDiv.style.display = "block";
      button.textContent = "-";
    } else {
      answerDiv.style.display = "none";
      button.textContent = "+";
    }
  }
});
renderAll();

//newYearCounter

function updateTimer() {
  const newYear = new Date("January 1, 2026 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = newYear - now;

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = m.toString().padStart(2, "0");
  document.getElementById("seconds").innerText = s.toString().padStart(2, "0");
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();

//sidebar
const bar = document.getElementById("bar");
const header = document.getElementById("header");
const sideBarr = document.getElementById("sideBar");
const xBttn = document.getElementById("x-btn");
const hide = document.getElementById("hide")
xBttn.addEventListener("click", () => {
  sideBarr.style.transform = `translateX(-100%)`;
  header.style.transform = `translateY(0%)`;
  hide.classList.add("hide")
});
bar.addEventListener("click", () => {
  header.style.transform = `translateY(-100%)`;
  sideBarr.style.transform = `translateX(0%)`;
  hide.classList.remove("hide")
});

//video bttn
btn.addEventListener("click", () => {
  const currentVideo = document.getElementById("bgVideo"); 
  
  if (currentVideo.paused) {
    currentVideo.play();
    btn.innerHTML = "Pause";
  } else {
    currentVideo.pause();
    btn.innerHTML = "Play";
  }
});