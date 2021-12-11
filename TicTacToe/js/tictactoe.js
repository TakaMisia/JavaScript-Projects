// Variable keeping track of whose turn it is
let activePlayer = 'X';

// Array storing an array of moves. Determines win conditions
let selectedSquares = [];

// Function to place an X or O in the square
function placeXOrO (squareNumber) {
    // Condition ensures a square hasn't already been selected
    // .some() method used to check each element of selectedSquare array to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') {
            // If activePlayer is equal to 'X', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';
            //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }
        selectedSquares.push(squareNumber + activePlayer);
        // This calls function to check for any win conditions
        checkWinConditions();
        // This condition is for changing the active player
        if (activePlayer === 'X') {
            //If active player is 'X' change it to 'O'
            activePlayer = 'O';
        // If active player is anything other than 'X'
        } else {
            // Change the activePlayer to 'X'
         activePlayer = 'X';
        }

        // Function to play placement sound
        audio('./media/place.mp3');
        
        // condition to check to see if it's computers turn
        if(activePlayer === 'O') {
            // Function disables clicking for computer choice
            disableClick();
            // Function waits 1 second before computer places image and enables click
            setTimeout(function () { computersTurn(); }, 1000)
        }
        // Returning true is needed for computersTurn function to work
        return true;
    }
    // Function results in a random square being selected
    function computersTurn() {
        // boolean needed for while loop
        let success = false;
        // variable stores a random number 0-8
        let pickASquare;
        // condition allows while loop to keep trying if a square is selected already
        while(!success) {
            // A random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            // IF random number evaluated returns true, the square hasn't been selected yet
            if (placeXOrO(pickASquare)) {
                // This line calls the function
                placeXOrO (pickASquare);
                // This changes boolean and ends the loop
                success = true;
            };
        }

    }
}

// This function parses the selectedSquares array to search for the win conditions.
// drawWinLine function is called to draw line if condition is met.
function checkWinConditions() {
    // X 0, 1, 3 condition
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50,100,558,100) }
    // X 3, 4, 5 condition
    else if (arrayIncludes('3X', '4X','5X')) { drawWinLine(50,304,558,304) }
    // X 6, 7, 8 condition
    else if (arrayIncludes('6X', '7X','8X')) { drawWinLine(50,508,558,508) }
    // X 0, 3, 6 condition
    else if (arrayIncludes('0X', '3X','6X')) { drawWinLine(100,50,100,558) }
    // X 1, 4, 7 condition
    else if (arrayIncludes('1X', '4X','7X')) { drawWinLine(304,50,304,558) }
    // X 2, 5, 8 condition
    else if (arrayIncludes('2X', '5X','8X')) { drawWinLine(508,50,508,558) }
    // X 6, 4, 2 condition
    else if (arrayIncludes('6X', '4X','2X')) { drawWinLine(100,508,510,90) }
    // X 0, 4, 8 condition
    else if (arrayIncludes('0X', '4X','8X')) { drawWinLine(100,100,520,520) }
    // O 0, 1, 2 condition
    else if (arrayIncludes('0O', '1O','2O')) { drawWinLine(50,100,558,100) }
    // O 3, 4, 5 condition
    else if (arrayIncludes('3O', '4O','5O')) { drawWinLine(50,304,558,304) }
    // O 6, 7, 8 condition
    else if (arrayIncludes('6O', '7O','8O')) { drawWinLine(50,508,558,508) }
    // O 0, 3, 6 condition
    else if (arrayIncludes('0O', '3O','6O')) { drawWinLine(100,50,100,558) }
    // O 1, 4, 7 condition
    else if (arrayIncludes('1O', '4O','7O')) { drawWinLine(304,50,304,558) }
    // O 2, 5, 8 condition
    else if (arrayIncludes('2O', '5O','8O')) { drawWinLine(508,50,508,558) }
    // O 6, 4, 2 condition
    else if (arrayIncludes('6O', '4O','2O')) { drawWinLine(100,508,510,90) }
    // O 0, 4, 8 condition
    else if (arrayIncludes('0O', '4O','8O')) { drawWinLine(100,100,520,520) }
    // Condition checks for tie. If none of the above conditions register and 9
    // squares are selected, the code executes
    else if (selectedSquares.length >= 9) {
        // This function playes the tie game sound
        audio('./media/tie.mp3');
        // Function sets a .3 second timer before the resetGame is called
        setTimeout(function () { resetGame(); }, 1000);
    }


    // This function checks if an array includes 3 strings. Used to check for each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        // 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        // If the 3 variables passed are all included in array true is returned and our else if condition executes the drawWinline function
        if (a === true && b === true && c === true) {return true }
    }
}

// This function makes our body element temp. unclickable
function disableClick () {
    body.style.pointerEvents = 'none';
    // Makes body clickable again after 1 second
    setTimeout (function () {body.style.pointerEvents = 'auto';}, 1000);
}

// Function takes a string parameter of the path you set earlier for placement sound
function audio(audioURL) {
    // created a new audio object and pass the path as a parameter
    let audio = new Audio(audioURL);
    // Play method plays audio sound
    audio.play();
}

// function utilizes html canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines')
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

function animateLineDrawing() {
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    c.clearRect(0,0,608,608)
    c.beginPath();
    c.moveTo(x1, y1)
    c.lineTo(x, y)
    c.lineWidth = 10;
    c.strokeStyle = 'rgba(70, 255, 33, .8)';
    c.stroke();
    
    // this condition checks if endpoint is reached
    if (x1 <= x2 && y1 <= y2) {
        if (x < x2) { x += 10; }
        if (y < y2) { y += 10; }
        //this condition cancels animation loop if we've reached end points
        if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
    }

    // This condition is similar to one above. Necessary for the 6,4,2 win condition
    if (x1 <= x2 && y1 >= y2) {
        if (x < x2) { x += 10; }
        if (y > y2) { y -= 10; }
        if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
    }
}

// This function clears our canvas after win line is drawn
function clear() {
    const animationLoop = requestAnimationFrame(clear);
    c.clearRect(0,0,608,608);
    cancelAnimationFrame(animationLoop);
}
disableClick();
audio('./media/winGame.mp3');
animateLineDrawing();
setTimeout(function () { clear(); resetGame(); }, 1000);


}

// This resets game in the event of a tie or a win.
function resetGame() {
    // This for loop iterates through each HTML square element
    for (let i = 0; i < 9; i++) {
        // This variable gets the html element of i
        let square = document.getElementById(String(i))
        //This removes our elements backgroundImage
        square.style.backgroundImage = ''
    }
    // This resets our array so it is empty and we can start over
    selectedSquares = [];
}