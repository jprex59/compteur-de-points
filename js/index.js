/*const containerSettings = document.querySelector(".container-settings");
buttonProfile.addEventListener("click", function () {
	containerProfile.classList.add("open");
	containerSite2.classList.remove("open");
});
let imgId = ["courir", "kith", "solebox", "supreme", "zalando"];zz&
document.getElementById("day").innerHTML = day;
for (i = 0; i < imgId.length; i++) {}
*/
const buttonGo = document.querySelector(".button_go");
const backdropButton = document.getElementById("backdrop_button");
let isStart = false;
let minute = 0;
let seconds = 0;
let milliseconds = 0;
let intervalId;
function game() {
	let score = document.querySelectorAll(".score");
	let scoreLess = document.querySelectorAll(".scoreLess");
	scoreCount = 0;
	console.log(score);
	let scoreArray = [];
	scoreArray.length = score.length;
	for (let i = 0; i < score.length; i++) {
		scoreArray[i] = new Array(2);
		console.log(scoreArray);
		scoreArray[i][0] = score[i];
		scoreArray[i][1] = 0;
		scoreArray[i][0].innerHTML = scoreArray[i][1];
	}
	for (let i = 0; i < score.length; i++) {
		score[i].addEventListener("click", function () {
			scoreArray[i][1]++;
			scoreArray[i][0].innerHTML = scoreArray[i][1];
			console.log(scoreArray);
		});
	}
	/****************************************************************
	 *****************************************************************
	 *****************************************************************/

	for (let i = 0; i < score.length; i++) {
		scoreLess[i].addEventListener("click", function () {
			scoreArray[i][1] = scoreArray[i][1] - 1;
			scoreArray[i][0].innerHTML = scoreArray[i][1];
			console.log(scoreArray);
		});
	}
}

function go() {
	document.getElementById("go").style.display = "none";
	let test = document.getElementById("player_number").innerText;
	document.getElementById("backdrop_button").style.display = "block";
	document.getElementById("chrono_container").style.display = "block";
	console.log(test);
	for (let i = 0; i < test - 1; i++) {
		let firstchild = document.getElementById("container").innerHTML;
		document.getElementById("container").innerHTML = `${firstchild}<div class="card_score">
			<p class="equipe">${i + 2}</p>
			<p class="score">0</p>
			<div class="scoreLess"></div>
		</div>`;
	}
	let ekip = document.querySelectorAll(".equipe");

	for (let j = 0; j < ekip.length; j++) {
		ekip[j].style.display = "flex";
	}
	game();
}

function resetScore() {
	game();
	backdropNone();
}

function resetGame() {
	/*document.getElementById("container").innerHTML = `<div class="card_score " id="player_number">
<p class="score">0</p>
</div>`; //add as much player number value as scor counter
	backdropNone();
	game();
	buttonGo.style.display = "block";
	backdropButton.style.display = "none";*/

	document.location.reload();
}

function startChrono() {
	isStart = !isStart;
	if (isStart) {
		startButton = document.getElementById("startstop");
		startButton.innerHTML = '<i class="far fa-pause-circle"></i>';
		intervalId = setInterval(() => {
			milliseconds += 4;
			if (milliseconds === 1000) {
				seconds++;
				milliseconds = 0;
			}
			if (seconds === 60) {
				minute++;
				seconds = 0;
			}
			console.log(milliseconds);

			if (milliseconds < 10) {
				document.getElementById("millisecond").innerHTML = `00${milliseconds}`;
			} else if (milliseconds < 100 && milliseconds > 10) {
				document.getElementById("millisecond").innerHTML = `0${milliseconds}`;
			} else {
				document.getElementById("millisecond").innerHTML = `${milliseconds}`;
			}
			if (seconds < 10) {
				document.getElementById("seconds").innerHTML = `0${seconds}`;
			} else {
				document.getElementById("seconds").innerHTML = `${seconds}`;
			}
			if (minute < 10) {
				document.getElementById("minute").innerHTML = `0${minute}`;
			} else {
				document.getElementById("minute").innerHTML = `${minute}`;
			}
		}, 1);
	} else {
		startButton = document.getElementById("startstop");
		startButton.innerHTML = '<i class="far fa-play-circle"></i>';
		clearInterval(intervalId);
	}
}

function chronoReset() {
	milliseconds = 0;
	minute = 0;
	seconds = 0;
	clearInterval(intervalId);
	document.getElementById("millisecond").innerHTML = `00${milliseconds}`;

	document.getElementById("seconds").innerHTML = `0${seconds}`;

	document.getElementById("minute").innerHTML = `0${minute}`;
	isStart = false;
	startButton = document.getElementById("startstop");
	startButton.innerHTML = '<i class="far fa-play-circle"></i>';
}
window.onload = game();

/*********ANimation transition page */

const subtitleOwn = document.querySelector(".subtitle_own");
buttonGo.addEventListener("click", () => {
	subtitleOwn.style.display = "none";
});
/********Menu backkdrop */

const nav = document.querySelector("nav");
const backdrop = document.querySelector(".backdrop");

backdropButton.addEventListener("click", () => {
	nav.classList.add("open");
});

backdrop.addEventListener("click", () => {
	backdropNone();
});
function backdropNone() {
	nav.classList.remove("open");
}
