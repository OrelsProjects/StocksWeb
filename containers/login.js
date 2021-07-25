import React, { useState, useEffect } from 'react'
import styles from '../styles/Login.module.css'
import firebaseClient from '../firebaseClient'
import firebaseApp from 'firebase/app'
import "firebase/auth"
import { TextField, Button, InputAdornment, Avatar } from "@material-ui/core"
import { Email, Lock } from "@material-ui/icons"
import { useDispatch, useSelector } from 'react-redux'
import * as authActions from "../actions/auth"
import stocksLottie from '../assets/lotties/stocks-login.json'
import Lottie from 'react-lottie'

export default function Login() {
    firebaseClient()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const user = useSelector(reducers => reducers.auth.user)

    const mainLottieOptions = {
        loop: true,
        autoplay: true,
        animationData: stocksLottie,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const handleKeyUp = (e) => {
        if (e.key == "Enter") {
            if (email && password) {
                handleEnterPress()
                e.preventDefault()
            }
        }
    }

    useEffect(() => {
        firebaseApp.auth().signOut()
        window.addEventListener("keyup", handleKeyUp)
        firebaseApp.auth().onAuthStateChanged(function (user) {
            if (user) {
                dispatch(authActions.login({ user: user }))
            }
        })
        return () => {
            window.removeEventListener("keyup", handleKeyUp)
        }
    }, [password, email])

    async function handleRegister() {
        await firebaseApp.auth().createUserWithEmailAndPassword(email, password).then(function () {
            alert(`user created! ${email}`)
        }).catch(function (error) {
            alert('error: ' + error.message)
        })
    }

    async function handleLogin() {
        await firebaseApp.auth().signInWithEmailAndPassword(email, password).then(function () {
        }).catch(function (error) {
            alert('error: ' + error.message)
        })
    }

    function handleChangeEmail(event) {
        setEmail(event.target.value)
    }

    function handleChangePassword(event) {
        setPassword(event.target.value)
    }

    const handleEnterPress = () => {
        handleLogin()
    }

    return (
        user ? "" :
            <div className={`${styles.container}`}>
                <form className={`${styles.form}`}>
                    <TextField id="email" label="Email" variant="filled"
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
                    <TextField id="password" label="Password" variant="filled"
                        type='password'
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
                        <Button className={`${styles.loginButton}`} onClick={handleLogin}
                            variant="contained" color="primary">
                            Login
                </Button>
                    </div>
                    <div className={`${styles.buttonMargin}`}>
                        <Button className={`${styles.loginButton}`} onClick={handleRegister}
                            variant="contained" color="primary">
                            Register
                </Button>
                    </div>
                    <div className={`${styles.buttonMargin}`}>
                        <Button
                            color="secondary"
                            variant="contained"
                            className={`${styles.loginGoogle}`}>
                            Google
                </Button>
                    </div>
                </form>
                <div className={`${styles.animationContainer}`}>
                    <div className={`${styles.animation} ${styles.padding}`}>
                        <Lottie options={mainLottieOptions} />
                    </div>
                </div>
            </div >
    )
}