import React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import * as S from './style';

export default function Input({
  defaultValue, placeHolder, label, onChange,
}) {
  return (
    <S.Input>
      <TextField
        id="filled-basic"
        label={label}
        variant="filled"
        defaultValue={defaultValue}
        placeholder={placeHolder}
        onChange={onChange}
      />
    </S.Input>
  );
}

Input.defaultProps = {
  defaultValue: '',
  placeHolder: '',
  label: '',
};

Input.propTypes = {
  defaultValue: PropTypes.string,
  placeHolder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
