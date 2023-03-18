let spelers = [
  { name: "Speler",
   scoreMystery: 0,
   scoreComfort: 0,
   scoreConny: 0,
   scoreLancelot: 0,
   scoreLeila: 0,
   scoreLieselot: 0,
   scoreRuben: 0,
   scoreSamya: 0,
   scoreThomas: 0,
   scoreToos: 0,
  }, // voor als er geen stemmen zijn op een speler
  { name: "/",
   scoreMystery: 1,
   scoreComfort: 1,
   scoreConny: 1,
   scoreLancelot: 1,
   scoreLeila: 1,
   scoreLieselot: 1,
   scoreRuben: 1,
   scoreSamya: 1,
   scoreThomas: 1,
   scoreToos: 1,
  }, // voor als er geen stemmen zijn op een speler
  { name: "/",
   scoreMystery: 1,
   scoreComfort: 1,
   scoreConny: 1,
   scoreLancelot: 1,
   scoreLeila: 1,
   scoreLieselot: 1,
   scoreRuben: 1,
   scoreSamya: 1,
   scoreThomas: 1,
   scoreToos: 1,
  }, // voor als er geen stemmen zijn op een speler
  { name: "/",
   scoreMystery: 1,
   scoreComfort: 1,
   scoreConny: 1,
   scoreLancelot: 1,
   scoreLeila: 1,
   scoreLieselot: 1,
   scoreRuben: 1,
   scoreSamya: 1,
   scoreThomas: 1,
   scoreToos: 1,
  },
];

// dit bepaalt de volgorde van de cards
let kandidaten = [
  { name: "Conny" },
  { name: "Lancelot" },
  { name: "Leïla" },
  { name: "Comfort", status:"afgevallen" },
  { name: "Mystery", status:"afgevallen" },
  { name: "Lieselot", status:"afgevallen" },
  { name: "Toos", status:"afgevallen" },
  { name: "Samya", status:"afgevallen" },
  { name: "Thomas", status:"afgevallen" },
  { name: "Ruben", status:"afgevallen" },
];


let comfortScore = [];
let connyScore = [];
let lancelotScore = [];
let leilaScore = [];
let mysteryScore = [];
let lieselotScore = [];
let toosScore = [];
let samyaScore = [];
let thomasScore = [];
let rubenScore = [];

// Comfort
spelers.sort((a, b) => {
  return b.scoreComfort - a.scoreComfort;
});

comfortScore.push(spelers[0], spelers[1], spelers[2])

// Conny
spelers.sort((a, b) => {
  return b.scoreConny - a.scoreConny;
});

connyScore.push(spelers[0], spelers[1], spelers[2])

// Lancelot
spelers.sort((a, b) => {
  return b.scoreLancelot - a.scoreLancelot;
});

lancelotScore.push(spelers[0], spelers[1], spelers[2])

// Leïla
spelers.sort((a, b) => {
  return b.scoreLeila - a.scoreLeila;
});

leilaScore.push(spelers[0], spelers[1], spelers[2])

// Mystery
spelers.sort((a, b) => {
  return b.scoreMystery - a.scoreMystery;
});

mysteryScore.push(spelers[0], spelers[1], spelers[2])

// Lieselot
spelers.sort((a, b) => {
  return b.scoreLieselot - a.scoreLieselot;
});

lieselotScore.push(spelers[0], spelers[1], spelers[2])

// Toos
spelers.sort((a, b) => {
  return b.scoreToos - a.scoreToos;
});

toosScore.push(spelers[0], spelers[1], spelers[2])

// Samya
spelers.sort((a, b) => {
  return b.scoreSamya - a.scoreSamya;
});

samyaScore.push(spelers[0], spelers[1], spelers[2])

// Thomas
spelers.sort((a, b) => {
  return b.scoreThomas - a.scoreThomas;
});

thomasScore.push(spelers[0], spelers[1], spelers[2])

// Ruben
spelers.sort((a, b) => {
  return b.scoreRuben - a.scoreRuben;
});

rubenScore.push(spelers[0], spelers[1], spelers[2])




let main = document.querySelector("main");


// kandidaten
kandidaten.forEach((item, i) => {

  // section kandidaat
  let box = document.createElement("section");

  // h1 kandidaat
  let naam = document.createElement("h2");
  naam.classList.add(item.name + "naam");
  naam.textContent = item.name;
  box.appendChild(naam);

  box.classList.add(item.name + "box");
  box.classList.add(item.status);
  // Comfort
  if (item.name === "Comfort"){
    comfortScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreComfort;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Conny
  if (item.name === "Conny"){
    connyScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreConny;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Lancelot
  if (item.name === "Lancelot"){
    lancelotScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreLancelot;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Leïla
  if (item.name === "Leïla"){
    leilaScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreLeila;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Mystery
  if (item.name === "Mystery"){
    mysteryScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreMystery;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Lieselot
  if (item.name === "Lieselot"){
    lieselotScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreLieselot;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Toos
  if (item.name === "Toos"){
    toosScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreToos;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Samya
  if (item.name === "Samya"){
    samyaScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreSamya;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Thomas
  if (item.name === "Thomas"){
    thomasScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreThomas;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Ruben
  if (item.name === "Ruben"){
    rubenScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreRuben;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }

  main.appendChild(box);
});
