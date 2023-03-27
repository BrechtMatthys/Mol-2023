let spelers = [
  { name: "Brecht",
   scoreMatteo: 0,
   scoreComfort: 0,
   scoreConny: 2,
   scoreLancelot: 2,
   scoreLeila: 0,
   scoreLieselot: 0,
   scoreRuben: 6,
   scoreSamya: 2,
   scoreThomas: 0,
   scoreToos: 0,
  },
  { name: "Ineke",
   scoreMatteo: 0,
   scoreComfort: 1,
   scoreConny: 0,
   scoreLancelot: 2,
   scoreLeila: 3,
   scoreLieselot: 1,
   scoreRuben: 0,
   scoreSamya: 3,
   scoreThomas: 2,
   scoreToos: 0,
  },
  { name: "Santi",
   scoreMatteo: 0,
   scoreComfort: 1,
   scoreConny: 0,
   scoreLancelot: 5,
   scoreLeila: 5,
   scoreLieselot: 0,
   scoreRuben: 0,
   scoreSamya: 1,
   scoreThomas: 0,
   scoreToos: 0,
  },
  { name: "Evelyn",
   scoreMatteo: 0,
   scoreComfort: 0,
   scoreConny: 0,
   scoreLancelot: 0,
   scoreLeila: 0,
   scoreLieselot: 3,
   scoreRuben: 0,
   scoreSamya: 2,
   scoreThomas: 0,
   scoreToos: 1,
  },
  { name: "Raf",
   scoreMatteo: 2,
   scoreComfort: 0,
   scoreConny: 3,
   scoreLancelot: 0,
   scoreLeila: 1,
   scoreLieselot: 0,
   scoreRuben: 0,
   scoreSamya: 0,
   scoreThomas: 0,
   scoreToos: 0,
  }, // voor als er geen stemmen zijn op een speler
  { name: "/",
   scoreMatteo: 0.0,
   scoreComfort: 0.0,
   scoreConny: 0.0,
   scoreLancelot: 0.0,
   scoreLeila: 0.0,
   scoreLieselot: 0.0,
   scoreRuben: 0.0,
   scoreSamya: 0.0,
   scoreThomas: 0.0,
   scoreToos: 0.0,
  }, // voor als er geen stemmen zijn op een speler
  { name: "/",
   scoreMatteo: 0.0,
   scoreComfort: 0.0,
   scoreConny: 0.0,
   scoreLancelot: 0.0,
   scoreLeila: 0.0,
   scoreLieselot: 0.0,
   scoreRuben: 0.0,
   scoreSamya: 0.0,
   scoreThomas: 0.0,
   scoreToos: 0.0,
  }, // voor als er geen stemmen zijn op een speler
  { name: "/",
   scoreMatteo: 0.0,
   scoreComfort: 0.0,
   scoreConny: 0.0,
   scoreLancelot: 0.0,
   scoreLeila: 0.0,
   scoreLieselot: 0.0,
   scoreRuben: 0.0,
   scoreSamya: 0.0,
   scoreThomas: 0.0,
   scoreToos: 0.0,
  },
];

// dit bepaalt de volgorde van de cards
let kandidaten = [
  { name: "Comfort" },
  { name: "Conny" },
  { name: "Lancelot" },
  { name: "Leïla" },
  { name: "Lieselot" },
  { name: "Ruben" },
  { name: "Samya" },
  { name: "Thomas" },
  { name: "Toos" },
  { name: "Matteo", status:"afgevallen" },
];


let comfortScore = [];
let connyScore = [];
let lancelotScore = [];
let leilaScore = [];
let matteoScore = [];
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

// Matteo
spelers.sort((a, b) => {
  return b.scoreMatteo - a.scoreMatteo;
});

matteoScore.push(spelers[0], spelers[1], spelers[2])

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
  // Matteo
  if (item.name === "Matteo"){
    matteoScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreMatteo;
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
