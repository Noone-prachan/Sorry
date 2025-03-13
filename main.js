 window.addEventListener('scroll', () => {
            const elements = document.querySelectorAll('.photo, .message');
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.8) {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }
            });
        });

        // Add background music
        const audio = new Audio('love_song.mp3');
        window.onload = () => {
            audio.play().catch(() => {
                // Handle autoplay restrictions
                const playButton = document.createElement('button');
                playButton.textContent = 'Play Music';
                document.body.appendChild(playButton);
                playButton.addEventListener('click', () => audio.play());
            });
        };
