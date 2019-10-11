import Styled from 'styled-components';
import ButtonSize from "./props/size";
import ButtonType from "./props/type";
import ProximaNova from "../../resources/fonts/proximaNova";
import fullWidth from "./props/fullWidth";

const Button = Styled.button.attrs(props => ({
  disabled: props.disable
}))`
  ${ProximaNova}
  ${ButtonSize}
  ${ButtonType}
  ${fullWidth}
`;

export default Button;