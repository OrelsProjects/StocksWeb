/* eslint-disable  */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/InputScreen.module.css';
import { TextField, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function InputScreen({
    title, subTitle, subTitleLink, inputsPlaceholders, onClick,
}) {
    const [isLoading, setIsLoading] = useState(false)
    const [parameters, setParameters] = useState({})
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
            <div className={styles.inputsContainer}>
                {
                    inputsPlaceholders.map(placeholder =>
                        <div className={styles.input} key={placeholder}>
                            <TextField id="outlined-basic" label={placeholder} variant="outlined"
                                onChange={(event) => {
                                    setParameters((parameters) =>{
                                        if(!parameters[placeholder.toLowerCase()]){
                                            parameters[placeholder.toLowerCase()] = '';
                                        }
                                        parameters[placeholder.toLowerCase()] = event.target.value;
                                        return parameters
                                    })
                                }} />
                        </div>
                    )
                }
            </div>
            {isLoading ? <CircularProgress /> : <Button onClick={() => {
                setIsLoading(true)
               onClick({ ticker: parameters.ticker })
            }} variant="contained">Next</Button>}

        </div>
    );
}

InputScreen.defaultProps = {
    title: 'Title',
    subTitle: 'SubTitle',
    subTitleLink: 'https://www.stockspokedex.com',
    onClick: (input) => { },
    inputsPlaceholders: ['placeholder'],
};

InputScreen.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    subTitleLink: PropTypes.string,
    onClick: PropTypes.func,
    inputsPlaceholders: PropTypes.arrayOf(PropTypes.string)
};
