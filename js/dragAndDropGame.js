//Variable
var correctCount = 0;

window.dragAndDrop = function () {
    //Clear the window
    document.body.innerHTML = "";

    //Create the wrapper
    var wrapper = createDiv();
    //add a css class wrapper
    wrapper.classList.add("wrapper");

    //Create heading
    var createHeading1Element = createHeading1("Drop the sharp to the box from the left to the right");
    //Append heading to wrapper
    wrapper.appendChild(createHeading1Element);

    //Call the dragSession and dropSession function that return the drag and drop element
    var dragSessionElement = dragSession();
    var dropSessionElement = dropSession();

    //Append the dragSessionElement and dropSessionElement to wrapper
    wrapper.appendChild(dragSessionElement);
    wrapper.appendChild(dropSessionElement);

}
function dragSession() {
    //Create the wrapper
    var dragElement = createDiv();
    //add a css class wrapper
    dragElement.classList.add("drag");

    //Loop through the dragData to display the images
    for (var i = 0; i < dragData.length; i++) {
        console.log(dragData[i]);
        //Create the wrapper
        var squareBoxDivElement = createDiv();
        //add a css class wrapper
        squareBoxDivElement.classList.add("squareBox");

        //Append squareBoxDivElement to wrapper
        dragElement.appendChild(squareBoxDivElement);

        //Create the image
        var imageElement = createImage(dragData[i].img);
        //Set the width and height
        imageElement.setAttribute("max-width", "50");
        imageElement.setAttribute("max-height", "50");
        //set the id to the image
        imageElement.setAttribute("id", dragData[i].name);
        //set the dragable to true
        imageElement.setAttribute("draggable", true);
        //Add dragstart event
        imageElement.addEventListener("dragstart", function (event) {
            // The dataTransfer.setData() method sets the data type and the value of the dragged data
            event.dataTransfer.setData("Text", event.target.id);
            console.log(event.target.id);
        });

        //apppend imageElement to the squareBoxDivElement
        squareBoxDivElement.appendChild(imageElement);
    }
    //Return drag element
    return dragElement;
}
function dropSession() {
    //Create the wrapper
    var dropElement = createDiv();
    //add a css class wrapper
    dropElement.classList.add("drop");

    //Loop through the dragData
    for (var i = 0; i < dragData.length; i++) {
        //Create the wrapper
        var squareBoxDivElement = createDiv();
        //add a css class wrapper
        squareBoxDivElement.classList.add("squareBox");

        var text = createParagraph(dragData[i].name);
        squareBoxDivElement.appendChild(text);

        //Append squareBoxDivElement to wrapper
        dropElement.appendChild(squareBoxDivElement);

        //Create the div
        var div = createDiv();
        //set the id to the div
        div.setAttribute("id", dragData[i].name);
        //Append div to the squareBoxDivElement
        squareBoxDivElement.appendChild(div);

        //Add ondragover event to div and set the event to preventDefault
        div.addEventListener("dragover", function (event) {
            //Prevent the default
            event.preventDefault();
        });


        //Add ondrop event to div 
        div.addEventListener("drop", function (event) {
            //Prevent the default
            event.preventDefault();
            //get the data transfer
            var data = event.dataTransfer.getData("text");
            // console.log("target" + event.target);
            //check if sharp is matching
            if (data == event.target.id) {
                //increase the correct
                correctCount++;
                console.log("Match");
                //set target innerHTML to empty.
                event.target.innerHTML = "";
                event.target.appendChild(document.getElementById(data));
            } else {
                console.log("NOt match");
                event.target.style.backgroundColor = "red";
                
            }
            //Check if the game is finished
            checkGameFinish();
        });





    }

    //Return the dropElement
    return dropElement
}
//This function is check the game if it is finished.
function checkGameFinish()
{
    console.log("correctCount "+ correctCount);
    if(correctCount == dragData.length)
    {
        console.log("win");
        document.body.style.backgroundColor = 'blue';
        document.body.style.opacity = 0;
        document.body.style.opacity = 1;
        document.body.style.transition = "all 1s";
    }
}
