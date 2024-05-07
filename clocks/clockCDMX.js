function drawClockCDMX(x, y, hora, minuto, segundo, ciudad) {
    // Circulo
    puntoMedio(x, y);
    push();
    translate(x, y);
    drawNumbers();

    // Manecilla de las horas
    let anguloHora = map(hora % 12, 0, 12, 0, 360) - 90;
    drawHandDDA(HOUR_HAND_LENGTH, anguloHora, HOUR_HAND_THICKNESS, color("black"));

    // Manecilla de los minutos
    let anguloMinuto = map(minuto, 0, 60, 0, 360) - 90;
    drawHandDDA(MINUTE_HAND_LENGTH, anguloMinuto, MINUTE_HAND_THICKNESS, color("black"));

    // Manecilla de los segundos
    let anguloSegundo = map(segundo, 0, 60, 0, 360) - 90;
    drawHandDDA(SECOND_HAND_LENGTH, anguloSegundo, SECOND_HAND_THICKNESS, color("red"));

    pop();

    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(ciudad, x, y + CLOCK_RADIUS + 25);
}

function drawHandDDA(length, angle, thickness, color) {
    stroke(color);
    DDA(0, 0, length * cos(angle), length * sin(angle), thickness);
}