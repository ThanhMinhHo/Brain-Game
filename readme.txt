My name is MINH THANH HO, I am currently studying master of Information Technology at Deakin University.
This is  the project for mobile application SIT708

The app that I am going to make call "ZBrain", it is a game that design 
to help the users to exercise their brain that contributing to
study better at school, focus at work and importantly 
maintaining psychological well-being.

There will be different level of the game, the user allows to play to the next level when they are completed the certain level. It will be select the combination of two features:
    - Logic 
    - Memory match
Firstly, the logic of the game that is designed to be natural and simple way that can suitable for most people. That involving:
    - Finding the unique item in the collection of similar things
    - Selecting to ascending/descending number
    - Multiple choice question allows the users to select the correct answer base on the knowledge
Secondly, memory match is concentration game that contains matching images with different topics with well design. The board size varies depend on the difficulty per level (2x2 tiles, 3x3 tiles, 4x4 tiles, etc.). All of the cards (images) are laid face down on a surface. In order to play the game, the user need to tap to open up to two cards at any time, and when they are a match then they stay revealed. When they are not match they will face up again. Therefore, player is required to remember cards positions to try and match all cards in the fewest steps possible. There will be the time limit and the number step allow to complete the game.
When the users finish each level, the app will be rating their performances.

Feature
    - Having board range of Logic, memory match and multiple-choice question on variety of context. 
    Most of the competitors do not provide a range of context challenge. 
    Playing with ZBrain, the users will have the great experiences on different challenges and the rich context of interaction.
    - For the type of memory match, firstly, the user will have the opportunity to view the entire board before they play the game in given time that depend on the difficulty of the game. It allows the user to reduce the number of step for solving the problem as well as improve the ability to concentration and remember card pair.
    - For the logic type game, the user first gives the chance to look at the question and decide the best solution. It helps users to have a deep thinking on the problem. ZBrain also give the hint for the users when they have difficulty. The hint will be give when they select wrong answer.
    - ZBrain has the content and challenge is researched carefully and organise according to level of difficulty
    - ZBrain give advice when the user could not able to answer the questions, so users is relaxing and enjoy the app
    - The next game and challenge will be unlocking when the users pass the current level with 3-star rating. It helps users to focus on each game and it is the value of the game.
    - The game is replayed current level when user fails to pass this level without go back to the initial level. It will give the users great experiences.
    - ZBrain is designed to allow the user to go from the easy level to challenges level so that it builds the strengthen mind.
    - Celebrating users when they completed each game. It also rates the user performances depend on how fast they solve as well as the number of step (lower number of tries are better scores). It is the great way to give the award for their achievement.
    - ZBrain allows users to share the result with friends on Facebook
    - ZBrain provide the great way to navigate the entire application without any difficulty.
    - ZBrain have portrait and landscape screen. It also cross platform apps so that give the users experience on mobile and tablet devices.
    - Play without internet, it is not a problem with ZBrain

Data Structures in gameData.js
    - gameLevel:
        It is an object data type, there are different level with the description,
        level: The level of the game
        TypeGame: Math Game, Memory Game, Order Number 
        NumberOfButtons: the number of button on the screen
        Timer: the maximum number allow for each game
        typeGame: asceding order, deceding order, yes no question, multiple choice question, drag and drop

    - numberStar: Number of Star when user finish the game, currently set to 3
    - Alphabets: array type have all  Alphabets Character.
    - equationSign: mathermatical symbol that have pluss, minus, multiple, devision array
    - backgroudMusic: different backgroudMusic file that push into the array
    - congraduation: has the different text to say congraduation to user when the finish the game
    - requireToImprove: has different text say when the user pass the game
    - encourage: has different text to encourage user. It make the user more greate experiecens to the game
    - legalData that has the object type, that has the name, licenseType, Author, Soucre. 

