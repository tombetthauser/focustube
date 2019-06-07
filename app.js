const mysteryVideos = [
	"https://www.youtube.com/watch?v=aGV_eeAvvzM",
	"https://www.youtube.com/watch?v=GxYyuaTsVts",
	"https://www.youtube.com/watch?v=-UYgORr5Qhg&t=0m57s",
	"https://www.youtube.com/watch?v=_sh6MDFJdNU",
	"https://www.youtube.com/watch?v=hqega6a2g6A",
	"https://www.youtube.com/watch?v=D5txvDBNgYc",
	"https://www.youtube.com/watch?v=TCOOfNraqYw",
	"https://www.youtube.com/watch?v=1XHTW79Qa6Y"
];
const placeholderArray = [
	"don't get tubestracted...",
	"for a more productive tube...",
	"stay on tube target...",
	"don't get lost in the tube...",
	"tube in and tube out...",
	"watch out for the tube...",
	"the tube is coming for you...",
	"don't fall into the tube...",
	"bypass the tube tunnel...",
	"quit tubin' around already...",
	"it's time to tube better...",
	"a better way to tube...",
	"the productive way to tube...",
	"don't let the tube get you...",
	"rise above the tube...",
	"escape the tube...",
	"tube in focus..."
];
const warningsOne = [
	"you have to type something first...",
	"uh, you have to type something...",
	"you can't search for nothing...",
	"you didn't type anything yet...",
	"so, first type something..."
];
const warningsTwo = [
	"cut it out...",
	"you wont be warned again...",
	"come on, type something...",
	"you still didn't type anything...",
	"no, type something..."
];
const warningsThree = [
	"alright fine, do it again...",
	"ok then, do it again...",
	"fine, do it one more time...",
	"ok do it again...",
	"well, keep going then..."
];
const coll = document.getElementsByClassName("collapsible");
let i;
let randomVideoCounter = 0;
const searchFunction = () => {
	let inputValue = document.getElementById('input').value;
	if (inputValue === "") {
		randomVideoCounter ++;
		if (randomVideoCounter === 1) {
			let randomArrayNumber = Math.round(Math.random() * (warningsOne.length - 1));
			document.getElementById('input').placeholder = warningsOne[randomArrayNumber];
		} else if (randomVideoCounter === 2) {
			let randomArrayNumber = Math.round(Math.random() * (warningsTwo.length - 1));
			document.getElementById('input').placeholder = warningsTwo[randomArrayNumber];
		} else if (randomVideoCounter === 3) {
			let randomArrayNumber = Math.round(Math.random() * (warningsThree.length - 1));
			document.getElementById('input').placeholder = warningsThree[randomArrayNumber];
		} else {
			let randomArrayNumber = Math.round(Math.random() * (mysteryVideos.length - 1));
			clearInput();
			window.location.href = mysteryVideos[randomArrayNumber];
		};
	} else {
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
			resetInput();
			return finalInputString;
		};
		resetInput();
		window.location.href = ("https://www.youtube.com/results?search_query=" + processInput());
	};
};
const resetInput = () => {
	document.getElementById('input').value = "";
	let randomArrayNumber = Math.round(Math.random() * (placeholderArray.length - 1));
	document.getElementById('input').placeholder = placeholderArray[randomArrayNumber];
};
const clearInput = () => {
	document.getElementById('input').value = "";
	document.getElementById('input').placeholder = "";
};
resetInput();
document.getElementById("button").addEventListener("click", searchFunction);
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
  	searchFunction();
  }
}); 
for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function() {
			this.classList.toggle("active");
			const content = this.nextElementSibling;
			if (content.style.maxHeight){
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + "px";
		} 
	});
}