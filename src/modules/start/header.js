import refs from './refs'

const {header, headerNav, burgerModal, burgerList, headerBurgerBtn} = refs

const BURGER_MODAL_ACTIVE = 'burger-modal-active'
const SHOW = 'burger-show'

let timeoutId =[]

const clickInOrOutsideBurger =(e)=>{

    if(e.target === header || headerNav.contains(e.target) || e.target === burgerList){
        console.log('header')
        return
    }
    
    if(burgerList.contains(e.target) && e.target.nodeName === 'A'){
        console.log('contain')
        closeBurgerMenu()
    }else{
        closeBurgerMenu()
    }
}
const closeBurgerMenu = ()=>{
    console.log('burger hide')
    burgerModal.classList.remove(BURGER_MODAL_ACTIVE)
    burgerList.classList.remove(SHOW)
    burgerListAnimationToggle(burgerList)
    document.removeEventListener('click',clickInOrOutsideBurger)
}

const openBurgerMenu = ()=>{
    console.log('burger show')
    burgerModal.classList.add(BURGER_MODAL_ACTIVE)
    burgerList.classList.add(SHOW)
    
    burgerListAnimationToggle(burgerList)
    
    document.addEventListener('click',clickInOrOutsideBurger)
   
}

const toggleBurgerMenu = ()=>{
    if(!burgerModal.classList.contains(BURGER_MODAL_ACTIVE)){
        openBurgerMenu()
    }else{
        closeBurgerMenu()
    }
}

const burgerListAnimationToggle = (list)=>{
    timeoutId = []
    const childrensArray = Array.from(list.children).reverse()

    for(let i = 0; i<childrensArray.length; i+=1){
       const id = setTimeout(()=>childrensArray[i].classList.toggle('item-show'),150+i*50)
       timeoutId.push(id)
    }
}

const clearTimeoutIdOnDblClick = ()=>{
    console.log(timeoutId)
    clearTimeout(timeoutId)
    timeoutId = []
}



headerBurgerBtn.addEventListener('click', toggleBurgerMenu)
headerBurgerBtn.addEventListener('dblclick',clearTimeoutIdOnDblClick)
