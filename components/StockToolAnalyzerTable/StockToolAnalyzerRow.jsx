import React from 'react';
import PropTypes from 'prop-types';
import styles from './StockToolAnalyzerRow.module.css';

export default function StockToolAnalyzerRow({ columns, height }) {
  return (
    <div className={styles.container} style={{ height }} />
  );
}

StockToolAnalyzerRow.propTypes = {
  height: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.shape({
    mainTitle: PropTypes.string,
    subTitles: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      isInput: PropTypes.bool,
    })),
  })),
};

StockToolAnalyzerRow.defaultProps = {
  height: '50px',
  columns: [{
    mainTitle: 'Rev. Growth %',
    subTitles: [{
      text: '50%',
      isInput: false,
    },
    {
      text: '10%',
      isInput: false,
    },
    {
      text: '5%',
      isInput: false,
    },
    {
      text: '30%',
      isInput: true,
    },
    {
      text: '40%',
      isInput: true,
    },
    {
      text: '50%',
      isInput: true,
    },
    ],
  }],
};
