document.addEventListener('DOMContentLoaded', function() {
    // Анімація тексту в терміналі
    const terminalText = document.getElementById('terminal-text');
    if (terminalText) {
        const messages = [
            "cd /home/user/requnex/website",
            "ls -la",
            "cat page.html",
            "Error: File not found",
            "find / -name 'page.html'",
            "No results found",
            "echo 'Error 404: Page not found'",
            "sudo reboot system",
            "Access denied",
            "exit"
        ];
        
        let messageIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        let deletingSpeed = 50;
        let pauseBeforeDelete = 1000;
        let pauseBeforeNextMessage = 500;
        
        function typeText() {
            const currentMessage = messages[messageIndex];
            
            if (isDeleting) {
                // Видалення тексту
                terminalText.textContent = currentMessage.substring(0, charIndex - 1);
                charIndex--;
                
                if (charIndex === 0) {
                    isDeleting = false;
                    messageIndex = (messageIndex + 1) % messages.length;
                    setTimeout(typeText, pauseBeforeNextMessage);
                } else {
                    setTimeout(typeText, deletingSpeed);
                }
            } else {
                // Друкування тексту
                terminalText.textContent = currentMessage.substring(0, charIndex + 1);
                charIndex++;
                
                if (charIndex === currentMessage.length) {
                    isDeleting = true;
                    setTimeout(typeText, pauseBeforeDelete);
                } else {
                    setTimeout(typeText, typingSpeed);
                }
            }
        }
        
        // Запуск анімації
        setTimeout(typeText, 1000);
    }
    
    // Додаткова анімація для плаваючих елементів
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach(element => {
        // Випадкова початкова позиція
        const randomX = Math.random() * 80 + 10; // від 10% до 90%
        const randomY = Math.random() * 80 + 10; // від 10% до 90%
        
        element.style.left = `${randomX}%`;
        element.style.top = `${randomY}%`;
    });
});