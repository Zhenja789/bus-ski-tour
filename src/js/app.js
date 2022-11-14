import './modules/helpers';
import './modules/parallax';
import './modules/form';
import AOS from 'aos'
import 'aos/dist/aos.css';

import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
const lightbox = GLightbox();

import './modules/header';

import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const photoGalary = new Swiper('.photo-galary', {
	slidesPerView: 1,
	spaceBetween: 30,
	modules: [ Navigation, Pagination ],
	navigation: {
		nextEl: '.photo-button-next',
		prevEl: '.photo-button-prev',
	},
	pagination: {
		el: '.photo-pagination',
		type: 'bullets',
		clickable: true
	},
})

const reviews = new Swiper('.reviews', {
	slidesPerView: 1,
	spaceBetween: 30,
	modules: [ Navigation, Pagination ],
	navigation: {
		nextEl: '.reviews-button-next',
		prevEl: '.reviews-button-prev',
	},
	pagination: {
		el: '.reviews-pagination',
		type: 'bullets',
		clickable: true
	},
})

AOS.init({
	duration: 800,
	once: true,
	offset: 100
});

let scrollpos = window.scrollY
const header = document.querySelector("header")
const scrollChange = 1
const add_class_on_scroll = () => header.classList.add('bg-white', 'shadow')
const remove_class_on_scroll = () => header.classList.remove('bg-white', 'shadow')
window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;
  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
})
