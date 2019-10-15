import Size from "../resources/size";
const ButtonSize = (props) => {

    let sizeButton = "medium";

    if (!Size[props.size]) {
        props.size = sizeButton;
    }

    let btnSize = `
        cursor:pointer;
        transition:0.2s all;
        outline:none;
        font-size: ${props.size ? Size[props.size].fontSize : Size.medium.fontSize};
        font-weight: ${props.size ? Size[props.size].fontWeight : Size.medium.fontWeight};
        font-style: ${props.size ? Size[props.size].fontStyle : Size.medium.fontStyle};
        font-stretch: ${props.size ? Size[props.size].fontStretch : Size.medium.fontStretch};
        line-height: ${props.size ? Size[props.size].lineHeight : Size.medium.lineHeight};
        letter-spacing: ${props.size ? Size[props.size].letterSpacing : Size.medium.letterSpacing};
        text-align: ${props.size ? Size[props.size].textAlign : Size.medium.textAlign};
        font-family: ${props.size ? Size[props.size].fontFamily : Size.medium.fontFamily};
        font-size: ${props.size ? Size[props.size].fontSize : Size.medium.fontSize};
        padding: ${props.size ? Size[props.size].padding : Size.medium.padding};
        border-radius: ${props.size ? Size[props.size].borderRadius : Size.medium.borderRadius};
        min-width: ${props.size ? Size[props.size].minWidth : Size.medium.minWidth};
        text-rendering: optimizeLegibility;
    `;
    
    return btnSize;
}

export default ButtonSize;