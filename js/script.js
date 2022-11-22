const BtnNext = document.querySelector('.btn-next');
const BtnPrev = document.querySelector('.btn-prev');
const carousel = document.querySelector('.carousel');

const arrImages = [
	'img/01.webp',
	'img/02.webp',
	'img/03.webp',
	'img/04.webp',
	'img/05.webp',
];

for (let i = 0; i < arrImages.length; i++) {
	const Img = document.createElement('img');
	Img.src = arrImages[i];
	Img.classList.add('carousel-img');

	if (i === 0) {
		Img.classList.add('active');
	}

	carousel.append(Img);
}

const listImg = document.querySelectorAll('.carousel-img'); 

let activeItem = 0;

   BtnPrev.addEventListener('click', 
   
   function () {
	
	listImg[activeItem].classList.remove('active');

	activeItem++;

	listImg[activeItem].classList.add('active');

	   BtnNext.classList.remove('hidden');
	if (activeItem === listImg.length - 1) {
		BtnPrev.classList.add('hidden');
	}
});

    BtnNext.addEventListener('click', 
    
    function () {

	listImg[activeItem].classList.remove('active');

	activeItem--;

	listImg[activeItem].classList.add('active');

	 BtnPrev.classList.remove('hidden');
	if (activeItem === 0) {
		BtnNext.classList.add('hidden');
	}
});