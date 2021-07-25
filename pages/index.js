import LoginContainer from '../containers/login'
import { useSelector } from 'react-redux'
import HomeContainer from '../containers/home'

export default function Login() {

  const user = useSelector(reducers => reducers.auth.user)
  const initFirebase = () => {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }

  const completeLogin = () => {

  }

  return (
    user ? <HomeContainer /> :
      <div>
        <LoginContainer completeLogin={completeLogin} />
      </div>
  )
}
