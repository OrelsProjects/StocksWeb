import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import CustomInputBox from '../CustomInputBox';
import styles from './StockToolAnalyzerRow.module.css';

export default function StockToolAnalyzerRow({
  columns, groupWidth, columnsInGroupCount,
}) {
  const [subTitlesGroups, setSubTitlesGroups] = useState([]);

  function createSingleColumnsGroup(startIndex, endIndex) {
    const subTitlesGroup = [];
    for (let i = startIndex; i < endIndex; i += 1) {
      if (i > columns.subTitles.length) break;
      subTitlesGroup.push(
        <div className={styles.singleColumn}>
          {columns.subTitles[i].isInput
            ? (
              <CustomInputBox
                label="hi"
                defaultValue={columns.subTitles[i].text}
                onChange={columns.subTitles[i].onChange}
              />
            )
            : columns.subTitles[i].text}
        </div>,
      );
    }
    return (
      <div className={styles.singleGroupContainer} style={{ width: groupWidth }}>
        {subTitlesGroup}
      </div>
    );
  }

  function createColumnsGroups() {
    const subTitlesGroupsArray = [];
    for (let i = 0; i < columns.subTitles.length; i += columnsInGroupCount) {
      subTitlesGroupsArray.push(createSingleColumnsGroup(i, i + columnsInGroupCount));
    }
    setSubTitlesGroups(subTitlesGroupsArray);
  }
  useEffect(() => {
    createColumnsGroups();
  }, [columns]);

  return (
    <div className={styles.container}>
      <div className={styles.mainTitle}>
        {columns.mainTitle}
      </div>
      <div className={styles.groupsContainer}>
        {subTitlesGroups}
      </div>
    </div>
  );
}

StockToolAnalyzerRow.propTypes = {
  columns: PropTypes.shape({
    mainTitle: PropTypes.string,
    subTitles: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      isInput: PropTypes.bool,
      onChange: PropTypes.func,
    })),
  }),
  // How many groups of subTitles are there.
  columnsInGroupCount: PropTypes.number,
  // What is the width of each group of subTitles.
  groupWidth: PropTypes.string,
};

StockToolAnalyzerRow.defaultProps = {
  columns: {
    mainTitle: 'Rev. Growth %',
    subTitles: [{
      text: '50%',
      isInput: false,
      onInputChange: () => { },
    },
    {
      text: '10%',
      isInput: false,
      onInputChange: () => { },
    },
    {
      text: '5%',
      isInput: false,
      onInputChange: () => { },
    },
    {
      text: '30%',
      isInput: true,
      onInputChange: (event) => { console.log(event.target.value); },
    },
    {
      text: '40%',
      isInput: true,
      onInputChange: (event) => { console.log(event.target.value); },
    },
    {
      text: '50%',
      isInput: true,
      onInputChange: (event) => { console.log(event.target.value); },
    },
    ],
  },
  groupWidth: '50%',
  columnsInGroupCount: 3,
};
