console.log("script started");

//Variable to track the number of clicks 
let clicks = 0;

//variable to store the click display h1
let clickDisplay = document.getElementById("click-display")

//set initial text
clickDisplay.innerText = "Clicks: " + clicks; 

//called when the potato is clicked 
function handleClick() {
    console.log("click");

    // Add one to click count
    click = click + 1;

    //update display
    clickDisplay.innerText = "clicks: " + clicks;
}