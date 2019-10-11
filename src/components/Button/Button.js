import Styled from 'styled-components';
import ButtonSize from "./props/size";
import ButtonType from "./props/type";

const Button = Styled.button`
  ${ButtonSize}
  ${ButtonType}
`;

export default Button;

