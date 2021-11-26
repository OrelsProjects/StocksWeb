import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export default function Text({ text }) {
  return (
    <S.Text>
      {text}
    </S.Text>
  );
}

Text.defaultProps = {
  text: 'text',
};

Text.propTypes = {
  text: PropTypes.string,
};
