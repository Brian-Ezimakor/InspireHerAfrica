document.addEventListener("click", e => {
   if (e.target.matches(".close")){
    document.querySelector('body').classList.toggle("activeSlide") 
}
})
