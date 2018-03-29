import PropTypes from 'prop-types';
import React from 'react';
import TextareaInput from '../components-styled/TextareaInput';
import TextareaWrapperStyled from '../components-styled/TextareaWrapperStyled';
import ActionListItemIcon from '../../ActionListItemIcon';

const propTypes = {
  height: PropTypes.number,
  isDisabled: PropTypes.bool,
  isValid: PropTypes.bool,
  value: PropTypes.string.isRequired,
  renderIcon: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onIconClick: PropTypes.func,
};

const defaultProps = {
  height: 120,
  isDisabled: false,
  isValid: true,
  renderIcon: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  onIconClick: undefined,
};

export default class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onBlur(e) {
    const { onBlur } = this.props;
    this.setFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  }

  onFocus(e) {
    const { onFocus } = this.props;
    this.setFocus(true);
    if (onFocus) {
      onFocus(e);
    }
  }

  onChange(e) {
    const { onChange } = this.props;
    if (!onChange) {
      return;
    }
    onChange(e.target.value);
  }

  setFocus(isActive) {
    if (this.state.isActive === isActive) {
      return;
    }
    this.setState(() => ({
      isActive,
    }));
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      height,
      isDisabled,
      isValid,
      renderIcon,
      onBlur,
      onChange,
      onFocus,
      onIconClick,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars */
    const { isActive } = this.state;
    return (
      <TextareaWrapperStyled
        isEdit
        isTypingHighlight={isActive}
        isValid={isValid}
      >
        <TextareaInput
          {...props}
          disabled={isDisabled}
          styleHeight={height}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onFocus={this.onFocus}
        />
        {renderIcon ? (
          <ActionListItemIcon
            isDisabled={isDisabled}
            renderIcon={renderIcon}
            onClick={onIconClick}
          />
        ) : null}
      </TextareaWrapperStyled>
    );
  }
}

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;
