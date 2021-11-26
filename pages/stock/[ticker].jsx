import React from 'react';
import { useRouter } from 'next/router';
import StockProjection from '../../containers/stockprojection';

export default function Ticker() {
  const router = useRouter();
  const { ticker } = router.query;
  return (
    <StockProjection ticker={ticker} />
  );
}
