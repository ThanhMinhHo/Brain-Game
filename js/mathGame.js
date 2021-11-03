//Variable
var wrong = 0;
var correct = 0;
var answer = "";
var gameType = "";
var maxNumber = 0;
var totalQuestions = 0;
var questions = 0;
var data = null;
//Timer variable
var timerID;
var widthBar = 0;
var timer = null;
var level = null;

/*
    mathGame function
    - call: mathGame(gameData) 
    - This function display math game that including yes/no question, multiple choice question, drag and drop the mathematic symbol
    - gameData as parameter 
    - Reset variable
    - Assign the game data to the variable
    - Wrap the entire the element to the wrapper
    - Display the timer
    - Create the text to tell the user what is that game about
    - Check type of game (yes/No, Multiple choice, Drag Math Symbol)
    - Call the the coresponding function regarding to the type of game
    - No return variable
*/
window.mathGame = function (gameData) {
    //Clear the sceen
    document.body.innerHTML = "";

    //reset variable
    wrong = 0;
    correct = 0;
    answer = "";
    timer = 0;
    widthBar = 0;
    questions = 0;
    data= null;

    data = gameData;
    maxNumber = gameData.maxNumber;
    totalQuestions = gameData.totalQuestions;
    timer = gameData.timer;
    level = gameData.level;
    gameType = gameData.type;

    //Create the wrapper
    var wrapper = createDiv();
    //add a css class wrapper
    wrapper.classList.add("wrapper");

    //Create the empty div
    var timerElement = createDiv();
    //Set the timer id
    timerElement.setAttribute("id", "progressBar");
    //Create the empty paragraph
    var timeGoneElement = createDiv();
    //Set id name
    timeGoneElement.setAttribute("id", "timeGoneBar");
    //Append timeGoneElement to timeGoneElement
    timerElement.appendChild(timeGoneElement);
    //Append timerElement to wrapper
    wrapper.appendChild(timerElement);

    //Create the empty div to display the number of totalQuestions left
    var questionDiv = createDiv();
    questionDiv.setAttribute("id", "totalQuestions");
    //append questionDiv to the wrapper
    wrapper.appendChild(questionDiv);

    //Create Heading text
    var textDescription = createHeading3();
    //Append child to heading
    textDescription.classList.add("heading");
    textDescription.setAttribute("id", "textDescription")
    wrapper.appendChild(textDescription);

    //Create the div to present the equation for 
    var symbolDiv = createDiv();
    //add a css class equation
    symbolDiv.setAttribute("id", "symbolDiv");
    //Append equationDiv to wrapper
    wrapper.appendChild(symbolDiv);

    //Create the div to present the equation 
    var equationDiv = createDiv();
    //add a css class equation
    equationDiv.setAttribute("id", "equationDiv");
    //Append equationDiv to wrapper
    wrapper.appendChild(equationDiv);

    //Create the div for answer question
    var answerQestionDiv = createDiv();
    //Assign the class
    answerQestionDiv.setAttribute("id", "answerDiv");
    //Append answerQestionDiv to wrapper
    wrapper.appendChild(answerQestionDiv);

    //Create the timer
    timerID = setInterval(runTimer, 500);

    //Check type of game
    if (gameData.type == "Yes No") {

        //Call the function yesNoQuestions.
        displayYesNoQuestions();

    } else if (gameData.type == "Multiple choice") {

        //Call the function Multiple choice. 
        displayMutipleChoiceQuestions();
    } else if (gameData.type == "Drag Math Symbol") {
        //Call the function Multiple choice. 
        displayDragMathSymbol();
    }
    else if (gameData.type == "knowledge") {
        //Call the function Multiple choice. 
        displayknowledge(gameData);
    }

}
/*
     displayknowledge function
    - call: displayknowledge() 
    - This function display mutiple choice questions
    - No parameter 
    - Increase the question
    - Create the question div and display the question
    - Create the posible anser
    - call the anonymous function when the button click passing the number and the button element
    - No return variable
*/
function displayknowledge() {

    //Display the text description
    document.getElementById("textDescription").innerHTML = "Select the correct answer";

    //console.log(gameData.questionCollection[0]);
    //Call the getEquationMultiplechoiceQuestion function to display the equation
    //var equation = getEquationMultiplechoiceQuestion();
    //Display the equation div
    document.getElementById("equationDiv").innerHTML = data.questionCollection[questions].question;
    document.getElementById("equationDiv").style.fontSize = "20px";

    //Clear the anserDiv
    document.getElementById("answerDiv").innerHTML = "";
    var guessResult = data.questionCollection[questions].posibleAnswer;
    answer = data.questionCollection[questions].correctAnswer;
    //loop through the loop
    for (var i = 0; i < guessResult.length; i++) {
        //Create the multiple question
        var resultButtonElement = createButton(guessResult[i]);

        //Append the resultButtonElement to document
        document.getElementById("answerDiv").appendChild(resultButtonElement);

        //call the anonymous function when the button click
        //passing the number and the button element
        anonymousAnswer(guessResult[i], resultButtonElement);
    }
    //Add 1 to questions
    questions++;
    //Update the number of totalQuestions left
    document.getElementById("totalQuestions").innerHTML = "Question: " + questions + "/" + totalQuestions;

}

