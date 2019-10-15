import Colors from "../../../resources/color";
import setRgb from "../../../resources/functions/setRgb";
import shadowDp from "../../../resources/shadowDp";

const shadow = (props) =>{
    if(props.shadow){
        let color = props.disable ? Colors.neutral500 : (props.color ? Colors[props.color] : Colors.default);
        let rgb = setRgb(color);

        let btnShadow = `box-shadow: ${shadowDp.dp1} rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.8);
                      &:hover {
                        box-shadow: ${shadowDp.dp2} rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.8);
                      } `;
        return btnShadow;
    }

    return false;
}

export default shadow;