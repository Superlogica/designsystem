const setColor = (hexa,hexa2="") =>{
    let total=0;
    hexa = hexa.replace('#','');
    let rgb = hexa.match(/.{1,2}/g);
    rgb.map((cores)=>{
        cores = parseInt(cores,16);
        total = total + cores
        return cores;
    });

    let color = "#FFFFFF";
    let media = total / 3;

    if(media > 150){
        color = "#1e232c";
    }
    if(hexa2){
        
    }

    return color;
    }

export default setColor;