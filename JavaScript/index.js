document.querySelectorAll('.drumkit-container button').forEach(button => {
	button.addEventListener('click', () => {
		const soundId = button.id;
		const sound = new Audio(`../sound/${soundId}.wav`);
		sound.play();
	});
});