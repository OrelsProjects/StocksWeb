import styles from '../styles/StockProjection.module.css'
import FutureGrowth from '../components/futuregrowth'
import HowMuchToGrow from '../components/howmuchtogrow'

const StockProjection = (props) => {
    const stockToProject = props.stock
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.backArrow}`} onClick={props.back}></div>
            <div className={`${styles.modulesContainer}`}>
                <div className={`${styles.futureGrowthContainer}`}>
                    <FutureGrowth stock = {stockToProject}/>
                </div>
                <div className={`${styles.howMuchToGrowContainer} ${styles.modulesContainer}`}>
                    <HowMuchToGrow />
                </div>
            </div>
        </div >
    )
}

module.exports = StockProjection