import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import styles from './CustomInputBox.module.css';

export default function CustomInputBox({ label, defaultValue, onChange }) {
  const [textValue, setTextValue] = useState(defaultValue);

  const onTextChange = (event) => {
    setTextValue(event.target.value);
    onChange(event);
  };

  return (
    <div className={styles.container}>
      <TextField
        id={`outlined-input-${uuid()}`}
        label={label}
        value={textValue}
        onChange={onTextChange}
        variant="outlined"
        defaultValue={defaultValue}
      />
    </div>
  );
}

CustomInputBox.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

CustomInputBox.defaultProps = {
  label: 'label',
  defaultValue: 'default value',
};
