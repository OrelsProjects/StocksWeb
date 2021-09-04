import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import styles from './HeaderColumn.module.css';

export default function HeaderColumn({ mainTitle, subTitles }) {
  const [subTitlesComponents, setSubTitlesComponents] = useState([]);

  function setSubTitles() {
    const subTitlesArray = [];
    subTitles.forEach((subTitle) => (
      subTitlesArray.push(
        <div key={`subTitle-${uuid()}`} className={styles.singleSubTitleContainer}>
          {subTitle}
        </div>,
      )
    ));
    setSubTitlesComponents(subTitlesArray);
    console.log(subTitlesArray);
  }

  useEffect(() => {
    setSubTitles();
  }, [subTitles]);

  return (
    <div className={styles.container}>
      <div className={styles.mainTitleContainer}>
        {mainTitle}
      </div>
      <div className={styles.divider} />
      <div className={styles.subTitlesContainer}>
        {subTitlesComponents}
      </div>
    </div>
  );
}

HeaderColumn.propTypes = {
  mainTitle: PropTypes.string,
  subTitles: PropTypes.arrayOf(PropTypes.string),
};

HeaderColumn.defaultProps = {
  mainTitle: 'Main Title',
  subTitles: ['sub1', 'sub2', 'sub3'],
};
