import Swiper from 'swiper/bundle';


const options = {
    slidesPerView: 1,
    loop: false,
    effect: "fade",
    preloadSlides: 1,
    lazy:true,
    lazyPreloadPrevNext:1,
    init:false,
    slideToClickedSlide: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: false,
      renderBullet: function (index, className) {
        return `<span class="${className} margin-0">${index}</span>`;
      },
  },
  on: {
    
    slideNextTransitionStart: function () {
        let multiple = 1

        // розрахунок руху на 1 чи на 2 клітинки від першого елементу пагінації при кліку на 3 4 5 елементи. приклад 10 слайдів перехід з 0 перехід на 1,2.
        if(swiper.activeIndex - swiper.previousIndex >1){
            //якщо наступний елемент 3 то рух на 1 елемент вліво. приклад 10 слайдів перехід з 0 перехід на 3.
            if(swiper.activeIndex === 3){
                multiple = 1
            }else{
                // в іншому випадку на 2. приклад 10 слайдів перехід з 0 перехід на 4.
                multiple = 2
            }
        }
        
        // блок руку 123 та останніх двох елементів пагінації 
        if(
            swiper.activeIndex === 0 || 
            swiper.activeIndex === 1 || 
            swiper.activeIndex === 2 ||
            swiper.activeIndex === swiper.slides.length -1 ||
            swiper.activeIndex === swiper.slides.length -2 
        )
        {
            // правильний рух 3 елемента ззаду при кліку на передостанній елемент інакше блоку руху елемента приклад 10 слайдів з 7 перехід на 9
            if(swiper.activeIndex === swiper.slides.length -2 && swiper.previousIndex === swiper.slides.length -4){
                multiple = 1
            }else{
                return
            }
        }

        const pagination = document.querySelector('.swiper-pagination');
        const currentPosition = parseInt(pagination.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
        pagination.style.transform = 'translateX(' + (currentPosition - 72*multiple) + 'px)';
      },

    slidePrevTransitionStart: function (e) {
        let multiple = 1

        // розрахунок руху на 1 чи на 2 клітинки від першого елементу пагінації при кліку на 3 4 5 елементи зворотній відлік. приклад 10 слайдів перехід з 10 перехід на 9 8.
        if(swiper.previousIndex - swiper.activeIndex >1){
            //якщо наступний елемент 4 то рух на 1 елемент вліво. приклад 10 слайдів перехід з 10 перехід на 7.
            if(swiper.activeIndex === swiper.slides.length -4){
                multiple = 1
            }else{
                // в іншому випадку на 2 елемента влів. приклад 10 слайдів перехід з 10 перехід на 6.
                multiple = 2
            }
        }
        
        // блок руку 123 та останніх двох елементів пагінації відлік ззаду
        if(
            swiper.activeIndex === swiper.slides.length -3 ||
            swiper.activeIndex === swiper.slides.length -2 ||
            swiper.activeIndex === swiper.slides.length -1 ||
            swiper.activeIndex === 1 || 
            swiper.activeIndex === 0 
        )
        {
            // правильний рух 3 елемента при кліку на передостанній елемент інакше блоку руху елемента приклад 10 слайдів з 3 перехід на 1
            if(swiper.activeIndex === 1 && swiper.previousIndex === 3){
                multiple = 1
            }else{
                return
            }
        }

        const pagination = document.querySelector('.swiper-pagination');
        const currentPosition = parseInt(pagination.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
        pagination.style.transform = 'translateX(' + (currentPosition + 72*multiple) + 'px)';
    },
  },
}

const swiper = new Swiper(".swiper-last-works", options)


async function initializeSwiper() {
    return swiper.init();
}


initializeSwiper()
