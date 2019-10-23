function Algoritmo_Octante(xc, yc, r) {
    const A = Math.PI / 4
    const dAng = 0.05 * A
    let x = r
    let y = 0
    let i = 0
    let ang = 0
    let xvar = xc + x
    let yvar = yc + y
    let coordenadas = { t: i, c: [] }

    while (A >= ang) {
        coordenadas.c.push({ x: x, y: y });
        coordenadas.c.push({ x: y, y: x });
        coordenadas.c.push({ x: x, y: -y });
        coordenadas.c.push({ x: x, y: -y });
        coordenadas.c.push({ x: x, y: -y });
        coordenadas.c.push({ x: x, y: -y });
        coordenadas.c.push({ x: x, y: -y });
        coordenadas.c.push({ x: x, y: -y });
        while (i < 8) {
            ++i
            switch (i) {
                case 1:
                    xvar = x
                    yvar = y
                    break;
                case 2:
                    xvar = y
                    yvar = x
                    break;
                case 3:
                    yvar = yvar * (-1)
                    break;
                case 4:
                    xvar = x * (-1)
                    yvar = y
                    break;
                case 5:
                    yvar = yvar * (-1)
                    break;
                case 6:
                    xvar = y * (-1)
                    yvar = x * (-1)
                    break;
                case 7:
                    yvar = yvar * (-1)
                    break;
                case 8:
                    xvar = x
                    yvar = y * (-1)
                    break;
            }
            xvar += xc
            yvar += yc
            console.log('x = ', xvar, 'y = ', yvar)
            coordenadas = { t: it, c: [{ x: xvar, y: yvar }] }
            draw_pixel(coordenadas);
        }
        ang += dAng
        i = 0
        x = r * Math.cos(ang)
        y = r * Math.sin(ang)
    }
}

function Algoritmo_PontoMedio(xc, yc, r) {
    let x = 0
    let y = r
    let p = 1 - r
    let xvar = xc + x
    let yvar = yc + y
    let i = 0
    let coordenadas = { t: i, c: [{ x: xvar, y: xvar }] }
    draw_pixel(coordenadas);
    while (x < y) {
        if (p < 0) {
            p += 2 * x + 1
        }
        else {
            p += 2 * (x - y) + 1
            y--
        }
        switch (i) {
            case 1:
                xvar = x
                yvar = y
                break;
            case 2:
                xvar = y
                yvar = x
                break;
            case 3:
                yvar = yvar * (-1)
                break;
            case 4:
                xvar = x * (-1)
                yvar = y
                break;
            case 5:
                yvar = yvar * (-1)
                break;
            case 6:
                xvar = y * (-1)
                yvar = x * (-1)
                break;
            case 7:
                yvar = yvar * (-1)
                break;
            case 8:
                xvar = x
                yvar = y * (-1)
                break;
        }
        xvar += xc
        yvar += yc
        console.log('x = ', xvar, 'y = ', yvar)
        coordenadas = { t: it, c: [{ x: xvar, y: yvar }] }
        draw_pixel(coordenadas);
        x++
    }
}