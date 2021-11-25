import React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import * as S from './style';

export default function InputCalendar({ defaultValue, onChange, label }) {
  return (
    <S.Input>
      <TextField
        id="filled-basic"
        label={label}
        type="date"
        variant="filled"
        defaultValue={defaultValue}
        onChange={onChange}
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
  onChange: PropTypes.func.isRequired,
};
