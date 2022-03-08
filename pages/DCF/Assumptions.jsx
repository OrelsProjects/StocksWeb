import React from 'react';
import styles from '../../styles/Assumption.module.css';
import InputScreen from '../../components/InputScreen/InputScreen';
import { toWACCCalculation } from '../../Navigation/DCF';

export default function Assumptions() {

    const placeHolders = [
        'Tax Rate',
        'Discount Rate',
        'Perpetual Growth Rate',
        'EV/EBITDA',
        'Current Price',
        'Shares Outstanding',
        'Debt',
        'Cash',
        'Capex'
    ]

    return (
        <div className={styles.container}>
            <InputScreen
                title='Assumption'
                subTitle='stockspokedex.com'
                subTitleLink='stockspokedex.com'
                inputsPlaceholders={placeHolders}
                onClick={() => { 
                    toWACCCalculation() }} />
        </div>
    );
}
