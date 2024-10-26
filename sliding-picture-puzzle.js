var userMoves = 0; // Initializing the user's moves
var time = 0; // Initializing the seconds on the timer
var startTimer = 0; // Initializing the timer
var isRegularGame = false; // Initializing variable for tracking user's selection of regular game
var isSimpleGame = false; // Initializing variable for tracking user's selection of simple game
var shuffleRegular = false; // Initializing variable for whether the board should be shuffled for a regular game
var shuffleSimple = false; // Initializing variable for whether the board should be shuffled for a simple game

// Swapping tiles:
function swapTile(tile_1, tile_2) {
    var tempSwap = document.getElementById(tile_1).className;
    document.getElementById(tile_1).className = document.getElementById(tile_2).className;
    document.getElementById(tile_2).className = tempSwap;
}

// Displaying and updating the time spent in a current game:
function timer() {
    if (win() == false) {
        time++;
        document.getElementById("show-timer").innerHTML = time;
    }

}

// Shuffling all tiles for a regular game:
function mixBoard() {
    shuffleRegular = true;
    
    if (isRegularGame == true) {
        if (confirm("Are you sure you want to start another regular game?") == true) {
            window.alert("Game over!\n\n" + "You moved " + userMoves + " tile(s) and spent " + time + " seconds(s) on this game.");
            shuffleRegular = true;
        } else {
            shuffleRegular = false;
        }
    } else if (isSimpleGame == true) {
        if (confirm("Are you sure you want to quit this current game and start a regular game?") == true) {
            window.alert("Game over!\n\n" + "You moved " + userMoves + " tile(s) and spent " + time + " seconds(s) on this game.");
            shuffleRegular = true;
        } else {
            shuffleRegular = false;
        }
    }
    
    if (shuffleRegular == true) {
        document.getElementById("show-game-mode").innerHTML = "Regular";
        isRegularGame = true;
        isSimpleGame = false;
        resetStats();
    
        startTimer = window.setInterval("timer()", 1000);
        
        for (var row = 1; row <= 4; row++) {
            for (var col = 1; col <= 4; col++) {
                var swappedRow = Math.floor(Math.random() * 4 + 1);
                var swappedCol = Math.floor(Math.random() * 4 + 1);
                swapTile("tile-" + row + col, "tile-" + swappedRow + swappedCol);
            }
        }
    }
}

