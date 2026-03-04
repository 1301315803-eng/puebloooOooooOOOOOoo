console.log("script started");

//Variable to track the number of clicks 
let clicks = 0;

//variable to track the number of the levels 
let clickValue = 1;

//variable to store the click display h1
let clickDisplay = document.getElementById("click-display")

//variable to store the click display h1 element
let levelDisplay = document.getElementById("level-display");

//set initial text
clickDisplay.innerText = "Clicks: " + clicks; 

//set the initial text for level


//called when the potato is clicked 
function handleClick() {
    console.log("click");

    // Add one to click count
    clicks = clicks + clickValue;

    //update display
    clickDisplay.innerText = "Clicks: " + clicks;

    if (clicks == 10) {
        alert("pop-up alert!");
       
    }

    if (clicks >=10) {
        clickValue = 2;
        levelDisplay.innerText = "leve: 2";
    }
}
    if (clicks == 50) {
        alert("congrats we're on level 3");
        levelDisplay.innerText = "level 3";
        clickValue = 5; 
    }