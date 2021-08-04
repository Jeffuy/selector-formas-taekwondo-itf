let redTotal = 0;
let blueTotal = 0;
let redWarning = 0;
let blueWarning = 0;
let redDiscount = 0;
let blueDiscount = 0;

function startFight() {
	const resultRed = document.getElementById("resultadoRed");
	const resultBlue = document.getElementById("resultadoBlue");

	resultRed.innerText = "";
	resultBlue.innerText = "";

	redTotal = 0;
	blueTotal = 0;
	redWarning = 0;
	blueWarning = 0;
	redDiscount = 0;
	blueDiscount = 0;
}

function warning(color) {
	if (color == "red") {
		redWarning +=1;
		if (redWarning == 3) {
			redScore(-1);
			redWarning = 0;
		};
	} else if (color == "blue") {
		blueWarning +=1;
		if (blueWarning == 3) {
			blueScore(-1);
			blueWarning = 0;
		};
	};
}

function discount(color) {
	if (color == "red") {
		redDiscount += 1;
		redScore(-1);
		if (redDiscount == 3) {
			redTotal = "DQ";
			endFight();
		}
	} else if (color == "blue") {
		blueDiscount += 1;
		blueScore(-1);
		if (blueDiscount == 3) {
			blueTotal = "DQ";
			endFight();
		}
	}
}


function redScore(points) {
	redTotal += points;
	console.log(redTotal);
};

function blueScore(points) {
	blueTotal += points;
	console.log(blueTotal);
};

function endFight() {
	const resultRed = document.getElementById("resultadoRed");
	const resultBlue = document.getElementById("resultadoBlue");

	resultRed.innerText = redTotal;
	resultBlue.innerText = blueTotal;
};