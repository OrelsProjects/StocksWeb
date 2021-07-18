import styles from '../styles/StockProjection.module.css'

const StockProjection = (props) => {
    const stockToProject = props.stock
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.modulesContainer, styles.futureGrowthContainer}`}>

            </div>
            <div className={`${styles.modulesContainer, styles.howMuchToGrowContainer}`}>

            </div>
        </div>
    )
}

module.exports = StockProjection