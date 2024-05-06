function puntoPendiente(x1, y1, x2, y2, thickness) {
	let dx = x2 - x1;
	let dy = y2 - y1;

	if (Math.abs(dx) < Math.abs(dy)) {
		let steps = Math.abs(dy);
		let xIncrement = dx / steps;
		let yIncrement = dy / steps;
		let x = x1;
		let y = y1;

		for (let i = 0; i <= steps; i++) {
			for (let j = -thickness; j <= thickness; j++) {
				point(x + j, y);
			}
			x += xIncrement;
			y += yIncrement;
		}
	} else {
		let steps = Math.abs(dx);
		let xIncrement = dx / steps;
		let yIncrement = dy / steps;
		let x = x1;
		let y = y1;

		for (let i = 0; i <= steps; i++) {
			for (let j = -thickness; j <= thickness; j++) {
				point(x, y + j);
			}
			x += xIncrement;
			y += yIncrement;
		}
	}
}