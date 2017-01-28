import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import styles from '../sass/Actionbar'

class Actionbar extends Component {
    constructor() {
        super()

        this.handleClickBack = this.handleClickBack.bind(this)
    }

    handleClickBack() {
        browserHistory.goBack()
    }

    render() {
        const {className, title, back, action, handleClickAction, handleClickTitle} = this.props

        return (
            <div className={`${styles.actionbar} ${className}`}>
                <h1 className={styles.back} onClick={this.handleClickBack}>
                    {back &&<i className={`iconfont icon-back ${styles.icon}`}></i>}
                </h1>
                <h1 className={styles.title} onClick={handleClickTitle}>{title}</h1>
                <h1 className={styles.action} onClick={handleClickAction}>{action}</h1>
            </div>
        )
    }
}

export default Actionbar
