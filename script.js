const buttonSelector = document.querySelector('.button-selector');
const optionContainer = document.querySelector('.option-container');
const simbolInButton = buttonSelector.children[1];
const itemsList = Array.from(optionContainer.children)

buttonSelector.addEventListener('click', () => {
    simbolInButton.innerHTML = simbolInButton.innerHTML === "▼" ? "▲" : "▼";
    optionContainer.style.display = optionContainer.style.display === 'flex' ? 'none' : 'flex';
});

itemsList.forEach(element => {
    element.addEventListener('click', (e) => {
        const proximoFilho = e.target.children[0];
        if(proximoFilho.innerHTML !== '✓'){
            itemsList.forEach(child => {
                child.children[0].innerHTML = '';
            });
            if(proximoFilho && proximoFilho.tagName.toLowerCase() === 'span') {
                proximoFilho.innerHTML = '&#10003;';
            }
            buttonSelector.children[0].innerHTML = e.target.innerHTML.replace('✓', '')
        } else {
            proximoFilho.innerHTML = '';
            buttonSelector.children[0].innerHTML = 'Select an Item'
        }
        optionContainer.style.display = optionContainer.style.display === 'flex' ? 'none' : 'flex';
    });
});