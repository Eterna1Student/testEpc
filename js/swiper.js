document.addEventListener('DOMContentLoaded', function() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const slides = document.querySelectorAll('.swiper-slide');
    const prevBtn = document.querySelector('.swiper-button-prev');
    const nextBtn = document.querySelector('.swiper-button-next');
    
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    
    swiperWrapper.appendChild(firstClone);
    swiperWrapper.insertBefore(lastClone, slides[0]);
    
    let currentIndex = 1;
    const slideCount = slides.length;
    let isTransitioning = false;
    
    swiperWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    function smoothTransition() {
        isTransitioning = true;
        swiperWrapper.style.transition = "transform 0.5s ease-in-out";
        
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }
    
    function updateSlider(direction) {
        if (isTransitioning) return;
        
        smoothTransition();
        
        if (direction === 'next') {
            currentIndex++;
        } else if (direction === 'prev') {
            currentIndex--;
        }
        
        swiperWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        setTimeout(() => {
            if (currentIndex === slideCount + 1) {
                currentIndex = 1;
                swiperWrapper.style.transition = 'none';
                swiperWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            } else if (currentIndex === 0) {
                currentIndex = slideCount;
                swiperWrapper.style.transition = 'none';
                swiperWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            }
        }, 500);
    }
    
    prevBtn.addEventListener('click', () => {
        updateSlider('prev');
    });
    
    nextBtn.addEventListener('click', () => {
        updateSlider('next');
    });
    
    const swiperContainer = document.querySelector('.swiper-container');
    let touchStartX = 0;
    let touchEndX = 0;
    
    swiperContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    swiperContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
        const difference = touchStartX - touchEndX;
        if (difference > 50) {
            updateSlider('next');
        } else if (difference < -50) {
            updateSlider('prev');
        }
    }
});