// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
// Reference To Buttons
var btnLeft = document.getElementById('prev_btn');
var btnRight = document.getElementById('next_btn');

// Reference To Slider
var slider = document.querySelector('.container .slider');

btnRight.addEventListener('click', nextSlide);
function nextSlide(){
	slider.appendChild(slider.firstElementChild);
}

btnLeft.addEventListener('click', prevSlide);
function prevSlide(){
	slider.prepend(slider.lastElementChild);
}

// Auto Sliding
function autoSlide(){
	deleteInterval = setInterval(timer, 4000); // 4000 mile sec = 4 sec
	function timer(){
		nextSlide();
	}
}
autoSlide();

// Stop Auto Sliding When Mouse is Over
slider.addEventListener('mouseover', deleteAutoSliding);
btnRight.addEventListener('mouseover', deleteAutoSliding);
btnLeft.addEventListener('mouseover', deleteAutoSliding);

function deleteAutoSliding(){
	clearInterval(deleteInterval);
}

// Resume Auto Sliding When Mouse is Out
slider.addEventListener('mouseout', autoSlide);
btnRight.addEventListener('mouseout', autoSlide);
btnLeft.addEventListener('mouseout', autoSlide);

let index = 0;
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider');

    function showNextSlide() {
      index = (index + 1) % slides.length;
      slider.style.transform = `translateX(-${index * 100}%)`;
    }

    document.addEventListener('DOMContentLoaded', () => {
      setInterval(showNextSlide, 3000);
    });



// WhatsApp Floating Icon click - opens in new tab
document.querySelector('.whatsapp').addEventListener('click', function(e) {
    window.open(this.href, '_blank');
});
