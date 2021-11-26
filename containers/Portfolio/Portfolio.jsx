import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import firebase from 'firebase';
import { IconButton } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
import Stock from '../../classes/stock/stock';
import StockRow from './StockRow';
import * as S from './style';

export default function Portfolio() {
  const user = useSelector((reducers) => reducers.auth.user);

  useEffect(async () => {
    const db = firebase.firestore();
  }, [user]);

  return (
    <S.Portfolio>
      <S.StockRowsContainer>
        <Link href="/stock/BYND">
          <S.StockRow>
            <StockRow stock={new Stock(null, 'MVRS', null, null, 'Meta, Inc.')} />
          </S.StockRow>
        </Link>
      </S.StockRowsContainer>
      <Link href="/addstock/MVRS">
        <IconButton variant="contained" color="primary">
          <AddIcon color="#5f2699" />
        </IconButton>
      </Link>
    </S.Portfolio>
  );
}
