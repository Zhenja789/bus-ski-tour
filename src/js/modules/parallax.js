const targets = document.querySelectorAll('.banner-target');
targets.forEach(target => {
	target.addEventListener('mousemove', (e) => {
		const x = e.pageX / window.innerWidth * 3;
		const y = e.pageY / window.innerHeight;
		target.querySelector('img').style.transform = 'translate(-'+x * 30+'px, -'+y * 30+'px)';
		target.querySelector('.target-shadow').style.transform = 'translate('+x * 50+'px, -'+y * 50+'px)';
		// target.querySelector('img').style.transformTranslate = 
	})
})