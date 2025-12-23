const bar = document.getElementById("bar");
const qa = document.getElementById("qa");
const video = document.getElementById("bgVideo");
const btn = document.getElementById("toggleBtn");

btn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
});


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
