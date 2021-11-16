import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from './style';
import firebase from 'firebase';
import StockRow from './StockRow';
import Stock from '../../classes/stock/stock';
import { IconButton } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@material-ui/core/styles';
import { IconPrimary } from '../../styles/IconsStyles';

export default function Portfolio() {

    const user = useSelector((reducers) => reducers.auth.user);

    const classes = makeStyles(IconPrimary)();

    useEffect(async () => {
        const db = firebase.firestore();

    }, [user]);


    
    return (
        <S.Portfolio>
            <S.StockRowsContainer>
                <S.StockRow>
                    <StockRow stock={new Stock(null, 'MTVS', null, null, 'Meta, Inc.')} />
                </S.StockRow>
            </S.StockRowsContainer>
            <IconButton variant="contained" color="primary" className={classes.main} >
                <AddIcon color="#5f2699" className={classes.main} />
            </IconButton>
        </S.Portfolio>
    )

}