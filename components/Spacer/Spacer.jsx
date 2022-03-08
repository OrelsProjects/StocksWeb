import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export default function Input({
  space,
}) {
  return (
    <S.Spacer space={space} />
  );
}

Input.defaultProps = {
  space: 20,
};

Input.propTypes = {
  space: PropTypes.number,
};
