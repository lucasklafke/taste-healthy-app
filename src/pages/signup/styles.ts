import styled from 'styled-components'

interface Props {
  border: string;
}
const Input = styled.input<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 12px;
  gap: 16px;
  width: 320px;
  height: 56px;
  border: ${props => props.border};
  background: #E8F0FE;
  color: black;
  border-radius: 5px;

  ::placeholder{
    font-size: 10px;
    color: gray;
  }
`

export const Select = styled.select<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 12px;
  width: 374px;
  height: 56px;
  border: ${props => props.border};
  background: #E8F0FE;
  font-size: 12px;
  color: black;
  border-radius: 5px;
`

export default Input