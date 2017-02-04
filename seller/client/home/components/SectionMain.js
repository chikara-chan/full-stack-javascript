import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import {Menu} from '@blueprintjs/core/dist/components/menu/menu'
import {MenuItem} from '@blueprintjs/core/dist/components/menu/menuItem'
import styles from '../sass/SectionMain'

class SectionMain extends Component {
    constructor() {
        super()

        this.handleClickSet = this.handleClickSet.bind(this)
        this.handleClickItem = this.handleClickItem.bind(this)
    }

    handleClickSet() {
        browserHistory.push('/me')
    }

    handleClickItem(e, tagIndex) {
        browserHistory.push(`/order?tagIndex=${tagIndex}`)
    }

    render() {
        const {shop} = this.props

        return (
            <section className={styles.sectionMain}>
                <div className={styles.header}>
                    <a className={styles.action}>
                        <i className={`iconfont icon-set ${styles.icon}`} onClick={this.handleClickSet}></i>
                        <p className={styles.desc}>设置</p>
                    </a>
                    <div className={styles.banner}>{shop.shopName}<span className={styles.badge}>营业中</span></div>
                    <div className={styles.menu}>
                        <a className={styles.link}>
                            <i className={`iconfont icon-manageorder ${styles.icon}`} onClick={(e) => {this.handleClickItem(e, 0)}}></i>
                            <p className={styles.title}>待接单</p>
                        </a>
                        <a className={styles.link}>
                            <i className={`iconfont icon-similarproduct ${styles.icon}`} onClick={(e) => {this.handleClickItem(e, 1)}}></i>
                            <p className={styles.title}>待发货</p>
                        </a>
                        <a className={styles.link}>
                            <i className={`iconfont icon-bags ${styles.icon}`} onClick={(e) => {this.handleClickItem(e, 2)}}></i>
                            <p className={styles.title}>待收货</p>
                        </a>
                        </div>
                </div>
            </section>
        )
    }
}

export default SectionMain
