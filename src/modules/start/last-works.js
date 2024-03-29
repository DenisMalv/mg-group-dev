import refs from './refs'

import { building,warehouse,drilling,concreteWorks } from '../../data/imgData';
import { createSlides } from '../common/swiper';

const {lastWorksForm,swiperWrapper} = refs

const tabsArray = Array.from(lastWorksForm.elements)

let activeTab = {tab:''}

const onChangeTab = (e) => {
//    console.log("activeTab",activeTab.tab)
//    console.log("e.target",e.target)
   
    if(e.target === lastWorksForm || e.target.nodeName === 'LABEL'){
        return
    }
    if(e.target.id === activeTab.tab){
        e.target.checked = true
        return
    }
    swiperWrapper.classList.add('hide')
    tabsArray.forEach(el=>el === e.target ? el.checked = true : el.checked = false)

    createSlides(e.target.id,e)
    
    activeTab.tab = e.target.id
    
    setTimeout(()=>{
        swiperWrapper.classList.remove('hide')
    },300)
}



lastWorksForm.addEventListener('click',onChangeTab)









// console.dir(arr)
// console.dir(lastWorksForm)

// {/* <img src="assets/img/start\/last-works/building/1.webp" alt=""> */}

// const a = document.getElementById('test')

// console.log(a)

// // Створюємо новий тег <img>
// var img = document.createElement('img');

// // Встановлюємо атрибут src для зображення
// img.src = 'assets/img/start/last-works/building/1.webp';

// // Встановлюємо атрибут alt для опису зображення
// img.alt = 'Опис зображення';

// a.appendChild(img);