/*
    displayDragMathSymbol function
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
*/
function displayDragMathSymbol() {
    //Add 1 to questions
    questions++;
    //Update the number of totalQuestions left
    document.getElementById("totalQuestions").innerHTML = "Question: " + questions + "/" + totalQuestions;

    //Display the text description
    document.getElementById("textDescription").innerHTML = "Drag the correct symbol to the equation";

    //Create array for symbol
    arraySymbol = ["Plus", "Minus", "Multiplication", "Devision"]
    //clear the symbolDiv
    document.getElementById("symbolDiv").innerHTML = "";
    for (var i = 0; i < arraySymbol.length; i++) {
        var symbol = "";
        if (arraySymbol[i] == "Plus") {
            //Plus symbol
            symbol = " + "
        } else if (arraySymbol[i] == "Minus") {
            //Minus symbol
            symbol = " - "
        } else if (arraySymbol[i] == "Multiplication") {
            //multiple symbol
            symbol = " &#xd7; ";
        } else {
            //Devision symbol
            symbol = " &#xf7; ";
        }
        //Create the div for the symbol
        var divSymbolElement = createDiv();
        //Set the innerHTML
        divSymbolElement.innerHTML = symbol;
        //set the id
        divSymbolElement.setAttribute("id", symbol);
        //set the dragable to true
        divSymbolElement.setAttribute("draggable", true);
        //Add dragstart event
        divSymbolElement.addEventListener("dragstart", function (event) {
            // The dataTransfer.setData() method sets the data type and the value of the dragged data
            event.dataTransfer.setData("Text", event.target.id);
            //console.log(event.target.id);
        });

        document.getElementById("symbolDiv").appendChild(divSymbolElement);

    }

    //clear the symbolDiv
    document.getElementById("equationDiv").innerHTML = "";

    //Call the equationValue to get the value
    //Creat the equation Variable
    var equationVariable;
    var count;
    //Check if the equation where first value (+ - * /) might have the same value: ex 2:1 = 2 also 2*1 = 2.
    //Get the new value
    do {
        //Call the equationValue
        equationVariable = equationValue();
        count = 0;
        if (equationVariable.firstNumber + equationVariable.secondNumber == equationVariable.result) {
            count++;
        }
        if (equationVariable.firstNumber - equationVariable.secondNumber == equationVariable.result) {
            count++;
        }
        if (equationVariable.firstNumber * equationVariable.secondNumber == equationVariable.result) {
            count++;
        }
        if (equationVariable.firstNumber / equationVariable.secondNumber == equationVariable.result) {
            count++;
        }
        console.log("count " + count);
    } while (count > 1);


    //Display equation 
    //Create the div for the first number
    var firstNumber = createDiv();
    //Set the innerHTML
    firstNumber.innerHTML = equationVariable.firstNumber;
    //append firstNumber to equationDiv 
    document.getElementById("equationDiv").appendChild(firstNumber);

    //Create the div for the symbol
    var dropDiv = createDiv();
    dropDiv.innerHTML = "";
    //add a css class dropDiv
    dropDiv.classList.add("dropDiv");
    //set the id to the div
    dropDiv.setAttribute("id", equationVariable.symbol);

    //Add ondragover event to dropDiv and set the event to preventDefault
    dropDiv.addEventListener("dragover", function (event) {
        //Prevent the default
        event.preventDefault();
    });

    //Add ondrop event to div 
    dropDiv.addEventListener("drop", function (event) {

        //Prevent the default
        event.preventDefault();

        //get the data transfer
        var data = event.dataTransfer.getData("text");
        //console.log("data Transfer" + data);
        if (data == event.target.id) {
            console.log("Correct");

            //set target innerHTML to empty.
            event.target.style.border = "none";
            event.target.style.color = "Blue";
            event.target.innerHTML = "";
            event.target.appendChild(document.getElementById(data));

            //Call the correctAnswer function
            correctAnswer();

            //Call the checkCompleteQuestions function
            checkCompleteQuestions();
        } else {
            console.log("Incorrect");
            event.target.style.border = "thick solid red ";
            //Call the incorrectAnswer function
            incorrectAnswer();
            //Increasing wrong answer
            wrong++;

        }
    });

    //append firstNumber to equationDiv 
    document.getElementById("equationDiv").appendChild(dropDiv);

    //Create the div for the the lastNumberAndResult
    var lastNumberAndResult = createDiv();
    //Set the innerHTML
    lastNumberAndResult.innerHTML = equationVariable.secondNumber + " = " + equationVariable.result;
    //append lastNumberAndResult to equationDiv 
    document.getElementById("equationDiv").appendChild(lastNumberAndResult);
}

