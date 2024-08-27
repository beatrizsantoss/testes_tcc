// script.js
document.addEventListener('DOMContentLoaded', () => {
    function animateNumber(id, start, end, duration) {
        const numberElement = document.getElementById(id);
        let count = start;
        const interval = 50; // Atualiza a cada 50 milissegundos
        const steps = Math.floor(duration / interval);
        const stepValue = (end - start) / steps;

        function updateNumber() {
            count += stepValue;
            if (count >= end) {
                count = end;
                clearInterval(intervalId);
            }
            numberElement.textContent = Math.floor(count).toString().padStart(2, '0');
        }

        const intervalId = setInterval(updateNumber, interval);
    }

    // Exemplo de animação para diferentes elementos
    animateNumber('number1', 0, 100, 7000); // 7 segundos para ir de 00 a 100:00
    animateNumber('number2', 0, 100, 7000); // 7 segundos para ir de 00:00 a 100:00
    animateNumber('number3', 0, 100, 7000); // 7 segundos para ir de 00:00 a 100:00
});
