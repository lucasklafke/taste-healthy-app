import styled from 'styled-components'

export const CreateFoodOverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 212px;
  position: fixed;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background-color: #21BACF;
  z-index: 11;
  border-radius: 15px 15px 0 0;
  button {
    text-align: center;
    width: 90%;
    height: 42px;
    border-radius: 5px;
    background-color: #749EB2;
    color: #f5f5f5;
    margin-top: 12px;
  }
  .closeOverlay{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 24px;
    border-radius: 5ox;
    background-color: #749EB2;
    position: absolute;
    top: 0;
  }
`