/*
    displayMutipleChoiceQuestions function
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
*/
function displayMutipleChoiceQuestions() {
    //Add 1 to questions
    questions++;
    //Update the number of totalQuestions left
    document.getElementById("totalQuestions").innerHTML = "Question: " + questions + "/" + totalQuestions;

    //Display the text description
    document.getElementById("textDescription").innerHTML = "Select the correct answer";

    //Call the getEquationMultiplechoiceQuestion function to display the equation
    var equation = getEquationMultiplechoiceQuestion();
    //Display the equation div
    document.getElementById("equationDiv").innerHTML = equation.equationDiv;

    //Assign the aswer
    answer = equation.result;

    //Create the array of the closely result
    var guessResult = [equation.result, equation.result + 1, equation.result - 1, equation.result + 2];

    //Soft the guess result randomly
    guessResult.sort(function (a, b) {
        return 0.5 - Math.random();
    });

    //Clear the anserDiv
    document.getElementById("answerDiv").innerHTML = "";

    //loop through the loop
    for (var i = 0; i < guessResult.length; i++) {
        //Create the multiple question
        var resultButtonElement = createButton(guessResult[i]);

        //Append the resultButtonElement to document
        document.getElementById("answerDiv").appendChild(resultButtonElement);

        //call the anonymous function when the button click
        //passing the number and the button element
        anonymousAnswer(guessResult[i], resultButtonElement);
    }
}