// Resetting the board for starting a simple game while already playing a game:
function resetSimpleGame() {
    var tile1Spot = document.getElementById("tile-" + 1 + 1).className;
    var tile2Spot = document.getElementById("tile-" + 1 + 2).className;
    var tile3Spot = document.getElementById("tile-" + 1 + 3).className;
    var tile4Spot = document.getElementById("tile-" + 1 + 4).className;
    var tile5Spot = document.getElementById("tile-" + 2 + 1).className;
    var tile6Spot = document.getElementById("tile-" + 2 + 2).className;
    var tile7Spot = document.getElementById("tile-" + 2 + 3).className;
    var tile8Spot = document.getElementById("tile-" + 2 + 4).className;
    var tile9Spot = document.getElementById("tile-" + 3 + 1).className;
    var tile10Spot = document.getElementById("tile-" + 3 + 2).className;
    var tile11Spot = document.getElementById("tile-" + 3 + 3).className;
    var tile12Spot = document.getElementById("tile-" + 3 + 4).className;
    var tile13Spot = document.getElementById("tile-" + 4 + 1).className;
    var tile14Spot = document.getElementById("tile-" + 4 + 2).className;
    var tile15Spot = document.getElementById("tile-" + 4 + 3).className;
    var tile16Spot = document.getElementById("tile-" + 4 + 4).className;

    for (var row = 1; row <= 4; row++) {
        for (var col = 1; col <= 4; col++) {
            if (tile1Spot != "tile-1") {
                if (document.getElementById("tile-" + row + col).className == "tile-1") {
                    swapTile("tile-" + row + col, "tile-" + 1 + 1);
                }
            }

            if (tile2Spot != "tile-2") {
                if (document.getElementById("tile-" + row + col).className == "tile-2") {
                    swapTile("tile-" + row + col, "tile-" + 1 + 2);
                }
            }

            if (tile3Spot != "tile-3") {
                if (document.getElementById("tile-" + row + col).className == "tile-3") {
                    swapTile("tile-" + row + col, "tile-" + 1 + 3);
                }
            }

            if (tile4Spot != "tile-4") {
                if (document.getElementById("tile-" + row + col).className == "tile-4") {
                    swapTile("tile-" + row + col, "tile-" + 1 + 4);
                }
            }

            if (tile5Spot != "tile-5") {
                if (document.getElementById("tile-" + row + col).className == "tile-5") {
                    swapTile("tile-" + row + col, "tile-" + 2 + 1);
                }
            }

            if (tile6Spot != "tile-6") {
                if (document.getElementById("tile-" + row + col).className == "tile-6") {
                    swapTile("tile-" + row + col, "tile-" + 2 + 2);
                }
            }

            if (tile7Spot != "tile-7") {
                if (document.getElementById("tile-" + row + col).className == "tile-7") {
                    swapTile("tile-" + row + col, "tile-" + 2 + 3);
                }
            }

            if (tile8Spot != "tile-8") {
                if (document.getElementById("tile-" + row + col).className == "tile-8") {
                    swapTile("tile-" + row + col, "tile-" + 2 + 4);
                }
            }

            if (tile9Spot != "tile-9") {
                if (document.getElementById("tile-" + row + col).className == "tile-9") {
                    swapTile("tile-" + row + col, "tile-" + 3 + 1);
                }
            }

            if (tile10Spot != "tile-10") {
                if (document.getElementById("tile-" + row + col).className == "tile-10") {
                    swapTile("tile-" + row + col, "tile-" + 3 + 2);
                }
            }

            if (tile11Spot != "tile-11") {
                if (document.getElementById("tile-" + row + col).className == "tile-11") {
                    swapTile("tile-" + row + col, "tile-" + 3 + 3);
                }
            }

            if (tile12Spot != "tile-12") {
                if (document.getElementById("tile-" + row + col).className == "tile-12") {
                    swapTile("tile-" + row + col, "tile-" + 3 + 4);
                }
            }

            if (tile13Spot != "tile-13") {
                if (document.getElementById("tile-" + row + col).className == "tile-13") {
                    swapTile("tile-" + row + col, "tile-" + 4 + 1);
                }
            }

            if (tile14Spot != "tile-14") {
                if (document.getElementById("tile-" + row + col).className == "tile-14") {
                    swapTile("tile-" + row + col, "tile-" + 4 + 2);
                }
            }

            if (tile15Spot != "tile-15") {
                if (document.getElementById("tile-" + row + col).className == "tile-15") {
                    swapTile("tile-" + row + col, "tile-" + 4 + 3);
                }
            }

            if (tile16Spot != "tile-16") {
                if (document.getElementById("tile-" + row + col).className == "tile-16") {
                    swapTile("tile-" + row + col, "tile-" + 4 + 4);
                }
            }
        }
    }
}

// Preparing tiles for a simple game:
function simpleMixBoard() {
    shuffleSimple = true;

    // Resetting the board completely:
    if (isSimpleGame == true) {
        if (confirm("Are you sure you want to start another simple game?") == true) {
            window.alert("Game over!\n\n" + "You moved " + userMoves + " tile(s) and spent " + time + " seconds(s) on this game.");
            resetSimpleGame();
            shuffleSimple = true;
        } else {
            shuffleSimple = false;
        }
    } else if (isRegularGame == true) {
        if (confirm("Are you sure you want to quit this current game and start a simple game?") == true) {
            window.alert("Game over!\n\n" + "You moved " + userMoves + " tile(s) and spent " + time + " seconds(s) on this game.");
            // Multiple resetSimpleGame() calls prevent errors with restoring the board:
            for (var i = 0; i < 6; i++) {
                resetSimpleGame();
            }
            shuffleSimple = true;
        } else {
            shuffleSimple = false;
        }
    }

    // Setting one tile out of order:
    if (shuffleSimple == true) {
        document.getElementById("show-game-mode").innerHTML = "Simple";
        isSimpleGame = true;
        isRegularGame = false;
        resetStats();

        startTimer = window.setInterval("timer()", 1000);

        var simpleTile = Math.floor(Math.random() * 2 + 1);
        
        if (simpleTile == 1) {
            swapTile("tile-" + 3 + 4, "tile-" + 4 + 4);
        } else if (simpleTile == 2) {
            swapTile("tile-" + 4 + 3, "tile-" + 4 + 4);
        }
    }
}

