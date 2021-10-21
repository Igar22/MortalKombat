const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");


const player1 = {
  player: 1,
  name: "SCORPION",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["stick", "bit"],
  attak,
  elHP,
  renderHP,
  changeHP,
}

const player2 = {
  player: 2,
  name: "SUB-ZERO",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["stick", "bit"],
  attak,
  elHP,
  renderHP,
  changeHP,
};

function attak() {
  console.log(this.name + " " + "Fight...")
}

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

  $life.style.width = playerObj.hp + "%";
  $name.innerText = playerObj.name;
  $img.scr = playerObj.img;

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);

  return $player;
}

function elHP() {
  return document.querySelector(".player"+this.player+" .life");
}

function changeHP(randomNumber) {
  this.hp -= randomNumber;
 
  if (this.hp <= 0) {
      this.hp = 0;
  }
}

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

function getRandom(num){
  return Math.ceil(Math.random() * num);
}

console.log(player2.elHP())

function createReloadButton() {
  const $reloadButtonDiv = createElement("div", "reloadWrap");
  const $reloadButton = createElement("button", "button");
  $reloadButton.innerText = "Restart";

  $reloadButton.addEventListener("click", function(){
    window.location.reload();
  });

  $reloadButtonDiv.appendChild($reloadButton);
  $arenas.appendChild($reloadButtonDiv);
}

$randomButton.addEventListener("click", function() {
  player1.changeHP(getRandom(20));
  player1.renderHP();
  player2.changeHP(getRandom(20));
  player2.renderHP();

  if (player1.hp === 0 || player2.hp === 0) {
    $randomButton.disabled = true;
    createReloadButton();
  }

  if ( player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(playerWin(player2.name));
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(playerWin(player1.name));
  } else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerWin())
  }

})

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

function enemyAttack() {
  const hit = ATTACK[getRandom(3) - 1];
  const defence = ATTACK[getRandom(3) - 1];

  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  };
}

const $form = document.querySelector("form");

$form.addEventListener("submit", function(event) {
  event.preventDefault();

  for (let item of $form) {
    if(item.checked && item.name === "hit") {
      attack.value = getRandom(HIT[item.value]);
      attack.hit = item.value;
    }
    if(item.checked && item.name === "defence") {
      attack.defence = item.value;
      console.log(attack.defence)
    }

    item.checked = false;

  }

  if(attack.hit !== enemy.defence) {
    player2.changeHP(attack.value);
    player2.renderHP();
  }

  if(enemy.hit !== attack.defence) {
    player1.changeHP(enemy.value);
    player1.renderHP();
  }

})

console.log(enemyAttack());
console.dir($form);

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