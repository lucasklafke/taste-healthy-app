import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 360px;
  height: 60px;
  background: #21BACF;

  .contentContainer {
    width: 90%;
    max-width: 1028px;

    display: flex;
    height: fit-content;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .searchMenuContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    width: 80%;
  }
  .menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 0px;
    width: auto;
    gap: 8px;
    align-items: right;
  }
  .input {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    width: calc(100% - 34px);
    height: calc(100% - 4px);
    padding: 0 0 0 10px;
    
    background-color: #f5f5f5;
    flex: none;
    border: none;
    .input::placeholder {
      opacity: 1 !important;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0 30px #f5f5f5 inset !important;
      box-shadow: 0 0 0 30px #f5f5f5 inset !important;
      -webkit-text-fill-color: #333333 !important;
    }
  }
  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    text-align: center;
    color: #333333;
    /* position: absolute; */
    /* right: 0; */
  }
  .searchContainer {
    width: 70%;
    max-width: 400px;
    height: 36px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
    border-radius: 5px;
    
  }
  .icon {
    color: #333333;
    width: 36px;
    height: 36px;
  }
  .label {
    width: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 5;
    margin-left: 4px;
  }

  .search {
    width: 20px;
    height: 20px;
    color: black;
    z-index: 2;
  }

  /* @media (min-width: 600px)
  {
    .facet_sidebar
    {
      display: none;
    }
  } */

`