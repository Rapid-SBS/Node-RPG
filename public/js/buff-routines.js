/* ===== Buff/Debuff Routines ===== */

const playerBuffBuilder = () => {
  if (selectedAbility.buff != false) { constructPlayerBuff(); }
  if (selectedAbility.debuff != false) { constructEnemyDebuff(); }
}

const enemyBuffBuilder = () => {
  if (enemyAbility.buff != false) { constructEnemyBuff(); }
  if (enemyAbility.debuff != false) { constructPlayerDebuff(); }
}

const constructPlayerBuff = () => {
  let a = selectedAbility.name;
  let b = selectedAbility.buff.status;
  let c = selectedAbility.buff.duration;
  let d = selectedAbility.buff.att;
  let e = selectedAbility.buff.def;
  let f = selectedAbility.buff.int;
  let g = selectedAbility.buff.res;

  // Loop through buffs array and remove duplicates
  let i;
  let buffname;
  let len = current.buffs.length;
  for (i = 0; i < len; i++) {
    buffname = current.buffs[i][0];
    if (buffname == a) {
      console.log("Buff Exists. Buff Name: " + buffname);
      current.buffs.splice(i, 1);
      len = current.buffs.length;
    }
  }
  console.log("Player gained Buff: " + selectedAbility.name);
  current.buffs.push([a, b, c, d, e, f, g]); // Copy buff data from Player Ability
  printPlayerBuffs();

  $('#game-message').addClass('text-blue').removeClass('text-green text-red');
  $('#game-message').text('You gained  ' + selectedAbility.name + ' buff!');
  $('#radio1,#radio2,#radio3,#radio4,#radio5').addClass("disabled unclickable");
}

const constructPlayerDebuff = () => {
  let a = enemyAbility.name;
  let b = enemyAbility.debuff.status;
  let c = enemyAbility.debuff.duration;
  let d = enemyAbility.debuff.att;
  let e = enemyAbility.debuff.def;
  let f = enemyAbility.debuff.int;
  let g = enemyAbility.debuff.res;

  // Loop through debuffs array and remove duplicates
  let i;
  let debuffname;
  let len = current.debuffs.length;
  for (i = 0; i < len; i++) {
    debuffname = current.debuffs[i][0];
    if (debuffname == a) {
      console.log("Debuff Exists. Debuff Name: " + debuffname);
      current.debuffs.splice(i, 1);
      len = current.buffs.length;
    }
  }

  console.log("Player gained debuff: " + enemyAbility.name);
  current.debuffs.push([a, b, c, d, e, f, g]); // Copy buff data from Enemy Ability
  printPlayerDebuffs();
}

const constructEnemyBuff = () => {
  let a = enemyAbility.name;
  let b = enemyAbility.buff.status;
  let c = enemyAbility.buff.duration;
  let d = enemyAbility.buff.att;
  let e = enemyAbility.buff.def;
  let f = enemyAbility.buff.int;
  let g = enemyAbility.buff.res;

  // Loop through buffs array and remove duplicates
  let i;
  let buffname;
  let len = enemy.buffs.length;
  for (i = 0; i < len; i++) {
    buffname = enemy.buffs[i][0];
    if (buffname == a) {
      console.log("Buff Exists. Buff Name: " + buffname);
      enemy.buffs.splice(i, 1);
    }
  }
  console.log("Enemy gained Buff: " + selectedAbility.name);
  enemy.buffs.push([a, b, c, d, e, f, g]); // Copy buff data from Enemy Ability
  printEnemyBuffs();
}

const constructEnemyDebuff = () => {
  let a = selectedAbility.name;
  let b = selectedAbility.debuff.status;
  let c = selectedAbility.debuff.duration;
  let d = selectedAbility.debuff.att;
  let e = selectedAbility.debuff.def;
  let f = selectedAbility.debuff.int;
  let g = selectedAbility.debuff.res;

  // Loop through debuffs array and remove duplicates
  let i;
  let debuffname;
  let len = enemy.debuffs.length;
  for (i = 0; i < len; i++) {
    debuffname = enemy.debuffs[i][0];
    if (debuffname == a) {
      console.log("Debuff Exists. Debuff Name: " + debuffname);
      selected.debuffs.splice(i, 1);
    }
  }
  console.log("Enemy gained Debuff: " + selectedAbility.name);
  enemy.debuffs.push([a, b, c, d, e, f, g]); // Copy buff data from Player Ability
  printEnemyDebuffs();
}

