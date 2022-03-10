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
    discountRate: '7.5',
    perpetualGrowthRate: '2.5',
    evToEbitda: `${stock?.getForwardPE() ? stock?.getForwardPE() : ''}`,
    currentPrice: `${stock?.getPrice() ? stock?.getPrice() : ''}`,
    sharesOutstanding: `${stock?.getSharesOutstanding() ? stock?.getSharesOutstanding() : ''}`,
    debt: '',
    cash: `${stock?.getCashByQuarter(4) ? stock?.getCashByQuarter(4) : ''}`,
    capex: `${stock?.getCapexByQuarter(4) ? stock?.getCapexByQuarter(4) : ''}`,
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
