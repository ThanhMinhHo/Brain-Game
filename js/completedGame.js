/*- endGame function
    - call: endGame(stars,currentLevel,completed) 
    - Parameter: stars: number of stars, currentLevel: the level of current game, completed: whereather the user pass or not pass the level
    - This function display finish game
    - Loop through arrayStars to check if the user play previous game again.Update the star
    - When the current level greater than unlockGame. Then add new game data with value.
    - Check if the currentLevel is greater than or equal unlockGame level and unlockGame must also be less the gameLevel.length. The game must completed to unlock  the next game
    - Wrap the entire the element to the wrapper
    - Display the Level name
    - Display the Level name
    - Display the text how the user perform the game
    - Display the navigation bar to comback to menu, next game if the user pass the current game, play again when the user play this game again
    - No return variable
    */
window.endGame = function (stars, currentLevel, completed) {
    //Clear the screen
    document.body.innerHTML = "";

    //Create the wrapper
    var wrapper = createDiv();
    //add a css class wrapper
    wrapper.classList.add("wrapper");

    //Loop through arrayStars to check if the user play previous game again.Update the star
    for (var i = 0; i < arrayStars.length; i++) {
        if (currentLevel == arrayStars[i].level) {
            arrayStars[i].stars = stars;
        }
    }
    //When the current level greater than unlockGame. Then add new game data with value.
    if (currentLevel >= unlockGame && completed == true) {
        //Add the current level that associate with curent stars. key-value
        arrayStars.push({ level: currentLevel, stars: stars });
    }

    //unlockGame variable is the global variable
    //Check if the currentLevel is greater than or equal unlockGame level and unlockGame must also be less the gameLevel.length. The game must completed to unlock  the next game
    if (currentLevel >= unlockGame && unlockGame < gameLevel.length && completed == true) {
        unlockGame = currentLevel + 1;
    }

    //Create Heading logo


    //create div element for logo
    var containerLogo = createDiv();
    // add a CSS class class logo
    containerLogo.classList.add("logo");
    //Append the containerLogo to the wrapper
    wrapper.appendChild(containerLogo);

    //Level name
    var levelName = createHeading1("level " + level);
    //Append the level name to the container Logo
    containerLogo.appendChild(levelName);

    //Get the congraduation text by call the getCongraduationText function
    var congraduationText = getCongraduationText(stars, completed);
    //Create the heading to the text
    var congraduationHeadingElement = createHeading3(congraduationText);
    //Append the congraduationHeadingElement to the containerLogo
    containerLogo.appendChild(congraduationHeadingElement);

    //Create the stars to display star
    var starElement = createDiv();
    //add a css class for starElement
    starElement.classList.add("star");
    if (completed) {
        //Create the sound effect and pass the congraduation sound as the parameter
        var correctSound = createSoundEffect("sound/congraduationSound.mp3");
        //Play the sound
        correctSound.play();
        //Show the number of stars with fill color
        for (var i = 0; i < stars; i++) {
            //Add to the star
            starElement.innerHTML += "&starf;";
        }
        //Fill with the unfill stars. Start from number of stars.
        for (var i = stars; i < numberStar; i++) {
            starElement.innerHTML += "&#9734";
        }
    } else {
        //Not pass the level, display the leaf
        starElement.innerHTML += "&#9752 &#9752";
    }
    //Append starElement to the wrapper
    wrapper.appendChild(starElement);

    //Create the div for navigation
    var divNavigationElement = createDiv();
    //Assign the class
    divNavigationElement.classList.add("Navigation");
    //Add to divNavigationElement wrapper
    wrapper.appendChild(divNavigationElement);

    //Create button menu
    var menuButtonElement = createButton("Menu");
    //Assing the onclick event to the homeButtonElement
    menuButtonElement.onclick = function () {
        //Back to menu
        displayGameLevelPage();
    }
    //Append menu button Element to container
    divNavigationElement.appendChild(menuButtonElement);

    //show the user to play the next game or the play the game again
    var GameButtonElement = "";
    //If user completed the game. It will show the next game.
    if (completed) {
        //Show the next game button
        if (level < gameLevel.length) {
            GameButtonElement = createButton("Next Game");
            GameButtonElement.onclick = function () {
                //Back to menu
                playGame(level + 1);
            }
        }
        else {
            //completed all level
            var finishAllLevel = createHeading1("Congraduation, You have completed all levels. It is a big achievement");
            wrapper.classList.add("heading");
            wrapper.appendChild(finishAllLevel);
        }
    }
    //Otherwise, it will required user to play again.
    else {
        GameButtonElement = createButton("Play again");
        GameButtonElement.onclick = function () {
            //Back to menu
            playGame(level);
        }
    }
    //Append nextGameButton button Element to container
    divNavigationElement.appendChild(GameButtonElement);

}
/*
    - getCongraduationText(stars, completed)
        - This fuction to write the congration Text randomly to make the 
    game more interesting
        - call: getCongraduationText()
        - parameter: stars to get the appropriate text, completed: to show if the user completed the game, pass or not pass
        - return text
*/
function getCongraduationText(stars, completed) {
    //Create text variable and set to null
    var text = null;
    //Assing the text to the engage user to play
    if (completed) {
        var randomText;
        //User have play the great with max performance with full star
        if (stars == numberStar) {
            //Get the random Number base on the congraduation range
            randomText = randomNumber(congraduation.length);
            text = congraduation[randomText];
        }
        //Required to improve
        else {
            //Get the random Number base on the requireToImprove range
            randomText = randomNumber(requireToImprove.length);
            text = requireToImprove[randomText];
        }
    }
    //Uncompleted the game
    else {
        //Get the random Number base on the encourage range
        var randomText = randomNumber(encourage.length);
        text = encourage[randomText];
    }
    return text;
}