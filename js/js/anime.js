document.addEventListener('DOMContentLoaded', () => {
    anime.timeline({

        })
        .add({
            targets: '.preloader-right, .preloader-left',
            top: ['-100%','0'],
            easing: 'easeInOutCubic',
            duration: '1600',
            complete: function(){
                document.querySelector('.page').style.display = 'block';
            }
        })
        .add({
            targets: '.text-preloader-left, .text-preloader-right',
            easing: 'easeInOutCubic',
            duration: '600',
            opacity: ['0', '1']
        })

        .add({
            targets: '.preloader-right',
            left: ['50%', '100%'],
            delay: 2000,
            easing: 'easeInOutCubic',
            duration: '1600',
            
        })
        .add({
            targets: '.preloader-left',
            left: ['0%', '-50%'],
            easing: 'easeInOutCubic',
            duration: '1600',
            delay: 2000,
            offset: '-=3500',
            complete: function(){
                document.querySelector('.preloader').style.display = 'none';
            }
            
        })
        
        
})

// anime background

document.addEventListener('mousemove', parallax);
function parallax(e){
   var imgBc = document.getElementById('img-page');
   var speed = -1;
   var x = (window.innerWidth - e.pageX * speed) / 100
   var y = (window.innerWidth - e.pageY * speed) / 100
    imgBc.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    
    
}

let filter = function(){
   let inputText = document.querySelector('.input-text')
    inputText.addEventListener('keyup', function(){
        let filter = inputText.value.toLowerCase();
        let filterElements = document.querySelectorAll('.content');

        filterElements.forEach( item => {
            if(item.innerHTML.toLowerCase().indexOf(filter) > -1){
                item.style.display = '';
            }
            else{
                item.style.display = 'none';
            }
            
        })
    })
}

filter()