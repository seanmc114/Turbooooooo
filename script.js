// Turbooooooo — same Turbo engine, past forms of SER / ESTAR only

const LEVEL_POOLS = {
  Past: {
    1: [
      { en: "I was a teacher", es: "era" },
      { en: "You were my friend", es: "eras" },
      { en: "He was funny", es: "era" },
      { en: "She was Irish", es: "era" },
      { en: "We were cousins", es: "éramos" },
      { en: "They were doctors", es: "eran" },
      { en: "I was not shy", es: "no era" },
      { en: "You were not a student", es: "no eras" },
      { en: "He was not my brother", es: "no era" },
      { en: "They were not neighbours", es: "no eran" },
      { en: "Was I a good student?", es: "era?" },
      { en: "Were you my teacher?", es: "eras?" },
      { en: "Was he from Spain?", es: "era?" },
      { en: "Were we cousins?", es: "éramos?" },
      { en: "Were they friends?", es: "eran?" },
      { en: "You were very kind", es: "eras" },
      { en: "We were classmates", es: "éramos" },
      { en: "They were serious", es: "eran" },
      { en: "Were you honest?", es: "eras?" },
      { en: "Were they neighbours?", es: "eran?" },
      { en: "We were best friends", es: "éramos" },
      { en: "They were musicians", es: "eran" },
      { en: "You were not my cousin", es: "no eras" },
      { en: "We were not teammates", es: "no éramos" },
      { en: "They were not classmates", es: "no eran" }
    ],

    2: [
      { en: "I was tired", es: "estaba" },
      { en: "You were nervous", es: "estabas" },
      { en: "He was at home", es: "estaba" },
      { en: "She was in the kitchen", es: "estaba" },
      { en: "We were in class", es: "estábamos" },
      { en: "They were happy", es: "estaban" },
      { en: "I was not ready", es: "no estaba" },
      { en: "You were not at school", es: "no estabas" },
      { en: "He was not well", es: "no estaba" },
      { en: "They were not in Dublin", es: "no estaban" },
      { en: "Was I ill?", es: "estaba?" },
      { en: "Were you at home?", es: "estabas?" },
      { en: "Was he angry?", es: "estaba?" },
      { en: "Were we in the park?", es: "estábamos?" },
      { en: "Were they happy?", es: "estaban?" },
      { en: "She was sad", es: "estaba" },
      { en: "We were at the cinema", es: "estábamos" },
      { en: "They were in Spain", es: "estaban" },
      { en: "You were in a bad mood", es: "estabas" },
      { en: "Were they at school?", es: "estaban?" },
      { en: "Were we in town?", es: "estábamos?" },
      { en: "He was calm", es: "estaba" },
      { en: "They were excited", es: "estaban" },
      { en: "We were not in the library", es: "no estábamos" },
      { en: "You were not in the park", es: "no estabas" }
    ],

    3: [
      { en: "I was the winner", es: "fui" },
      { en: "You were the leader", es: "fuiste" },
      { en: "He was the best player", es: "fue" },
      { en: "She was my best friend", es: "fue" },
      { en: "We were the champions", es: "fuimos" },
      { en: "They were the winners", es: "fueron" },
      { en: "I was not the problem", es: "no fui" },
      { en: "You were not my partner", es: "no fuiste" },
      { en: "He was not the captain", es: "no fue" },
      { en: "They were not our teachers", es: "no fueron" },
      { en: "Was I the first?", es: "fui?" },
      { en: "Were you the leader?", es: "fuiste?" },
      { en: "Was he the best player?", es: "fue?" },
      { en: "Were we the winners?", es: "fuimos?" },
      { en: "Were they your cousins?", es: "fueron?" },
      { en: "I was the captain", es: "fui" },
      { en: "We were the finalists", es: "fuimos" },
      { en: "They were the champions", es: "fueron" },
      { en: "You were the winner", es: "fuiste" },
      { en: "Was she the leader?", es: "fue?" },
      { en: "Were they the champions?", es: "fueron?" },
      { en: "We were not the leaders", es: "no fuimos" },
      { en: "They were not the winners", es: "no fueron" },
      { en: "You were not the captain", es: "no fuiste" },
      { en: "I was not the teacher", es: "no fui" }
    ],

    4: [
      { en: "I was sick yesterday", es: "estuve" },
      { en: "You were in the library", es: "estuviste" },
      { en: "He was worried", es: "estuvo" },
      { en: "She was at home all day", es: "estuvo" },
      { en: "We were in France", es: "estuvimos" },
      { en: "They were tired", es: "estuvieron" },
      { en: "I was not ready", es: "no estuve" },
      { en: "You were not in class", es: "no estuviste" },
      { en: "He was not calm", es: "no estuvo" },
      { en: "They were not at the party", es: "no estuvieron" },
      { en: "Was I in trouble?", es: "estuve?" },
      { en: "Were you at school?", es: "estuviste?" },
      { en: "Was he nervous?", es: "estuvo?" },
      { en: "Were we in town?", es: "estuvimos?" },
      { en: "Were they tired?", es: "estuvieron?" },
      { en: "I was in Spain", es: "estuve" },
      { en: "You were at home", es: "estuviste" },
      { en: "We were at the beach", es: "estuvimos" },
      { en: "They were in Dublin", es: "estuvieron" },
      { en: "Was she in the kitchen?", es: "estuvo?" },
      { en: "Were they in France?", es: "estuvieron?" },
      { en: "We were not at the concert", es: "no estuvimos" },
      { en: "They were not in Madrid", es: "no estuvieron" },
      { en: "You were not at home", es: "no estuviste" },
      { en: "I was not at school", es: "no estuve" }
    ],

    5: [
      { en: "They were friends", es: "eran" },
      { en: "They were happy", es: "estaban" },
      { en: "We were cousins", es: "éramos" },
      { en: "We were in the kitchen", es: "estábamos" },
      { en: "He was a good doctor", es: "era" },
      { en: "He was calm", es: "estaba" },
      { en: "They were not neighbours", es: "no eran" },
      { en: "They were not at home", es: "no estaban" },
      { en: "You were very kind", es: "eras" },
      { en: "You were in a bad mood", es: "estabas" },
      { en: "Was she your cousin?", es: "era?" },
      { en: "Was she tired?", es: "estaba?" },
      { en: "Were they doctors?", es: "eran?" },
      { en: "Were they in school?", es: "estaban?" },
      { en: "Were we neighbours?", es: "éramos?" },
      { en: "We were in class", es: "estábamos" },
      { en: "They were funny people", es: "eran" },
      { en: "He was my teacher", es: "era" },
      { en: "He was at the cinema", es: "estaba" },
      { en: "Were we in the park?", es: "estábamos?" },
      { en: "Were they serious?", es: "eran?" },
      { en: "You were my friend", es: "eras" },
      { en: "You were tired", es: "estabas" },
      { en: "They were not cousins", es: "no eran" },
      { en: "They were not in Dublin", es: "no estaban" }
    ],

    6: [
      { en: "They were the winners", es: "fueron" },
      { en: "They were at the concert", es: "estuvieron" },
      { en: "We were the champions", es: "fuimos" },
      { en: "We were in Madrid", es: "estuvimos" },
      { en: "He was the captain", es: "fue" },
      { en: "He was nervous", es: "estuvo" },
      { en: "They were not the champions", es: "no fueron" },
      { en: "They were not in the hall", es: "no estuvieron" },
      { en: "You were my partner", es: "fuiste" },
      { en: "You were very quiet", es: "estuviste" },
      { en: "Was she the leader?", es: "fue?" },
      { en: "Was she worried?", es: "estuvo?" },
      { en: "Were they the teachers?", es: "fueron?" },
      { en: "Were they at home?", es: "estuvieron?" },
      { en: "Were we the winners?", es: "fuimos?" },
      { en: "I was the captain", es: "fui" },
      { en: "I was in France", es: "estuve" },
      { en: "We were the finalists", es: "fuimos" },
      { en: "We were at the match", es: "estuvimos" },
      { en: "They were the guests", es: "fueron" },
      { en: "They were in the church", es: "estuvieron" },
      { en: "You were the winner", es: "fuiste" },
      { en: "You were at school", es: "estuviste" },
      { en: "He was not the leader", es: "no fue" },
      { en: "He was not at home", es: "no estuvo" }
    ],

    7: [
      { en: "I used to be shy", es: "era" },
      { en: "I used to be tired after training", es: "estaba" },
      { en: "I was the winner in the end", es: "fui" },
      { en: "I was exhausted afterwards", es: "estuve" },
      { en: "We used to be neighbours", es: "éramos" },
      { en: "We used to be in the same class", es: "estábamos" },
      { en: "We were champions that year", es: "fuimos" },
      { en: "We were in Galway for the weekend", es: "estuvimos" },
      { en: "They used to be very serious", es: "eran" },
      { en: "They used to be in school together", es: "estaban" },
      { en: "They were the guests of honour", es: "fueron" },
      { en: "They were delighted after the show", es: "estuvieron" },
      { en: "Was I your friend back then?", es: "era?" },
      { en: "Was I at home then?", es: "estaba?" },
      { en: "Was I ill yesterday?", es: "estuve?" },
      { en: "You used to be funny", es: "eras" },
      { en: "You used to be at home in the evenings", es: "estabas" },
      { en: "You were the winner that day", es: "fuiste" },
      { en: "You were nervous after the match", es: "estuviste" },
      { en: "They used to be my neighbours", es: "eran" },
      { en: "They used to be in class with us", es: "estaban" },
      { en: "Were they my cousins back then?", es: "eran?" },
      { en: "Were they at home then?", es: "estaban?" },
      { en: "Were they the winners in the end?", es: "fueron?" },
      { en: "Were they tired afterwards?", es: "estuvieron?" }
    ],

    8: [
      { en: "I was (ser, imperfect) a good student", es: "era" },
      { en: "I was (ser, preterite) the winner", es: "fui" },
      { en: "I was (estar, imperfect) at home", es: "estaba" },
      { en: "I was (estar, preterite) in Dublin", es: "estuve" },
      { en: "We were (ser, imperfect) cousins", es: "éramos" },
      { en: "We were (ser, preterite) the champions", es: "fuimos" },
      { en: "We were (estar, imperfect) in the kitchen", es: "estábamos" },
      { en: "We were (estar, preterite) at the beach", es: "estuvimos" },
      { en: "They were (ser, imperfect) good friends", es: "eran" },
      { en: "They were (ser, preterite) the winners", es: "fueron" },
      { en: "They were (estar, imperfect) very happy", es: "estaban" },
      { en: "They were (estar, preterite) at school", es: "estuvieron" },
      { en: "Was he? (ser, preterite) your teacher", es: "fue?" },
      { en: "Was he? (estar, imperfect) at home", es: "estaba?" },
      { en: "Was he? (estar, preterite) nervous", es: "estuvo?" },
      { en: "You were (ser, imperfect) my friend", es: "eras" },
      { en: "You were (ser, preterite) the captain", es: "fuiste" },
      { en: "You were (estar, imperfect) in class", es: "estabas" },
      { en: "You were (estar, preterite) in Spain", es: "estuviste" },
      { en: "They were (ser, imperfect) doctors", es: "eran" },
      { en: "They were (estar, imperfect) at home", es: "estaban" },
      { en: "They were (ser, preterite) the champions", es: "fueron" },
      { en: "They were (estar, preterite) in Madrid", es: "estuvieron" },
      { en: "Was she? (ser, imperfect) your cousin", es: "era?" },
      { en: "Was she? (estar, preterite) at school", es: "estuvo?" }
    ],

    9: [
      { en: "We were not cousins", es: "no éramos" },
      { en: "We were not in class", es: "no estábamos" },
      { en: "We were not the winners", es: "no fuimos" },
      { en: "We were not at the cinema", es: "no estuvimos" },
      { en: "They were not funny", es: "no eran" },
      { en: "They were not happy", es: "no estaban" },
      { en: "They were not our neighbours", es: "no fueron" },
      { en: "They were not in the church", es: "no estuvieron" },
      { en: "Was it your birthday?", es: "era?" },
      { en: "Was it the final?", es: "fue?" },
      { en: "Was he at home?", es: "estaba?" },
      { en: "Was he calm all evening?", es: "estuvo?" },
      { en: "You were not my teacher", es: "no eras" },
      { en: "You were not at school", es: "no estabas" },
      { en: "You were not in the library", es: "no estuviste" },
      { en: "We were not friends", es: "no éramos" },
      { en: "We were not in town", es: "no estábamos" },
      { en: "They were not the champions", es: "no fueron" },
      { en: "They were not at home", es: "no estuvieron" },
      { en: "Was she your cousin?", es: "era?" },
      { en: "Was she the winner?", es: "fue?" },
      { en: "Was she at home?", es: "estaba?" },
      { en: "Was she tired after the match?", es: "estuvo?" },
      { en: "You were not the captain", es: "no fuiste" },
      { en: "We were not in Spain", es: "no estuvimos" }
    ],

    10: [
      { en: "I was a student", es: "era" },
      { en: "I was at home", es: "estaba" },
      { en: "I was the winner", es: "fui" },
      { en: "I was in Madrid", es: "estuve" },
      { en: "We were cousins", es: "éramos" },
      { en: "We were in class", es: "estábamos" },
      { en: "We were the champions", es: "fuimos" },
      { en: "We were at the concert", es: "estuvimos" },
      { en: "They were my friends", es: "eran" },
      { en: "They were happy", es: "estaban" },
      { en: "They were the winners", es: "fueron" },
      { en: "They were in Dublin", es: "estuvieron" },
      { en: "They were not the champions", es: "no fueron" },
      { en: "They were not at home", es: "no estuvieron" },
      { en: "Were they happy?", es: "estaban?" },
      { en: "Were they your teachers?", es: "fueron?" },
      { en: "Were we cousins?", es: "éramos?" },
      { en: "Were we at the beach?", es: "estuvimos?" },
      { en: "You were my friend", es: "eras" },
      { en: "You were nervous", es: "estabas" },
      { en: "You were the leader", es: "fuiste" },
      { en: "You were in France", es: "estuviste" },
      { en: "Was she Irish?", es: "era?" },
      { en: "Was she tired?", es: "estaba?" },
      { en: "Was she the captain?", es: "fue?" },
      { en: "Was she in Spain?", es: "estuvo?" }
    ]
  }
};

