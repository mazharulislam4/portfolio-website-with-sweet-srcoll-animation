$(document).ready(function () {
    // navbar toggler  functionality  start
    $('.nav-toggler').click(function () {
        $('.navbar').toggleClass('active');

        if ($('.navbar')[0].classList.contains('active')) {
            $('.main-header').css("position", "static")
            this.ariaExpanded = "true";
            $('body').css({ "height": "100vh", "overflow": "hidden" })
            
            this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
            <line x1="18" y1="6" x2="6" y2="18">
            </line>
            <line x1="6" y1="6" x2="18" y2="18"></line></svg>
        `;
        } else {
            this.ariaExpanded = "false";
            $('body').css({ "height": "initial", "overflow-x": "hidden" })
            $('.main-header').css("position", "relative")

            this.innerHTML = ` <svg width="60" height="60" fill="none" stroke="currentColor"  stroke-width="2" viewBox="0 0 30 30" stroke-linecap="round" stroke-linejoin="round" >
            <line x1="3" y1="5" x2="25" y2="5"></line>
            <line x1="3" y1="12" x2="25" y2="12"></line>
            <line x1="3" y1="19" x2="25" y2="19"></line>
            </svg>
        `
        }
     
       
    })




    // navbar toggler  functionality  end
    window.addEventListener('scroll', function () { 
        // scrollTop value get object
        const { scrollTop, clientHeight } = document.documentElement;
    // element zom effect  start
        const zom = document.querySelectorAll('.zom');
    
        zom.forEach(item => {
            const ElementTopViewport = item.getBoundingClientRect().top;
            if (scrollTop > (ElementTopViewport + scrollTop).toFixed() - clientHeight*0.9) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');           
            }
        })
    // element left in effect  start
        const leftIn = document.querySelectorAll('.left-in');
        leftIn.forEach(item => {
            const ElementTopViewport = item.getBoundingClientRect().top;
            if (scrollTop > (ElementTopViewport + scrollTop).toFixed() - clientHeight*0.9) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');           
            }
        })
        
       // element right in  effect  start
       const rightIn = document.querySelectorAll('.right-in');
       rightIn.forEach(item => {
           const ElementTopViewport = item.getBoundingClientRect().top;
           if (scrollTop > (ElementTopViewport + scrollTop).toFixed() - clientHeight*0.9) {
               item.classList.add('active');
           } else {
               item.classList.remove('active');           
           }
       })
        // fade in effect 
       const fadeIn = document.querySelectorAll('.fade-in');
      fadeIn.forEach(item => {
           const ElementTopViewport = item.getBoundingClientRect().top;
           if (scrollTop > (ElementTopViewport + scrollTop).toFixed() - clientHeight*0.9) {
               item.classList.add('active');
           } else {
               item.classList.remove('active');           
           }
       })
        
        
        // window scorll event end 
    });
});

