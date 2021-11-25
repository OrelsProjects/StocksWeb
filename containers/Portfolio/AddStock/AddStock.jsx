import React from 'react';
import Head from 'next/head';
import * as S from './style';
import Input from '../../../components/Customs/Input';
import dateUtils from '../../../utils/dateUtills';
import InputCalendar from '../../../components/Customs/InputCalendar';

export default function AddStock() {
  return (
    <S.AddStock>
      <Head>
        <title>Add Stock</title>
      </Head>
      <Input label="Shares" placeHolder="Shares" />
      <Input label="Price" placeHolder="Price" />
      <InputCalendar label="Date" placeHolder="Date" defaultValue={dateUtils.formatDate(new Date())} />
    </S.AddStock>
  );
}
