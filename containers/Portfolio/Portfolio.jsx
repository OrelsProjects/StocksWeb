import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
import Stock from '../../classes/stock/stock';
import StockRow from './StockRow';
import * as S from './style';
import Input from '../../components/Customs/Input';

export default function Portfolio() {

  const stock = new Stock(null, 'MVRS', null, null, 'Meta, Inc.');
  const [ticker, setTicker] = useState("")

  return (
    <S.Portfolio>
      <S.StockSearch>
        <Input
        label="Ticker"
        placeHolder="MVRS"
        onChange={(event) => setTicker(event.target.value)}
        />
      </S.StockSearch>
      <S.StockRowsContainer>
        <Link href="/stock/BYND">
          <S.StockRow>
            <StockRow stock={stock} />
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
