const menuBtn = document.getElementById('menuBtn');
        const sidebar = document.getElementById('sidebar');
        const closeSidebar = document.getElementById('closeSidebar');
        const overlay = document.getElementById('overlay');
        const mainContent = document.getElementById('mainContent');
        const sidebarToggle = document.getElementById('sidebarToggle');
        const toggleIcon = document.getElementById('toggleIcon');

        // Mobile menu toggle
        menuBtn.addEventListener('click', () => {
            sidebar.classList.add('open');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeSidebar.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Desktop sidebar toggle
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('sidebar-collapsed');
            
            // Change icon
            if (sidebar.classList.contains('collapsed')) {
                toggleIcon.textContent = '›';
            } else {
                toggleIcon.textContent = '‹';
            }
        });

        // Category tabs
        const categoryTabs = document.querySelectorAll('.category-tab');
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });

        // Banner dots
        const bannerDots = document.querySelectorAll('.banner-dot');
        let currentSlide = 0;

        bannerDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                bannerDots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
                currentSlide = index;
            });
        });

        // Auto-slide
        setInterval(() => {
            currentSlide = (currentSlide + 1) % bannerDots.length;
            bannerDots.forEach((d, i) => {
                d.classList.toggle('active', i === currentSlide);
            });
        }, 5000);

        // Nav items
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                navItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                
                // Close mobile menu
                if (window.innerWidth <= 1024) {
                    sidebar.classList.remove('open');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
		  
// Swiper slider initialization
const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 800,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: 'slide',
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 30
        }
    }
});

// Lottery Timer
function updateLotteryTimer() {
    const endDate = new Date('2025-10-10T23:59:59').getTime();
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            clearInterval(timer);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const timerBlocks = document.querySelectorAll('.timer-number');
        if (timerBlocks.length >= 4) {
            timerBlocks[0].textContent = String(days).padStart(2, '0');
            timerBlocks[1].textContent = String(hours).padStart(2, '0');
            timerBlocks[2].textContent = String(minutes).padStart(2, '0');
            timerBlocks[3].textContent = String(seconds).padStart(2, '0');
        }
    }, 1000);
}

// Запустите таймер
updateLotteryTimer();


// Открытие бокового меню с мобильной навигации
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sidebar.classList.add('open');
            overlay.classList.add('active');
        });
    }
});