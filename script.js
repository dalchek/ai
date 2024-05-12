const generateTextBtn = document.getElementById('generateTextBtn');
const generateBtn = document.getElementById('generateBtn');
const resultText = document.getElementById('resultText');
const fieldBcg = document.getElementById('fieldBcg');


function generate(){
    // function to change background color
    fieldBcg.style.backgroundColor = 'lightblue';
    resultText.innerText = "You have changed the background color"
}

function generateText() {
    //function to generate text within paragraph
    resultText.innerText = "You generate warning message"
}


// add event listeners
generateBtn.addEventListener('click', generate);
generateTextBtn.addEventListener('click', generateText)

document.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        resultText.innerText = "You pressed enter and change background color to green";
        fieldBcg.style.backgroundColor = 'aquamarine';
    } else if (e.key === ' ') {
        // Reset background color to default
        fieldBcg.style.backgroundColor = 'rgb(243, 244, 246)'
        resultText.innerText = 'You have successfully reset your color'
    } else {
        resultText.innerText = "Please press enter"
        fieldBcg.style.backgroundColor = 'seashell';

    }
})
