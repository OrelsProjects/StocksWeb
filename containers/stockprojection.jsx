import React from 'react';
import { Button } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/StockProjection.module.css';

const StockProjection = ({ stock, onBackClick }) => (
  <div className={`${styles.container}`}>
    <div className={`${styles.backArrow}`} onClick={onBackClick}>
      <ArrowBack style={{ color: '#dfdfdf' }} />
    </div>
    <div className={`${styles.modulesContainer}`}>
      <div className={`${styles.futureGrowthContainer}`}>
        {/* <FutureGrowth stock={stock} /> */}
        <div className={styles.stockToolAnalyzerButton}>
          <Link href="/StockToolAnalyzer">
            {/* <Button onClick={() => {
              useRouter().push('/StockToolAnalyzer');
            }}
            >
              Stock Tool Analyzer
            </Button> */}
            <a href="/StockToolAnalyzer">Stock Tool Analyzer</a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

module.exports = StockProjection;

StockProjection.propTypes = {
  stock: PropTypes.objectOf.isRequired,
  onBackClick: PropTypes.func.isRequired,
};
