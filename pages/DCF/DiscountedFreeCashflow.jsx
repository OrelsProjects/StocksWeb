import React from 'react';
import styles from '../../styles/Assumption.module.css';
import InputScreen from '../../components/InputScreen/InputScreen';
import { toWACCCalculation } from '../../Navigation/DCF';

export default function Assumptions() {

    const placeHolders = [
        'EBIT',
        'EBIT Growth',
        'D&A',
        'D&A Growth',
        'Capex',
        'Capex Growth',
        'Changes in NWC',
        'Changes in NWC Growth',
    ]

    return (
        <div className={styles.container}>
            <InputScreen
                title='Discounted Free Cashflow'
                subTitle='stockspokedex.com'
                subTitleLink='stockspokedex.com'
                inputsPlaceholders={placeHolders}
                onClick={() => { 
                    toWACCCalculation() }} />
        </div>
    );
}
