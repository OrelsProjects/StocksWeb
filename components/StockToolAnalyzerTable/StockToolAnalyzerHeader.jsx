import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/StockToolAnalyzerHeader.module.css';
import HeaderColumn from './HeaderColumn';

export default function StockToolAnalyzerHeader({ columns }) {
  const [headerColumns, setHeaderColumns] = useState([]);

  function createHeaderColumns() {
    const headerColumnsArray = [];
    for (let i = 0; i < columns.length; i += 1) {
      headerColumnsArray.push(
        <HeaderColumn mainTitle={columns[i].mainTitle} subTitles={columns[i].subTitles} />,
      );
    }
    setHeaderColumns(headerColumnsArray);
  }

  useEffect(() => {
    createHeaderColumns();
  }, [columns]);

  return (
    <div className={styles.container}>
      <div className={styles.placeholder}>
        {headerColumns}
      </div>
    </div>
  );
}

StockToolAnalyzerHeader.defaultProps = {
  columns: [{
    mainTitle: 'Main Title',
    subTitles: ['sub title1', 'sub title2', 'sub title3'],
  }],
};

StockToolAnalyzerHeader.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    mainTitle: PropTypes.string,
    subTitles: PropTypes.arrayOf(PropTypes.string),
  })),
};
