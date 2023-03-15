import ButtonContainer from './Button.styled'
import { ButtonPropType } from './Button.type'

const Button = ({ label, onClick }: ButtonPropType) => {
  return <ButtonContainer onClick={onClick}>{label}</ButtonContainer>
}

export default Button
