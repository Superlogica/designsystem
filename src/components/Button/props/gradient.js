import gradientBg from "../../../resources/gradient";
import setColor from "../../../resources/functions/fontColor";

const gradient = (props) => {
    if(props.gradient){
        let gradient = gradientBg["gradient"+props.gradient] ? gradientBg["gradient" + props.gradient] : gradientBg.gradient1;
        let bgGradient = `background-image: linear-gradient(53deg, ${gradient.c1}, ${gradient.c2});
                      color: ${setColor(gradient.c1,gradient.c2)};
                      border:none;&:hover{
                        background-image: linear-gradient(106deg, ${gradient.c1}, ${gradient.c2});
                        ${props.shadow ? 'transform: translateY(-2px);':""}
                      };
        `;

        return bgGradient;
    }

    return false;
}

export default gradient;