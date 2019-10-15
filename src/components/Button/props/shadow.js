import Colors from "../../../resources/color";
import setRgb from "../../../resources/functions/setRgb";

const shadow = (props) =>{
    if(props.shadow){
        let color = props.disable ? Colors.neutral500 : (props.color ? Colors[props.color] : Colors.default);
        let rgb = setRgb(color);

        let jontas = `box-shadow:  0px 12px 10px -10px rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.6),
                      0px 1px 1px 0px rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.1),
                      0px 2px 1px -1px rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.1);`;
        return jontas;
    }

    return false;
}

export default shadow;