/* eslint-disable  */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/InputScreen.module.css';
import { TextField, Button } from '@mui/material';

export default function InputScreen({
    title, subTitle, subTitleLink, onClick,
}) {
    return (
        <div className={`${styles.container}`}>
            <div className={styles.title}>
                {title}
            </div>
            <a
                className={styles.subTitle}
                href={subTitleLink}
                target="_blank"
                rel="noreferrer"
            >
                {subTitle}
            </a>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="contained">Next</Button>
            <div onClick={() => onClick()} />
        </div>
    );
}

InputScreen.defaultProps = {
    title: 'Title',
    subTitle: 'SubTitle',
    subTitleLink: 'https://www.stockspokedex.com',
    onClick: (input) => { },
};

InputScreen.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    subTitleLink: PropTypes.string,
    onClick: PropTypes.func,
};
