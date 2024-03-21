import refs from './refs'

const {header, headerNav, burgerModal, burgerList, headerBurgerBtn} = refs

const BURGER_MODAL_ACTIVE = 'burger-modal-active'
const SHOW = 'burger-show'
const BTN_HIDE = 'btn-hide'

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
const closeBurgerMenu = (resize)=>{
    console.log('burger hide')
    burgerModal.classList.remove(BURGER_MODAL_ACTIVE)
    burgerList.classList.remove(SHOW)
    burgerListAnimationToggle(burgerList)
    document.removeEventListener('click',clickInOrOutsideBurger)
    
    if(resize){
        headerBurgerBtn.children[0].classList.remove(BTN_HIDE)
        headerBurgerBtn.children[1].classList.add(BTN_HIDE)
        return
    }
    toggleBurgerIcon()
}

const openBurgerMenu = ()=>{
    console.log('burger show')
    burgerModal.classList.add(BURGER_MODAL_ACTIVE)
    burgerList.classList.add(SHOW)

    
    burgerListAnimationToggle(burgerList)
    toggleBurgerIcon()

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
        if(window.innerWidth >=768){
            return
        }
        
        const id = setTimeout(()=>childrensArray[i].classList.toggle('item-show'),150+i*50)
        timeoutId.push(id)
    }
}

const clearTimeoutIdOnDblClick = ()=>{
    console.log(timeoutId)
    clearTimeout(timeoutId)
    timeoutId = []
}

const burgerListAnimationHide = (e)=>{
    if(e.target.innerWidth <768){
        return
    }
    Array.from(burgerList.children).forEach(el=>el.classList.remove('item-show'))
    closeBurgerMenu('resize')
}

const toggleBurgerIcon = () =>{
    Array.from(headerBurgerBtn.children).forEach(el=>el.classList.toggle(BTN_HIDE))
}


headerBurgerBtn.addEventListener('click', toggleBurgerMenu)
headerBurgerBtn.addEventListener('dblclick',clearTimeoutIdOnDblClick)
window.addEventListener('resize',burgerListAnimationHide)
