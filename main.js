// inicjujemy zmienne
const sizeInput = document.querySelector('#size');
const stepsInput = document.querySelector('#steps');
const c = document.getElementById('myCanvas');
const ctx = c.getContext('2d');
const centerX = 150;
const centerY = 150;

// centrujemy na siatce nasz obiekt
ctx.moveTo(centerX, centerY);

const drawTheta = (size, steps) => {
	// size - rozmiar spirali
	// steps - ilość kroków spirali
	ctx.beginPath();
	const increment = (2 * Math.PI) / steps;
	let theta = 0;

	// pętla w której inicjujemy jednocześnie kolejne wartośći kąta theta
	while ((theta += increment) < size * Math.PI) {
		// Obliczanie wartości współrzędnych w pętli
		const newX = centerX + theta * Math.cos(theta);
		const newY = centerY + theta * Math.sin(theta);
		// rysowanie linii do kolejnych punktów na osi współrzędnych
		ctx.lineTo(newX, newY);
	}
	ctx.stroke();
};

// funkcja wywyołująca się pierwszy raz aby wygenerować domyślne parametry
drawTheta(15, 5);

// Nasłuchiwacz na ilość kroków
sizeInput.addEventListener('input', () => {
	steps = stepsInput.value;
	const size = sizeInput.value;
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // czyszczenie siatki w celu wygenerowana nowej struktury
	drawTheta(size, steps);
});

// Nasłuchiwacz na wartość krzywej
stepsInput.addEventListener('input', () => {
	size = sizeInput.value;
	const steps = stepsInput.value;
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // czyszczenie siatki w celu wygenerowana nowej struktury
	drawTheta(size, steps);
});
