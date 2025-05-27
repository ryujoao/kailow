document.addEventListener('DOMContentLoaded', function() {
    // Elementos do dropdown
    const toggleBtn = document.getElementById('accessibility-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');
    
    // Botões de funcionalidades
    const contrastBtn = document.getElementById('contrast-btn');
    const fontIncrease = document.getElementById('font-increase');
    const fontDecrease = document.getElementById('font-decrease');
    const resetFont = document.getElementById('reset-font');
    
    // Toggle do dropdown
    toggleBtn.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        dropdownMenu.classList.toggle('show');
    });
    
    // Fechar dropdown ao clicar fora
    document.addEventListener('click', function(event) {
        if (!toggleBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            toggleBtn.setAttribute('aria-expanded', 'false');
            dropdownMenu.classList.remove('show');
        }
    });
    
    // Botão de contraste
    contrastBtn.addEventListener('click', toggleContrast);
    
    // Botões de tamanho de fonte
    fontIncrease.addEventListener('click', increaseFont);
    fontDecrease.addEventListener('click', decreaseFont);
    resetFont.addEventListener('click', resetFontSize);
    
    // Verificar preferências salvas
    checkSavedPreferences();
});

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
    
    // Salvar preferência
    const isHighContrast = document.body.classList.contains('high-contrast');
    localStorage.setItem('highContrast', isHighContrast);
    
    // Fechar dropdown após seleção (opcional)
    document.getElementById('dropdown-menu').classList.remove('show');
    document.getElementById('accessibility-toggle').setAttribute('aria-expanded', 'false');
}

function increaseFont() {
    const currentSize = getCurrentFontSize();
    let newSize;
    
    if (currentSize < 16) newSize = 'medium';
    else if (currentSize < 18) newSize = 'large';
    else newSize = 'xlarge';
    
    setFontSize(newSize);
}

function decreaseFont() {
    const currentSize = getCurrentFontSize();
    let newSize;
    
    if (currentSize > 18) newSize = 'large';
    else if (currentSize > 16) newSize = 'medium';
    else newSize = 'small';
    
    setFontSize(newSize);
}

function resetFontSize() {
    document.body.classList.remove('font-small', 'font-medium', 'font-large', 'font-xlarge');
    localStorage.removeItem('fontSize');
}

function getCurrentFontSize() {
    if (document.body.classList.contains('font-small')) return 14;
    if (document.body.classList.contains('font-medium')) return 16;
    if (document.body.classList.contains('font-large')) return 18;
    if (document.body.classList.contains('font-xlarge')) return 20;
    return 16; // Padrão
}

function setFontSize(size) {
    // Remove todas as classes de tamanho
    document.body.classList.remove('font-small', 'font-medium', 'font-large', 'font-xlarge');
    
    // Adiciona a classe apropriada
    if (size === 'small') document.body.classList.add('font-small');
    else if (size === 'medium') document.body.classList.add('font-medium');
    else if (size === 'large') document.body.classList.add('font-large');
    else if (size === 'xlarge') document.body.classList.add('font-xlarge');
    
    // Salva a preferência
    localStorage.setItem('fontSize', size);
}

function checkSavedPreferences() {
    // Verificar contraste
    if (localStorage.getItem('highContrast') === 'true') {
        document.body.classList.add('high-contrast');
    }
    
    // Verificar tamanho da fonte
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        setFontSize(savedFontSize);
    }
}