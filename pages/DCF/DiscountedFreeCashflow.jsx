import React from 'react';
import { useDispatch } from 'react-redux';
import styles from '../../styles/Assumption.module.css';
import InputScreen from '../../components/InputScreen/InputScreen';
import { toWACCCalculation } from '../../Navigation/DCF';
import { setDiscountedFreeCashflow } from '../../actions/dcf';

export default function Assumptions() {
  const dispatch = useDispatch();

  const placeholders = [
    'EBIT',
    'EBIT Growth',
    'D&A',
    'D&A Growth',
    'Capex',
    'Capex Growth',
    'Changes in NWC',
    'Changes in NWC Growth',
  ];

  const parametersNames = {
    ebit: '',
    ebitGrowth: '',
    da: '',
    daGrowth: '',
    capex: '',
    capexGrowth: '',
    changesInNWC: '',
    changesInNWCGrowth: '',
  };

  return (
    <div className={styles.container}>
      <InputScreen
        title="Discounted Free Cashflow"
        subTitle="stockspokedex.com"
        subTitleLink="stockspokedex.com"
        inputsPlaceholders={placeholders}
        parametersNames={parametersNames}
        onClick={({ parameters }) => {
          dispatch(setDiscountedFreeCashflow(parameters));
          toWACCCalculation();
        }}
      />
    </div>
  );
}
