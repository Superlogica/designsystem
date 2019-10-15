import Colors from "../../../resources/color";
import fontColor from "../../../resources/functions/fontColor";
import newColor from "../../../resources/functions/hoverColor";
/** import Gradient from "../resources/gradient"; NUNCA VAO USAR*/

const ButtonColor = (type,color,shadow = "")=>{
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
                    color:${fontColor(Colors[color])};
                    ${shadow ? 'transform: translateY(-2px);':""}
                  }
               `;
       break;
       default:
        style = `background-color:${Colors.default};
                 color: ${fontColor(Colors.default)};
                 border:1px solid transparent;
                 &:hover{
                     background-color: ${Colors.neutral700};
                     ${shadow ? 'transform: translateY(-2px);':""}
                 }
                    `;
    
        if(color) {
            style = `background-color:${Colors[color]};
                     color: ${fontColor(Colors[color])};
                     border:1px solid transparent;
                     &:hover{
                        background-color: ${newColor(Colors[color])}
                        ${shadow ? 'transform: translateY(-2px);':""}
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
        color = null;
        if(Colors[props.color]) {
            color = props.color;
        }
    }
    let style = props.shadow ? ButtonColor(type,color,props.shadow) : ButtonColor(type,color);
    let jontas = `
        ${style}
        &:disabled{
          background:${Colors.neutral300};
          cursor: not-allowed;
          color: ${Colors.neutral900}
        }
    `;
    return jontas;
}

export default ButtonType;