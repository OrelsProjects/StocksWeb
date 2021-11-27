import React from 'react';
import { useSelector } from 'react-redux';
import LoginContainer from '../containers/login';
import Home from '../containers/home';

export default function Login() {
  const user = useSelector((reducers) => reducers.auth.user);
  // const initFirebase = () => {
  //   firebase.initializeApp(firebaseConfig);
  //   firebase.analytics();
  // };

  const completeLogin = () => {

  };

  return (
    user ? <Home />
      : (
        <div>
          <LoginContainer completeLogin={completeLogin} />
        </div>
      )
  );
}
