const text = {
	mysteryVideos: [
		"aGV_eeAvvzM",
		"GxYyuaTsVts",
		"-UYgORr5Qhg&t=0m57s",
		"_sh6MDFJdNU",
		"hqega6a2g6A",
		"D5txvDBNgYc",
		"TCOOfNraqYw",
		"VAC-5BQnuXI",
		"1XHTW79Qa6Y"
	], 
	placeholderArray: [
		"focus, don't get distracted...",
		"you can do it, focus...",
		"for a more productive tube...",
		"don't lose focus...",
		"focus, stay on target...",
		"don't get lost in the tube...",
		"tube in and tube out...",
		"watch out for the tube...",
		"the tube is coming for you...",
		"don't fall into the tube...",
		"bypass the tube tunnel...",
		"it's time to tube better...",
		"a better way to tube...",
		"the productive way to tube...",
		"maintain tube focus...",
		"don't let the tube get you...",
		"rise above the tube...",
		"escape the tube...",
		"tube in focus..."
	],
	warningsOne: [
		"you have to type something first...",
		"uh, you have to type something...",
		"you can't search for nothing...",
		"you didn't type anything yet...",
		"so, first type something..."
	],
	warningsTwo: [
		"cut it out...",
		"you wont be warned again...",
		"come on, type something...",
		"you still didn't type anything...",
		"no, type something..."
	],
	warningsThree: [
		"alright fine, do it again...",
		"ok then, do it again...",
		"fine, do it one more time...",
		"ok do it again...",
		"well, keep going then..."
	]
};
const coll = document.getElementsByClassName("collapsible");
let i;
let randomVideoCounter = 0;
const searchFunction = () => {
	let inputValue = document.getElementById('input').value;
	if (inputValue === "") {
		randomVideoCounter ++;
		if (randomVideoCounter === 1) {
			let randomArrayNumber = Math.round(Math.random() * (text.warningsOne.length - 1));
			document.getElementById('input').placeholder = text.warningsOne[randomArrayNumber];
		} else if (randomVideoCounter === 2) {
			let randomArrayNumber = Math.round(Math.random() * (text.warningsTwo.length - 1));
			document.getElementById('input').placeholder = text.warningsTwo[randomArrayNumber];
		} else if (randomVideoCounter === 3) {
			let randomArrayNumber = Math.round(Math.random() * (text.warningsThree.length - 1));
			document.getElementById('input').placeholder = text.warningsThree[randomArrayNumber];
		} else {
			let randomArrayNumber = Math.round(Math.random() * (text.mysteryVideos.length - 1));
			clearInput();
			let isChecked = document.getElementById("checkBox").checked;
			if (isChecked === false) {
				window.location.href = ("https://www.youtube.com/watch?v=" + text.mysteryVideos[randomArrayNumber]);
			} else {
				window.location.href = ("http://www.infinitelooper.com/?v=" + text.mysteryVideos[randomArrayNumber]);
			};
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
		let isChecked = document.getElementById("checkBox").checked;
		if (isChecked === false) {
			window.location.href = ("https://www.youtube.com/results?search_query=" + processInput());
		} else {
			window.location.href = ("http://www.infinitelooper.com/s?q=" + processInput());
		};
	};
};
const resetInput = () => {
	document.getElementById('input').value = "";
	let randomArrayNumber = Math.round(Math.random() * (text.placeholderArray.length - 1));
	document.getElementById('input').placeholder = text.placeholderArray[randomArrayNumber];
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