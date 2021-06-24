/*const containerSettings = document.querySelector(".container-settings");
buttonProfile.addEventListener("click", function () {
	containerProfile.classList.add("open");
	containerSite2.classList.remove("open");
});
let imgId = ["courir", "kith", "solebox", "supreme", "zalando"];zz&
document.getElementById("day").innerHTML = day;
for (i = 0; i < imgId.length; i++) {}
*/

function game() {
	let score = document.querySelectorAll(".score");
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
}
function go() {
	document.getElementById("go").style.display = "none";
	let test = document.getElementById("player_number").innerText;
	document.getElementById("reset").style.display = "block";
	console.log(test);
	for (let i = 0; i < test - 1; i++) {
		let firstchild = document.getElementById("container").innerHTML;
		document.getElementById("container").innerHTML = `${firstchild}<div class="card_score">
<p class="score">0</p>
</div>`;
	}
	game();
}
function reset() {
	let confirmState = prompt("Reset game yes, no or none"); // ask confirmation to reset game ok reset all game and no reset just score
	console.log(confirmState);
	if (confirmState === "yes") {
		document.getElementById("container").innerHTML = `<div class="card_score " id="player_number">
<p class="score">0</p>
</div>`; //add as much player number value as scor counter
		document.getElementById("go").style.display = "block"; // display again go button
		game();
		document.getElementById("reset").style.display = "none"; //no display reset button
	} else if (confirmState === "no") {
		game();
	}
	// if none do nothing
}
window.onload = game();

/*********ANimation transition page */
const buttonGo = document.querySelector(".button_go");
const chronoForm = document.querySelector(".form_own");

buttonGo.addEventListener("click", function () {
	chronoForm.style.display = "flex";
});

/********Menu backkdrop */
const button = document.getElementById("backdrop_button");
const nav = document.querySelector("nav");
const backdrop = document.querySelector(".backdrop");

button.addEventListener("click", () => {
	nav.classList.add("open");
});

backdrop.addEventListener("click", () => {
	nav.classList.remove("open");
});
