let rocketCursor = document.getElementById('rocket-cursor');

// Log a message to ensure the script is running
console.log("Script is running");

// Add an event listener for mouse movements
document.addEventListener('mousemove', function(e) {
    moveCursor(e);
});

// Function to move the rocket image to the cursor's position
function moveCursor(e) {
    var x = e.pageX;
    var y = e.pageY;

    rocketCursor.style.left = x + "px";
    rocketCursor.style.top = y + "px";

    // Log the cursor's position for debugging
    console.log("Cursor position: ", x, y);
}
