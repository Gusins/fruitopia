(() => {
	// --- elements ---
	const mobileMenu = document.querySelector('.js-menu-container');
	const openBtn = document.querySelector('.js-open-menu');
	const smoothLinks = document.querySelectorAll('a[href^="#"]');
	const menuLinks = document.querySelectorAll('.menu-box-link');

	// якщо ключових елементів немає — зупиняємось
	if (!mobileMenu || !openBtn) return;

	// --- scroll lock helpers ---
	// глобальний lock сторінки (використовується і в модалках)
	const lockBody = () => document.body.classList.add('body-lock');
	const unlockBody = () => document.body.classList.remove('body-lock');

	// --- menu toggle ---
	// відкриття / закриття меню + блок скролу
	const toggleMenu = () => {
		const isOpen = openBtn.getAttribute('aria-expanded') === 'true';

		openBtn.setAttribute('aria-expanded', !isOpen);
		openBtn.classList.toggle('burger-active');
		mobileMenu.classList.toggle('is-open');

		!isOpen ? lockBody() : unlockBody();
	};

	// --- open button ---
	openBtn.addEventListener('click', toggleMenu);

	// --- responsive reset ---
	// якщо екран став desktop — закриваємо меню
	window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
		if (!e.matches) return;

		mobileMenu.classList.remove('is-open');
		openBtn.classList.remove('burger-active');
		openBtn.setAttribute('aria-expanded', false);
		unlockBody();
	});

	// --- smooth scroll for anchors ---
	smoothLinks.forEach(link => {
		link.addEventListener('click', e => {
			e.preventDefault();

			const target = document.querySelector(link.getAttribute('href'));
			target?.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		});
	});

	// --- close menu when clicking navigation links ---
	menuLinks.forEach(link => link.addEventListener('click', toggleMenu));
})();