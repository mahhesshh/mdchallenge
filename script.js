function sanitize(input) {
    const div = document.createElement('div');
    div.innerText = input; // Sanitize input
    return div.innerHTML;
}

function sanitizeAndDisplay() {
    const userInput = document.getElementById('userInput').value;
    const sanitizedInput = sanitize(userInput);

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = sanitizedInput;

    // Hidden behavior: if input contains encoded payload
    if (userInput.includes('%3Cscript%3Ealert(%22flag%22)%3C%2Fscript%3E')) {
        outputDiv.innerHTML += '<br><strong>Flag: THM{1_g0t_h4ck3d}</strong>';
    }
}