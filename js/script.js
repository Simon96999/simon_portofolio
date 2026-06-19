// ========================================
        // GENERATE BINTANG DIAM (200 buah)
        // ========================================
        (function createStars() {
            const bg = document.getElementById('starBg');
            if (!bg) return;

            for (let i = 0; i < 200; i++) {
                const star = document.createElement('div');
                star.classList.add('star-dot');
                const size = 1 + Math.random() * 3;
                star.style.width = size + 'px';
                star.style.height = size + 'px';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.setProperty('--dur', (2 + Math.random() * 5) + 's');
                star.style.animationDelay = (Math.random() * 6) + 's';
                star.style.opacity = 0.15 + Math.random() * 0.7;
                bg.appendChild(star);
            }
        })();

        // ========================================
        // GENERATE BINTANG JATUH - 10 EKOR
        // ========================================
        (function createShootingStars10() {
            const bg = document.getElementById('starBg');
            if (!bg) return;

            for (let i = 0; i < 10; i++) {
                const star = document.createElement('div');
                star.classList.add('shooting-star-10');

                star.style.left = (5 + Math.random() * 85) + '%';
                star.style.top = (1 + Math.random() * 25) + '%';

                const size = 2 + Math.random() * 2;
                star.style.width = size + 'px';
                star.style.height = size + 'px';

                const duration = 2.5 + Math.random() * 1;
                star.style.animation = `shootStar10 ${duration}s linear infinite`;
                star.style.animationDelay = (i * 0.8 + Math.random() * 0.4) + 's';

                const hue = 210 + Math.random() * 30;
                star.style.background = `radial-gradient(circle, white, hsl(${hue}, 80%, 70%))`;
                star.style.boxShadow = `0 0 25px 5px hsla(${hue}, 80%, 60%, 0.3)`;

                bg.appendChild(star);
            }
        })();

        // ========================================
        // AOS INITIALIZATION
        // ========================================
        AOS.init({
            duration: 700,
            once: false,
            offset: 60,
            mirror: true
        });

        // ========================================
        // CONTACT FORM HANDLER
        // ========================================
        const form = document.getElementById('contactForm');
        const feedback = document.getElementById('formFeedback');

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const nama = document.getElementById('nama').value.trim();
                const email = document.getElementById('email').value.trim();
                const pesan = document.getElementById('pesan').value.trim();

                if (!nama || !email || !pesan) {
                    feedback.innerHTML = '<span class="text-danger">⚠️ Semua bidang harus diisi!</span>';
                    return;
                }
                if (!email.includes('@')) {
                    feedback.innerHTML = '<span class="text-danger">📡 Email tidak valid.</span>';
                    return;
                }
                feedback.innerHTML = '<span class="text-success">✅ Pesan terkirim! Saya akan menghubungi Anda.</span>';
                form.reset();
                setTimeout(() => {
                    if (feedback) feedback.innerHTML = '';
                }, 4000);
            });
        }

        // ========================================
        // ACTIVE NAV LINK ON SCROLL
        // ========================================
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        if (sections.length && navLinks.length) {
            window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 100;
                    if (window.scrollY >= sectionTop) {
                        current = section.getAttribute('id');
                    }
                });
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    const href = link.getAttribute('href');
                    if (href === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            });
        }