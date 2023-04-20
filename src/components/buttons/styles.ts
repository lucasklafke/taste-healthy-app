import styled from 'styled-components'

interface props {
  degrees: number
}
export const Button = styled.div<props>`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 50px;
  z-index: 5;
  border: 1px solid #00000010;
  box-shadow: 3px 3px #00000013;
  margin-bottom: 12px;
  transform: rotate(${props => props.degrees}deg);
`