/*
    anonymousAnswer function
    - call: anonymousAnswer() 
    - This function to display when the user click on the answer
    - guessResult mean the gues value. buttonElement is  the button element
    - Check if it is correct answer or incorrect answer
    - Change the background color
    - Call the checkCompleteQuestions function to check if the function is completed
*/
function anonymousAnswer(guessResult, buttonElement) {
    //when the button is clicked, call this function
    buttonElement.onclick = function () {
        // console.log("guess result" + guessResult);
        //Get the correct button element
        var getButtonElement = document.getElementsByTagName("button");

        if (guessResult == answer) {
            console.log("Correct");
            buttonElement.style.backgroundColor = "Blue";
            //Call the correctAnswer function
            correctAnswer();

        }
        else {
            console.log("In correct");
            //add the wrong
            wrong++;
            //Set the current button clicked to red
            buttonElement.style.backgroundColor = "red";
            //Call the incorrectAnswer function
            incorrectAnswer();

            //Find the button by go through the betButtonElement
            for (var i = 0; i < getButtonElement.length; i++) {
                //Check if the button is correct
                if (getButtonElement[i].innerText == answer) {
                    // console.log(getButtonElement[i]);
                    //Show the background color
                    getButtonElement[i].style.backgroundColor = "Blue";
                }
            }

        }
        //Disable all the answer
        //Get all the  button element
        //Find the button by go through the betButtonElement
        for (var i = 0; i < getButtonElement.length; i++) {
            //Check if the button is correct
            getButtonElement[i].disabled = true;

        }
        //Call the checkCompleteQuestions function
        checkCompleteQuestions();

    }

}
/* - getEquationMultiplechoiceQuestion function 
    - call:getEquationMultiplechoiceQuestion()
    - no parameter 
    - Get the equation value by calling the function equationValue
    - return the json file that have the equationDiv and result 
*/
function getEquationMultiplechoiceQuestion() {
    //Get the equation value by calling the function equationValue
    var equationData = equationValue();
    //Get the actual data
    var firstNumber = equationData.firstNumber;
    var secondNumber = equationData.secondNumber;
    var symbol = equationData.symbol;
    var result = equationData.result;
    //Display the equation
    return { equationDiv: firstNumber + symbol + secondNumber + " = ?", result: result };
}
/* - getEquationYesNoQuestionGame function 
    - call:getEquationYesNoQuestionGame()
    - no parameter 
    - Get the equation value by calling the function equationValue
    - Check if the answer is true or false
    - return the json file that have the equationDiv and result 
*/
function getEquationYesNoQuestionGame() {
    //Get the equation value by calling the function equationValue
    var equationData = equationValue();
    //Get the actual data
    var firstNumber = equationData.firstNumber;
    var secondNumber = equationData.secondNumber;
    var symbol = equationData.symbol;
    var result = equationData.result;
    //Call the guessCloselyResult that return the guess Result
    var guessResult = guessCloselyResult(result);
    //Check the answer true or false
    if (result == guessResult) {
        answer = "True";
    }
    else {
        answer = "False";
    }
    //Display the equation
    return { equationDiv: firstNumber + symbol + secondNumber + " = " + guessResult };
}
/*
    displayYesNoQuestions function
    - call: displayYesNoQuestions() 
    - This function display yes/no questions
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
*/
function displayYesNoQuestions() {
    //Add 1 to questions
    questions++;

    //Update the number of totalQuestions left
    document.getElementById("totalQuestions").innerHTML = "Question: " + questions + "/" + totalQuestions;

    //Display the text description
    document.getElementById("textDescription").innerHTML = "Is the equation True or False?";

    //Call the getEquationYesNoQuestionGame function to display the equation
    var equation = getEquationYesNoQuestionGame();
    //Display the equation div
    document.getElementById("equationDiv").innerHTML = equation.equationDiv;

    //Clear the anserDiv
    document.getElementById("answerDiv").innerHTML = "";

    //Create the array of posible answer
    var possibleAnswer = ["True", "False"];

    //loop through the loop
    for (var i = 0; i < possibleAnswer.length; i++) {
        //Create the multiple question
        var resultButtonElement = createButton(possibleAnswer[i]);

        //Append the resultButtonElement to document
        document.getElementById("answerDiv").appendChild(resultButtonElement);

        //Create the anonymous function when the button click
        //passing the number and the button element
        anonymousAnswer(possibleAnswer[i], resultButtonElement);
    }
}
/* - finishMathGame function 
    - call:finishMathGame()
    - no parameter 
    - Clear the interval when the timer is reach
    - call the endGame by passing stars, level (true, false)  value
*/
function finishMathGame() {
    //Clear the interval when the timer is reach
    clearInterval(timerID);
    var stars = (numberStar - wrong) < 0 ? 0 : numberStar - wrong;
    //Call End game
    if (stars == 0) {
        //Play game again
        endGame(stars, level, false);
    } else {
        //Pass this game
        endGame(stars, level, true);
    }
}
function checkCompleteQuestions() {
    if (questions == totalQuestions) {
        //Call the finishMathGame function
        finishMathGame();
    } else {
        if (gameType == "Yes No") {

            //Call the displayMutipleChoiceQuestions to continue playing after two second. It will show the question is correct
            setTimeout(displayYesNoQuestions, 2000);

        } else if (gameType == "Multiple choice") {

            //Call the displayMutipleChoiceQuestions to continue playing after two second. It will show the question is correct
            setTimeout(displayMutipleChoiceQuestions, 2000);
        } else if (gameType == "knowledge") {

            //Call the displayMutipleChoiceQuestions to continue playing after two second. It will show the question is correct
            setTimeout(displayknowledge, 2000);
        }
        else {

            //Call the displayMutipleChoiceQuestions to continue playing after two second. It will show the question is correct
            displayDragMathSymbol();
        }


    }
}

