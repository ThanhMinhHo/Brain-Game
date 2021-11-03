/*MEMORY GAME*/
//Reference tutorial 
//https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/

// Variable
var cardOpenCount = 0;
var dupplicateCardCollections = null;

//Count number of click.
var numberClicked = 0;
var firstCardClicked = null;
var secondCardClicked = null;

//set 1 second delay to flip the image
var timeDelayToFlipImage = 1000;
var timer = null;
var level = null;
//Timer variable
var timerID;
var widthBar = 0;
/*
    memoryGame function
    - call: memoryGame(gameData) 
    - This function display order Number and alphabet
    - gameData as parameter 
    - Reset variable
    - Assign the game data to the variable
    - Display the timer
    - Create the text to tell the user what is that game about
    - Create the memoryGameDivElement to wrap the entire game
    - Duplicate cards
    - Mix the card each time the game run
    - Loop through the Duplicate cards and 
        - Create the div card element that contain face and hide
        - Add event to the card when the card clicked
        - show card when the card is click less than two, Check if two card is matching, if it is match, hide this cards. otherwise
            return to the previous position 
    - No return value
*/
window.memoryGame = function (gameData) {
    //Reest variable
    timer = null;
    widthBar = 0;
   
    //console.log(gameData.cardCollections);
    //Assign variable
    level = gameData.level;
    var cardCollections = gameData.cardCollections;
    timer = gameData.timer;
    //console.log("gameData ++ " + gameData.timer);

    //Clear the sceen
    document.body.innerHTML = "";

    //Create the wrapper
    var wrapper = createDiv();
    //add a css class wrapper
    wrapper.classList.add("wrapper");

    //Create div timer
    var topHeader = createDiv();
    //Add the class
    topHeader.classList.add("topHeader");

    //Create the empty for number of tried
    var triedElement = createDiv();
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

    wrapper.appendChild(topHeader);

    //Create the timer
    timerID = setInterval(runTimer, 500);

    //Create Heading logo, assign the text menu, assign to wrapper
    var heading = createHeading3("Find the matching cards");
    //Append child to heading
    heading.classList.add("heading");
    wrapper.appendChild(heading);


    //Create the memoryGameDivElement
    var memoryGameDivElement = createDiv();
    //add a css class memoryGameDivElement to wrap the entire game
    memoryGameDivElement.classList.add("memoryGame");
    //Append the memoryGame to wrapper
    wrapper.appendChild(memoryGameDivElement);

    //Duplicate the array using concat https://www.w3schools.com/jsref/jsref_concat_array.asp
    //The concat() method is used to join two or more arrays.It is used to match for each card.
    dupplicateCardCollections = cardCollections.concat(cardCollections);
    //Math.random() returns a random number between 0 and 1 
    //The soft function will soft the dupplicateCardCollections randomly each time the game is running.
    dupplicateCardCollections.sort(function (a, b) {
        return 0.5 - Math.random();
    });

    //Loop through the cardCollection then assign the div
    for (var i = 0; i < dupplicateCardCollections.length; i++) {

        //Create the div card element that contain face and hide
        var cardDivElement = createDiv();
        //set a "card" class to that div
        cardDivElement.classList.add('card');
        // assign the data-name attribute of the div 
        cardDivElement.dataset.name = dupplicateCardCollections[i].name;

        // Create face of card
        var face = document.createElement('div')
        face.classList.add('face')

        // Create hide of card, which contains image
        var hide = document.createElement('div')
        //Add class name
        hide.classList.add('hide')
        //Set the back-ground image
        hide.style.backgroundImage = 'url(' + dupplicateCardCollections[i].img + ')';
        //Set the size of the image
        // hide.style.backgroundSize = "100px 100px";

        // Append card to memoryGame, and face and hide to card
        cardDivElement.appendChild(face);
        cardDivElement.appendChild(hide);
        memoryGameDivElement.appendChild(cardDivElement);
    }
    // Add event listener to memoryGame
    memoryGameDivElement.addEventListener('click', function (event) {
        // Get the element that triggered a specific event:
        var clickedTarget = event.target;
        //console.log(clickedTarget);

        //only select divs inside the memoryGame.
        //Prevent one card clicked twices.
        if (clickedTarget.classList.value === 'memoryGame' ||
            clickedTarget.parentNode.classList.contains('picked') ||
            clickedTarget.parentNode.classList.contains('sameCards')) {
            return
        }
        //Check card click
        checkClicked(clickedTarget);
    })

}
/*
    - checkClicked(clickedTarget) function
        - call: checkClicked(clickedTarget)
        - parameter: clickedTarget that the current caard clicked
        - Assing the first card cliked name
        - check if numberClicked is two then  Assign second clicked
        - No return value
*/
function checkClicked(clickedTarget) {
    //Controll the numberClicked which allow for two image clickedTarget at the time
    if (numberClicked < 2) {
        //increase the numberClicked
        numberClicked++
        //check the number clicked
        if (numberClicked == 1) {
            // Assign first clicked name
            firstCardClicked = clickedTarget.parentNode.dataset.name
            //assign class
            clickedTarget.parentNode.classList.add('picked')
            clickedTarget.parentNode.classList.add('open')
        }
        else {

            // Assign second clicked
            secondCardClicked = clickedTarget.parentNode.dataset.name
            //assign class
            clickedTarget.parentNode.classList.add('picked')

            //Check if the card is matching
            if (firstCardClicked === secondCardClicked) {
                //Create the sound effect and pass the correct sound as the parameter
                var correctSound = createSoundEffect("sound/correctAnswer.mp3");
                //Play the sound
                correctSound.play();
                match();

            } else {
                //Not match
                //Check if the card already open previously
                if (clickedTarget.parentNode.classList.value == 'card open picked') {
                    console.log("this card already open");
                    cardOpenCount++;
                    //Set to the tried to tried id
                    document.getElementById("tried").innerHTML = "Unfocus: " + cardOpenCount;

                    console.log(cardOpenCount);
                }
            }
            //assign open class
            clickedTarget.parentNode.classList.add('open')
            //Check if all card reveal
            checkAllCardReveal();
            //Reset the selected
            setTimeout(resetSelected, timeDelayToFlipImage);

        }
    }

}
/*
    - checkAllCardReveal() function
        - call: checkAllCardReveal()
        - parameter: no
        - Check if all card reveal, then completed the game
        - No return value
*/
function checkAllCardReveal() {
    //Get all the "sameCard" class. 
    var cardReveals = document.querySelectorAll('.sameCards')
    // console.log(cardReveals.length);
    // console.log(dupplicateCardCollections.length);
    if (cardReveals.length == dupplicateCardCollections.length) {
        console.log("end game");
        //Clear the timer
        clearInterval(timerID);
        var stars = (numberStar - cardOpenCount) < 0 ? 0 : numberStar - cardOpenCount;
        //Call End game
        endGame(stars, level, true);
    }
}
/*
    - match() function
        - call: match()
        - parameter: no
        - Get all the "picked" class. Then add class call "sameCards" 
        - Add match CSS
        - No return value
*/
function match() {
    //The Document method querySelectorAll() returns that match the specified group of selectors.
    //https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
    var selected = document.querySelectorAll('.picked')
    //console.log(selected);
    selected.forEach(function (element) {
        // console.log(element);
        //Set class with the same cards
        element.classList.add('sameCards')
    })
}
/*
    - resetSelected() function
        - call: resetSelected()
        - parameter: no
        - Reset the card when it is not match
        - Remove the picked class
        - No return value
*/

function resetSelected() {
    //console.log("reset resetSelected");
    firstCardClicked = null;
    secondCardClicked = null;
    numberClicked = 0;
    //Get all the picked card
    var selected = document.querySelectorAll('.picked')
    selected.forEach(function (element) {
        //Remove the picked class
        element.classList.remove('picked')
    })
}
//This function will run by interval
function runTimer() {
    // console.log("Widthbar " + widthBar);
    // console.log("timer " + timer);
    //get the timerBarElement Element 
    var timerBarElement = document.getElementById("timeGoneBar");
    //If the widthBar is 100, it will terminate the game
    if (widthBar >= 100) {
        //Clear the interval when the timer is reach
        clearInterval(timerID);
        //Call the completed game
        //Call End game
        endGame(0, level, false);
    } else {
        //Increase the widthbar by 100 (percent of the width) that increase each time.
        widthBar += 100 / timer;
        timerBarElement.style.width = widthBar + '%';
    }
}