const text = "Hello, How are you?";

let index = 0;

function writeText() {
    document.body.innerText = text.slice(0, index);

    index++;

    if (index > text.length - 1) {
        index = 0;
    } 
}

setInterval(writeText, 200);

// challenges
// have to scroll down webpage to see is not directly on landing page
// does not show question mark