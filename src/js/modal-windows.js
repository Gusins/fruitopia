document.addEventListener('DOMContentLoaded', () => {
	const openButtons = document.querySelectorAll('.js-open-modal');
	const closeButtons = document.querySelectorAll('.js-modal-close');
	const overlay = document.querySelector('.js-overlay-modal');

	if (!overlay) return;

	const closeActiveModal = () => {
		const activeModal = document.querySelector('.modal.active');
		activeModal?.classList.remove('active');
		overlay.classList.remove('active');
		document.body.classList.remove('body-lock'); // 👈 unlock scroll
	};

	const openModal = (id) => {
		const modal = document.querySelector(`.modal[data-modal="${id}"]`);
		if (!modal) return;

		modal.classList.add('active');
		overlay.classList.add('active');
		document.body.classList.add('body-lock'); // 👈 lock scroll
	};

	openButtons.forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault();
			openModal(btn.dataset.modal);
		});
	});

	closeButtons.forEach(btn => {
		btn.addEventListener('click', closeActiveModal);
	});

	overlay.addEventListener('click', closeActiveModal);

	document.addEventListener('keyup', e => {
		if (e.key === 'Escape') closeActiveModal();
	});
});
