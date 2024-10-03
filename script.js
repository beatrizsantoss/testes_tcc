let fontSize = 16;

document.getElementById('increaseFont').addEventListener('click', () => {
    fontSize += 2;
    document.body.style.fontSize = fontSize + 'px';
});

document.getElementById('decreaseFont').addEventListener('click', () => {
    if (fontSize > 10) { // Limita o tamanho mínimo
        fontSize -= 2;
        document.body.style.fontSize = fontSize + 'px';
    }
});

document.getElementById('toggleMode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const modeButton = document.getElementById('toggleMode');
    modeButton.querySelector('img').alt = 
        modeButton.querySelector('img').alt === 'Modo Escuro' ? 'Modo Claro' : 'Modo Escuro';
});
