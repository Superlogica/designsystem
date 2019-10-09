import Styled from 'styled-components';
import Colors from '../../resources/colors';
import setColor from '../../resources/fontColor';

const Button = Styled.button`
    width: 120px;
    height: 48px; 
    color: ${props => props.bgColor ? setColor(Colors[props.bgColor]) : setColor(Colors.default)};
    border-radius: 4px;
    border:none;
    background-color: ${props => props.bgColor ? Colors[props.bgColor] : Colors.default};
`;

export default Button;