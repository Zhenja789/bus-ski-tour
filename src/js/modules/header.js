const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
openMenuBtn.onclick = e => {
	e.preventDefault();
	document.querySelector('.mobile-menu').classList.add('active');
}
closeMenuBtn.onclick = e => {
	e.preventDefault();
	document.querySelector('.mobile-menu').classList.remove('active');
}

const header = document.querySelector('header');
const banner = document.querySelector('#banner');

const setHeightBanner = () => {
	const headerHeight = header.offsetHeight;
	banner.style.minHeight = `calc(100vh - ${headerHeight}px)`;
}
setHeightBanner();

window.onresize = e => {
	setHeightBanner();
}
