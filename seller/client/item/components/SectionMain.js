import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import styles from '../sass/SectionMain'

class SectionMain extends Component {
    constructor() {
        super()

        this.handleClickAddItem = this.handleClickAddItem.bind(this)
    }

    handleClickAddItem() {
        browserHistory.push('/addItem')
    }

    render() {
        return (
            <section className={styles.sectionMain}>
                <a className={styles.fiexedBtn} onClick={this.handleClickAddItem}>
                    <i className={`iconfont icon-add ${styles.icon}`}></i>
                    <p className={styles.text}>添加商品</p>
                </a>
            </section>
        )
    }
}

export default SectionMain
