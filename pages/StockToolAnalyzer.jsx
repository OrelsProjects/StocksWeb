import React from 'react';
import StockToolAnalyzerContainer from '../containers/StockToolAnalyzerContainer';
import styles from '../styles/StockToolAnalyzer.module.css';

export default function StockToolAnalyzer() {
  return (
    <div className={styles.container}>
      <StockToolAnalyzerContainer />
    </div>
  );
}
