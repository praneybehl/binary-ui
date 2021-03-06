import styled from 'styled-components';

export default styled.View`
  display: flex;
  flex-shrink: 0;
  height: ${props => props.theme.sizeListItemHeight}px;
  justify-content: center;
  left: -10px;
  position: relative;
  width: 10px;
`;
