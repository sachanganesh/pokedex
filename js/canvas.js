(function () {
	var canvas = document.getElementById('application'),
	context = canvas.getContext('2d');
	console.log('hi')
	context.font = '15pt "Press Start 2P", sans-serif';
	context.fillStyle = 'white';
	context.fillText('Pokedex', 50, 50);
})();
