import Swiper from 'swiper/bundle';

import { building,warehouse,drilling,concreteWorks } from '../../data/imgData';
import refsCommon from './refsCommon';

const {swiperWrapper,pagination,swiperComponentWrapper} = refsCommon


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
        return `<span class="${className} margin-0">${index+1}</span>`;
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
            }else if(swiper.slides.length === 6 
                && ((swiper.activeIndex === swiper.slides.length -2 && swiper.previousIndex === 0)||(swiper.activeIndex === swiper.slides.length -2 && swiper.previousIndex === 1))
            ){
                multiple = 1
            }else{
                return
            }
        }

        // const pagination = document.querySelector('.swiper-pagination');
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
            }else if(swiper.slides.length === 6 
                && ((swiper.activeIndex === 1 && swiper.previousIndex === swiper.slides.length -1)||(swiper.activeIndex === 1 && swiper.previousIndex === swiper.slides.length -2))
            ){
                multiple = 1
            }else{
                return
            }
        }

        // const pagination = document.querySelector('.swiper-pagination');
        const currentPosition = parseInt(pagination.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
        pagination.style.transform = 'translateX(' + (currentPosition + 72*multiple) + 'px)';
    },
  },
}

let swiper 

async function initializeSwiper() {
    // return swiper.init();
    swiper  = new Swiper(".swiper-last-works", options).init();
    swiper.pagination.update()
    pagination.style.transform = 'translateX(' + 0 + 'px)';
}


const paginationLength = (arr) =>{
    if(arr.length === 4){
        swiperComponentWrapper.classList.add('four')
        swiperComponentWrapper.classList.remove('one','two','three')
        return
    }
    if(arr.length === 3){
        swiperComponentWrapper.classList.add('three')
        swiperComponentWrapper.classList.remove('one','two','four')
        return
    }
    if(arr.length === 2){
        swiperComponentWrapper.classList.add('two')
        swiperComponentWrapper.classList.remove('one','three','four')
        return
    }
    if(arr.length === 1){
        swiperComponentWrapper.classList.add('one')
        swiperComponentWrapper.classList.remove('two','three','four')
        return
    }
    swiperComponentWrapper.classList.remove('one','two','three','four')
}

const createSlide = (imageSrc,altText) =>{
    const slide = document.createElement('div');
    // Додаємо клас "swiper-slide" до створеного <div>
    slide.classList.add('swiper-slide');

    // Створюємо тег <img>
    const img = document.createElement('img');
    // Встановлюємо атрибут src для зображення
    img.src = imageSrc;
    // Встановлюємо атрибут alt для опису зображення
    img.alt = altText;

    // Додаємо тег <img> до створеного <div>
    slide.appendChild(img);

    return slide
}

export const createSlides = (name,e,)=>{
    let slidesArray = []

    if (swiper) {
        swiperWrapper.innerHTML=''
        swiper.destroy(true, true); // Сброс Swiper перед фильтрацией
    }

    if(name === 'all'){
        const buildingSlides = building.map(({id,alt}) => {
            return createSlide(`assets/img/start/last-works/building/${id}.webp`, alt)
        })
        const concreteWorksSlides = concreteWorks.map(({id,alt}) => {
            return createSlide(`assets/img/start/last-works/concrete-works/${id}.webp`, alt)
        })
        const drillingSlides = drilling.map(({id,alt}) => {
            return createSlide(`assets/img/start/last-works/drilling/${id}.webp`, alt)
        })
        const warehouseSlides = warehouse.map(({id,alt}) => {
            return createSlide(`assets/img/start/last-works/warehouse/${id}.webp`, alt)
        })
        slidesArray = [...buildingSlides,...concreteWorksSlides,...drillingSlides,...warehouseSlides]
    }
    if(name==='building'){
        slidesArray =  building.map(({id,alt}) => {
            return createSlide(`assets/img/start/last-works/building/${id}.webp`, alt)
        });
    }
    if(name==='concrete'){
        slidesArray =  concreteWorks.map(({id,alt}) => {
            return createSlide(`assets/img/start/last-works/concrete-works/${id}.webp`, alt)
        });
    }
    if(name==='drilling'){
        slidesArray =  drilling.map(({id,alt}) => {
            return createSlide(`assets/img/start/last-works/drilling/${id}.webp`, alt)
        });
    }
    if(name==='warehouse'){
        slidesArray =  warehouse.map(({id,alt}) => {
            return createSlide(`assets/img/start/last-works/warehouse/${id}.webp`, alt)
        });
    }
    paginationLength(slidesArray)
    slidesArray.forEach(slide => {
        swiperWrapper.appendChild(slide); // Додати слайд до swiper.wrapperEl
    })

    initializeSwiper()
}
console.dir(window.location)

if(window.location.pathname === '/' || window.location.pathname === '/index.html'){
    createSlides('all')
}
if(window.location.pathname === '/building.html' || window.location.pathname === 'mg-group-dev/building.html'){
    createSlides('building')
}
if(window.location.pathname === '/concrete_works.html' || window.location.pathname === 'mg-group-dev/concrete_works.html'){
    createSlides('concrete')
}
if(window.location.pathname === '/warehouse.html' || window.location.pathname === 'mg-group-dev/warehouse.html'){
    createSlides('warehouse')
}
if(window.location.pathname === '/drilling.html' || window.location.pathname === 'mg-group-dev/drilling.html'){
    createSlides('drilling')
}
