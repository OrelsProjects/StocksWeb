/* eslint-disable react/jsx-filename-extension */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';

export default function Login() {
  const user = useSelector((reducers) => reducers.auth.user);

  useEffect(() => {
    Router.push('login');
  }, [user]);
  return (
    <div />
  );
}
