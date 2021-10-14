let player1 = {
  name: "SCORPION",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["stick", "bit"],
  attak: function(){
    console.log(this.name + "Fight...")
  }
}

let player2 = {
  name: "SUB-ZERO",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["stick", "bit"],
  attak: function(){
    console.log(this.name + "Fight...")
  }
}

function createPlayer(name, hp, img) {
  let player1 = document.createElement("div");
  let progressbar = document.createElement("div");
  let character = document.createElement("div");
  let life = document.createElement("div");
  let name = document.createElement("div");
  let img = document.createElement("div");

  player1.classList.add("player1");
  progressbar.classList.add("progressbar");
  character.classList.add("character");
  life.classList.add("life");
  name.classList.add("name");

  let arenas = document.querySelector(".arenas");
  arenas.appendChild(player1);
  player1.appendChild(progressbar);
  player1.appendChild(character);
  progressbar.appendChild(life);
  progressbar.appendChild(name);
  character.appendChild(img);

  life.style.width = hp + "%";
  name.innerText = name;
  img.scr = img;
}

createPlayer(player1["name"], player1["hp"], player1["img"]);
createPlayer(player2["name"], player2["hp"], player2["img"]);