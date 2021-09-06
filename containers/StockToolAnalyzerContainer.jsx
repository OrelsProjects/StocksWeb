import React, { useState, useEffect } from 'react';
import styles from './StockToolAnalyzerContainer.module.css';
import StockToolAnalyzerHeader from '../components/StockToolAnalyzerTable/StockToolAnalyzerHeader';
import StockToolAnalyzerRow from '../components/StockToolAnalyzerTable/StockToolAnalyzerRow';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/stockToolAnalyzer';

export default function StockToolAnalyzerContainer() {

  const dispatch = useDispatch();

  const [rowComponents, setRowComponents] = useState([]);
  const [lowRevenueGrowth, setlowRevenueGrowth] = useState(0);
  const [midRevenueGrowth, setMidRevenueGrowth] = useState(0);
  const [highRevenueGrowth, setHighhRevenueGrowth] = useState(0);
  const [lowShareChange, setLowShareChange] = useState(0);
  const [midShareChange, setMidShareChange] = useState(0);
  const [highShareChange, setHighhShareChange] = useState(0);
  const [lowProfitMargin, setLowProfitMargin] = useState(0);
  const [midProfitMargin, setMidProfitMargin] = useState(0);
  const [highProfitMargin, setHighhProfitMargin] = useState(0);
  const [lowFCFAsRevenue, setLowlowFCFAsRevenue] = useState(0);
  const [midFCFAsRevenue, setMidlowFCFAsRevenue] = useState(0);
  const [highFCFAsRevenue, setHighhlowFCFAsRevenue] = useState(0);
  const [lowPE, setLowPE] = useState(0);
  const [midPE, setMidPE] = useState(0);
  const [highPE, setHighhPE] = useState(0);
  const [lowPriceToFCF, setLowlowPriceToFCF] = useState(0);
  const [midPriceToFCF, setMidlowPriceToFCF] = useState(0);
  const [highPriceToFCF, setHighhlowPriceToFCF] = useState(0);
  const [lowDesiredAnnualReturn, setLowlowDesiredAnnualReturn] = useState(0);
  const [midDesiredAnnualReturn, setMidlowDesiredAnnualReturn] = useState(0);
  const [highDesiredAnnualReturn, setHighhlowDesiredAnnualReturn] = useState(0);

  const onLowRevenueGrowthChange = (event) => { actions.setLowRevenueGrowth(event.target.value) }
  const onMidRevenueGrowthChange = (event) => { actions.setMidRevenueGrowth(event.target.value) }
  const onHighRevenueGrowthChange = (event) => { actions.setHighRevenueGrowth(event.target.value) }

  const onLowShareChangeChange = (event) => { actions.setLowShareChange(event.target.value) }
  const onMidShareChangeChange = (event) => { actions.setMidShareChange(event.target.value) }
  const onHighShareChangeChange = (event) => { actions.setHighShareChange(event.target.value) }

  const onLowProfitMarginChange = (event) => { actions.setLowProfitMargin(event.target.value) }
  const onMidProfitMarginChange = (event) => { actions.setMidProfitMargin(event.target.value) }
  const onHighProfitMarginChange = (event) => { actions.setHighProfitMargin(event.target.value) }

  const onLowFCFAsRevenueChange = (event) => { actions.setLowFCFAsRevenue(event.target.value) }
  const onMidFCFAsRevenueChange = (event) => { actions.setMidFCFAsRevenue(event.target.value) }
  const onHighFCFAsRevenueChange = (event) => { actions.setHighFCFAsRevenue(event.target.value) }

  const onLowPEChange = (event) => { actions.setLowPE(event.target.value) }
  const onMidPEChange = (event) => { actions.setMidPE(event.target.value) }
  const onHighPEChange = (event) => { actions.setHighPE(event.target.value) }

  const onLowPriceToFCFChange = (event) => { actions.setLowPriceToFCF(event.target.value) }
  const onMidPriceToFCFChange = (event) => { actions.setMidPriceToFCF(event.target.value) }
  const onHighPriceToFCFChange = (event) => { actions.setHighPriceToFCF(event.target.value) }

  const onLowDesiredAnnualReturn = (event) => { actions.setLowDesiredAnnualReturn(event.target.value) }
  const onMidDesiredAnnualReturn = (event) => { actions.setMidDesiredAnnualReturn(event.target.value) }
  const onHighDesiredAnnualReturn = (event) => { actions.setHighDesiredAnnualReturn(event.target.value) }





  const rowsColumns = [{
    mainTitle: 'Rev. Growth %',
    subTitles: [{
      text: '50%',
      isInput: false,
      onInputChange: () => { },
    },
  },
  ]

  function setRows() {
    const rowComponentsArray = [];
    for (let i = 0; i < 8; i += 1) {
      rowComponentsArray.push(
        <StockToolAnalyzerRow
          columns={rowsColumns}
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