// Moving the user's selected tile up, down, left, or right depending on where the blank tile is:
function moveTile(row, col) {
    var selectedTile = document.getElementById("tile-" + row + col).className;

    if (selectedTile != "tile-16") {
        if (col < 4) {
            if (document.getElementById("tile-" + row + (col + 1)).className == "tile-16") {
                swapTile("tile-" + row + col, "tile-" + row + (col + 1));
                updateMoves();
                displayWinMessage();
                return;
            }
        }

        if (col > 1) {
            if (document.getElementById("tile-" + row + (col - 1)).className == "tile-16") {
                swapTile("tile-" + row + col, "tile-" + row + (col - 1));
                updateMoves();
                displayWinMessage();
                return;
            }
        }

        if (row < 4) {
            if (document.getElementById("tile-" + (row + 1) + col).className == "tile-16") {
                swapTile("tile-" + row + col, "tile-" + (row + 1) + col);
                updateMoves();
                displayWinMessage();
                return; 
            }
        }

        if (row > 1) {
            if (document.getElementById("tile-" + (row - 1) + col).className == "tile-16") {
                swapTile("tile-" + row + col, "tile-" + (row - 1) + col);
                updateMoves();
                displayWinMessage();
                return;
            }
        }
    }
}


// Determining if the user has won a game:
function win() {
    if ((document.getElementById("tile-11").className == "tile-1") 
    && (document.getElementById("tile-12").className == "tile-2") 
    && (document.getElementById("tile-13").className == "tile-3") 
    && (document.getElementById("tile-14").className == "tile-4") 
    && (document.getElementById("tile-21").className == "tile-5") 
    && (document.getElementById("tile-22").className == "tile-6")
    && (document.getElementById("tile-23").className == "tile-7") 
    && (document.getElementById("tile-24").className == "tile-8") 
    && (document.getElementById("tile-31").className == "tile-9")
    && (document.getElementById("tile-32").className == "tile-10")
    && (document.getElementById("tile-33").className == "tile-11")
    && (document.getElementById("tile-34").className == "tile-12")
    && (document.getElementById("tile-41").className == "tile-13")
    && (document.getElementById("tile-42").className == "tile-14")
    && (document.getElementById("tile-43").className == "tile-15")
    && (document.getElementById("tile-44").className == "tile-16")) {
        clearInterval(startTimer);
        return true;
    } else {
        return false;
    }
}

// Constructing a win message for a regular game and starting a new regular game if the user chooses to play again:
function regularGameWinMessage() {
    if (confirm("Great job! You placed all the numbers in order and solved the puzzle!\n\nYou took " + userMoves + " move(s) and " + time + " second(s) to win.\n\nSelect 'OK' to play another regular game.") == true) {
        isRegularGame = false;
        resetStats();
        mixBoard();
    } else {
        window.location.reload();
    }
}

// Constructing a win message for a simple game and starting a new simple game if the user chooses to play again:
function simpleGameWinMessage() {
    if (confirm("Great job! You placed all the numbers in order and solved the puzzle!\n\nYou took " + userMoves + " move(s) and " + time + " second(s) to win.\n\nSelect 'OK' to play another simple game.") == true) {
        isSimpleGame = false;
        resetStats();
        simpleMixBoard();
    } else {
        window.location.reload();
    }
}

// Displaying the win message after the user successfully solves the puzzle:
function displayWinMessage() {
    if ((win() == true) && (isRegularGame == true)) {
        setTimeout(() => {regularGameWinMessage()}, 500);
    } else if ((win() == true) && (isSimpleGame == true)) {
        setTimeout(() => {simpleGameWinMessage()}, 500);
    }
}

// Displaying and updating the number of moves made during a game:
function updateMoves() {
    userMoves++;
    document.getElementById("show-moves").innerHTML = userMoves;
}

// Resetting the timer and moves upon starting a new game:
function resetStats() {
    time = 0;
    userMoves = 0;
    
    document.getElementById("show-moves").innerHTML = 0;
    document.getElementById("show-timer").innerHTML = 0;
    
    clearInterval(startTimer);
}

// Exiting out of the puzzle:
function stopGame() {
    if (confirm("Are you sure you want to end this current game?") == true) {
        window.alert("Game over!\n\n" + "You moved " + userMoves + " tile(s) and spent " + time + " seconds(s) on this game.");
        window.location.reload();
    } else {
        // Do nothing and keep running the current game
    }
}