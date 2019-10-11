import Styled from 'styled-components';
import ButtonSize from "./props/size";
import ButtonType from "./props/type";
import ProximaNova from "../../resources/fonts/proximaNova";

const Button = Styled.button`
  ${ProximaNova}
  ${ButtonSize}
  ${ButtonType}
`;

export default Button;