// Same engine
let currentTense = "Past";
let currentLevel = 1;
let unlockedLevels = { Present: 1, Past: 1, Future: 1 };
let gameVerbs = [];
let startTime, timerInterval;

const tenseButtons = document.querySelectorAll(".tense-button");
const levelList = document.getElementById("level-list");
const gameContainer = document.getElementById("game");
const questionsContainer = document.getElementById("questions");
const resultsContainer = document.getElementById("results");

// Make Past the active visible tense
tenseButtons.forEach(btn => {
  btn.classList.toggle("active", btn.dataset.tense === "Past");
  if (btn.dataset.tense !== "Past") {
    btn.disabled = true;
    btn.style.opacity = "0.55";
  }
});

function normalizeAnswer(text) {
  return String(text || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

renderLevels();

function renderLevels() {
  levelList.style.display = "flex";
  gameContainer.style.display = "none";
  levelList.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const button = document.createElement("button");
    const bestTimeKey = `bestTime_${currentTense}_Level${i}`;
    const bestTime = localStorage.getItem(bestTimeKey);
    const locked = i > unlockedLevels[currentTense];

    button.textContent = locked
      ? `Level ${i} 🔒`
      : `Level ${i}${bestTime ? ` - Best: ${bestTime}s` : ""}`;

    button.disabled = locked;

    if (!locked) {
      button.addEventListener("click", () => startGame(i));
    }

    levelList.appendChild(button);
  }
}

function startGame(level) {
  currentLevel = level;
  gameVerbs = shuffleArray(LEVEL_POOLS.Past[level]).slice(0, 10);

  levelList.style.display = "none";
  gameContainer.style.display = "block";
  questionsContainer.innerHTML = "";
  resultsContainer.innerHTML = "";

  gameVerbs.forEach(verb => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${verb.en}</strong>: <input type="text" data-answer="${verb.es}">`;
    questionsContainer.appendChild(div);
  });

  startTimer();
}

function startTimer() {
  startTime = Date.now();
  document.getElementById("timer").textContent = "Time: 0s";

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("timer").textContent = `Time: ${elapsed}s`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

document.getElementById("submit").addEventListener("click", () => {
  stopTimer();
  const elapsed = Math.floor((Date.now() - startTime) / 1000);

  let penalty = 0;
  let correct = 0;

  document.querySelectorAll("#questions input").forEach(input => {
    const user = normalizeAnswer(input.value);
    const answer = normalizeAnswer(input.dataset.answer);

    if (user === answer) {
      correct++;
      input.style.border = "2px solid green";
    } else {
      penalty += 30;
      input.style.border = "2px solid red";
    }
  });

  const totalTime = elapsed + penalty;

  resultsContainer.innerHTML = `
    <h3>Game Over!</h3>
    <p>Correct: ${correct}/10</p>
    <p>Time: ${elapsed}s + Penalty: ${penalty}s = <strong>${totalTime}s</strong></p>
    <h4>Feedback:</h4>
  `;

  document.querySelectorAll("#questions input").forEach(input => {
    const correctAnswer = input.dataset.answer;
    const userAnswer = input.value.trim();

    if (normalizeAnswer(userAnswer) !== normalizeAnswer(correctAnswer)) {
      const feedback = document.createElement("p");
      feedback.innerHTML = `<strong>${input.previousSibling.textContent}</strong> → Correct answer: <span style='color: green;'>${correctAnswer}</span> | Your answer: <span style='color: red;'>${userAnswer || "(blank)"}</span>`;
      resultsContainer.appendChild(feedback);
    }
  });

  const bestTimeKey = `bestTime_${currentTense}_Level${currentLevel}`;
  const savedBestTime = localStorage.getItem(bestTimeKey);

  if (!savedBestTime || totalTime < parseInt(savedBestTime, 10)) {
    localStorage.setItem(bestTimeKey, totalTime);
  }

  if (totalTime <= levelUnlockTime(currentLevel)) {
    if (unlockedLevels[currentTense] < currentLevel + 1 && currentLevel < 10) {
      unlockedLevels[currentTense] = currentLevel + 1;
      const unlockMsg = document.createElement("p");
      unlockMsg.style.color = "blue";
      unlockMsg.innerHTML = `<strong>Level ${currentLevel + 1} Unlocked!</strong>`;
      resultsContainer.appendChild(unlockMsg);
    }
  }

  if (correct === 10) {
    const celebration = document.createElement("div");
    celebration.className = "perfect-celebration";
    celebration.textContent = "🎉 PERFECT GAME! 🎉";
    resultsContainer.prepend(celebration);

    setTimeout(() => {
      celebration.remove();
    }, 5000);
  }

  const tryAgainButton = document.createElement("button");
  tryAgainButton.textContent = "Try Again";
  tryAgainButton.className = "try-again";
  tryAgainButton.onclick = () => startGame(currentLevel);
  resultsContainer.appendChild(tryAgainButton);

  const backButton = document.createElement("button");
  backButton.textContent = "Back to Levels";
  backButton.id = "back-button";
  backButton.onclick = () => renderLevels();
  resultsContainer.appendChild(backButton);
});

function levelUnlockTime(level) {
  return 100 - (level - 1) * 5;
}
