function drawNumbers() {
    textSize(18);
    textAlign(CENTER, CENTER);
    for (let i = 1; i <= 12; i++) {
        let angle = map(i, 0, 12, 0, 360) - 90;
        let x = (CLOCK_RADIUS-15) * cos(angle);
        let y = (CLOCK_RADIUS-15) * sin(angle);
        text(i, x, y);
    }
}