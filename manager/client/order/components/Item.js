import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import styles from '../sass/Item'
import {switchStatus} from '../../shared/switcher'
import {formatDate} from '../../shared/date-fns'

class SectionMain extends Component {
    constructor() {
        super()

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const {order, actions} = this.props

        actions.getOrder(order.id)
    }

    render() {
        const {order} = this.props,
            {item: items} = order

        return (
            <div className={styles.item} onClick={this.handleClick}>
                <div className={styles.header}>{formatDate(order.create)}<span className={styles.status}>{switchStatus(order.status)}</span></div>
                <div className={styles.main}>
                    <img className={styles.img} src={items[0].pic}/>
                    <div className={styles.content}>
                        <p className={styles.contentInfo}>{items[0].brand && `[${items[0].brand}]`}{items[0].itemName} {items[0].property} 等</p>
                        <p className={`${styles.contentInfo} ${styles.light}`}>共{order.count}件商品</p>
                    </div>
                    <i className={`iconfont icon-more ${styles.icon}`}></i>
                </div>
                <div className={styles.footer}>实付: <span className={styles.strong}>￥{order.amount}</span></div>
            </div>
        )
    }
}

export default SectionMain
