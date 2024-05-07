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
    inputHoraLaPaz.value(`${horaLaPaz.toString().padStart(2, '0')}:${minutoLaPaz.toString().padStart(2, '0')}`);

    background("white");

    // La Paz
    drawClockLaPaz(150, height / 2, horaLaPaz, minutoLaPaz, segundoLaPaz, "La Paz");

    // Ciudad de México
    let horaCDMX = (horaLaPaz + 1 + 24) % 24;
    drawClockCDMX(400, height / 2, horaCDMX, minutoLaPaz, segundoLaPaz, "Ciudad de México");

    // Barcelona
    let horaBarcelona = (horaLaPaz + 9 + 24) % 24;
    drawClockCDMX(650, height / 2, horaBarcelona, minutoLaPaz, segundoLaPaz, "Barcelona");
}