
// --- Turbooooooo: same shell, same scoring, same unlock times, new content only ---

const LEVEL_POOLS = {
  Past: {
    1: [
      { en: "I was", es: "era" },
      { en: "You were", es: "eras" },
      { en: "He was", es: "era" },
      { en: "She was", es: "era" },
      { en: "We were", es: "éramos" },
      { en: "They were", es: "eran" },
      { en: "I was not", es: "no era" },
      { en: "You were not", es: "no eras" },
      { en: "He was not", es: "no era" },
      { en: "They were not", es: "no eran" },
      { en: "Was I?", es: "era?" },
      { en: "Were you?", es: "eras?" },
      { en: "Was he?", es: "era?" },
      { en: "Were we?", es: "éramos?" },
      { en: "Were they?", es: "eran?" }
    ],
    2: [
      { en: "I was", es: "estaba" },
      { en: "You were", es: "estabas" },
      { en: "He was", es: "estaba" },
      { en: "She was", es: "estaba" },
      { en: "We were", es: "estábamos" },
      { en: "They were", es: "estaban" },
      { en: "I was not", es: "no estaba" },
      { en: "You were not", es: "no estabas" },
      { en: "He was not", es: "no estaba" },
      { en: "They were not", es: "no estaban" },
      { en: "Was I?", es: "estaba?" },
      { en: "Were you?", es: "estabas?" },
      { en: "Was he?", es: "estaba?" },
      { en: "Were we?", es: "estábamos?" },
      { en: "Were they?", es: "estaban?" }
    ],
    3: [
      { en: "I was (ser, completed)", es: "fui" },
      { en: "You were (ser, completed)", es: "fuiste" },
      { en: "He was (ser, completed)", es: "fue" },
      { en: "She was (ser, completed)", es: "fue" },
      { en: "We were (ser, completed)", es: "fuimos" },
      { en: "They were (ser, completed)", es: "fueron" },
      { en: "I was not (ser, completed)", es: "no fui" },
      { en: "You were not (ser, completed)", es: "no fuiste" },
      { en: "He was not (ser, completed)", es: "no fue" },
      { en: "They were not (ser, completed)", es: "no fueron" },
      { en: "Was I? (ser, completed)", es: "fui?" },
      { en: "Were you? (ser, completed)", es: "fuiste?" },
      { en: "Was he? (ser, completed)", es: "fue?" },
      { en: "Were we? (ser, completed)", es: "fuimos?" },
      { en: "Were they? (ser, completed)", es: "fueron?" }
    ],
    4: [
      { en: "I was (estar, completed)", es: "estuve" },
      { en: "You were (estar, completed)", es: "estuviste" },
      { en: "He was (estar, completed)", es: "estuvo" },
      { en: "She was (estar, completed)", es: "estuvo" },
      { en: "We were (estar, completed)", es: "estuvimos" },
      { en: "They were (estar, completed)", es: "estuvieron" },
      { en: "I was not (estar, completed)", es: "no estuve" },
      { en: "You were not (estar, completed)", es: "no estuviste" },
      { en: "He was not (estar, completed)", es: "no estuvo" },
      { en: "They were not (estar, completed)", es: "no estuvieron" },
      { en: "Was I? (estar, completed)", es: "estuve?" },
      { en: "Were you? (estar, completed)", es: "estuviste?" },
      { en: "Was he? (estar, completed)", es: "estuvo?" },
      { en: "Were we? (estar, completed)", es: "estuvimos?" },
      { en: "Were they? (estar, completed)", es: "estuvieron?" }
    ],
    5: [
      { en: "I was (general characteristic)", es: "era" },
      { en: "I was (temporary condition)", es: "estaba" },
      { en: "We were (identity/relationship)", es: "éramos" },
      { en: "We were (location/state)", es: "estábamos" },
      { en: "They were (general quality)", es: "eran" },
      { en: "They were (temporary mood)", es: "estaban" },
      { en: "Was he? (general characteristic)", es: "era?" },
      { en: "Was he? (temporary state)", es: "estaba?" },
      { en: "They were not (general quality)", es: "no eran" },
      { en: "They were not (temporary state)", es: "no estaban" },
      { en: "Were we? (identity)", es: "éramos?" },
      { en: "Were we? (location)", es: "estábamos?" },
      { en: "You were (general quality)", es: "eras" },
      { en: "You were (temporary state)", es: "estabas" },
      { en: "She was not (temporary state)", es: "no estaba" }
    ],
    6: [
      { en: "I was (completed identity/result)", es: "fui" },
      { en: "I was (completed state)", es: "estuve" },
      { en: "We were (completed identity/result)", es: "fuimos" },
      { en: "We were (completed location/state)", es: "estuvimos" },
      { en: "They were (completed identity/result)", es: "fueron" },
      { en: "They were (completed state/location)", es: "estuvieron" },
      { en: "Was she? (completed identity/result)", es: "fue?" },
      { en: "Was she? (completed state)", es: "estuvo?" },
      { en: "They were not (completed identity/result)", es: "no fueron" },
      { en: "They were not (completed state)", es: "no estuvieron" },
      { en: "You were (completed identity/result)", es: "fuiste" },
      { en: "You were (completed state)", es: "estuviste" },
      { en: "He was not (completed identity/result)", es: "no fue" },
      { en: "He was not (completed state)", es: "no estuvo" },
      { en: "Were they? (completed location/state)", es: "estuvieron?" }
    ],
    7: [
      { en: "I used to be", es: "era" },
      { en: "I used to be (state/location)", es: "estaba" },
      { en: "I turned out to be / I was", es: "fui" },
      { en: "I ended up being / I was (state)", es: "estuve" },
      { en: "We used to be", es: "éramos" },
      { en: "We used to be (location/state)", es: "estábamos" },
      { en: "We were / turned out to be", es: "fuimos" },
      { en: "We were / stayed (state/location)", es: "estuvimos" },
      { en: "They used to be", es: "eran" },
      { en: "They used to be (state/location)", es: "estaban" },
      { en: "They were / turned out to be", es: "fueron" },
      { en: "They were / stayed (state/location)", es: "estuvieron" },
      { en: "Was I? (used to be)", es: "era?" },
      { en: "Was I? (state/location)", es: "estaba?" },
      { en: "Was I? (completed state)", es: "estuve?" }
    ],
    8: [
      { en: "I was (ser, imperfect)", es: "era" },
      { en: "I was (ser, preterite)", es: "fui" },
      { en: "I was (estar, imperfect)", es: "estaba" },
      { en: "I was (estar, preterite)", es: "estuve" },
      { en: "We were (ser, imperfect)", es: "éramos" },
      { en: "We were (ser, preterite)", es: "fuimos" },
      { en: "We were (estar, imperfect)", es: "estábamos" },
      { en: "We were (estar, preterite)", es: "estuvimos" },
      { en: "They were (ser, imperfect)", es: "eran" },
      { en: "They were (ser, preterite)", es: "fueron" },
      { en: "They were (estar, imperfect)", es: "estaban" },
      { en: "They were (estar, preterite)", es: "estuvieron" },
      { en: "Was he? (ser, preterite)", es: "fue?" },
      { en: "Was he? (estar, imperfect)", es: "estaba?" },
      { en: "Was he? (estar, preterite)", es: "estuvo?" }
    ],
    9: [
      { en: "We were not (ser, imperfect)", es: "no éramos" },
      { en: "We were not (estar, imperfect)", es: "no estábamos" },
      { en: "We were not (ser, preterite)", es: "no fuimos" },
      { en: "We were not (estar, preterite)", es: "no estuvimos" },
      { en: "They were not (ser, imperfect)", es: "no eran" },
      { en: "They were not (estar, imperfect)", es: "no estaban" },
      { en: "They were not (ser, preterite)", es: "no fueron" },
      { en: "They were not (estar, preterite)", es: "no estuvieron" },
      { en: "Was it? (ser, imperfect)", es: "era?" },
      { en: "Was it? (ser, preterite)", es: "fue?" },
      { en: "Was it? (estar, imperfect)", es: "estaba?" },
      { en: "Was it? (estar, preterite)", es: "estuvo?" },
      { en: "You were not (ser, imperfect)", es: "no eras" },
      { en: "You were not (estar, imperfect)", es: "no estabas" },
      { en: "You were not (estar, preterite)", es: "no estuviste" }
    ],
    10: [
      { en: "I was (ser, imperfect)", es: "era" },
      { en: "I was (estar, imperfect)", es: "estaba" },
      { en: "I was (ser, preterite)", es: "fui" },
      { en: "I was (estar, preterite)", es: "estuve" },
      { en: "We were (ser, imperfect)", es: "éramos" },
      { en: "We were (estar, imperfect)", es: "estábamos" },
      { en: "We were (ser, preterite)", es: "fuimos" },
      { en: "We were (estar, preterite)", es: "estuvimos" },
      { en: "They were (ser, imperfect)", es: "eran" },
      { en: "They were (estar, imperfect)", es: "estaban" },
      { en: "They were (ser, preterite)", es: "fueron" },
      { en: "They were (estar, preterite)", es: "estuvieron" },
      { en: "They were not (ser, preterite)", es: "no fueron" },
      { en: "They were not (estar, preterite)", es: "no estuvieron" },
      { en: "Were they? (estar, imperfect)", es: "estaban?" },
      { en: "Were they? (ser, preterite)", es: "fueron?" },
      { en: "Were we? (ser, imperfect)", es: "éramos?" },
      { en: "Were we? (estar, preterite)", es: "estuvimos?" }
    ]
  }
};