const decrementPlayerBuffs = () => {
  let i;
  let ttl;
  let len = current.buffs.length;
  for (i = 0; i < len; i++) { // Decrement buffs
    current.buffs[i][2]--;
    ttl = current.buffs[i][2];
    if (ttl < 0) { // Remove buff if expired
      current.buffs.splice(i, 1);
      len = current.buffs.length; // Recalculate array length
      i -= 1;
    } 
    printPlayerBuffs();
  }
}

const decrementPlayerDebuffs = () => {
  let i;
  let ttl;
  let len = current.debuffs.length;
  for (i = 0; i < len; i++) { // Decrement buffs
    current.debuffs[i][2]--;
    ttl = current.debuffs[i][2];
    if (ttl < 0) { // Remove buff if expired
      current.debuffs.splice(i, 1);
      len = current.debuffs.length; // Recalculate array length
      i -= 1;
    } 
    printPlayerDebuffs();
  }
}

const decrementEnemyBuffs = () => {
  let i;
  let ttl;
  let len = enemy.buffs.length;
  for (i = 0; i < len; i++) { // Decrement buffs
    enemy.buffs[i][2]--;
    ttl = enemy.buffs[i][2];
    if (ttl < 0) { // Remove buff if expired
      enemy.buffs.splice(i, 1);
      len = enemy.buffs.length; // Recalculate array length
      i -= 1;
    } 
    printEnemyBuffs();
  }
}

const decrementEnemyDebuffs = () => {
  let i;
  let ttl;
  let len = enemy.debuffs.length;
  for (i = 0; i < len; i++) { // Decrement buffs
    enemy.debuffs[i][2]--;
    ttl = enemy.debuffs[i][2];
    if (ttl < 0) { // Remove buff if expired
      enemy.debuffs.splice(i, 1);
      len = enemy.debuffs.length; // Recalculate array length
      i -= 1;
    } 
    printEnemyDebuffs();
  }
}

const printPlayerBuffs = () => {
  let i;
  let len = current.buffs.length;
  let playerBuffs = "<ul class='list-group'>";;
  for (i = 0; i < len; i++) {
    playerBuffs += "<li class='list-group-item pad-5 text-center text-green'>" + current.buffs[i][0] + "</li>";
  }
  playerBuffs += "</ul>";
  $('#player-buffs').html(playerBuffs);
}


const printPlayerDebuffs = () => {
  let i;
  let len = current.debuffs.length;
  let playerDebuffs = "<ul class='list-group'>";;
  for (i = 0; i < len; i++) {
    playerDebuffs += "<li class='list-group-item pad-5 text-center text-red'>" + current.debuffs[i][0] + "</li>";
  }
  playerDebuffs += "</ul>";
  $('#player-debuffs').html(playerDebuffs);
}

const printEnemyBuffs = () => {
  let i;
  let len = enemy.buffs.length;
  let enemyBuffs = "<ul class='list-group'>";;
  for (i = 0; i < len; i++) {
    enemyBuffs += "<li class='list-group-item pad-5 text-center text-green'>" + enemy.buffs[i][0] + "</li>";
  }
  enemyBuffs += "</ul>";
  $('#enemy-buffs').html(enemyBuffs);
}

const printEnemyDebuffs = () => {
  let i;
  let len = enemy.debuffs.length;
  let enemyDebuffs = "<ul class='list-group'>";;
  for (i = 0; i < len; i++) {
    enemyDebuffs += "<li class='list-group-item pad-5 text-center text-red'>" + enemy.debuffs[i][0] + "</li>";
  }
  enemyDebuffs += "</ul>";
  $('#enemy-debuffs').html(enemyDebuffs);
}
