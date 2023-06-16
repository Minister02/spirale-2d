// inicjujemy zmienne
const rangeInput = document.querySelector('#range');
const sizeInput = document.querySelector('#size');
const roundInput = document.querySelector('#round');
const c = document.getElementById('myCanvas');
const ctx = c.getContext('2d');

// Funkcja rysująca spiralę
const drawTheta = gutters => {
	let it = Math.PI / 360;
	let n = 500;
	let a = 2;
	let b = 0.1;
	ctx.beginPath();
	for (let i = 0; i < n; i += gutters) {
		t = it * i * 10;
		r = a * Math.exp(b * t);
		x = r * Math.cos(t);
		y = r * Math.sin(t);
		ctx.lineTo(250 + x, 250 + y);
	}
	ctx.stroke();
};

drawTheta(1);

// // Nasłuchiwacz na ilość kroków
// sizeInput.addEventListener('input', () => {
// 	range = rangeInput.value;
// 	round = roundInput.value;
// 	const size = sizeInput.value;
// 	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // czyszczenie siatki w celu wygenerowana nowej struktury
// 	drawTheta(size, range, round);
// });

// // Nasłuchiwacz na ilość kroków
// rangeInput.addEventListener('input', () => {
// 	size = sizeInput.value;
// 	round = roundInput.value;
// 	const range = rangeInput.value;
// 	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // czyszczenie siatki w celu wygenerowana nowej struktury
// 	drawTheta(size, range, round);
// });

// // Nasłuchiwacz na ilość kroków
// roundInput.addEventListener('input', () => {
// 	size = sizeInput.value;
// 	range = rangeInput.value;
// 	const round = roundInput.value;
// 	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // czyszczenie siatki w celu wygenerowana nowej struktury
// 	drawTheta(size, range, round);
// });
