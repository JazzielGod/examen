const CLOCK_RADIUS = 100;
const HOUR_HAND_LENGTH = 50;
const MINUTE_HAND_LENGTH = 80;
const SECOND_HAND_LENGTH = 90;
const HOUR_HAND_THICKNESS = 4;
const MINUTE_HAND_THICKNESS = 2;
const SECOND_HAND_THICKNESS = 1;

//corregir el reloj de la hr méxico
//y ver la hora esp barceloca
function drawClock(x, y, hora, minuto, segundo) {
    // Circulo
    midpointCircle(x, y);
    push();
    translate(x, y);
    rotate(-90);

    // Hand Horas
    let anguloHora = map(hora, 0, 12, 0, 360);
    drawHand(HOUR_HAND_LENGTH, anguloHora, HOUR_HAND_THICKNESS, color("black"));
    //ecuacionPuntoPendiente(0,0, HOUR_HAND_LENGTH * cos(anguloHora), HOUR_HAND_LENGTH * sin(anguloHora));


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
    strokeWeight(thickness);
    line(0, 0, length * cos(angle), length * sin(angle));
}


//Ecuación punto medio del círculo
function midpointCircle(xc, yc) {
    let x = 0;
    let y = CLOCK_RADIUS;
    let p = 5 / 4 - CLOCK_RADIUS;

    while (x < y) {
        x++;
        if (p < 0) {
            p += 2 * x + 1;
        } else {
            y--;
            p += 2 * x + 1 - 2 * y;
        }

        let points = [
            [x, y], [y, x], [-y, x], [-x, y],
            [-x, -y], [-y, -x], [y, -x], [x, -y]
        ];

        for (let i = 0; i < points.length; i++) {
            let pointX = points[i][0];
            let pointY = points[i][1];
            ellipse(xc + pointX, yc + pointY, 2, 2);
        }
    }
}

//Ecuación punto pendiente
function ecuacionPuntoPendiente(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;

    const m = dy / dx;
    const b = y1 - m * x1;

    let x = x1;
    let y = y1; 

    point(x,y);

    while (x < x2) {
        x += 0.01;
        y = m * x + b;
        point(x, y);
    }

}