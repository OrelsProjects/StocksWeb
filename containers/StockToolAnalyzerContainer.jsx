import React, { useState, useEffect } from 'react';
import styles from './StockToolAnalyzerContainer.module.css';
import StockToolAnalyzerHeader from '../components/StockToolAnalyzerTable/StockToolAnalyzerHeader';

export default function StockToolAnalyzerContainer() {
  const [rowComponents, setRowComponents] = useState([]);

  function setRows(){
    
  }

  useEffect(() => {
    setRows();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <StockToolAnalyzerHeader />
      </div>
      <div className={styles.rows}>
        {rowComponents}
      </div>
    </div>
  );
}
