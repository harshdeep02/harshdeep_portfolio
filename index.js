const section = document.querySelector('#scroll')
section.addEventListener('click', ()=>{
    if(window.innerHeight >= 500){
        window.scrollBy({ top: 510, behavior: 'smooth' })
    }
    else{
        window.scrollBy({ top: 100, behavior: 'smooth' })
    }
})


const aboutSection = document.querySelector('.about-section')
const overlay = document.querySelector('.overlay')
const aboutBtn = document.querySelector('#aboutBtn')

aboutBtn.addEventListener('click', (e)=>{
    e.stopPropagation()
    aboutSection.classList.toggle('active')
    overlay.classList.toggle('active')
})


document.addEventListener('click', (e)=>{
    e.stopPropagation()
    if(!aboutSection?.contains(e.target) &&  !aboutBtn.contains(e.target)){
        aboutSection.classList.remove('active')
        overlay.classList.remove('active')
    }
})


const closeIcon = document.querySelector('.x-icon')
closeIcon.addEventListener('click', (e)=>{
    e.stopPropagation()
        aboutSection.classList.remove('active')
        overlay.classList.remove('active')
})




function submit (event) {
    event.preventDefault(); // Prevent form submission for testing
    console.log("rrun");
    document.getElementById("myForm").reset();
}


const topBtn = document.querySelector('.to_Top')

topBtn.addEventListener('click', ()=>{
    scrollTo({top: 0, behavior: 'smooth'})
})