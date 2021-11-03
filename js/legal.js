/*This function will call from the start game.
    - The function call displayLegal which the purpose to display the 
    - legal page. 
    - It has the Navigation to to Home page.
    - Create the table to display legal session
    - createTable function by passing the legalData to the UI to display the data  
*/
window.displayLegal = function () {
    
    //clear html file
    document.body.innerHTML = "";
    //Create the wrapper
    var wrapper = createDiv();
    //add a css class wrapper
    wrapper.classList.add("wrapper");

    var topNavigation = createDiv();
    //add a css class wrapper
    topNavigation.classList.add("Navigation");

    //Create Button element
    var home = createButton("Home");
    topNavigation.appendChild(home);

    //When the play button click, it displays menu page
    home.onclick = displayHomePage;

    //Create Heading logo, assign the text menu, assign to wrapper
    var heading = createParagraph(" All materials I have used that has legal rights to use for commercial.");
    heading.style.textAlign = "center";


    //create the table to display the table
    var tableElement = createTable(legalData);

    //wrapper append child
    wrapper.appendChild(topNavigation);
    wrapper.appendChild(heading);
    wrapper.appendChild(tableElement);
}