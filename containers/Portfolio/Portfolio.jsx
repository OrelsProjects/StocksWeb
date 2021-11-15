import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from './style';
import firebase from 'firebase';

export default function Portfolio() {

    const user = useSelector((reducers) => reducers.auth.user.user);

    useEffect(async () => {
        const db = 
    }, [user]);

    return (
        <S.Portfolio>

        </S.Portfolio>
    )

}