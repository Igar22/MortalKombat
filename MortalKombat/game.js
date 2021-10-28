import { player1, player2 } from "./player.js";
import getRandom from "./utils.js";
import { enemyAttack, generateLogs, playerAttack } from "./utils.js";
//import { playerAttack } from "./utils.js";
import createPlayer from "./player.js";
import { createElement } from "./player.js";
import { $form } from "./utils.js";
const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");
const $chat = document.querySelector(".chat");


class Game {

  start = () => {
    $arenas.appendChild(createPlayer(player1));
    $arenas.appendChild(createPlayer(player2));
    this.formFight()

    generateLogs("start", player1, player2)
  }

  function showStartMessage (type) {
    const date = new Date();
    const start = logs[type].replace("[player1]", player1.name).replace("[player2]", player2.name).replace("[time]", date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds());
    const el = `<p>${start}</p>`;
    console.log(start);


    $chat.insertAdjacentHTML("afterbegin", el);
  }

  showStartMessage("start");

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
    
  function showResult() {

    if (player1.hp === 0 || player2.hp === 0) {
      $randomButton.disabled = true;
      createReloadButton();
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
      $arenas.appendChild(playerWin(player2.name));
      generateLogs("end", player1, player2);
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
      $arenas.appendChild(playerWin(player1.name));
      generateLogs("end", player2, player1);
    } else if (player1.hp === 0 && player2.hp === 0) {
      $arenas.appendChild(playerWin());
      generateLogs("draw");
    }
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

  formFight = () => {
    $form.addEventListener("submit", function(event) {
    event.preventDefault();
    const {hit: hitEnemy, defence: defenceEnemy, value: valueEnemy} = enemyAttack();
    const {hit, defence,value} = playerAttack();

    if (defence !== hitEnemy) {
      player1.changeHP(valueEnemy);
      player1.renderHP();
      generateLogs("hit", player2, player1, valueEnemy);

    } else {
      generateLogs("defence", player2, player1);
    }

    if (defenceEnemy !== hit) {
      player2.changeHP(value);
      player2.renderHP();
      generateLogs("hit", player1, player2, value);

    } else {
      generateLogs("defence", player1, player2);
    }

    showResult();

  })};
}

export default Game;

console.log(player2.elHP())
console.log(enemyAttack());
console.dir($form);
