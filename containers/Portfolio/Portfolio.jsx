import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import firebase from 'firebase';
import { IconButton } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Stock from '../../classes/stock/stock';
import StockRow from './StockRow';
import * as S from './style';
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
        <Link href="/stock/BYND">
          <S.StockRow>
            <StockRow stock={new Stock(null, 'MTVS', null, null, 'Meta, Inc.')} />
          </S.StockRow>
        </Link>
      </S.StockRowsContainer>
      <Link href="/addStock">
        <IconButton variant="contained" color="primary">
          <AddIcon color="#5f2699" />
        </IconButton>
      </Link>
    </S.Portfolio>
  );
}
