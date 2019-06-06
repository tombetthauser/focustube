const mysteryVideos = [
	"https://www.youtube.com/watch?v=aGV_eeAvvzM",
	"https://www.youtube.com/watch?v=GxYyuaTsVts",
	"https://www.youtube.com/watch?v=QZShA_a-5r8",
	"https://www.youtube.com/watch?v=_sh6MDFJdNU",
	"https://www.youtube.com/watch?v=hqega6a2g6A",
	"https://www.youtube.com/watch?v=IvDeXaiBy3I",
	"https://www.youtube.com/watch?v=D5txvDBNgYc",
	"https://www.youtube.com/watch?v=TCOOfNraqYw",
	"https://www.youtube.com/watch?v=1XHTW79Qa6Y"
]

const searchFunction = () => {

	let inputRaw = document.getElementById('input').value;

	let inputArr = inputRaw.split(" ");

	let processInput = () => {
		let finalInputString = "";
		for(i=0; i<inputArr.length; i++) {
			finalInputString += (inputArr[i]);
			if (i<(inputArr.length - 1)) {
				finalInputString +=  "+";
			};
		};
		clearInput();
		return finalInputString;
	};
	clearInput();
	window.location.href = ("https://www.youtube.com/results?search_query=" + processInput());
};

const clearInput = () => {
	document.getElementById('input').value = "";
}

const mysteryFunction = () => {
	let randomArrayNumber = Math.round(Math.random()) * (mysteryVideos.length - 1);
	clearInput();
	window.location.href = mysteryVideos[randomArrayNumber];
};

document.getElementById("button").addEventListener("click", searchFunction);
document.getElementById("mysteryButton").addEventListener("click", mysteryFunction);

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
  	searchFunction();
  }
}); 