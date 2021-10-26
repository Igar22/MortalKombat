export const getRandom = (num) => Math.ceil(Math.random() * num);


// export default getRandom;

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];

export const $form = document.querySelector(".control");

export function enemyAttack() {
  const hit = ATTACK[getRandom(3) - 1];
  const defence = ATTACK[getRandom(3) - 1];

  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  };
}

export function playerAttack() {
  const attack = {};

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

  return attack;
}
