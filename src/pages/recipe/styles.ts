import { Theme } from '@/themes/ApplicationTheme'
import styled from 'styled-components'

const CreateRecipeContainer = styled.div<{theme:Theme}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  form {
    width: 100%;
    min-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 32px;
  }
  
  .inputContainer {
    label {
      font-size: ${props => props.theme.fontSizing.deskText};
      color: ${props => props.theme.colors.lightText};
    }
    width: 90%;
    text-align: start;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  
  .recipeContainer {
    width: 90%;
    min-height: 320px;
    background-color: ${props => props.theme.colors.lightBlue};
    border-radius: 5px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;

    .recipeHeader {
      display: flex;
      width: calc(90% + 16px);
      justify-content: space-between;
      text-align: start;
    }
    .option {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      padding: 0px 12px;
      align-items: center;
      width: 100%;
      background-color: white;
      height: 56px;
      border-radius: 5px;
      margin-bottom: 8px;
      box-shadow: 2px 3px #33333313;
      
      select {
        width: 80px;
        height: 40px;
        border: 1px dashed #33333333;
        border-radius: 5px;
      }
      div {
        display: flex;
        flex-direction: column;
        width: fit-content;
        height: 100%;
        border-radius: 5px;


      }
      .name {
        display: flex;
        align-items: center;
        font-size: ${props => props.theme.fontSizing.DeskSmallText};
        width: 120px;
        height: 40px;
        border: 1px dashed #33333333;
        border-radius: 5px;
      }
      label {
        font-size: ${props => props.theme.fontSizing.DeskSmallText};
        background-color: #f5f5f5;
        text-align: center;
      }

      input {
        width: 120px;
        border: none;
        height: 40px;
        border-radius: 5px;
        border: 1px dashed #33333333;

        ::placeholder {
          margin-left: 8px;
        }
      }

      .closeIcon {
        background-color: ${props => props.theme.colors.danger};
        border-radius: 5px;
      }
    }
  }

  .nextButton {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom:152px;
  }
`
export default CreateRecipeContainer