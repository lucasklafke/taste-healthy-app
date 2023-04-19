import styled from 'styled-components'
// interface Props {
//   border: string;
// }
export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 12px;
  gap: 16px;

  width: 320px;
  height: 56px;
  border: none;
  background: #E8F0FE;
  color: black;
  border-radius: 5px;


  ::placeholder{
    font-size: 11px;
    color: gray;
    font-size: 11px;
  }
`
