const LEVELS = [
[
{q:"Occupation",a:"ser"},
{q:"Time",a:"ser"},
{q:"Origin",a:"ser"},
{q:"Relationship",a:"ser"},
{q:"Characteristic",a:"ser"},
{q:"Day/date",a:"ser"},
{q:"Nationality",a:"ser"},
{q:"Identity",a:"ser"},
{q:"Profession",a:"ser"},
{q:"Clock time",a:"ser"}
],
[
{q:"Location",a:"estar"},
{q:"Emotion",a:"estar"},
{q:"Condition",a:"estar"},
{q:"Position",a:"estar"},
{q:"Busy",a:"estar"},
{q:"Tired",a:"estar"},
{q:"At home",a:"estar"},
{q:"In class",a:"estar"},
{q:"Happy",a:"estar"},
{q:"Nervous",a:"estar"}
],
[
{q:"Mi padre es médico",a:"ser"},
{q:"Son las cinco",a:"ser"},
{q:"Somos de Irlanda",a:"ser"},
{q:"Mi hermana es amable",a:"ser"},
{q:"Juan está en casa",a:"estar"},
{q:"Estoy cansado",a:"estar"},
{q:"Estamos estudiando",a:"estar"},
{q:"Está en la mesa",a:"estar"},
{q:"Es mi hermano",a:"ser"},
{q:"Está nervioso",a:"estar"}
],
[
{q:"La fiesta fue en casa",a:"ser"},
{q:"Estoy en casa",a:"estar"},
{q:"Es simpático",a:"ser"},
{q:"Está de mal humor",a:"estar"},
{q:"Es en mayo",a:"ser"},
{q:"Está cerrado",a:"estar"},
{q:"Son de Dublín",a:"ser"},
{q:"Está en Madrid",a:"estar"},
{q:"Era tímido",a:"ser"},
{q:"Estaba cansado",a:"estar"}
]
];

let unlocked = 1;
let level = 0;
let i = 0;
let correct = 0;
let start;

function showLevels(){
  const div = document.getElementById("levels");
  div.innerHTML="";
  
  LEVELS.forEach((_,index)=>{
    let best = localStorage.getItem("best"+index);
    let btn = document.createElement("button");
    btn.className="level "+(index<unlocked?"unlocked":"locked");
    btn.innerHTML=`Level ${index+1}<br>Best: ${best?best:"—"}`;
    
    if(index<unlocked){
      btn.onclick=()=>startLevel(index);
    }
    div.appendChild(btn);
  });
}

function startLevel(l){
  level=l;
  i=0;
  correct=0;
  start=Date.now();
  
  document.getElementById("levels").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  
  next();
}

function next(){
  if(i===10){finish();return;}
  
  document.getElementById("prompt").textContent=LEVELS[level][i].q;
  document.getElementById("levelLabel").textContent="Level "+(level+1);
  i++;
}

function answer(choice){
  let correctAnswer = LEVELS[level][i-1].a;
  
  if(choice===correctAnswer){
    correct++;
    document.getElementById("feedback").textContent="✔";
  }else{
    document.getElementById("feedback").textContent="✖";
  }
  
  setTimeout(()=>{
    document.getElementById("feedback").textContent="";
    next();
  },400);
}

function finish(){
  let time=((Date.now()-start)/1000).toFixed(1);
  
  let best = localStorage.getItem("best"+level);
  if(!best || time<best){
    localStorage.setItem("best"+level,time);
  }
  
  if(correct===10 && level===unlocked-1){
    unlocked++;
  }
  
  document.getElementById("game").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  
  document.getElementById("resultTitle").textContent="Done";
  document.getElementById("resultText").textContent=
    `${correct}/10 in ${time}s`;
    
  showLevels();
}

function back(){
  document.getElementById("result").classList.add("hidden");
  document.getElementById("levels").classList.remove("hidden");
}

showLevels();
