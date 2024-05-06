const CLOCK_RADIUS = 100;
const HOUR_HAND_LENGTH = 50;
const MINUTE_HAND_LENGTH = 80;
const SECOND_HAND_LENGTH = 90;
const HOUR_HAND_THICKNESS = 1.5;
const MINUTE_HAND_THICKNESS = 0.5;
const SECOND_HAND_THICKNESS = 0;

function drawClockCDMX(x, y, hora, minuto, segundo) {
    // Circulo
    puntoMedio(x, y);
    push();
    translate(x, y);
    rotate(-90);

    // Hand Horas
    let anguloHora = map(hora, 0, 12, 0, 360);
    drawHand(HOUR_HAND_LENGTH, anguloHora, HOUR_HAND_THICKNESS, color("black"));

    // Hand Minutos
    let anguloMinuto = map(minuto, 0, 60, 0, 360);
    drawHand(MINUTE_HAND_LENGTH, anguloMinuto, MINUTE_HAND_THICKNESS, color("black"));

    // Hand segundos
    let anguloSegundo = map(segundo, 0, 60, 0, 360);
    drawHand(SECOND_HAND_LENGTH, anguloSegundo, SECOND_HAND_THICKNESS, color("red"));

    pop();
}

function drawHand(length, angle, thickness, color) {
    stroke(color);
    DDA(0, 0, length * cos(angle), length * sin(angle), thickness);
}