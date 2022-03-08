/* eslint-disable  */
import React, { useState } from 'react';
import InputScreen from '../components/InputScreen';
import styles from '../styles/DCF.module.css';
import { toAssumptions } from '../Navigation/DCF'
import * as dcfActions from '../actions/dcf';
import { useDispatch } from 'react-redux';

export default function StockToolAnalyzer() {
  const [taxRate, setTaxRate] = useState(0.2);
  const dispatch = useDispatch()
  const onTaxRateChange = (taxRate) => {

  }

  return (
    <div className={styles.container}>
      <InputScreen title='Select Ticker'
        subTitle=''
        subTitleLink=''
        inputsPlaceholders={['Ticker']}
        onClick={({ ticker }) => {
          debugger;
          dispatch(dcfActions.initiateDCF(ticker))
          toAssumptions();
        }} />
    </div>
  );
}

// module.exports = StockToolAnalyzer;
