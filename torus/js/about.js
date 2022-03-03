

 var menu = ['What we do', 'Our clients', 'Our services']
 var swiper = new Swiper('.swiper-container', {
   direction: 'vertical',
   pagination: {
     el: '.pag-shoes',
     clickable: true,
   },
   hashNavigation: {
     watchState: true,
   },
   watchSlidesProgress: true,
   watchSlidesVisibility: true,
   mousewheel: true,
   loop:false
   
   
 });
