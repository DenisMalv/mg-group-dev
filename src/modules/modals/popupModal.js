import refsCommon from '../common/refsCommon'

const { popupOpenBtn, popupModal, popupResp, popupForm, popupFormInputName, popupFormInputPhone, popupCloseBtn } = refsCommon

const POPUP_MODAL_ACTIVE = 'modal-active'
const SHOW = 'show'
// const BTN_HIDE = 'btn-hide'

const clickInOrOutsideModal =(e)=>{
    if(e.target === popupForm || popupForm.contains(e.target)){
        console.log('inside')
        return
    }
    
    if(popupModal.classList.contains(POPUP_MODAL_ACTIVE)){
        console.log('outside')
        closePopUp()
    }
}

const closePopUp = ()=>{
    popupModal.classList.remove(POPUP_MODAL_ACTIVE)

    document.removeEventListener('click',clickInOrOutsideModal)
    popupCloseBtn.removeEventListener('click', closePopUp)
    popupForm.removeEventListener('submit', onFormSubmit)
    popupFormInputName.removeEventListener('input',onInput)
    popupFormInputPhone.removeEventListener('input',onInput)
    
}

export const openPopUp = ()=>{
    popupModal.classList.add(POPUP_MODAL_ACTIVE)
    popupForm.style.display = 'flex'
    popupForm.classList.add(SHOW)

    popupFormInputName.labels[0].classList.remove('error')
    popupFormInputPhone.labels[0].classList.remove('error')
    popupFormInputPhone.value = ''
    

    setTimeout(()=>document.addEventListener('click',clickInOrOutsideModal) ,30)

    popupCloseBtn.addEventListener('click', closePopUp)
    popupForm.addEventListener('submit', onFormSubmit)
    popupFormInputName.addEventListener('input',onInput)
    popupFormInputPhone.addEventListener('input',onInput)
}

const toggleRespPopup = (type)=>{
    popupResp.style.display = 'block'
    setTimeout(()=> popupResp.classList.add(SHOW),20)

    if(type==='ok'){
        popupResp.children[0].textContent = 'Дякуємо вам за заявку'
    }
    if(type==='error'){
        popupResp.children[0].textContent = 'Упс щось пішло не так'
    }
    
    setTimeout(()=>{
        popupResp.classList.remove(SHOW)
        setTimeout(()=>popupResp.style.display = 'none',320) 
        closePopUp()
    },1000)
}

const onFormSubmit = async (e)=>{
    e.preventDefault();

    const nameError = checkInputError(popupFormInputName,popupFormInputName.labels[0],'error')
    const phoneError = checkInputError(popupFormInputPhone,popupFormInputPhone.labels[0],'error')

    if(nameError || phoneError){
        console.log("nameError", nameError)
        console.log("phoneError", phoneError)
        return
    }

    const data = {}
    const elementsArr = Array.from(popupForm.elements).filter((item)=>item.nodeName !== 'BUTTON')

    elementsArr.forEach((el)=>data[el.name]=el.value)

    try {
        // const response = {ok:true}
        const response = await fetch('https://jsonplaceholder.typicode.com', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        })
        console.log(response)
        if(response.ok){
            console.log('ok')
            popupForm.reset()

            popupForm.classList.remove(SHOW)

            setTimeout(()=>popupForm.style.display = 'none',320) 
            setTimeout(()=>toggleRespPopup('ok'),350)
        }else{
            throw new Error()
        }

    } catch (error) {
        console.log('error')
        popupForm.reset()
        popupForm.classList.remove(SHOW)
        setTimeout(()=>popupForm.style.display = 'none',320) 
        setTimeout(()=>toggleRespPopup('error'),350)
    }
}


const checkInputError = (input,label,error)=>{
    
    // console.dir(input)
    if (input === popupFormInputPhone && input.value !=='' && !validatePhone(input.value)) {
        input.nextElementSibling.nextElementSibling.textContent = 'Введіть номер телефону у форматі +380123456789'
        label.classList.add(error)
        return true
    }

    if(input.value === ''){
        input.nextElementSibling.nextElementSibling.textContent = "Поле обов'язкове для заповнення"
        label.classList.add(error)
        return true
    }
    label.classList.remove(error)
}

const validatePhone = (phone) => {
    let test = false
    // const phonePattern = /^\+380\d{9}$/;
    const phonePattern = /^(?:\+?380|80|0)\d{9}$/;
    return phonePattern.test(phone);
}

const onInput = (e)=>{
    e.currentTarget.labels[0].classList.remove('error')
}







popupOpenBtn.addEventListener('click',openPopUp)


