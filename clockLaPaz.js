const CLOCK_RADIUS = 115;
const HOUR_HAND_LENGTH = 50;
const MINUTE_HAND_LENGTH = 80;
const SECOND_HAND_LENGTH = 90;
const HOUR_HAND_THICKNESS = 1.5;
const MINUTE_HAND_THICKNESS = 0.5;
const SECOND_HAND_THICKNESS = 0;

function drawClockLaPaz(x, y, hora, minuto, segundo, ciudad) {
    // Circulo
    puntoMedio(x, y);
    push();
    translate(x, y);
    drawNumbers();

    // Manecilla de las horas
    let anguloHora = map(hora % 12, 0, 12, 0, 360) - 90;
    drawHand(HOUR_HAND_LENGTH, anguloHora, HOUR_HAND_THICKNESS, color("black"));

    // Manecilla de los minutos
    let anguloMinuto = map(minuto, 0, 60, 0, 360) - 90;
    drawHand(MINUTE_HAND_LENGTH, anguloMinuto, MINUTE_HAND_THICKNESS, color("black"));

    // Manecilla de los segundos
    let anguloSegundo = map(segundo, 0, 60, 0, 360) - 90;
    drawHand(SECOND_HAND_LENGTH, anguloSegundo, SECOND_HAND_THICKNESS, color("red"));

    pop();

    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(ciudad, x, y + CLOCK_RADIUS + 25);
}

function drawHand(length, angle, thickness, color) {
    stroke(color);
    puntoPendiente(0, 0, length * cos(angle), length * sin(angle), thickness);
}

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