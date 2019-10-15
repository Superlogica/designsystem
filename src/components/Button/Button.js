import Styled from 'styled-components';
import ProximaNova from "../../resources/fonts/proximaNova";
import ButtonSize from "./props/size";
import ButtonType from "./props/type";
import ButtonWidth from "./props/fullWidth";
import ButtonShadow from "./props/shadow";
import ButtonGradient from "./props/gradient";

const Button = Styled.button.attrs(props => ({
  disabled: props.disable
}))`
  ${ProximaNova}
  ${ButtonSize}
  ${ButtonType}
  ${ButtonWidth}
  ${ButtonShadow}
  ${ButtonGradient}
`;

export default Button;