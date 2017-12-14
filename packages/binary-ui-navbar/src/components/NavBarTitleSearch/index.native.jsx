import IconSearch from 'binary-ui-icons/binary/Search';
import PropTypes from 'prop-types';
import React from 'react';
import TitleSearchInput from './components-styled/TitleSearchInput';
import TitleSearchWrapper from './components-styled/TitleSearchWrapper';

const propTypes = {
  isBold: PropTypes.bool,
  isValid: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};

const defaultProps = {
  isBold: false,
  isValid: true,
  placeholder: '',
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
};

class NavBarTitleSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.onBlur = this.onBlur.bind(this);
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

  setFocus(isActive) {
    if (this.state.isActive === isActive) {
      return;
    }
    this.setState(() => ({
      isActive,
    }));
  }

  render() {
    // Note: No need to pass 'onBlur' and 'onFocus' handlers.
    /* eslint-disable no-unused-vars */
    const {
      isBold,
      isValid,
      placeholder,
      value,
      onBlur,
      onChange,
      onFocus,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars */
    const { isActive } = this.state;
    return (
      <TitleSearchWrapper
        isEdit
        isTypingHighlight={isActive}
        isValid={isValid}
      >
        <IconSearch
          color="#A9A9A9"
          margin={5}
          size={20}
        />
        <TitleSearchInput
          autoCapitalize="none"
          autoFocus
          clearButtonMode="always"
          isBold={isBold}
          placeholder={isBold ? placeholder.toUpperCase() : placeholder}
          returnKeyType="search"
          value={isBold ? value.toUpperCase() : value}
          onBlur={this.onBlur}
          onChangeText={onChange}
          onFocus={this.onFocus}
          {...props}
        />
      </TitleSearchWrapper>
    );
  }
}  

NavBarTitleSearch.propTypes = propTypes;
NavBarTitleSearch.defaultProps = defaultProps;

export default NavBarTitleSearch;