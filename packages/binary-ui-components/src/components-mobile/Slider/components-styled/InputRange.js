import styled from 'styled-components';

export default styled.input`
  appearance: none;
  background-color: #cacaca;
  height: 1px;
  width: 100%;
  outline: none;
  &::-webkit-slider-thumb {
    appearance: none;
    background-color: white;
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;
    height: ${props => props.theme.sizeListItemHeight / 2}px;
    width: ${props => props.theme.sizeListItemHeight / 2}px;
  }
  &::-moz-range-thumb {
    background-color: white;
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;
    height: ${props => props.theme.sizeListItemHeight / 2}px;
    width: ${props => props.theme.sizeListItemHeight / 2}px;
  }
`;