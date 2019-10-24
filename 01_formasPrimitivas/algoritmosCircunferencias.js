function octPixels(xc,yc,x,y){
    var ret = [];
    ret.push({ x: xc +x , y: yc+y });
    ret.push({ x: xc +y , y: yc+x });
    ret.push({ x: xc +y , y: yc-x });
    ret.push({ x: xc -x , y: yc+y });
    ret.push({ x: xc -x , y: yc-y });
    ret.push({ x: xc -y , y: yc-x });
    ret.push({ x: xc -y , y: yc+x });
    ret.push({ x: xc +x , y: yc-y });

    return ret;
}

function Algoritmo_CirculoSimples(xc, yc, r) {
    if(r>1){
        var ang = 0;
        var div = Math.round(Math.PI*r/2);

        var coordenadas = { t: 0, c: [] };
        //r = r*Math.sqrt(2)/2;
        var x = r;
        var y = 0;
        var step = Math.PI/(2*div);
        for(var i = 0; i<div;i++){
            coordenadas.c = octPixels(xc,yc,Math.round(x),Math.round(y));
            coordenadas.t = i;
            draw_pixel(coordenadas);
            x = r*Math.cos(step*i);
            y = r*Math.sin(step*i);
        }
    }else{
        draw_pixel({ t: 0, c: [{x:xc,y:yc}] });
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