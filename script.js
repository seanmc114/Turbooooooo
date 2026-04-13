// --- Turbooooooo: SAME GAME, fixed prompts only ---

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
      { en: "They were not neighbours", es: "no eran" }
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
      { en: "They were not in Dublin", es: "no estaban" }
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
      { en: "They were not our teachers", es: "no fueron" }
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
      { en: "They were not at the party", es: "no estuvieron" }
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
      { en: "You were in a bad mood", es: "estabas" }
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
      { en: "You were very quiet", es: "estuviste" }
    ],

    7: [
      { en: "I used to be shy", es: "era" },
      { en: "I used to be tired", es: "estaba" },
      { en: "I was the winner", es: "fui" },
      { en: "I was exhausted", es: "estuve" },
      { en: "They used to be serious", es: "eran" },
      { en: "They used to be in school", es: "estaban" },
      { en: "They were the guests", es: "fueron" },
      { en: "They were delighted", es: "estuvieron" },
      { en: "We used to be neighbours", es: "éramos" },
      { en: "We used to be in class", es: "estábamos" }
    ],

    8: [
      { en: "They were good friends", es: "eran" },
      { en: "They were very happy", es: "estaban" },
      { en: "They were the winners", es: "fueron" },
      { en: "They were in Dublin", es: "estuvieron" },
      { en: "We were cousins", es: "éramos" },
      { en: "We were at the beach", es: "estuvimos" },
      { en: "I was a student", es: "era" },
      { en: "I was in Spain", es: "estuve" },
      { en: "He was a teacher", es: "era" },
      { en: "He was at home", es: "estaba" }
    ],

    9: [
      { en: "They were not happy", es: "no estaban" },
      { en: "They were not friends", es: "no eran" },
      { en: "They were not the winners", es: "no fueron" },
      { en: "They were not in the church", es: "no estuvieron" },
      { en: "We were not cousins", es: "no éramos" },
      { en: "We were not in class", es: "no estábamos" },
      { en: "We were not the champions", es: "no fuimos" },
      { en: "We were not at the cinema", es: "no estuvimos" },
      { en: "You were not my teacher", es: "no eras" },
      { en: "You were not at school", es: "no estabas" }
    ],

    10: [
      { en: "They were friends", es: "eran" },
      { en: "They were happy", es: "estaban" },
      { en: "They were the winners", es: "fueron" },
      { en: "They were in Dublin", es: "estuvieron" },
      { en: "We were cousins", es: "éramos" },
      { en: "We were in class", es: "estábamos" },
      { en: "We were the champions", es: "fuimos" },
      { en: "We were at the concert", es: "estuvimos" },
      { en: "I was a student", es: "era" },
      { en: "I was in Madrid", es: "estuve" }
    ]
  }
};

// (Everything below stays EXACTLY the same as your working game)
// 👉 DO NOT TOUCH your existing engine code below this point
