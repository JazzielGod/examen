let horaLaPaz = 11;
let minutoLaPaz = 59;
let segundoLaPaz = 54;

function updateHoraLaPaz() {
    let horaInput = inputHoraLaPaz.value();
    let horaArray = horaInput.split(':');
    horaLaPaz = parseInt(horaArray[0]);
    minutoLaPaz = parseInt(horaArray[1]);
}

function draw() {
    segundoLaPaz++;
    if (segundoLaPaz === 60) {
        segundoLaPaz = 0;
        minutoLaPaz++;
        if (minutoLaPaz === 60) {
            minutoLaPaz = 0;
            horaLaPaz++;
            if (horaLaPaz === 24) {
                horaLaPaz = 0;
            }
        }
    }

    background("white");

    inputHoraLaPaz.value(`${horaLaPaz.toString().padStart(2, '0')}:${minutoLaPaz.toString().padStart(2, '0')}`);

    // La Paz
    drawClockLaPaz(150, height / 2, horaLaPaz, minutoLaPaz, segundoLaPaz, "La Paz");

    // Ciudad de México
    let horaCDMX = (horaLaPaz + 1 + 24) % 24;
    drawClockLaPaz(400, height / 2, horaCDMX, minutoLaPaz, segundoLaPaz, "Ciudad de México");

    // Barcelona
    let horaBarcelona = (horaLaPaz + 9  + 24) % 24;
    drawClockLaPaz(650, height / 2, horaBarcelona, minutoLaPaz, segundoLaPaz, "Barcelona");
}