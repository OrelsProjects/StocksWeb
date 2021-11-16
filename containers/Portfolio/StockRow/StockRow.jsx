import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Stock from '../../../classes/stock/stock'
import * as S from './style';

export default function StockRow({ stock }) {
    return (
        <S.StockRow>
            <S.StockTicker>
                {stock.ticker}
            </S.StockTicker>
            <S.StockName>
                {stock.name}
            </S.StockName>
            <S.StockPrice>
                {stock.getPrice()}
            </S.StockPrice>
        </S.StockRow>
    );
}

StockRow.defaultProps = {
    stock: new Stock(null, 'MTVS', null, null, 'Meta, Inc.'),
}

StockRow.propTypes = {
    stock: PropTypes.objectOf(Stock),
}
