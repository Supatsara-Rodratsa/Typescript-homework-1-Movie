import styled from 'styled-components'

const ButtonContainer = styled.button`
  padding: 8px 16px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  min-height: 40px;
  :hover {
    background: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.white};
  }
`
export default ButtonContainer
