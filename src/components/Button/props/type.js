import Colors from "../resources/color";
/** import Gradient from "../resources/gradient"; NUNCA VAO USAR*/

const setFontColor = (hexa) => {
    let total = 0;
    hexa = hexa.replace('#', '');
    let rgb = hexa.match(/.{1,2}/g);
    rgb.map((jontas) => {
        jontas = parseInt(jontas, 16);
        total = total + jontas
        return true;
    });
    if (total / 3 > 120) {
        return "#1e232c";
    } else {
        return "#FFFFFF";
    }
}

const bgDefault = (color) =>{
    let arrColors = Object.keys(Colors);
    let colorReturn = color;
    let index = arrColors.findIndex((col)=>{
        let ret = -1;
        if(col===color){
            ret = col;
        }
        return ret;
    })
    if(index !== -1){
        if(typeof arrColors[index - 1] !== "undefined"){
            colorReturn = arrColors[index - 1];
        }
    }
    return colorReturn;
}

const ButtonColor = (type,color)=>{
    /**valida se a props bgColor foi setada */
    var style;
    switch(type){
       case("ghost"):
       style = `background:transparent;
                border:1px solid transparent;
                color: ${Colors[color]};
                &:hover{
                    background:rgba(0,0,0,0.03);
                }
               `;
       break;

       case("outline"):
       style = `background:transparent;
                border:1px solid ${Colors[color]}
                color: ${Colors[color]};
                &:hover{
                    background:${Colors[color]};
                    color:${setFontColor(Colors[color])};
                  }
               `;
       break;

       default:
        style = `background-color:${Colors.default};
                 color: ${setFontColor(Colors.default)};
                 border:1px solid transparent;
                 &:hover{
                     background-color: ${bgDefault("default")}
                 }
                    `;
    
        if(color) {
            style = `background-color:${Colors[color]};
                     color: ${setFontColor(Colors[color])};
                     border:1px solid transparent;
                     &:hover{
                        background-color: ${bgDefault(color)}
                     }
                    `;
            if(color.search('gradient')>-1) {
                
            }
        }
        break;


    }

    return style;

}

const ButtonType = (props) => {
    let type = "solid";
    if(props.type) {
        type = props.type;
    }
    
    let color = "default";
    if(props.color) {
        color = props.color;
    }

    let style = ButtonColor(type,color);

    let jontas = `
        ${style}
    `
    return jontas;
}

export default ButtonType;