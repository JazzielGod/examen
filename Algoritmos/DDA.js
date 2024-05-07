function DDA(x1, y1, x2, y2, thickness) {
	let dx = x2 - x1;
	let dy = y2 - y1;
	let steps = Math.max(Math.abs(dx), Math.abs(dy));
	let xIncrement = dx / steps;
	let yIncrement = dy / steps;
	let x = x1;
	let y = y1;

	for (let i = 0; i <= steps; i++) {
		for (let j = -thickness / 2; j <= thickness / 2; j++) {
			point(x + j, y);
		}
		x += xIncrement;
		y += yIncrement;
	}
}