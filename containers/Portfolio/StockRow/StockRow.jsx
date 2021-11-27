import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import Stock from '../../../classes/stock/stock';
import * as S from './style';

export default function StockRow({ stock }) {
  const [showActionsArrow, setShowActionsArrow] = useState(false);
  const [collapseActions, setCollapseActions] = useState(false);

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
      {showActionsArrow ? (
        <S.Options
          onMouseLeave={() => setCollapseActions(false)}
        >
          <S.OptionsArrow
            onClick={(event) => {
              event.preventDefault();
              setCollapseActions(!collapseActions);
            }}

          >
            <ArrowDown color="#dfdfdf" />
          </S.OptionsArrow>

          {collapseActions
            ? (
              <S.OptionsDropdown>
                <S.OptionsDropdownAction
                  onClick={(event) => {
                    event.preventDefault();
                    console.log('lol');
                  }}
                >
                  <Link href="addstock/MVRS">
                    Add stock
                  </Link>
                </S.OptionsDropdownAction>
              </S.OptionsDropdown>
            )
            : ''}
        </S.Options>
      ) : '' }
    </S.StockRow>
  );
}

StockRow.propTypes = {
  stock: PropTypes.objectOf(Stock).isRequired,
};
