// menu slider
const navSlide = () =>{
    const burger = document.querySelector('.burger'),
          list = document.querySelector('.response')
    
          burger.addEventListener('click', ()=>{
            list.classList.toggle('r-active');
            burger.classList.toggle('toggle');
          })
          
    };
    navSlide()