Major functions
    ui.js
        - createLink function
            - Create the hyperlink with give the url
            - call: createLink
            - parameter: url
            - return the div achor
        - createTable function
            - Creates a Table , with the given data 
            - parameter: data for the table
            - return the table element
        - createSoundEffect function
            - Creates a soundEffect , with the given source 
            - return the sound element
        - createParagraph function
            - Creates a paragraph , with the given text 
            - parameter: any text to include on the paragraph
            - return paragraph element
        - createHeading1,2,3 function
            - Creates a paragraph , with the given text 
            - parameter: any text to include on the heading
            - return heading 1,2,3 element
        - createDiv function
            - create Div with give the html element
            - return div element
        - createButton function
            - Creat the dom button element
            - Create the text node with give parameter
            - return button
    gameStart.js
        - displayHomePage function
            - call: displayHomePage() 
            - There is no need for parameter for that parameter
            - All element is in the div wrapper
            - Display the welcome text 
            - Display the logo image
            - Display the Navigation to the About page or to the Menu
            - Add the event to play button, When it clicked, it displays the legal page
            - Add the event to play button, When it clicked, it displays the displayGameLevelPage
    legal.js
        - displayLegal function
            - call: displayLegal()
            - The function call displayLegal which the purpose to display the 
            - legal page. 
            - It has the Navigation to to Home page.
            - Create the table to display legal session
            - createTable function by passing the legalData to the UI to display the data  
    menu.js
        - displayGameLevelPage function
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
            - No return value
        - gameLevelClick function
            - call: gameLevelClick()
            - When the user select the particular game level.
            - Parameter: levelNumber, unlockButtonElement
            - It is the anonomous function that take the level number and unlock game button
        - getBackgroundMusic function
            - call: getBackgoundMusic() 
            - Randomly select the backgournd music
            - Play the music
            - Add event to detect if the music is end
    orderNumberGame
        - displayGameLevelPage function
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
            - No return variable
        - runTimer function
            - call: runTimer() 
            - check the widthBar is 100, it will terminate the game
            - This function will run by interval, it will update the time bar
            - Call the endGame when the timer is end
            - Clear the interval
        - checkExistValue function
            - call: checkExistValue() 
            - parameter: newNumber which the new value to add to the array
            - return true if the value exist
            - return false if the value is not exist in the origional array
        - anonymousOrder function
            - call: anonymousOrder(number, numberButton) function, it is call when the button click
            - parameter: number which is the value, numberButton is the button element
            - Check if the user click is correct order
            - When the user already clicked the button, this button is disable
            - When the user click incorrect button, show the correct button
            - No return value
    mathGame.js
        - mathGame function
            - call: mathGame(gameData) 
            - This function display math game that including yes/no question, multiple choice question, drag and drop the mathematic symbol
            - gameData as parameter 
            - Reset variable
            - Assign the game data to the variable
            - Display the timer
            - Create the text to tell the user what is that game about
            - Check type of game (yes/No, Multiple choice, Drag Math Symbol)
            - Call the the coresponding function regarding to the type of game
            - No return value
        - displayDragMathSymbol function
            - call: displayDragMathSymbol() 
            - This function display math game drag and drop the mathematic symbol
            - No parameter 
            - In crease the question
            - updat ethe text to tell what is that game about
            - Create the array for symbol and display on the screen
            - Set the dragable to true 
            - Send the data when the symbol is drag
            - Check if the equation where first value (+ - * /) might have the same value: ex 2:1 = 2 also 2*1 = 2. Get the new equation
            - Display the equation
            - Create the div to drop the the symbol
            - Check if it it correct or not
            - play the sound effect
            - No return variable
        - displayMutipleChoiceQuestions function
            - call: displayMutipleChoiceQuestions() 
            - This function display mutiple choice questions
            - No parameter 
            - In crease the question
            - update the text to tell what is that game about
            - Call the getEquationMultiplechoiceQuestion function to display the equation
            - Create the array of the closely result
            - Swap bettwen the result
            - Create the answer div
            - Display value to the div
            - call the anonymous function when the button click passing the number and the button element
            - No return variable
        - anonymousAnswer function
            - call: anonymousAnswer() 
            - This function to display when the user click on the answer
            - guessResult mean the gues value. buttonElement is  the button element
            - Check if it is correct answer or incorrect answer
            - Change the background color
            - Call the checkCompleteQuestions function to check if the function is completed
        -  getEquationMultiplechoiceQuestion function 
            - call:getEquationMultiplechoiceQuestion()
            - no parameter 
            - Get the equation value by calling the function equationValue
            - return the json file that have the equationDiv and result 
        - getEquationYesNoQuestionGame function 
            - call:getEquationYesNoQuestionGame()
            - no parameter 
            - Get the equation value by calling the function equationValue
            - Check if the answer is true or false
            - return the json file that have the equationDiv and result 
    completedGame.js
        - getCongraduationText(stars, completed)
            - This fuction to write the congration Text randomly to make the 
            game more interesting
            - call: getCongraduationText()
            - parameter: stars to get the appropriate text, completed: to show if the user completed the game, pass or not pass
            - return text
        - endGame(stars,currentLevel,completed)  function
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
    memoryGame.js
        - memoryGame function
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
        - runTimer function
            - call: runTimer() 
            - check the widthBar is 100, it will terminate the game
            - This function will run by interval, it will update the time bar
            - Call the endGame when the timer is end
            - Clear the interval
        - checkClicked(clickedTarget) function
            - call: checkClicked(clickedTarget)
            - parameter: clickedTarget that the current caard clicked
            - Assing the first card cliked name
            - check if numberClicked is two then  Assign second clicked
            - No return value
        - checkAllCardReveal() function
            - call: checkAllCardReveal()
            - parameter: no
            - Check if all card reveal, then completed the game
            - No return value
        - match() function
            - call: match()
            - parameter: no
            - Get all the "picked" class. Then add class call "sameCards" 
            - Add match CSS
            - No return value