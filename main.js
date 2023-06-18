// Pobieramy podstawowe zmienne i tagi input
const rangeInput = document.getElementById('range');
const sizeInput = document.getElementById('size');
const roundInput = document.getElementById('round');
const densityInput = document.getElementById('density');
const c = document.getElementById('myCanvas');
const ctx = c.getContext('2d');

// Pobieramy tagi label z akutalnymi parametrami
const rangeLabel = document.getElementById('rangeLabel');
const sizeLabel = document.getElementById('sizeLabel');
const roundLabel = document.getElementById('roundLabel');
const densityLabel = document.getElementById('densityLabel');

// Funkcja rysująca spiralę
function drawTheta() {
	const density = parseInt(densityInput.value);
	const size = parseInt(sizeInput.value);
	const range = parseInt(rangeInput.value);
	const round = parseFloat(roundInput.value);
	let it = Math.PI / 360;
	let sizeTheta = range;
	let rangeTheta = size;
	let roundTheta = round;
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	ctx.beginPath();
	for (let i = 0; i < sizeTheta; i += density) {
		const t = it * i * 10;
		const r = rangeTheta * Math.exp(roundTheta * t);
		const x = r * Math.cos(t);
		const y = r * Math.sin(t);
		ctx.lineTo(250 + x, 250 + y);
	}
	ctx.stroke();
}

// Funkcja aktualizująca parametry poszczególnych suwaków
function updateStats() {
	rangeLabel.textContent = 'Zakres spirali: ' + rangeInput.value;
	sizeLabel.textContent = 'Rozmiar spirali: ' + sizeInput.value;
	roundLabel.textContent = 'Zaokrąglenie spirali: ' + roundInput.value;
	densityLabel.textContent = 'Zagęszczenie punktów: ' + densityInput.value;
}

// funkcja aktualizaująca parametry grafiki i tworząca nowy obraz
function updateTheta() {
	drawTheta();
	updateStats();
}

// Nasłuchiwacze na suwaki
densityInput.addEventListener('input', updateTheta);
sizeInput.addEventListener('input', updateTheta);
rangeInput.addEventListener('input', updateTheta);
roundInput.addEventListener('input', updateTheta);

updateTheta();