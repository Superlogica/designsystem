const setColor = (hexa) =>{
        let total=0;
        hexa = hexa.replace('#','');
        let rgb = hexa.match(/.{1,2}/g);
        rgb.map((jontas)=>{
            jontas = parseInt(jontas,16);
            total = total + jontas
            return jontas;
        });    
        let media = total / 3;
        if(media >150){
            return "#1e232c";
        }else{
            return "#FFFFFF";
        }
    }

export default setColor;