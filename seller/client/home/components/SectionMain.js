import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import {Row, Col} from 'antd'
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
        const {shop, stats} = this.props

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
                {!!stats.length && <div>
                <div className={styles.card}>
                    <h1 className={styles.title}>每日数据统计</h1>
                    <Row className={styles.row}>
                        <Col span="8">
                            <div className={styles.top}>{stats[0].total}</div>
                            <div className={styles.bottom}>今日总订单</div>
                        </Col>
                        <Col span="8">
                            <div className={styles.top}>￥{stats[0].amount.toFixed(2)}</div>
                            <div className={styles.bottom}>今日交易额</div>
                        </Col>
                        <Col span="8">
                            <div className={styles.top}>￥{stats[0].sales}</div>
                            <div className={styles.bottom}>今日商品销量</div>
                        </Col>
                    </Row>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>每周数据统计</h1>
                    <Row className={styles.row}>
                        <Col span="8">
                            <div className={styles.top}>{stats[1].total}</div>
                            <div className={styles.bottom}>本周总订单</div>
                        </Col>
                        <Col span="8">
                            <div className={styles.top}>￥{stats[1].amount.toFixed(2)}</div>
                            <div className={styles.bottom}>本周交易额</div>
                        </Col>
                        <Col span="8">
                            <div className={styles.top}>￥{stats[1].sales}</div>
                            <div className={styles.bottom}>本周商品销量</div>
                        </Col>
                    </Row>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>每月数据统计</h1>
                    <Row className={styles.row}>
                        <Col span="8">
                            <div className={styles.top}>{stats[2].total}</div>
                            <div className={styles.bottom}>本月总订单</div>
                        </Col>
                        <Col span="8">
                            <div className={styles.top}>￥{stats[2].amount.toFixed(2)}</div>
                            <div className={styles.bottom}>本月交易额</div>
                        </Col>
                        <Col span="8">
                            <div className={styles.top}>￥{stats[2].sales}</div>
                            <div className={styles.bottom}>本月商品销量</div>
                        </Col>
                    </Row>
                </div>
                </div>}
            </section>
        )
    }
}

export default SectionMain
