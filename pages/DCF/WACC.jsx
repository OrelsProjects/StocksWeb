import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/Assumption.module.css';
import InputScreen from '../../components/InputScreen/InputScreen';
import { toDiscountedFreeCashflow } from '../../Navigation/DCF';
import { setWacc } from '../../actions/dcf';

export default function Wacc() {
  const dispatch = useDispatch();
  const stock = useSelector((reducers) => reducers.dcf.stock);

  const placeHolders = [
    'Risk Free Rate',
    'Beta',
    'Cost of Debt',
  ];

  const parametersNames = {
    riskFreeRate: '75',
    beta: `${stock?.getBeta() ? stock?.getBeta() : '1.1'}`,
    costOfDebt: '6',
  };

  return (
    <div className={styles.container}>
      <InputScreen
        title="WACC"
        subTitle={'cost_of_debt = interest_expense/total_debt'
          + '\n --- risk_free_rate = us10y'}
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
