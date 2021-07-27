import styles from '../styles/Loading.module.css'
import stocksLoadingLottie from '../assets/lotties/stocks-loading.json'
import Lottie from 'react-lottie'


export default function Loading() {

    const mainLottieOptions = {
        loop: true,
        autoplay: true,
        animationData: stocksLoadingLottie,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.loadingContainer}`}>
                <Lottie options={mainLottieOptions} />
            </div>
        </div>
    )
}