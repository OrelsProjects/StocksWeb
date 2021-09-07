import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import styles from './StockToolAnalyzerTable.module.css';
import StockToolAnalyzerHeader from './StockToolAnalyzerHeader';
import StockToolAnalyzerRow from './StockToolAnalyzerRow';
import * as actions from '../../actions/stockToolAnalyzer';
import Stock from '../../classes/stock/stock';

export default function StockToolAnalyzerTable({ stock }) {
  const dispatch = useDispatch();

  const [rowComponents, setRowComponents] = useState([]);

  const onLowRevenueGrowthChange = (event) => {
    dispatch(actions.setLowRevenueGrowth(event.target.value));
  };
  const onMidRevenueGrowthChange = (event) => {
    dispatch(actions.setMidRevenueGrowth(event.target.value));
  };
  const onHighRevenueGrowthChange = (event) => {
    dispatch(actions.setHighRevenueGrowth(event.target.value));
  };

  const onLowShareChangeChange = (event) => {
    dispatch(actions.setLowShareChange(event.target.value));
  };
  const onMidShareChangeChange = (event) => {
    dispatch(actions.setMidShareChange(event.target.value));
  };
  const onHighShareChangeChange = (event) => {
    dispatch(actions.setHighShareChange(event.target.value));
  };

  const onLowProfitMarginChange = (event) => {
    dispatch(actions.setLowProfitMargin(event.target.value));
  };
  const onMidProfitMarginChange = (event) => {
    dispatch(actions.setMidProfitMargin(event.target.value));
  };
  const onHighProfitMarginChange = (event) => {
    dispatch(actions.setHighProfitMargin(event.target.value));
  };

  const onLowFCFAsRevenueChange = (event) => {
    dispatch(actions.setLowFCFAsRevenue(event.target.value));
  };
  const onMidFCFAsRevenueChange = (event) => {
    dispatch(actions.setMidFCFAsRevenue(event.target.value));
  };
  const onHighFCFAsRevenueChange = (event) => {
    dispatch(actions.setHighFCFAsRevenue(event.target.value));
  };

  const onLowPEChange = (event) => {
    dispatch(actions.setLowPE(event.target.value));
  };
  const onMidPEChange = (event) => {
    dispatch(actions.setMidPE(event.target.value));
  };
  const onHighPEChange = (event) => {
    dispatch(actions.setHighPE(event.target.value));
  };

  const onLowPriceToFCFChange = (event) => {
    dispatch(actions.setLowPriceToFCF(event.target.value));
  };
  const onMidPriceToFCFChange = (event) => {
    dispatch(actions.setMidPriceToFCF(event.target.value));
  };
  const onHighPriceToFCFChange = (event) => {
    dispatch(actions.setHighPriceToFCF(event.target.value));
  };

  const onLowDesiredAnnualReturn = (event) => {
    dispatch(actions.setLowDesiredAnnualReturn(event.target.value));
  };
  const onMidDesiredAnnualReturn = (event) => {
    dispatch(actions.setMidDesiredAnnualReturn(event.target.value));
  };
  const onHighDesiredAnnualReturn = (event) => {
    dispatch(actions.setHighDesiredAnnualReturn(event.target.value));
  };

  const rowsColumns = [{
    mainTitle: 'Rev. Growth %',
    subTitles: [
      {
        text: '50',
        isInput: false,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: false,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: false,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: true,
        onChange: onLowRevenueGrowthChange,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: true,
        onChange: onMidRevenueGrowthChange,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: true,
        onChange: onHighRevenueGrowthChange,
        isPercentage: true,
      },
    ],
  },
  {
    mainTitle: 'Share Change',
    subTitles: [
      {
        text: '50',
        isInput: false,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: false,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: false,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: true,
        onChange: onLowShareChangeChange,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: true,
        onChange: onMidShareChangeChange,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: true,
        onChange: onHighShareChangeChange,
        isPercentage: true,
      },
    ],
  },
  {
    mainTitle: 'Profit Margin',
    subTitles: [
      {
        text: '50',
        isInput: false,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: false,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: false,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: true,
        onChange: onLowProfitMarginChange,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: true,
        onChange: onMidProfitMarginChange,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: true,
        onChange: onHighProfitMarginChange,
        isPercentage: true,
      },
    ],
  },
  {
    mainTitle: 'FCF as % of Rev.',
    subTitles: [
      {
        text: '50',
        isInput: false,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: false,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: false,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: true,
        onChange: onLowFCFAsRevenueChange,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: true,
        onChange: onMidFCFAsRevenueChange,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: true,
        onChange: onHighFCFAsRevenueChange,
        isPercentage: true,
      },
    ],
  },
  {
    mainTitle: 'P/E',
    subTitles: [
      {
        text: '20',
        isInput: false,
        isPercentage: false,
      },
      {
        text: '-',
        isInput: false,
        isPercentage: false,
      },
      {
        text: '-',
        isInput: false,
        isPercentage: false,
      },
      {
        text: '50',
        isInput: true,
        onChange: onLowPEChange,
        isPercentage: false,
      },
      {
        text: '50',
        isInput: true,
        onChange: onMidPEChange,
        isPercentage: false,
      },
      {
        text: '50',
        isInput: true,
        onChange: onHighPEChange,
        isPercentage: false,
      },
    ],
  },
  {
    mainTitle: 'P/FCF',
    subTitles: [
      {
        text: '50',
        isInput: false,
        isPercentage: false,
      },
      {
        text: '50',
        isInput: false,
        isPercentage: false,
      },
      {
        text: '50',
        isInput: false,
        isPercentage: false,
      },
      {
        text: '50',
        isInput: true,
        onChange: onLowPriceToFCFChange,
        isPercentage: false,
      },
      {
        text: '50',
        isInput: true,
        onChange: onMidPriceToFCFChange,
        isPercentage: false,
      },
      {
        text: '50',
        isInput: true,
        onChange: onHighPriceToFCFChange,
        isPercentage: false,
      },
    ],
  },
  {
    mainTitle: 'Desired Annual Return',
    subTitles: [
      {
        text: '50',
        isInput: false,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: false,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: false,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: true,
        onChange: onLowDesiredAnnualReturn,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: true,
        onChange: onMidDesiredAnnualReturn,
        isPercentage: true,
      },
      {
        text: '50',
        isInput: true,
        onChange: onHighDesiredAnnualReturn,
        isPercentage: true,
      },
    ],
  },
  ];

  function setRows() {
    const rowComponentsArray = [];
    for (let i = 0; i < rowsColumns.length; i += 1) {
      rowComponentsArray.push(
        <StockToolAnalyzerRow
          key={`stock-tool-analyzer-row-${uuid()}`}
          columns={rowsColumns[i]}
        />,
      );
    }
    setRowComponents(rowComponentsArray);
  }

  useEffect(() => {
    setRows();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <StockToolAnalyzerHeader />
      </div>
      <div className={styles.rowsContainer}>
        {rowComponents}
      </div>
    </div>
  );
}

StockToolAnalyzerTable.propTypes = {
  stock: PropTypes.oneOfType(Stock).isRequired,
};
