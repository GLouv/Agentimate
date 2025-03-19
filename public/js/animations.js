const animations = {
    floatEffect: (card) => {
        const dots = card.querySelectorAll('.shape-dot');
        dots.forEach((dot, i) => {
            anime({
                targets: dot,
                translateX: () => anime.random(-50, 50),
                translateY: () => anime.random(-50, 50),
                scale: [1, 1.2],
                opacity: [0.6, 1],
                duration: 3000,
                delay: i * 200,
                loop: true,
                direction: 'alternate',
                easing: 'easeInOutQuad'
            });
        });
    },

    magneticPull: (card) => {
        const field = card.querySelector('.magnetic-field');
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            anime({
                targets: field,
                background: `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2) 0%, transparent 70%)`,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    },

    particleField: (card) => {
        const container = card.querySelector('.particles');
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            container.appendChild(particle);
            
            anime({
                targets: particle,
                translateX: () => anime.random(-100, 100),
                translateY: () => anime.random(-100, 100),
                scale: [0, 1],
                opacity: [0, 0.8],
                duration: () => anime.random(1000, 3000),
                delay: anime.random(0, 1000),
                loop: true,
                direction: 'alternate',
                easing: 'easeInOutQuad'
            });
        }
    },

    rippleEffect: (card) => {
        const container = card.querySelector('.ripple-container');
        card.addEventListener('mousemove', (e) => {
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            container.appendChild(ripple);
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            anime({
                targets: ripple,
                scale: [0, 3],
                opacity: [1, 0],
                duration: 1000,
                easing: 'easeOutQuad',
                complete: () => ripple.remove()
            });
        });
    },

    morphing: (card) => {
        const shape = card.querySelector('.morph-shape');
        anime({
            targets: shape,
            borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '50% 50% 50% 50%'],
            scale: [1, 1.1],
            duration: 3000,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutQuad'
        });
    },

    gravitateOrbit: (card) => {
        const dots = card.querySelectorAll('.orbit-dot');
        dots.forEach((dot, i) => {
            anime({
                targets: dot,
                rotate: [i * 120, i * 120 + 360],
                translateX: () => anime.random(30, 50),
                translateY: () => anime.random(-20, 20),
                duration: 4000,
                loop: true,
                easing: 'linear'
            });
        });
    },

    wavyText: (card) => {
        const text = card.querySelector('.wavy-text');
        const content = text.textContent;
        text.innerHTML = '';
        [...content].forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char;
            text.appendChild(span);
            
            anime({
                targets: span,
                translateY: [-15, 15],
                duration: 1000,
                delay: i * 100,
                loop: true,
                direction: 'alternate',
                easing: 'easeInOutSine'
            });
        });
    },

    glowPulse: (card) => {
        const container = card.querySelector('.glow-container');
        anime({
            targets: container,
            opacity: [0.3, 0.8],
            scale: [1, 1.2],
            duration: 1500,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutQuad'
        });
    },

    neonTrail: (card) => {
        const trail = card.querySelector('.neon-trail');
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            anime({
                targets: trail,
                left: x,
                top: y,
                opacity: [1, 0],
                duration: 1000,
                easing: 'easeOutExpo'
            });
        });
    },

    liquidBubble: (card) => {
        const bubble = card.querySelector('.liquid-bubble');
        anime({
            targets: bubble,
            background: [
                'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 70%)',
                'radial-gradient(circle at 70% 70%, rgba(255,255,255,0.2) 0%, transparent 70%)'
            ],
            duration: 3000,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutQuad'
        });
    },

    magneticGrid: (card) => {
        const grid = card.querySelector('.magnetic-grid');
        for (let i = 0; i < 16; i++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            grid.appendChild(cell);
        }
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            grid.querySelectorAll('.grid-cell').forEach(cell => {
                const cellRect = cell.getBoundingClientRect();
                const cellX = cellRect.left + cellRect.width / 2 - rect.left;
                const cellY = cellRect.top + cellRect.height / 2 - rect.top;
                
                const distance = Math.sqrt(Math.pow(x - cellX, 2) + Math.pow(y - cellY, 2));
                const scale = Math.max(0, (150 - distance) / 150);
                
                anime({
                    targets: cell,
                    scale: 1 + scale * 0.3,
                    opacity: 0.3 + scale * 0.7,
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            });
        });
    },

    energyField: (card) => {
        const field = card.querySelector('.energy-field');
        anime({
            targets: field,
            background: [
                'radial-gradient(circle, var(--gradient-start) 0%, transparent 50%)',
                'radial-gradient(circle, var(--gradient-end) 0%, transparent 50%)'
            ],
            scale: [0.8, 1.2],
            opacity: [0.3, 0.7],
            duration: 2000,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutQuad'
        });
    }
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.animation-card');
    cards.forEach(card => {
        const type = card.dataset.type;
        if (animations[type]) {
            animations[type](card);
        }
    });
}); 