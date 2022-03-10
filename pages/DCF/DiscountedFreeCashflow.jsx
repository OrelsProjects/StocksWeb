/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/Assumption.module.css';
import InputScreen from '../../components/InputScreen/InputScreen';
import { toResults } from '../../Navigation/DCF';
import { setDiscountedFreeCashflow } from '../../actions/dcf';

export default function Assumptions() {
  const dispatch = useDispatch();
  const stock = useSelector((reducers) => reducers.dcf.stock);

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
    ebit: `${stock?.getEbitByQuarter(4) ? stock?.getEbitByQuarter(4) : '100000'}`,
    ebitGrowth: '10',
    da: '2000000',
    daGrowth: '3',
    capex: `${stock?.getCapexByQuarter(4) ? stock?.getCapexByQuarter(4) : '1'}`,
    capexGrowth: '3',
    changesInNWC: '60000',
    changesInNWCGrowth: '4',
  };

  function getValuesArray(currentValues) { // Assuming 5 years
    const currentValuesInt = {};
    Object.keys(currentValues).forEach((key) => {
      currentValuesInt[key] = parseInt(currentValues[key], 10);
    });
    const futureValues = {
      ebit: [],
      da: [],
      capex: [],
      changesInNWC: [],
    };
    for (let i = 1; i < 6; i += 1) {
      futureValues.ebit[i - 1] = currentValuesInt.ebit * ((1 + (currentValuesInt.ebitGrowth / 100)) ** i);
      futureValues.da[i - 1] = currentValuesInt.da * ((1 + (currentValuesInt.daGrowth / 100)) ** i);
      futureValues.capex[i - 1] = currentValuesInt.capex * ((1 + (currentValuesInt.capexGrowth / 100)) ** i);
      futureValues.changesInNWC[i - 1] = currentValuesInt.changesInNWC * ((1 + (currentValuesInt.changesInNWCGrowth / 100)) ** i);
    }
    return futureValues;
  }

  return (
    <div className={styles.container}>
      <InputScreen
        title="Discounted Free Cashflow"
        subTitle="stockspokedex.com"
        subTitleLink="stockspokedex.com"
        inputsPlaceholders={placeholders}
        parametersNames={parametersNames}
        onClick={({ parameters }) => {
          dispatch(setDiscountedFreeCashflow(getValuesArray(parameters)));
          toResults();
        }}
      />
    </div>
  );
}
