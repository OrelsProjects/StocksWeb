import React, { useState, useEffect } from 'react';
import firebaseApp from 'firebase/app';
import firebase from 'firebase';
import 'firebase/auth';
import {
  TextField, Button, InputAdornment,
} from '@material-ui/core';
import { Email, Lock } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import Lottie from 'react-lottie';
import User from '../classes/user';
import styles from '../styles/Login.module.css';
import stocksLottie from '../assets/lotties/stocks-login.json';
import * as authActions from '../actions/auth';
import firebaseClient from '../firebaseClient';
import { collections } from '../constants';

export default function Login() {
  firebaseClient();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const user = useSelector((reducers) => reducers.auth.user);

  const mainLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: stocksLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  async function handleLogin() {
    await firebaseApp.auth().signInWithEmailAndPassword(email, password).then(() => {
      alert('user logged in!');
    }).catch((error) => {
      alert(`error: ${error.message}`);
    });
  }

  const handleEnterPress = () => {
    handleLogin();
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      if (email && password) {
        handleEnterPress();
        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    firebaseApp.auth().onAuthStateChanged(async (res) => {
      if (res) {
        dispatch(authActions.login({ user: new User(res) }));
      }
    });
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [password, email]);

  async function handleRegister() {
    await firebaseApp.auth().createUserWithEmailAndPassword(email, password).then((res) => {
      firebase.firestore().collection(collections.users).doc(res.uid);
      alert(`user created! ${email}`);
    }).catch((error) => {
      alert(`error: ${error.message}`);
    });
  }

  async function handleGoogleLogin() {
    const provider = new firebaseApp.auth.GoogleAuthProvider();
    await
    //  firebaseApp.auth().signInWithEmailAndPassword(email, password)
    firebaseApp.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const { credential } = result;

        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = credential.accessToken;
        // The signed-in user info.
        const { user } = result;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const { email } = error;
        // The firebase.auth.AuthCredential type that was used.
        const { credential } = error;
        alert(`error: ${error.message}`);
      });
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  return (
    user ? '' : (
      <div className={`${styles.container}`}>
        <form className={`${styles.form}`}>
          <TextField
            id="email"
            label="Email"
            variant="filled"
            onChange={handleChangeEmail}
            InputLabelProps={{
              classes: {
                root: styles.textFieldRoot,
                focused: styles.textFieldFocused,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="password"
            label="Password"
            variant="filled"
            type="password"
            onChange={handleChangePassword}
            InputLabelProps={{
              classes: {
                root: styles.textFieldRoot,
                focused: styles.textFieldFocused,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
          />
          <div className={`${styles.forgotPassword}`}>Forgot Password?</div>
          <div className={`${styles.buttonMargin}`}>
            <Button
              className={`${styles.loginButton}`}
              onClick={handleLogin}
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </div>
          <div className={`${styles.buttonMargin}`}>
            <Button
              className={`${styles.loginButton}`}
              onClick={handleRegister}
              variant="contained"
              color="primary"
            >
              Register
            </Button>
          </div>
          <div className={`${styles.buttonMargin}`}>
            <Button
              color="secondary"
              variant="contained"
              className={`${styles.loginGoogle}`}
              onClick={handleGoogleLogin}
            >
              Google
            </Button>
          </div>
        </form>
        <div className={`${styles.animationContainer}`}>
          <div className={`${styles.animation} ${styles.padding}`}>
            <Lottie options={mainLottieOptions} />
          </div>
        </div>
      </div>
    )
  );
}
