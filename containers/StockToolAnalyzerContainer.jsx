import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './StockToolAnalyzerContainer.module.css';
import StockToolAnalyzerTable from '../components/StockToolAnalyzer/StockToolAnalyzerTable';
import Stock from '../classes/stock/stock';

export default function StockToolAnalyzerContainer({ stock }) {
  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <StockToolAnalyzerTable stock/>
      </div>
      <div className={styles.analyzeButton}>
        <Button variant="outlined" color="primary" height={50} size="large">
          Analyze
        </Button>
      </div>
    </div>
  );
}

StockToolAnalyzerContainer.propTypes = {
  stock: PropTypes.oneOfType(Stock).isRequired,
};
