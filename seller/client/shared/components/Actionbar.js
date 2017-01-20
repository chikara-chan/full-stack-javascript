import React, {Component} from 'react'
import styles from '../sass/Actionbar'

class Actionbar extends Component {
    constructor() {
        super()
    }

    render() {
        const {className, title, back, action, handleClickAction} = this.props

        return (
            <div className={`${styles.actionbar} ${className}`}>
                <h1 className={styles.back}>
                    {back &&<i className={`iconfont icon-back ${styles.icon}`}></i>}
                </h1>
                <h1 className={styles.title}>{title}</h1>
                <h1 className={styles.action}  onClick={handleClickAction}>{action}</h1>
            </div>
        )
    }
}

export default Actionbar
