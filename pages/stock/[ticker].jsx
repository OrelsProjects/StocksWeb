import React from 'react';
import StockProjection from '../../containers/stockprojection';
import { useRouter } from 'next/router'

export default function Ticker() {
    const router = useRouter();
    const { ticker } = router.query;
    return (
        <StockProjection ticker={ticker} />
    );
}
