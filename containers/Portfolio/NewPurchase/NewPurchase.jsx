import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import * as S from './style';
export function NewPurchase({ onPurchaseDone }) {

    return (
        <S.NewPurchase>

        </S.NewPurchase>
    )

}

NewPurchase.propTypes = {
    onPurchaseDone: PropTypes.func.isRequired,
};
