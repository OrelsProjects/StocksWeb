import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import * as S from './style';

export default function InputCalendar({ defaultValue, placeHolder, label }) {
  const [value, setValue] = useState(defaultValue);

  return (
    <S.Input>
      <TextField
        id="filled-basic"
        label={label}
        type="date"
        variant="filled"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </S.Input>
  );
}

InputCalendar.defaultProps = {
  defaultValue: '',
  placeHolder: '',
  label: '',
};

InputCalendar.propTypes = {
  defaultValue: PropTypes.string,
  placeHolder: PropTypes.string,
  label: PropTypes.string,
};
