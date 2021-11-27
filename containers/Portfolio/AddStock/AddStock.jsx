import React, { useState } from 'react';
import Head from 'next/head';
import { IconButton } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';
import { ArrowBack } from '@material-ui/icons';
import Link from 'next/link';
import * as S from './style';
import Input from '../../../components/Customs/Input';
import dateUtils from '../../../utils/dateUtills';
import InputCalendar from '../../../components/Customs/InputCalendar';
import Text from '../../../components/Customs/Text';

// eslint-disable-next-line no-unused-vars
export default function AddStock({ ticker, portfolioId }) {
  const [shares, setShares] = useState(0);
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(dateUtils.formatDate(new Date()));

  const addStock = () => {
    console.log(shares);
    console.log(price);
    console.log(date);
  };

  return (
    <S.AddStock>
      <Head>
        <title>Add Stock</title>
      </Head>
      <Link href="/portfolio">
        <S.BackArrow>
          <ArrowBack style={{ color: '#dfdfdf' }} />
        </S.BackArrow>
      </Link>
      <Text>
        {ticker}
      </Text>
      <Input
        label="Shares"
        placeHolder="Shares"
        onChange={(event) => setShares(event.target.value)}
      />
      <Input
        label="Price"
        placeHolder="Price"
        onChange={(event) => setPrice(event.target.value)}
      />
      <InputCalendar
        label="Date"
        placeHolder="Date"
        defaultValue={date}
        onChange={(event) => setDate(event.target.value)}
      />

      <IconButton
        variant="contained"
        color="primary"
        onClick={addStock}
      >
        <AddIcon color="#5f2699" />
      </IconButton>
    </S.AddStock>
  );
}

AddStock.propTypes = {
  ticker: PropTypes.string.isRequired,
  portfolioId: PropTypes.string.isRequired,
};
