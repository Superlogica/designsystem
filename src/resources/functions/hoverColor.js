const newColor = (color) =>{
    let total = 0;
    const hexa = color.replace('#', '');
    let rgb = hexa.match(/.{1,2}/g);
    rgb.map((cores) => {
        cores = parseInt(cores, 16);
        total = total + cores
        return false;
    });
    const media = total / 3;

    //GERANDO O HOVER - RGB TO HEXADECIMAL
    let hover = rgb.map((cores2) => {
        cores2 = parseInt(cores2, 16);
        cores2 = (cores2>=235?cores2: cores2 + 20).toString(16);
        return cores2;
    });

    if (media > 128) { 
        hover = rgb.map((cores2) => {
            cores2 = parseInt(cores2, 16);
            cores2 = (cores2 <= 20 ? cores2 : cores2 - 20).toString(16);
            return cores2;
        });
    }

    hover = `#${hover[0]+hover[1]+hover[2]}`;
    return hover;
}

export default newColor;