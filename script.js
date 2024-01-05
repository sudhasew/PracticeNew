const randomDamage = () => {
  let random = Math.floor(Math.random() * 10);
  console.log("111111", random);
  return random;
};

const chooseOption = (opt1, opt2) => {
  var randNum = Math.floor(Math.random() * 2) ? opt1 : opt2;
  console.log("choose option", randNum);
  return randNum;
};

const attackPlayer = (health) => {
  return health - randomDamage();
};

const logHealth = (player, health) => {
  console.log(`${player} health:${health}`);
};

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated:${loser}`);
};

const isDead = (health) => {
  if (health <= 0) {
    return true;
  } else {
    return false;
  }
};

const fight = (player1, player2, player1Health, player2Health) => {
  while (true) {
    var attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      console.log("before checking is dead");
      if (isDead(player2Health) === true) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health) === true) {
        logDeath(player2, player1);
        break;
      }
    }
  }
};
fight("Mitch", "Adam", 100, 100);
