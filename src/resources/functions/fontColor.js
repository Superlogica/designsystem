const setColor = (hexa) =>{
        let total=0;
        hexa = hexa.replace('#','');
        let rgb = hexa.match(/.{1,2}/g);
        rgb.map((jontas)=>{
            jontas = parseInt(jontas,16);
            total = total + jontas
            return jontas;
        });

        let color = "#FFFFFF";
        let media = total / 3;

        if(media > 150){
            color = "#1e232c";
        }

        return color;
    }

export default setColor;