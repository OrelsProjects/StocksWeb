import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './StockToolAnalyzerHeader.module.css';
import HeaderColumn from './HeaderColumn';

export default function StockToolAnalyzerHeader({ columns }) {
  const [headerColumns, setHeaderColumns] = useState([]);

  function createHeaderColumns() {
    const headerColumnsArray = [];
    for (let i = 0; i < columns.length; i += 1) {
      headerColumnsArray.push(
        <HeaderColumn
          mainTitle={columns[i].mainTitle}
          subTitles={columns[i].subTitles}
          width={`${100 / columns.length}%`} // 100% / [amount of columns]
        />,
      );
    }
    setHeaderColumns(headerColumnsArray);
  }

  useEffect(() => {
    createHeaderColumns();
  }, [columns]);

  return (
    <div className={styles.container}>
      <div className={styles.placeholder} />
      <div className={styles.headerColumnsContainer}>
        {headerColumns}
      </div>
    </div>
  );
}

StockToolAnalyzerHeader.defaultProps = {
  columns: [{
    mainTitle: 'Main Title',
    subTitles: ['1 year', '5 years', '10 years'],
  },
  {
    mainTitle: 'My Assumptions',
    subTitles: ['Low', 'Mid', 'High'],
  },
  ],
};

StockToolAnalyzerHeader.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    mainTitle: PropTypes.string,
    subTitles: PropTypes.arrayOf(PropTypes.string),
  })),
};
