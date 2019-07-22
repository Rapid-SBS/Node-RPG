/* ===== Miss/Hit/Crit Roll ===== */
const mhcRoll = (miss, crit) => {
	if (miss > 3) {
		miss = 3; // Correct input
		console.log('Warning: Miss range should not be greater than 3');
	}
	if (crit > 3) {
		crit = 3; // Correct input
		console.log('Warning: Crit range should not be greater than 3');
	}

  let rollResult = Math.floor(Math.random() * (6)) + 1;
  let missRange = parseInt(miss) * 1;
  let critRange = 7 - parseInt(crit);

  if (rollResult >= critRange) {
  	console.log("Accuracy Roll: " + rollResult);
  	return "crit";
  } else if (rollResult <= missRange){
  	console.log("Accuracy Roll: " + rollResult);
		return "miss";
  } else {
  	console.log("Accuracy Roll: " + rollResult);
  	return "hit";
  }
}