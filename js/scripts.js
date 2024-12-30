 burger = document.querySelector('.burger')
 navbar = document.querySelector('.navbar')
 navlist = document.querySelector('.nav-list')
 rightNav = document.querySelector('.rightNav')

 burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
 }
)
 
 
 

// WhatsApp Floating Icon click - opens in new tab
document.querySelector('.whatsapp').addEventListener('click', function(e) {
    window.open(this.href, '_blank');
});
