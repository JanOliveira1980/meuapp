import { ButtonContainer } from './style';

const Button = ({label, onClick, onKeyDown}) => {
    return (
      <ButtonContainer onClick = {onClick} onKeyDown = {onKeyDown}>
        {label}
        
      </ButtonContainer>
    );
  }
  
  export default Button;
  