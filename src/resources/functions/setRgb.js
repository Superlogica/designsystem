const setRgb = (hexa) => {
    hexa = hexa.replace('#', '');
    let rgb = hexa.match(/.{1,2}/g);
    rgb = rgb.map((jontas) => {
        jontas = parseInt(jontas, 16);
        return jontas;
    });
    return rgb;
}

export default setRgb;