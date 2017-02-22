import styled from 'styled-components';
import ActionIcon from '../../ActionIcon';
import { LIST_ITEM_HALF_HEIGHT } from '../../../utils/styles.universal';

export default styled(ActionIcon)`
  height: ${LIST_ITEM_HALF_HEIGHT}px;
  width: ${LIST_ITEM_HALF_HEIGHT}px;
  margin: 10px;
  flex-grow: 0;
  flex-shrink: 0;
`;
