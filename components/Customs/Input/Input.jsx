import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import * as S from './style';

export default function Input({ defaultValue, placeHolder, label }) {
  const [value, setValue] = useState(defaultValue);

  return (
    <S.Input>
      <TextField
        id="filled-basic"
        label={label}
        variant="filled"
        value={value}
        placeholder={placeHolder}
        onChange={(event) => setValue(event.target.value)}
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
};
