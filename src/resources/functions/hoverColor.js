const newColor = (color) =>{
    let total = 0;
    let hexa = color.replace('#', '');
    let rgb = hexa.match(/.{1,2}/g);
    rgb.map((jontas) => {
        jontas = parseInt(jontas, 16);
        total = total + jontas
        return false;
    });
    let media = total / 3;

    //GERANDO O HOVER - RGB TO HEXADECIMAL
    var hover = rgb.map((jonta) => {
        jonta = parseInt(jonta, 16);
        jonta = (jonta>=235?jonta: jonta + 20).toString(16);
        return jonta;
    });

    if (media > 128) { 
        hover = rgb.map((jonta) => {
            jonta = parseInt(jonta, 16);
            jonta = (jonta <= 20 ? jonta : jonta - 20).toString(16);
            return jonta;
        });
    }

    hover = `#${hover[0]+hover[1]+hover[2]}`;
    return hover;
}

export default newColor;