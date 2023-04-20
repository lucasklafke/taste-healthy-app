import styled from 'styled-components'
interface props {
  degrees: number
}
export const FooterContainer = styled.div<props>`
  position: fixed;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #21BACF;
  bottom: 0;
  width: 100%;
  z-index: 10;

  .icon{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 15px;
    background-color: #33333350;
  }

  .addOverlay {
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
  }
`

export const CreateFoodOverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 148px;
  position: fixed;
  bottom: 0;
  align-items: center;
  background-color: #21BACF;
  z-index: 11;
  border-radius: 15px 15px 0 0;
  margin-bottom: 48px;
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