// keep tense buttons and same layout; only Past is playable content
let currentTense = "Past";
let currentLevel = 1;
let unlockedLevels = {
  Present: 0,
  Past: 1,
  Future: 0
};
let gameVerbs = [];
let startTime, timerInterval;

const tenseButtons = document.querySelectorAll(".tense-button");
const levelList = document.getElementById("level-list");
const gameContainer = document.getElementById("game");
const questionsContainer = document.getElementById("questions");
const resultsContainer = document.getElementById("results");

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

// same buttons remain; only past works
tenseButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tenseButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentTense = btn.dataset.tense;
    renderLevels();
  });
});

renderLevels();

function renderLevels() {
  levelList.style.display = "flex";
  gameContainer.style.display = "none";
  levelList.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const button = document.createElement("button");
    const bestTimeKey = `bestTime_${currentTense}_Level${i}`;
    const bestTime = localStorage.getItem(bestTimeKey);
    const locked = i > unlockedLevels[currentTense] || currentTense !== "Past";

    button.textContent = locked
      ? `Level ${i} 🔒`
      : `Level ${i}${bestTime ? ` - Best: ${bestTime}s` : ""}`;
    button.disabled = locked;

    if (currentTense === "Past") {
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
  document.getElementById("timer").textContent = `Time: 0s`;
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
  resultsContainer.innerHTML = `<h3>Game Over!</h3><p>Correct: ${correct}/10</p><p>Time: ${elapsed}s + Penalty: ${penalty}s = <strong>${totalTime}s</strong></p><h4>Feedback:</h4>`;

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
  if (!savedBestTime || totalTime < parseInt(savedBestTime)) {
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
    setTimeout(() => celebration.remove(), 5000);
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
