import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/Assumption.module.css';
import InputScreen from '../../components/InputScreen/InputScreen';
import { toWACCCalculation } from '../../Navigation/DCF';
import { setAssumptions } from '../../actions/dcf';

export default function Assumptions() {
  const dispatch = useDispatch();
  const stock = useSelector((reducers) => reducers.dcf.stock);

  const placeholders = [
    'Tax Rate',
    'Discount Rate',
    'Perpetual Growth Rate',
    'EV/EBITDA',
    'Current Price',
    'Shares Outstanding',
    'Debt',
    'Cash',
    'Capex',
  ];

  const parametersNames = {
    taxRate: '20',
    perpetualGrowthRate: '2.5',
    evToEbitda: `${stock?.getForwardPE() ? stock?.getForwardPE() : '15'}`,
    currentPrice: `${stock?.getPrice() ? stock?.getPrice() : '62'}`,
    sharesOutstanding: `${stock?.getSharesOutstanding() ? stock?.getSharesOutstanding() : '24500000'}`,
    debt: '3000000',
    cash: `${stock?.getCashByQuarter(4) ? stock?.getCashByQuarter(4) : '168000'}`,
    capex: `${stock?.getCapexByQuarter(4) ? stock?.getCapexByQuarter(4) : '3000000'}`,
    fiscalYearEnd: '2022', // Todo make it a date picker
  };

  return (
    <div className={styles.container}>
      <InputScreen
        title="Assumption"
        subTitle="stockspokedex.com"
        subTitleLink="stockspokedex.com"
        inputsPlaceholders={placeholders}
        parametersNames={parametersNames}
        onClick={({ parameters }) => {
          dispatch(setAssumptions(parameters));
          toWACCCalculation();
        }}
      />
    </div>
  );
}
