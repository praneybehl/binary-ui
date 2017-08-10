import ArrowRight from 'binary-ui-icons/binary/ArrowRight';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import ButtonContent from './ButtonContent.native';
import { TAP_HIGHLIGHT_COLOR } from '../../../utils/styles.native-and-web';

const propTypes = {
  color: PropTypes.string,
  isBold: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isEdit: PropTypes.bool,
  label: PropTypes.string.isRequired,
  renderIcon: PropTypes.func,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  color: '#000000',
  isBold: false,
  isDisabled: false,
  isEdit: true,
  renderIcon: () => (<ArrowRight />),
};

const Button = ({ color, isBold, isDisabled, isEdit, label, renderIcon, onClick, ...props }) => (
  !isDisabled ? (
    <TouchableHighlight underlayColor={TAP_HIGHLIGHT_COLOR} onPress={onClick} {...props} >
      <View style={{ width: '100%' }} {...props}>
        <ButtonContent
          color={color}
          isBold={isBold}
          isDisabled={isDisabled}
          isEdit={isEdit}
          label={label}
          renderIcon={renderIcon}
        />
      </View>
    </TouchableHighlight>
  ) : (
    <View style={{ width: '100%' }} {...props} >
      <ButtonContent
        color={color}
        isBold={isBold}
        isDisabled={isDisabled}
        isEdit={isEdit}
        label={label}
        renderIcon={renderIcon}
      />
    </View>
  )
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;