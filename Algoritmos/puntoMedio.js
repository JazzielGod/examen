function puntoMedio(xc, yc) {
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