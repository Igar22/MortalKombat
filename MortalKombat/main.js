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
  },
  elHP: elHP,
  renderHP: renderHP,
  changeHP: changeHP,
}

const player2 = {
  player: 2,
  name: "SUB-ZERO",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["stick", "bit"],
  attak: function(name){
    console.log(name + " " + "Fight...")
  },
  elHP: elHP,
  renderHP: renderHP,
  changeHP: changeHP,
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

function getRandom(num){
  return Math.ceil(Math.random() * num);
}

function changeHP() {

  // const $playerLife = document.querySelector(".player"+ player.player +" .life");
  this.hp -= getRandom(20);
 
  if (this.hp <= 0) {
    this.hp = 0;
  }

  return this.hp;

  // $playerLife.style.width = player.hp + "%";

}

function elHP() {
  return ".player" + this.player + ".life";
}
console.log(player2.elHP())

function renderHP() {
  this.elHP().style.width = this.hp + "%";
}

function playerWin(name) {
  const $winTitle = createElement("div", "winTitle");

  if (name) {
    $winTitle.innerText = name + " wins";
  } else {
    $winTitle.innerText = " draw";
  }

  return $winTitle;
}

function createReloadButton() {
  const $reloadWrap = document.createElement(".reloadWrap");

  const $reloadButton = document.createElement(".button");
  $reloadWrap.appendChild($reloadButton);
  $reloadButton.innerText = "Restart";

  $reloadButton.addEventListener("click", function(){
  window.location.reload();
})
  return $reloadButton;
}

$randomButton.addEventListener("click", function() {
  player1.changeHP(getRandom(20));
  player1.renderHP();
  player2.changeHP(getRandom(20));
  player2.renderHP();

  if (player1.hp === 0 || player2.hp === 0) {
    $randomButton.disabled = true;
  }

  if ( player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(playerWin(player2.name))
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(playerWin(player1.name))
  } else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerWin())
  }

})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));






// if (player.hp <= 0) {
//   player.hp = 0;
//   $randomButton.disabled = true;
//   if(player1.hp > player2.hp) {
//     $arenas.appendChild(playerWin(player1.name));
//   } else if (player1.hp < player2.hp) {
//     $arenas.appendChild(playerWin(player2.name));
//   } else if (player1.hp = player2.hp) {
//     $arenas.appendChild(draw());
//   }
//  }