//Ensure the loadApp function loads when the window has loaded
window.onload = loadApp;
/*
    This function loads the app from the beginning.
    It is only ever called once.
*/
function loadApp() {

    //Call the display the play Home Page
    displayHomePage();
}
/*
    - This function display the Home Page
    - call: displayHomePage()
    - There is no need for parameter for that parameter
    - All element is in the div wrapper
    - Display the welcome text 
    - Display the logo image
    - Display the Navigation to the About page or to the Menu
    - Add the event to play button, When it clicked, it displays the legal page
    - Add the event to play button, When it clicked, it displays the displayGameLevelPage
    - There is no return value
*/
window.displayHomePage = function () {
    //clear screen
    document.body.innerHTML = "";
    //Create the wrapper
    var wrapper = createDiv();
    //add a css class wrapper
    wrapper.classList.add("wrapper");

    //Create Heading logo
    var logoName = createHeading1("ZBrain");
    var logoDetail = createParagraph("Maximise Your Cognitive Potential");
    //create div element for logo
    var containerLogo = createDiv(logoName, logoDetail);
    // add a CSS class class logo
    containerLogo.classList.add("logo");

    //Create the homeLogo session
    var divLogoImage = createDiv();
    //Add css class
    divLogoImage.classList.add("homeLogo");
    //Add the background image
    divLogoImage.style.backgroundImage = "url('images/homeLogo.jpg')";

    var containerPlayButton = createDiv();
    //add a css class wrapper
    containerPlayButton.classList.add("Navigation");

    //Create Button element
    var play = createButton("Play");
    var aboutButton = createButton("About");
    //When the play button click, it displays the legal page
    aboutButton.onclick = displayLegal;

    //Apnend the play and aboutButton to the containerPlayButton
    containerPlayButton.appendChild(play);
    containerPlayButton.appendChild(aboutButton);

    //When the play button click, it displays menu page
    play.onclick = displayGameLevelPage;
    
    //Assing containerLog and containerButton to the wrapper
    wrapper.appendChild(containerLogo);
    wrapper.appendChild(divLogoImage);
    wrapper.appendChild(containerPlayButton);
}



