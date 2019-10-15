const setRgb = (hexa) => {
    hexa = hexa.replace('#', '');
    let rgb = hexa.match(/.{1,2}/g);
    rgb = rgb.map((cores) => {
        cores = parseInt(cores, 16);
        return cores;
    });
    return rgb;
}

export default setRgb;