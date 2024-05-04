let inputHoraLaPaz;

function setup() {
    createCanvas(800, 400);
    background("white");
    angleMode(DEGREES);

    inputHoraLaPaz = createInput('11:59', 'time');
    inputHoraLaPaz.position(20, 20);
    inputHoraLaPaz.input(updateHoraLaPaz);
    frameRate(1);
}