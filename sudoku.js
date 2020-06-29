
var sudoku = new Array("6","","","1","9","5","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","3","","","","","","","","","","","","","","","","","","1","","","","","","","","","","","","","","","","","","4","","","","","","","","");
window.onload = function () {

    var tds = document.getElementsByTagName("input");
	
    for (var i = 0; i < tds.length; i++)
	{		
		tds[i].value = sudoku[i];		
		if(sudoku[i] != ""){
			tds[i].setAttribute("readonly","");
		}
	}
        
}


function IsCorrectVal(td){
	CheckCellVal(td);
	if(td.value!=""){
		CheckEachCellWithIncorrect();
		CheckEachCellWithCorrect();
	}
	
}

function CheckCellVal(td){
	 var cell = td.id;
	 var val = td.value;
	 sudoku[cell] = "";
	 if(val!=""){
		 if(isPossibleNumber(cell, val))
		 {
			 sudoku[cell] = val;
			 CorrectValColor(td);
		 }
		 else
		 {		 
			 InCorrectValColor(td);
			 sudoku[cell] = val;
		 }
	}
	else{
		td.classList.remove("incorrect");
		td.classList.remove("correct");
	}
}

// given a cell, a number and a sudoku, returns true if the number can be placed in the cell
function isPossibleNumber(cell,number) {
	var row = returnRow(cell);
	var col = returnCol(cell); 
	return isPossibleRow(number,row) && isPossibleCol(number,col);
}

function returnRow(cell) {
	return Math.floor(cell / 9);
}

// given a sudoku cell, returns the column
function returnCol(cell) {
	return cell % 9;
}

function isPossibleRow(number,row) {
	for (var i=0; i<=8; i++) {
		if (sudoku[row*9+i] == number) {
			return false;
		}
	}
	return true;
}

// given a number, a column and a sudoku, returns true if the number can be placed in the column
function isPossibleCol(number,col) {
	for (var i=0; i<=8; i++) {
		if (sudoku[col+9*i] == number) {
			return false;
		}
	}
	return true;
}


function CheckEachCellWithIncorrect(){	 
	var incorrectCells = Array.from(document.getElementsByClassName("incorrect"));
	incorrectCells.forEach((x) => CheckCellVal(x));
}

function CheckEachCellWithCorrect(){	 
	var incorrectCells = Array.from(document.getElementsByClassName("correct"));
	incorrectCells.forEach((x) => CheckCellVal(x));
}

function InCorrectValColor(cell){	
	cell.classList.remove("correct");
	cell.classList.add("incorrect");
}

function CorrectValColor(cell){	
	cell.classList.remove("incorrect");
	cell.classList.add("correct");
}


