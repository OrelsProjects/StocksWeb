import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Stock from '../../../classes/stock/stock';
import * as S from './style';

export default function StockRow({ stock }) {
  const [showActionsArrow, setShowActionsArrow] = useState(false);

  return (
    <S.StockRow
      onMouseEnter={() => { console.log('hover'); setShowActionsArrow(true); }}
      onMouseLeave={() => setShowActionsArrow(false)}
    >
      <S.StockTicker>
        {stock.ticker}
      </S.StockTicker>
      <S.StockName>
        {stock.name}
      </S.StockName>
      <S.StockPrice>
        {stock.getPrice()}
      </S.StockPrice>
      {showActionsArrow ? <S.OptionsArrow /> : ''}
    </S.StockRow>
  );
}

StockRow.propTypes = {
  stock: PropTypes.objectOf(Stock).isRequired,
};
