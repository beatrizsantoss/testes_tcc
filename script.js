let fontSize = 16;

document.getElementById('increaseFont').addEventListener('click', () => {
    fontSize += 2; // Aumenta o tamanho da fonte
    document.body.style.fontSize = fontSize + 'px';
});

document.getElementById('decreaseFont').addEventListener('click', () => {
    if (fontSize > 10) { // Limita o tamanho mínimo
        fontSize -= 2; // Diminui o tamanho da fonte
        document.body.style.fontSize = fontSize + 'px';
    }
});

document.getElementById('toggleMode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // Alterna a classe dark-mode
    const modeButton = document.getElementById('toggleMode');
    const img = modeButton.querySelector('img');
    
    // Altera o texto alternativo e a imagem do botão
    if (img.alt === 'Modo Escuro') {
        img.alt = 'Modo Claro';
        img.src = 'img/acessibilidade/contraste.png'; // Troque para o ícone do modo claro
    } else {
        img.alt = 'Modo Escuro';
        img.src = 'img/acessibilidade/contraste.png'; // Troque para o ícone do modo escuro
    }
});
