
var sudoku = new Array(6,0,0,1,9,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
window.onload = function () {

    var tds = document.getElementsByTagName("input");
	
    for (var i = 0; i < tds.length; i++)
	{		
		tds[i].value = sudoku[i] == 0 ? "" : sudoku[i];		
		if(sudoku[i] != 0){
			tds[i].setAttribute("readonly","");
		}
	}
        
}

function InCorrectValColor(cell){	
	cell.classList.remove("correct");
	cell.classList.add("incorrect");
}

function CorrectValColor(cell){	
	cell.classList.remove("incorrect");
	cell.classList.add("correct");
}

function IsCorrectVal(td){
	 var cell = td.id;
	 var val = td.value;
	 sudoku[cell] = 0;
	 if(val!=0){
		 if(!isPossibleNumber(cell, val, sudoku)){
		 InCorrectValColor(td);
		 sudoku[cell] = val;
		 }
		 else{		 
			 sudoku[cell] = val;
			 CorrectValColor(td);
		 }
		 CheckEachCell();
	}
	else{
		td.classList.remove("incorrect");
		td.classList.remove("correct");
	}
}

function CheckEachCell(){	 
	 Array.from(document.getElementsByClassName("incorrect")).forEach((x) => IsCorrectVal(x));
}

function isPossibleRow(number,row,sudoku) {
	for (var i=0; i<=8; i++) {
		if (sudoku[row*9+i] == number) {
			return false;
		}
	}
	return true;
}

// given a number, a column and a sudoku, returns true if the number can be placed in the column
function isPossibleCol(number,col,sudoku) {
	for (var i=0; i<=8; i++) {
		if (sudoku[col+9*i] == number) {
			return false;
		}
	}
	return true;
}


// given a cell, a number and a sudoku, returns true if the number can be placed in the cell
function isPossibleNumber(cell,number,sudoku) {
	var row = returnRow(cell);
	var col = returnCol(cell); 
	return isPossibleRow(number,row,sudoku) && isPossibleCol(number,col,sudoku);
}

function returnRow(cell) {
	return Math.floor(cell / 9);
}

// given a sudoku cell, returns the column
function returnCol(cell) {
	return cell % 9;
}