//Set unlockGame Level as the global variable. Assign it to 1 when user start the game
window.unlockGame = 1;
//ArrayStars as the global variable to store the stars that display on the menu
window.arrayStars = [];
//Set the backgournd music
window.backgroundMusic = null;

/*
    displayGameLevelPage
    - call: displayGameLevelPage() 
    - This function display the Menu
    - There is no need for parameter for that parameter
    - All element is in the div wrapper
    - Display the text to allow user to select the game level
    - Display the Navigation to the Home page and Exist to close the game
    - Display the menu that has a list of button with the stars and level
    - The menu only allow to play on the unlock level. When the user pass the current level, it will allow user to increase to the next level 
    - When the user select the particular game level, it will call the playGame to detect the type of game,
      This function will call appropirate game type.
*/
window.displayGameLevelPage = function () {
    //Call the function to play music
    //getBackgoundMusic();

    console.log("unlock Game menu" + unlockGame);
    //clear screen
    document.body.innerHTML = "";

    //Create the wrapper
    var wrapper = createDiv();
    //add a css class wrapper
    wrapper.classList.add("wrapper");

    //Create the div for navigation
    var navElement = createDiv();
    //Assign the class
    navElement.classList.add("Navigation");

    //Home button
    var homeButtonElement = createButton("Home");
    navElement.appendChild(homeButtonElement);
    navElement.onclick = function () {
        //Back to home menu
        displayHomePage();
    }

    //Exit button
    var exitButtonElement = createButton("Exit");
    navElement.appendChild(exitButtonElement);
    exitButtonElement.onclick = function () {
        //Back close window
        window.close();
    }

    //Create Heading text
    var heading = createHeading1("Menu");
    heading.classList.add("heading");

    //Create the div for menu
    var menuDiv = createDiv();
    //add a css class wrapper
    menuDiv.classList.add("menu");

    //Append child to wrapper
    wrapper.appendChild(navElement);
    wrapper.appendChild(heading);
    wrapper.appendChild(menuDiv);

    //Loop through the unlock levels
    for (var i = 0; i < unlockGame; i++) {
        //Create the of button and assign the name
        var unlockButtonElement = createButton(gameLevel[i].level);
        
        //Display the star on the menu
        //check if user has already played the game. Display the star
        if (i < arrayStars.length) {
            //Create the span
            var starsDivElement = createSpan();
            //Display the star
            for (var index = 0; index < arrayStars[i].stars; index++) {
                //Assign the star to span
                starsDivElement.innerHTML += "&starf;";
            }
            //Append stars element to the level button
            unlockButtonElement.appendChild(starsDivElement);
        }

        //Allow the button to click
        unlockButtonElement.disabled = false;

        //Append unlockButtonElement to menuDiv 
        menuDiv.appendChild(unlockButtonElement);

        //Creat the anonymous function gameLevelClick that 
        //passing the game level and the button element
        gameLevelClick(gameLevel[i].level, unlockButtonElement);
    }

    //Loop through the lock levels
    for (var i = unlockGame; i < gameLevel.length; i++) {
        //Create the lockButtonElement
        var lockButtonElement = createButton();

        //Assign the text with the key
        lockButtonElement.innerHTML = gameLevel[i].level + "&#128274;";
        
        //Create the current Level
        lockButtonElement.disabled = true;

        //Add colorButtonElement to the wrapper
        menuDiv.appendChild(lockButtonElement);
    }
}

/*
    - When the user select the particular game level.
    - parameter: levelNumber, unlockButtonElement
    - It is the anonomous function that take the level number and unlock game button
 */
function gameLevelClick(levelNumber, unlockButtonElement) {

    //when the button is clicked, call this function
    unlockButtonElement.onclick = function () {
        console.log(levelNumber);
        playGame(levelNumber);
    }
}
/*
    - playGame is the global function
    - call: playGame(levelNumber) 
    - Take the levelNumber as the parameter
    - Get data fromt he gameData
    - Check the typeGame 
    - Call the appropriabe function by passing the game data
*/
window.playGame = function (levelNumber) {
    //Get the game level variable
    var gameData = gameLevel[levelNumber - 1];
    //Check the type of game
    if (gameData.typeGame == "Order Number") {
        console.log("Order Number");
        //Order game
        orderNumber(gameData);
    //Memory game
    } else if (gameData.typeGame == "Memory Game") {
        console.log("memory game");
        memoryGame(gameData);
    }
    //Math game
    else if(gameData.typeGame == "Math Game")
    {
        console.log("Math Game");
        mathGame(gameData);
    }
}
/*
    - call: getBackgoundMusic() 
    - Randomly select the backgournd music
    - Play the music
    - Add event to detect if the music is end
*/
function getBackgoundMusic() {
    if (backgroundMusic == null || backgroundMusic.paused) {
        console.log(backgroudMusic.length);
        //Get the random number to select the random background music
        var randomMusicSelect = randomNumber(backgroudMusic.length)
        console.log(backgroudMusic[randomMusicSelect]);

        //Create the background music and pass the  sound as the parameter
        backgroundMusic = createSoundEffect(backgroudMusic[randomMusicSelect]);
        //Play the sound
        backgroundMusic.play();
        // console.log(backgroundMusic.paused);

        backgroundMusic.addEventListener("ended", function () {
            //When the background music end. create a new file.
            getBackgoundMusic();
        });
    }
}

