import React, {Component} from 'react'
import styles from '../sass/Alert'

class Alert extends Component {
    constructor() {
        super()
    }

    render() {
        const {alert} = this.props

        if (!alert.show) {
            return null
        } else {
            return (
                <div className={`${styles.alert}`}>
                    {alert.status ?
                        <i className={`iconfont icon-selected ${styles.iconOk}`}></i> :
                        <i className={`iconfont icon-close ${styles.iconError}`}></i>
                    }
                    {alert.message &&
                        <p className={styles.message}>{alert.message}</p>
                    }
                </div>
            )
        }
    }
}

export default Alert
