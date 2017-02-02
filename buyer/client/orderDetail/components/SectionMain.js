import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import styles from '../sass/SectionMain'
import Item from './Item'
import {switchStatus} from '../../shared/switcher'
import {formatDate} from '../../shared/date-fns'

class SectionMain extends Component {
    constructor() {
        super()

        this.handleCancel = this.handleCancel.bind(this)
    }

    handleCancel() {
        const {order, actions} = this.props

        actions.cancelOrder(order.id)
    }

    componentDidMount() {
        const {actions} = this.props,
            update = () => {
                this.forceUpdate()
                this.timer = setTimeout(update, 1000)
            },
            poll = () => {
                actions.getOrderWithoutRedirect()
                this.pollTimer = setTimeout(poll, 5000)
            }

        update()
        poll()
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
        clearTimeout(this.pollTimer)
    }

    render() {
        const {order, actions} = this.props

        return (
            <section className={styles.sectionMain}>
                <div className={styles.header}>
                    <span className={styles.title}>
                        {switchStatus(order.status)}
                    </span>
                </div>
                {!!~[100, 101, 102].indexOf(order.status) &&
                    <p className={styles.time}>
                        {formatDate(Date.now() - order.create + 16 * 60 * 60 * 1000, 'hh:mm:ss')}
                    </p>
                }
                <div className={styles.buyer}>
                    <i className={`iconfont icon-account ${styles.icon}`}></i>
                    <p className={styles.receiver}>收货人: {order.buyer.nickname}<span className={styles.mobile}>{order.buyer.mobile}</span></p>
                    <p className={styles.address}>收货地址: {order.buyer.address}</p>
                    <p className={styles.remark}>备注: {order.remark || '无'}</p>
                </div>
                <div className={styles.panel}>
                    <div className={styles.titleWrap}>
                        <img className={styles.img} src={order.seller.avatar}/>
                        <span className={styles.title}>{order.shop.shopName}</span>
                    </div>
                    {order.item.map(item =>
                        <Item key={item.id} actions={actions} item={item}/>
                    )}
                    <div className={styles.footer}>
                        <div className={styles.colLeft}>
                            实付
                        </div>
                        <div className={styles.colRight}>
                           <span className={styles.amount}>￥{order.amount}</span>
                        </div>
                    </div>
                    <a className={styles.footerAttach} href={`tel:${order.seller.mobile}`}>
                        <i className={`iconfont icon-phone ${styles.icon}`}></i>
                        联系商家
                    </a>
                </div>
                <div className={styles.pageFooter}>
                    <p className={styles.content}>订单号: {order.id}</p>
                    <p className={styles.content}>下单时间: {formatDate(order.create)}</p>
                </div>
                {order.status === 100 &&
                    <div className={styles.field}>
                        <input className={styles.logout} onClick={this.handleCancel} type="button" value="取消订单"/>
                    </div>
                }
            </section>
        )
    }
}

export default SectionMain
