import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../../styles/Assumption.module.css';
import InputScreen from '../../components/InputScreen/InputScreen';
import { toDiscountedFreeCashflow } from '../../Navigation/DCF';
import { setWacc } from '../../actions/dcf';

export default function Wacc() {
  const dispatch = useDispatch();

  const placeHolders = [
    'Risk Free Rate',
    'Equity Rate',
    'Beta',
    'Cost of Debt',
  ];

  const parametersNames = [
    'riskFreeRate',
    'equityRate',
    'beta',
  ];

  useEffect(() => {

  });

  return (
    <div className={styles.container}>
      <InputScreen
        title="WACC"
        subTitle="stockspokedex.com"
        subTitleLink="stockspokedex.com"
        inputsPlaceholders={placeHolders}
        parametersNames={parametersNames}
        onClick={({ parameters }) => {
          dispatch(setWacc(parameters));
          toDiscountedFreeCashflow();
        }}
      />
    </div>
  );
}
