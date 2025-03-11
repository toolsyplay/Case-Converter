function convertText(caseType) {
    const inputText = document.getElementById('inputText').value.trim();
    const resultContainer = document.getElementById('result');
    
    if (!inputText) {
        resultContainer.innerHTML = 'Please enter some text!';
        resultContainer.classList.add('show');
        return;
    }

    let result = '';
    
    switch (caseType) {
        case 'uppercase':
            result = inputText.toUpperCase();
            break;
        case 'lowercase':
            result = inputText.toLowerCase();
            break;
        case 'camel':
            result = inputText
                .split(/\s+/)
                .map((word, index) => 
                    index === 0 
                        ? word.toLowerCase()
                        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join('');
            break;
        case 'pascal':
            result = inputText
                .split(/\s+/)
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join('');
            break;
        case 'snake':
            result = inputText
                .split(/\s+/)
                .map(word => word.toLowerCase())
                .join('_');
            break;
        case 'kebab':
            result = inputText
                .split(/\s+/)
                .map(word => word.toLowerCase())
                .join('-');
            break;
    }

    resultContainer.innerHTML = result;
    resultContainer.classList.add('show');
}

// Add enter key support
document.getElementById('inputText').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        convertText('uppercase'); // Default conversion on Enter
    }
});
