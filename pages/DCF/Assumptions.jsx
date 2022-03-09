import React from 'react';
import { useDispatch } from 'react-redux';
import styles from '../../styles/Assumption.module.css';
import InputScreen from '../../components/InputScreen/InputScreen';
import { toWACCCalculation } from '../../Navigation/DCF';
import { setAssumptions } from '../../actions/dcf';

export default function Assumptions() {
  const dispatch = useDispatch();

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

  const parametersNames = [
    'taxRate',
    'discountRate',
    'perpetualGrowthRate',
    'evToEbitda',
    'currentPrice',
    'sharesOutstanding',
    'debt',
    'cash',
    'capex',
  ];

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
