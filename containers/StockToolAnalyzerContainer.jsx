import React, { useState, useEffect } from 'react';
import styles from './StockToolAnalyzerContainer.module.css';
import StockToolAnalyzerHeader from '../components/StockToolAnalyzerTable/StockToolAnalyzerHeader';
import StockToolAnalyzerRow from '../components/StockToolAnalyzerTable/StockToolAnalyzerRow';

export default function StockToolAnalyzerContainer() {
  const [rowComponents, setRowComponents] = useState([]);
  const [inputTest, setInputTest] = useState('');

  function setRows() {
    const rowComponentsArray = [];
    for (let i = 0; i < 8; i += 1) {
      rowComponentsArray.push(
        <StockToolAnalyzerRow />,
      );
    }
    setRowComponents(rowComponentsArray);
  }

  useEffect(() => {
    setRows();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <StockToolAnalyzerHeader />
      </div>
      <div className={styles.rowsContainer}>
        {rowComponents}
      </div>
    </div>
  );
}
