/// DO NOT MODIFY THIS
const tiles = Array.from(document.querySelectorAll('.tile'));
const playerDisplay = document.querySelector('.display-player');
const resetButton = document.querySelector('#reset');
const announcer = document.querySelector('.announcer');
let turnplayer = false //false = 'x'-s turn, true = 'o'-s turn
tiles.forEach((tile, index) => {
    tile.addEventListener('click', () => userAction(tile, index));
});

resetButton.addEventListener('click', getEmptyBoard());
/// START CODE AFTER THIS
function getEmptyBoard() {//resseting the values of each tile to a dot
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = ".";
    }
    turnplayer = false;
    document.getElementById("whosturn").innerHTML = "X";
    document.getElementById("winner").innerHTML = "Click on one of the squares to start!";
}

function userAction(tile, index) {

    changePlayer(index);
    if (isBoardFull()) {
        document.getElementById("winner").innerHTML = "TELE A BOARD";
    }
}

function changePlayer(index) {
    if (document.getElementById(index).innerHTML === "." && turnplayer == false) {
        document.getElementById(index).innerHTML = "X";
        getWinningPlayer();
        turnplayer = true;
        document.getElementById("whosturn").innerHTML = "O";
    }

    else if (document.getElementById(index).innerHTML === "." && turnplayer == true) {
        document.getElementById(index).innerHTML = "O";
        getWinningPlayer();
        turnplayer = false;
        document.getElementById("whosturn").innerHTML = "X";
    }
}


//if (row === (tiles[0] && tiles[1] && tiles[2]) || row === (tiles[3] && tiles[4] && tiles[5]) || row === (tiles[6] && tiles[7] && tiles[8]))


function getWinningPlayer() {
    if (oWin()) {
        document.getElementById("winner").innerHTML = "Congrats Player 'O'!";
    }
    if (xWin()) {
        document.getElementById("winner").innerHTML = "Congrats Player 'X'!";
    }

}
function isBoardFull() {
    for (let i = 0; i < 9; i++) {
        if (document.getElementById(i).innerHTML === ".") {
            return false;
        }
    }
    return true;

}


function xWin() {
    if (document.getElementById("0").innerHTML === "X" && document.getElementById("1").innerHTML === "X" && document.getElementById("2").innerHTML === "X") {
        return true
    }
    if (document.getElementById("3").innerHTML === "X" && document.getElementById("4").innerHTML === "X" && document.getElementById("5").innerHTML === "X") {
        return true
    }
    if (document.getElementById("6").innerHTML === "X" && document.getElementById("7").innerHTML === "X" && document.getElementById("8").innerHTML === "X") {
        return true
    } // rows
    if (document.getElementById("0").innerHTML === "X" && document.getElementById("3").innerHTML === "X" && document.getElementById("6").innerHTML === "X") {
        return true
    }
    if (document.getElementById("1").innerHTML === "X" && document.getElementById("4").innerHTML === "X" && document.getElementById("7").innerHTML === "X") {
        return true
    }
    if (document.getElementById("2").innerHTML === "X" && document.getElementById("5").innerHTML === "X" && document.getElementById("8").innerHTML === "X") {
        return true
    } //columns
    if (document.getElementById("0").innerHTML === "X" && document.getElementById("4").innerHTML === "X" && document.getElementById("8").innerHTML === "X") {
        return true
    }
    if (document.getElementById("2").innerHTML === "X" && document.getElementById("4").innerHTML === "X" && document.getElementById("6").innerHTML === "X") {
        return true
    } //diagonals
    return false;
}
function oWin() {
    if (document.getElementById("0").innerHTML === "O" && document.getElementById("1").innerHTML === "O" && document.getElementById("2").innerHTML === "O") {
        return true
    }
    if (document.getElementById("3").innerHTML === "O" && document.getElementById("4").innerHTML === "O" && document.getElementById("5").innerHTML === "O") {
        return true
    }
    if (document.getElementById("6").innerHTML === "O" && document.getElementById("7").innerHTML === "O" && document.getElementById("8").innerHTML === "O") {
        return true
    } // rows
    if (document.getElementById("0").innerHTML === "O" && document.getElementById("3").innerHTML === "O" && document.getElementById("6").innerHTML === "O") {
        return true
    }
    if (document.getElementById("1").innerHTML === "O" && document.getElementById("4").innerHTML === "O" && document.getElementById("7").innerHTML === "O") {
        return true
    }
    if (document.getElementById("2").innerHTML === "O" && document.getElementById("5").innerHTML === "O" && document.getElementById("8").innerHTML === "O") {
        return true
    } //columns
    if (document.getElementById("0").innerHTML === "O" && document.getElementById("4").innerHTML === "O" && document.getElementById("8").innerHTML === "O") {
        return true
    }
    if (document.getElementById("2").innerHTML === "O" && document.getElementById("4").innerHTML === "O" && document.getElementById("6").innerHTML === "O") {
        return true
    } //diagonals
    return false;
}
