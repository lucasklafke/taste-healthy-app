import styled from 'styled-components'
interface Props {
  border: string;
}
export const Input = styled.input<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 12px;
  gap: 16px;

  width: 320px;
  height: 56px;
  border: ${props => props.border? 'red' : 'none'};
  background: #E8F0FE;
  color: black;
  border-radius: 5px;


  ::placeholder{
    font-size: 10px;
    color: gray;
  }
`
