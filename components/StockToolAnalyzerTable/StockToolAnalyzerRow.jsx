import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import styles from './StockToolAnalyzerRow.module.css';

export default function StockToolAnalyzerRow({
  columns, groupWidth, columnsInGroupCount,
}) {
  const [subTitlesGroups, setSubTitlesGroups] = useState([]);
  const [column1Text, setColumn1Text] = useState('');
  const [column2Text, setColumn2Text] = useState('');
  const [column3Text, setColumn3Text] = useState('');
  const [column4Text, setColumn4Text] = useState('');
  const [column5Text, setColumn5Text] = useState('');
  const [column6Text, setColumn6Text] = useState('');

  const columnsUseStatesArray = [column1Text, column2Text, column3Text,
    column4Text, column5Text, column6Text];

  function onInputChange1(event) {
    setColumn1Text(event.target.value);
  }
  function onInputChange2(event) {
    console.log(event.target.value);
    setColumn2Text(event.target.value);
  }
  function onInputChange3(event) {
    setColumn3Text(event.target.value);
  }
  function onInputChange4(event) {
    setColumn4Text(event.target.value);
  }
  function onInputChange5(event) {
    setColumn5Text(event.target.value);
  }
  function onInputChange6(event) {
    setColumn6Text(event.target.value);
  }

  const setColumnsUseStatesArray = [onInputChange1, onInputChange2, onInputChange3,
    onInputChange4, onInputChange5, onInputChange6];

  function createSingleColumnsGroup(startIndex, endIndex) {
    const subTitlesGroup = [];
    for (let i = startIndex; i < endIndex; i += 1) {
      if (i > columns.subTitles.length) break;
      subTitlesGroup.push(
        <div className={styles.singleColumn}>
          {columns.subTitles[i].isInput
            ? (
              <TextField
                id="ticker"
                label="Years"
                type="string"
                // eslint-disable-next-line react/jsx-no-bind
                onChange={onInputChange2}
                value={column2Text}
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
        {subTitlesGroups }
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
      onInputChange: PropTypes.func,
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
      onInputChange: () => {},
    },
    {
      text: '10%',
      isInput: false,
      onInputChange: () => {},
    },
    {
      text: '5%',
      isInput: false,
      onInputChange: () => {},
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
