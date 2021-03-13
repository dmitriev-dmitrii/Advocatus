
const cardQestion= document.querySelectorAll('.section-6__content-card-question');

cardQestion.forEach(e => {

e.addEventListener('click',openAnswer)

});


function openAnswer() 
{

this.nextElementSibling.classList.toggle('section-6__content-card-answer--active');

this.classList.toggle('fa-minus-square');
}