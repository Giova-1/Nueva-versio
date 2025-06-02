/**
 * Language Selector
 * Handles the language selection functionality
 */

// Selector de idioma
class LanguageSelector {
    constructor() {
        this.selector = document.querySelector('.language-selector');
        this.currentLang = this.selector?.querySelector('.current-lang');
        this.dropdown = this.selector?.querySelector('.lang-dropdown');
        this.options = this.selector?.querySelectorAll('.lang-option');

        if (!this.selector || !this.currentLang || !this.dropdown || !this.options.length) {
            console.error('LanguageSelector: Required elements not found', {
                selector: this.selector,
                currentLang: this.currentLang,
                dropdown: this.dropdown,
                options: this.options
            });
            return;
        }

        console.log('LanguageSelector inicializado:', {
            selector: this.selector,
            currentLang: this.currentLang,
            dropdown: this.dropdown,
            options: this.options
        });

        this.init();
    }

    init() {
        // Evento para el botón principal
        this.selector.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Click en selector de idioma');
            this.toggleDropdown();
        });

        // Evento para las opciones de idioma
        this.options.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const lang = option.dataset.lang;
                console.log('Opción de idioma seleccionada:', lang);
                if (lang) {
                    this.changeLanguage(lang);
                }
            });
        });

        // Cerrar el dropdown al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!this.selector.contains(e.target)) {
                this.dropdown.hidden = true;
            }
        });

        // Escuchar cambios de idioma
        document.addEventListener('i18n:changed', (e) => {
            this.updateState(e.detail.language);
        });

        // Inicializar el estado actual
        this.updateState();
    }

    toggleDropdown() {
        console.log('Toggle dropdown:', !this.dropdown.hidden);
        this.dropdown.hidden = !this.dropdown.hidden;
    }

    changeLanguage(lang) {
        if (!lang) return;

        console.log('Cambiando idioma a:', lang);

        // Actualizar el texto del idioma actual
        const currentLangSpan = this.currentLang.querySelector('span');
        if (currentLangSpan) {
            currentLangSpan.textContent = lang.toUpperCase();
        }
        
        // Guardar la preferencia en localStorage
        localStorage.setItem('preferred_language', lang);
        
        // Cambiar el idioma en i18n
        if (window.i18n) {
            window.i18n.changeLanguage(lang);
        }
        
        // Cerrar el dropdown
        this.dropdown.hidden = true;
    }

    updateState(lang = null) {
        const currentLang = lang || localStorage.getItem('preferred_language') || 'es';
        console.log('Actualizando estado con idioma:', currentLang);
        const currentLangSpan = this.currentLang.querySelector('span');
        if (currentLangSpan) {
            currentLangSpan.textContent = currentLang.toUpperCase();
        }

        // Actualizar estado de las opciones
        this.options.forEach(option => {
            const optionLang = option.dataset.lang;
            option.setAttribute('aria-checked', optionLang === currentLang);
        });
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('Inicializando LanguageSelector');
    window.languageSelector = new LanguageSelector();
});
