import React, { useEffect } from 'react';
import styles from '../../styles/Assumption.module.css';
import InputScreen from '../../components/InputScreen/InputScreen';
import { toDiscountedFreeCashflow } from '../../Navigation/DCF';

export default function Wacc() {

    const placeHolders = [
        'Risk Free Rate',
        'Equity Rate',
        'Beta',
        'Cost of Debt',
    ]

    useEffect(()=>{
        
    })

    return (
        <div className={styles.container}>
            <InputScreen
                title='WACC'
                subTitle='stockspokedex.com'
                subTitleLink='stockspokedex.com'
                inputsPlaceholders={placeHolders}
                onClick={() => { 
                    toDiscountedFreeCashflow() }} />
        </div>
    );
}
