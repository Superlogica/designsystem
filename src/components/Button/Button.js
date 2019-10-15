import Styled from 'styled-components';
import ButtonSize from "./props/size";
import ButtonType from "./props/type";
import ProximaNova from "../../resources/fonts/proximaNova";
import fullWidth from "./props/fullWidth";
import shadow from "./props/shadow"

const Button = Styled.button.attrs(props => ({
  disabled: props.disable
}))`
  ${ProximaNova}
  ${ButtonSize}
  ${ButtonType}
  ${fullWidth}
  ${shadow}
`;

export default Button;