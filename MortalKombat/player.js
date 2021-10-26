export const player1 = {
  player: 1,
  name: "SCORPION",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["stick", "bit"],
  attack,
  elHP,
  renderHP,
  changeHP,
}

export const player2 = {
  player: 2,
  name: "SUB-ZERO",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["stick", "bit"],
  attack,
  elHP,
  renderHP,
  changeHP,
};

function attack() {
  console.log(this.name + " " + "Fight...")
}

function elHP() {
  return document.querySelector(".player"+this.player+" .life");
}

function renderHP() {
  this.elHP().style.width = this.hp + "%";
}

function changeHP(randomNumber) {
  this.hp -= randomNumber;
 
  if (this.hp <= 0) {
      this.hp = 0;
  }
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
  $img.src = playerObj.img;

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);

  return $player;
}

export default createPlayer;


// export const createPlayer = (playerObj) => {
//   const {player, name, hp, img} = playerObj;

//   const $player = createElement("player" + player);
//   const $progressbar = createElement("progressbar");
//   const $character = createElement("character");
//   const $life = createElement("life");
//   const $name = createElement("name");
//   const $img = createElement("", "img");

//   $life.style.width = `${hp}%`;
//   $name.innerText = name;
//   $img.src = img;

//   $player.appendChild($progressbar);
//   $player.appendChild($character);
//   $progressbar.appendChild($life);
//   $progressbar.appendChild($name);
//   $character.appendChild($img);

//   return $player;
// }

// export default createPlayer;

function createElement (tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
 
  return $tag;
}