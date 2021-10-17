const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");

const player1 = {
  player: 1,
  name: "SCORPION",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["stick", "bit"],
  attak: function(name){
    console.log(name + " " + "Fight...")
  }
}

const player2 = {
  player: 2,
  name: "SUB-ZERO",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["stick", "bit"],
  attak: function(name){
    console.log(name + " " + "Fight...")
  }
};

function createElement (tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
 
  return $tag;
}


function createPlayer(playerObj) {
  const $player = createElement("div", "player"+playerObj.player);
  const $progressbar = createElement("div", "progressbar");
  const $character = createElement("div", "character");
  const $life = createElement("div", "life");
  const $name = createElement("div", "name");
  const $img = createElement("img");

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);

  $life.style.width = playerObj.hp + "%";
  $name.innerText = playerObj.name;
  $img.scr = playerObj.img;

  return $player;
}

function changeHP(player) {
  const demage = Math.ceil(Math.random() * 20);
  const $playerLife = document.querySelector(".player"+ player.player +" .life");
  player.hp -= demage;
  $playerLife.style.width = player.hp + "%";

  if (player.hp <= 0) {
    $randomButton.disabled = true;
    if(player1.hp > player2.hp) {
      $arenas.appendChild(playerWin(player1.name));
    } else if (player1.hp < player2.hp) {
      $arenas.appendChild(playerWin(player2.name));
    } else {
      $arenas.appendChild(draw());
    }
  }
}

function playerWin(name) {
  const $winTitle = createElement("div", "winTitle");
  $winTitle.innerText = name + " wins";

  return $winTitle;
}

function draw() {
  const $draw = createElement("div", "$draw");
  $draw.innerText = "Draw...";
  return $draw;
}

$randomButton.addEventListener("click", function() {
  changeHP(player1);
  changeHP(player2);
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

