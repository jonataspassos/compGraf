function Algoritmo_DDA(x1, y1, x2, y2) {


    let coordenadas
    let step, it = 0
    let X, Y, Xinc, Yinc
    step = Math.abs(x2 - x1)
    if (Math.abs(y2 - y1) > step)
        step = Math.abs(y2 - y1)
    Xinc = (x2 - x1) / step
    Yinc = (y2 - y1) / step
    X = x1;
    Y = y1;

    while (X <= x2) {
        console.log('x=',X, 'y=',Y)
        coordenadas = { t: it, c: [{ x: Math.round(X), y: Math.round(Y) }] }
        draw_pixel(coordenadas);
        X = X + Xinc
        Y = Y + Yinc
        it += 1
    }
}


function Algoritmo_Bresenham(x1, y1, x2, y2) {



    let offset, dx, dy, p, x
    if(y1>y2){
        dy = y1-y2
    }
    else{
        dy = y2-y1
    }
    offset = y2
    dx = x2 - x1
    p = 2 * dy - dx
    x = x1
    y = y1
    it = 0
   
    let coordenadas = { t: it, c: [{ x: x, y: Math.floor(y) }] }
    draw_pixel(coordenadas);
    while (x < x2) {
        it += 1
        if (p < 0) {
            p = p + 2 * dy
           
        }
        else {
            p = p + 2 * dy - 2 * dx
           if(y1>y2)
                y -= 1
           else
                y+=1 
        }
        x += 1
        console.log('x = ', x, 'y = ', y)
        coordenadas = { t: it, c: [{ x: x, y: Math.floor(y) }] }
        draw_pixel(coordenadas);
    }

}