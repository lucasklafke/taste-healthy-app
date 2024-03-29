import { Theme } from '@/themes/ApplicationTheme'
import styled from 'styled-components'

export const PageContainer = styled.div<{ theme: Theme }>`
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #749EB2;
  
  .title {
    width: 90%;
    text-align: start;
    font-family: ${props => props.theme.fonts.titles};
    font-style: italic;
    font-weight: 400;
    font-size: 24px;
    text-shadow: 0 2px #33333335;
    line-height: 32px;
    color: #f5f5f5;
    text-decoration: solid;
    margin: 16px;
    margin-bottom: 0;
  }

  .filters {
    display: flex;
    margin: 16px;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    max-width: 496px;
    min-width: 370px;
  }

  .feedContent {
    display: flex;
    align-items: center;
    width: 90%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 12px;
    margin-bottom: 72px;
  }

  .select {
    width: 120px;
  }
  
  .option {
    width: 120px;
    z-index: 5;
  }

  .separator {
    display: flex;
    border-width: 0.1px;
    width: calc(90% + 16px);
    margin: 0 0 0 0;
    margin-block-start: none;
    margin-block-end: none;
    margin-inline-start: none;
    margin-inline-end: none;
    height: 0;
    padding: 0;
  }

`