//EquationValue function that return Json format
function equationValue() {
    //Start the number from 1 to max Number
    var firstNumber = randomNumber(maxNumber) + 1;
    //Get the second number
    var secondNumber = randomNumber(maxNumber) + 1;

    //Get the random equation sign
    var number = randomNumber(equationSign.length);
    var equationSymbol = equationSign[number];

    //result variable
    var result = 0;
    //Symbol;
    var symbol = "";
    if (equationSymbol == "+") {
        //Plus symbol
        symbol = " + "
        result = firstNumber + secondNumber;
    } else if (equationSymbol == "-") {
        //Minus symbol
        symbol = " - "
        result = firstNumber - secondNumber;

    } else if (equationSymbol == "*") {
        //multiple symbol
        symbol = " &#xd7; ";
        result = firstNumber * secondNumber;
    } else {
        //devide symbol
        symbol = " &#xf7; ";
        result = firstNumber / secondNumber;

        //Keep the divided simple, the first number must be greater than the second number
        //Also, there are no reminder
        while (firstNumber < secondNumber || result % 2 != 0) {

            firstNumber = randomNumber(maxNumber) + 1;
            secondNumber = randomNumber(maxNumber) + 1;
            result = firstNumber / secondNumber;
        }
    }
    return { firstNumber: firstNumber, secondNumber: secondNumber, symbol: symbol, result: result, equationSymbol: equationSymbol }
}

function guessCloselyResult(result) {
    //Get the random number 
    var valueRandomNumber = randomNumber(3);
    var guessResult
    //Randomly get the close result, or the actual result
    if (valueRandomNumber == 0) {
        guessResult = result;
    }
    else if (valueRandomNumber == 1) {
        guessResult = result + 1;
    }
    else {
        guessResult = result - 1;
    }
    return guessResult;
}
//Correct answer function by play the sound
function correctAnswer() {
    console.log("correct");
    //Play the music
    //Create the sound effect and pass the correct sound as the parameter
    var correctSound = createSoundEffect("sound/correctAnswer.mp3");
    //Play the sound
    correctSound.play();
    //Add correct answer
    correct++;
    console.log(correct);
}
//Incorrect answer function by play the sound
// Add the wrong
function incorrectAnswer() {
    console.log("Incorrect");
    //Play the music
    //Create the sound effect and pass the in correct sound as the parameter
    var wrongAnser = createSoundEffect("sound/wrongAnswer.mp3");
    //Play the sound
    wrongAnser.play();
    //Add wrong answer
    wrong++;
    console.log(wrong);
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