import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import * as S from './style';

export default function Text({
  size,
  children,
  bold,
  color,
  center,
}) {
  return (
    <Typography>
      <S.Text size={size} bold={bold} color={color} center={center}>
        {children}
      </S.Text>
    </Typography>
  );
}

Text.defaultProps = {
  size: '14px',
  children: '',
  bold: false,
  color: '#000000',
  center: false,
};

Text.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
  bold: PropTypes.bool,
  color: PropTypes.string,
  center: PropTypes.bool,
};
