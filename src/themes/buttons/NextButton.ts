import styled from 'styled-components'
import { Theme } from '../ApplicationTheme'

const NextButton = styled.button<{theme: Theme}>`
  display: flex;
  box-sizing: border-box;
  width: 90%;
  min-width: 280px;
  height: 56px;
  padding: 12px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.lightBlue};
  font-family: ${props => props.theme.fonts.titles};
  font-size: ${props => props.theme.fontSizing.deskSectionTitle};
  color: ${props => props.theme.colors.darkText};
  border-radius: 5px;
`

export default NextButton