import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from './style';
import firebase from 'firebase';
import StockRow from './StockRow';
import Stock from '../../classes/stock/stock';

export default function Portfolio() {

    const user = useSelector((reducers) => reducers.auth.user);

    useEffect(async () => {
        const db = firebase.firestore();

    }, [user]);

    return (
        <S.Portfolio>
            <S.StockRow>
                <StockRow stock={new Stock(null, 'MTVS', null, null, 'Meta, Inc.')} />
            </S.StockRow>
        </S.Portfolio>
    )

}