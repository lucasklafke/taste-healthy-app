import styled from 'styled-components'

export const FormularyError = styled.div`
  display: flex;
  height: fit-content;
  padding: 8px;
  width: 212px;
  margin-top: 12px;
  background-color: red;
  border-radius: 5px;
  opacity: 50%;
  align-items: center;
  justify-content: center;

  span{
    text-align: center;
    color: white;
    font-size: 16px;
    letter-spacing: 0.3px;
  }
`

export default FormularyError