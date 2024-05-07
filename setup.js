function setup() {
    let canvasX = (window.innerWidth - 800) / 2;
    let canvasY = (window.innerHeight - 400) / 2;
    createCanvas(800, 400).position(canvasX, canvasY);

    background("white");
    angleMode(DEGREES);

    inputHoraLaPaz = createInput('11:59', 'time');
    inputHoraLaPaz.position(canvasX + 20, canvasY + 20);
    inputHoraLaPaz.input(updateHoraLaPaz);
    frameRate(1);
}

function updateHoraLaPaz() {
    let horaInput = inputHoraLaPaz.value();
    let horaArray = horaInput.split(':');
    horaLaPaz = parseInt(horaArray[0]);
    minutoLaPaz = parseInt(horaArray[1]);
}