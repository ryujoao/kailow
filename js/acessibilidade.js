document.addEventListener('DOMContentLoaded', function() {
    // Toggle de alto contraste
    const contrastToggle = document.getElementById('contrast-toggle');
    contrastToggle.addEventListener('click', function() {
        const pressed = this.getAttribute('aria-pressed') === 'true';
        this.setAttribute('aria-pressed', String(!pressed));
        document.body.classList.toggle('high-contrast');
        
        // Salva preferência no localStorage
        localStorage.setItem('highContrast', !pressed);
    });

    // Toggle de tamanho de texto
    const textSizeToggle = document.getElementById('text-size-toggle');
    textSizeToggle.addEventListener('click', function() {
        const pressed = this.getAttribute('aria-pressed') === 'true';
        this.setAttribute('aria-pressed', String(!pressed));
        document.body.classList.toggle('big-text');
        
        // Salva preferência no localStorage
        localStorage.setItem('bigText', !pressed);
    });

    // Toggle de escala de cinza
    const grayscaleToggle = document.getElementById('grayscale-toggle');
    grayscaleToggle.addEventListener('click', function() {
        const pressed = this.getAttribute('aria-pressed') === 'true';
        this.setAttribute('aria-pressed', String(!pressed));
        document.body.classList.toggle('grayscale');
        
        // Salva preferência no localStorage
        localStorage.setItem('grayscale', !pressed);
    });

    // Botão de ler página (simulação)
    const readPageBtn = document.getElementById('read-page');
    readPageBtn.addEventListener('click', function() {
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance();
            speech.text = document.body.innerText;
            speech.lang = 'pt-BR';
            window.speechSynthesis.speak(speech);
        } else {
            alert('Seu navegador não suporta a API de síntese de voz.');
        }
    });

    // Verifica preferências salvas
    if (localStorage.getItem('highContrast') === 'true') {
        document.body.classList.add('high-contrast');
        contrastToggle.setAttribute('aria-pressed', 'true');
    }
    
    if (localStorage.getItem('bigText') === 'true') {
        document.body.classList.add('big-text');
        textSizeToggle.setAttribute('aria-pressed', 'true');
    }
    
    if (localStorage.getItem('grayscale') === 'true') {
        document.body.classList.add('grayscale');
        grayscaleToggle.setAttribute('aria-pressed', 'true');
    }
});