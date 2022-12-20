const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})



$(".menu-toggle").mouseenter(function(){
    	$(this).parent().parent().find('.menu-item').css('visibility', 'visible');	
});
$(".menu").mouseleave(function(){
    	$(this).find('.menu-item').css('visibility', 'hidden');	
});



