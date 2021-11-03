//Number of button in the game
var numberOfButtons = null;
//The maxNumber is the maximum number that random generate that range from 0 to that max number
var maxNumber = null;
//There are two type of game: descending and ascending.
var gameType = null;
//Level of the game
var level = null;
//List withou order
var origionalNumberLists = [];
//List with order
var softNumberLists = [];
//Current click
var currentClick = 0;
//Number of tried
var tried = 0;
//Timer variable
var timerID;
//Width bar to display the tiner
var widthBar = 0;
//Set the timer
var timer = null;

/*
    displayGameLevelPage function
    - call: orderNumber(gameData) 
    - This function display order Number and alphabet
    - gameData as parameter 
    - Reset variable
    - Assign the game data to the variable
    - Display the timer
    - Create the text to tell the user what is that game about
    - Randomly select the type of game (Number and alphabet)
    - Get the random value to the button 
    - Soft the array
    - Call the anonamous function regarind to the button clicked
    - No return value
*/
//This function will call from the Game Menu that have parameter gameData
window.orderNumber = function (gameData) {

    //Reset variable
    origionalNumberLists = [];
    softNumberLists = [];
    currentClick = 0;
    tried = 0;
    widthBar = 0;
    timer = null;

    //Assign the game data to the variable
    numberOfButtons = gameData.numberOfButtons;
    maxNumber = gameData.maxNumber;
    gameType = gameData.type;
    level = gameData.level;
    timer = gameData.timer;
    // console.log("gameData ++ " + gameData.timer);
    // console.log("timer ++ " + timer);

    //Clear the sceen
    document.body.innerHTML = "";

    //Create div timer
    var topHeader = createDiv();
    //Add the class
    topHeader.classList.add("topHeader");

    //Create the empty for number of tried
    var triedElement = createDiv("Tried: 0");
    triedElement.setAttribute("id", "tried");

    //Create the empty div
    var timerElement = createDiv();
    //Set the timer id
    timerElement.setAttribute("id", "progressBar");
    //Create the empty paragraph
    var timeGoneElement = createDiv();
    timeGoneElement.setAttribute("id", "timeGoneBar");
    timerElement.appendChild(timeGoneElement);
    topHeader.appendChild(timerElement);
    topHeader.appendChild(triedElement);

    //Create the timer
    timerID = setInterval(runTimer, 500);

    //Create the game type for span
    var span = createSpan(gameType);
    //Set color to blue
    span.style.color = "blue";
    //Create Heading logo, assign the text menu, assign to wrapper
    var heading = createHeading3("Click to number in ");
    //Append child to heading
    heading.appendChild(span);
    heading.classList.add("heading");

    //Create the wrapper
    var wrapper = createDiv();
    //add a css class wrapper
    wrapper.classList.add("gameOrderNumber");

    //Run randomly to identify alpabet or number
    var getTypeGameRandomly = randomNumber(3);
    var game = null;
    //Randomly select the type of game
    if (getTypeGameRandomly == 0) {
        game = "number";
    }
    else {
        game = "alphabet";
    }
    //console.log("type game " + game);

    //Loop through the numberOfButtons
    for (var i = 0; i < numberOfButtons; i++) {
        //if the type is 0 then use the number, else use alphabet
        var buttonValue = null;
        if (game == "number") {
            //get random number
            buttonValue = randomNumber(maxNumber);
            //check duplicate gameData, if it is duplicate, create a new one
            //Call the checkExistValue to check it is dupplicated
            while (checkExistValue(buttonValue)) {
                buttonValue = randomNumber(maxNumber);
            }
        } else if (game = "alphabet") {
            //Get the random number according to the alphabets length
            var number = randomNumber(alphabets.length);
            //Get the actual alphabet
            buttonValue = alphabets[number];
            //Check if the alphabet letter already exist
            while (checkExistValue(buttonValue)) {
                //Get the new alphabet letter
                var number = randomNumber(alphabets.length);
                //assign the button value
                buttonValue = alphabets[number];
            }
        }
        //store to the array
        origionalNumberLists.push(buttonValue);

        //Create the of button and assign the name
        var numberButton = createButton(buttonValue);
        //Add colorButtonElement to the wrapper
        wrapper.appendChild(numberButton);

        //Creat the anonymous function when the button click
        //passing the number and the button element
        anonymousOrder(buttonValue, numberButton);
    }
    //Copy the current array number to the soft Array number
    //The slice() method returns the selected elements in an array, as a new array object.
    softNumberLists = origionalNumberLists.slice();

    //Soft the array according to ascending order.
    if (gameType == "ascending order") {
        //Soft by number
        if (game == "number") {
            softNumberLists.sort(function (a, b) { return a - b });
        }
        else
        {
            //soft by alphabet
            softNumberLists.sort();
        }
    }
    //decending game
    else {
        //Soft by number
        if (game == "number") {
            softNumberLists.sort(function (a, b) { return b - a });
        }else
        {
            //Soft by alphabet
            softNumberLists.sort();
            softNumberLists.reverse();
        }
    }
    // console.log(origionalNumberLists);
    // console.log(softNumberLists);
}
/*
    runTimer function
    - call: runTimer() 
    - check the widthBar is 100, it will terminate the game
    - This function will run by interval, it will update the time bar
    - Call the endGame when the timer is end
    - Clear the interval
*/
function runTimer() {
    //get the timerBarElement Element 
    var timerBarElement = document.getElementById("timeGoneBar");
    //If the widthBar is 100, it will terminate the game
    if (widthBar >= 100) {
        //Clear the interval when the timer is reach
        clearInterval(timerID);
        //Call the completed game
        endGame(0, level, false);
    } else {
        //Increase the widthbar by 100 (percent of the width) that increase each time.
        widthBar += 100 / timer;
        timerBarElement.style.width = widthBar + '%';
    }

}
/*
    checkExistValue function
    - call: checkExistValue() 
    - parameter: newNumber which the new value to add to the array
    - return true if the value exist
    - return false if the value is not exist in the origional array
*/
//check if the new value exist in the  origional array
function checkExistValue(newNumber) {
    //Loop through the origionalNumberList
    for (var i = 0; i < origionalNumberLists.length; i++) {
        //Check if the value exist
        if (origionalNumberLists[i] == newNumber) {
            //new value already exist
            return true;
        }
    }
    return false;
}
/*
    anonymousOrder function
    - call: anonymousOrder(number, numberButton) function, it is call when the button click
    - parameter: number which is the value, numberButton is the button element
    - Check if the user click is correct order
    - When the user already clicked the button, this button is disable
    - When the user click incorrect button, show the correct button
    - No return value
*/
//Create the anonymous function when the button click
function anonymousOrder(number, numberButton) {

    //when the button is clicked, call this function
    numberButton.onclick = function () {
        previousClick = numberButton;
        //Check if the user click is correct as acending order
        if (softNumberLists[currentClick] == number) {
            //when the user already clicked the button, this button is disable
            numberButton.disabled = true;
            //change style of the button
            numberButton.style.backgroundColor = 'blue';
            numberButton.style.color = 'white';
            numberButton.innerHTML += "&#x2714";
            numberButton.style.border = "thick solid white"
            //console.log("correct " + number);
            //Increase to the next item
            currentClick++;
            //Create the sound effect and pass the correct sound as the parameter
            var correctSound = createSoundEffect("sound/correctAnswer.mp3");
            //Play the sound
            correctSound.play();
            //Finish the game
            if (currentClick == softNumberLists.length) {
                //Clear the timer
                clearInterval(timerID);
                //show the star
                //Short if condition ? exprT : exprF https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
                //if clicked over the number of stars. It is set to 0
                var stars = (numberStar - tried) < 0 ? 0 : numberStar - tried;
                //Call End game
                endGame(stars, level, true);
            }
        }
        else {
            //Incorrect order
            tried++;
            //Set to the tried to tried id
            document.getElementById("tried").innerHTML = "Tried: " + tried;

            //Present the next button to click by get the postion of the origional button.
            var buttonPosition = correctNextButton(currentClick);
            //Get the button element
            var getButtonElement = document.getElementsByTagName("button");
            //set the background color
            getButtonElement[buttonPosition].style.backgroundColor = "yellow";
            // getButtonElement[buttonPosition].style.animationPlayState = "running";

            //Create the sound effect and pass the in correct sound as the parameter
            var wrongAnser = createSoundEffect("sound/wrongAnswer.mp3");
            //Play the sound
            wrongAnser.play();

        }
    }
}
//Get the next botton when the user click incorrect botton
function correctNextButton(thisClick) {
    //console.log("origional list" + origionalNumberLists);
    //loop through the origional list and compare with the current click.
    for (var postion = 0; postion < origionalNumberLists.length; postion++) {
        if (origionalNumberLists[postion] == softNumberLists[thisClick]) {
            //Return position of the origional button
            return postion;
        }
    }

}


