/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';
import LoginContainer from '../containers/login';

export default function Login() {
  const user = useSelector((reducers) => reducers.auth.user);

  const completeLogin = () => {
    Router.push('portfolio');
  };

  const navigateToPortfolio = () => {
    Router.push('portfolio');
  };

  useEffect(() => {
    navigateToPortfolio();
  }, [user]);

  return (

    <div>
      <Head>
        <title>Stocks Web</title>
      </Head>
      <LoginContainer completeLogin={completeLogin} />
    </div>
  );
}
