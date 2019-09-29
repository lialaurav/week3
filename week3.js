var spots = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var turn = 1;
var bar;
var width = 0;

function insert(id) {
	stop();
	if (turn == 1) {
		checkEmpty("x", id);
		start();
		if (checkAll("x") == 1) {
			alert("Player 1 has won!");
			stop();
			turn = 0;
		}
	} else if (turn == 2) {
		checkEmpty("o", id);
		start();
		if (checkAll("o") == 1) {
			alert("Player 2 has won!");
			stop();
			turn = 0;
		}
	}
}

window.insert = insert;

function checkEmpty(mark, id) {
	if (spots[id] != "x" && spots[id] != "o") {
		document.getElementById(id + "t").innerHTML = mark;
		document.getElementById(id + "t").className = "flow-text black-text";
		spots[id] = mark;
		if (turn == 1) {
			document.getElementById(id).style.backgroundColor ="rgb(124, 252, 0)";
			turn = 2;
		} else if (turn == 2) {
			document.getElementById(id).style.backgroundColor ="rgb(250, 128, 114)";
			turn = 1;
		}
	} else {
		alert("This spot is already taken!");
	}
}

function checkWinning(mark, a, b, c, d, e) {
	if (spots[a] == mark && spots[b] == mark && spots[c] == mark && spots[d] == mark && spots[e] == mark) {
		return true;
	} return false;
}

function checkAll(mark) {
	if (checkWinning(mark, 0, 1, 2, 3, 4) == true) {
		return 1;
	} else if (checkWinning(mark, 0, 5, 10, 15, 20) == true) {
		return 1;
	} else if (checkWinning(mark, 0, 6, 12, 18, 24) == true) {
		return 1;
	} else if (checkWinning(mark, 1, 6, 11, 16, 21) == true) {
		return 1;
	} else if (checkWinning(mark, 2, 7, 12, 17, 22) == true) {
		return 1;
	} else if (checkWinning(mark, 3, 8, 13, 18, 23) == true) {
		return 1;
	} else if (checkWinning(mark, 4, 9, 14, 19, 24) == true) {
		return 1;
	} else if (checkWinning(mark, 4, 8, 12, 16, 20) == true) {
		return 1;
	} else if (checkWinning(mark, 5, 6, 7, 8, 9) == true) {
		return 1;
	} else if (checkWinning(mark, 10, 11, 12, 13, 14) == true) {
		return 1;
	} else if (checkWinning(mark, 15, 16, 17, 18, 19) == true) {
		return 1;
	} else if (checkWinning(mark, 20, 21, 22, 23, 24) == true) {
		return 1;
	} else {
		return 0;
	}
}

function progress() {
	width++;
	if (width == 101) {
		stop();
		if (turn == 1) {
			turn = 2;
		} else if (turn == 2) {
			turn = 1;
		}
	} else {
		document.getElementById("progress").style.width = width + "%";
		click = true;
	}
}

function start() {
	bar = setInterval(progress, 100);
}

function stop() {
	clearInterval(bar);
	width = 0;
}
