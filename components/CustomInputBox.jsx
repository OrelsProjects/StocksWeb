import React, { useState } from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import styles from './CustomInputBox.module.css';

export default function CustomInputBox({ label, defaultValue, onChange, isPercentage }) {
  const onTextChange = (event) => {
    onChange(event);
  };

  return (
    <div className={styles.container}>
      <TextField
        id={`outlined-input-${uuid()}`}
        label={label ? null : label}
        onChange={onTextChange}
        variant="outlined"
        defaultValue={defaultValue}
        InputProps={isPercentage ? {
          startAdornment: <InputAdornment position="start">%</InputAdornment>,
        } : null}
      />
    </div>
  );
}

CustomInputBox.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isPercentage: PropTypes.bool,
};

CustomInputBox.defaultProps = {
  label: '',
  defaultValue: 'default value',
  isPercentage: true,
};
