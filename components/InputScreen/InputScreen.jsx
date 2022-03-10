/* eslint-disable  */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/InputScreen.module.css';
import { TextField, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function InputScreen({
    title, subTitle, subTitleLink, inputsPlaceholders, onClick, parametersNames
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
                    Object.keys(parametersNames).map(parameterName => {
                        const value = parametersNames[parameterName]
                        parameters[parameterName] = value
                        return (<div className={styles.input} key={parameterName}>
                            <TextField id="outlined-basic" label={parameterName} variant="outlined" value={value}
                                onChange={(event) => {
                                    setParameters((parameters) => {
                                        if (!parameters[parameterName]) {
                                            parameters[parameterName] = '';
                                        }
                                        parameters[parameterName] = event.target.value;
                                        return parameters
                                    })
                                }} />
                        </div>)
                    }
                    )
                }
            </div>
            {isLoading ? <CircularProgress /> : <Button onClick={() => {
                setIsLoading(true)
                onClick({ parameters })
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
    inputsPlaceholders: PropTypes.arrayOf(PropTypes.string),
    parametersNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};
