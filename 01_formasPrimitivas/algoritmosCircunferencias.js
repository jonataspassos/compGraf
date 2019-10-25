/**
 * Trabalho feito por:
 *      Elayne Rute Lemos
 *      Ezequias Antunes
 *      Jonatas Passos 
 */

function octPixels(xc, yc, x, y) {
    var ret = [];
    ret.push({ x: xc + x, y: yc + y });
    ret.push({ x: xc + y, y: yc + x });
    ret.push({ x: xc + y, y: yc - x });
    ret.push({ x: xc - x, y: yc + y });
    ret.push({ x: xc - x, y: yc - y });
    ret.push({ x: xc - y, y: yc - x });
    ret.push({ x: xc - y, y: yc + x });
    ret.push({ x: xc + x, y: yc - y });

    return ret;
}

function Algoritmo_CirculoSimples(xc, yc, r) {
    if (r > 1) {
        var div = Math.round(Math.PI * r / 2);

        var coordenadas = { t: 0, c: [] };
        //r = r*Math.sqrt(2)/2;
        var x = r;
        var y = 0;
        var step = Math.PI / (2 * div);
        for (var i = 0; i < div; i++) {
            coordenadas.c = octPixels(xc, yc, Math.round(x), Math.round(y));
            coordenadas.t = i;
            draw_pixel(coordenadas);
            x = r * Math.cos(step * i);
            y = r * Math.sin(step * i);
        }
    } else {
        draw_pixel({ t: 0, c: [{ x: xc, y: yc }] });
    }
}

function Algoritmo_PontoMedio(xc, yc, r) {
    var x = 0, y = r;
    var p = 1 - r;
    var i = 0;
    var coord = { t: i, c: [] };

    coord.c = octPixels(xc, yc, x, y);
    draw_pixel(coord);
    while (x < y) {
        x++; i++;
        if (p < 0) {
            p += 2 * x + 1;
        } else {
            p += 2 * x + 1 - 2 * y;
            y--;
        }
        coord.t = i;
        coord.c = octPixels(xc, yc, x, y);
        draw_pixel(coord);
    }

}