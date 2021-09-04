import React, { useState, useEffect } from 'react';
import styles from '../styles/StockToolAnalyzerContainer.module.css';
import StockToolAnalyzerHeader from '../components/StockToolAnalyzerTable/StockToolAnalyzerHeader';

export default function StockToolAnalyzerContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <StockToolAnalyzerHeader />
      </div>
    </div>
  );
}
