/* eslint-disable  */
import React, { useState } from 'react';
import InputScreen from '../components/InputScreen';
import styles from '../styles/DCF.module.css';

export default function StockToolAnalyzer() {
  const [taxRate, setTaxRate] = useState(0.2);

  const onTaxRateChange = (taxRate) => {
      
  }

  return (
    <div className={styles.container}>
      <InputScreen />
    </div>
  );
}

// module.exports = StockToolAnalyzer;
