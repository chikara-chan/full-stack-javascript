import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import styles from '../sass/SectionMain'
import Item from './Item'
import {switchStatus,switchPayType} from '../../shared/switcher'
import {formatDate} from '../../shared/date-fns'

class SectionMain extends Component {
    constructor() {
        super()

        this.handleReject = this.handleReject.bind(this)
        this.handleReceive = this.handleReceive.bind(this)
        this.handleConfirmSend = this.handleConfirmSend.bind(this)
        this.handleSet = this.handleSet.bind(this)
    }

    handleSet() {
        const {order, actions} = this.props

        actions.setOrder(order.id, this.refs.select.value)
    }

    handleReject() {
        const {order, actions} = this.props

        actions.rejectOrder(order.id)
    }

    handleReceive() {
        const {order, actions} = this.props

        actions.receiveOrder(order.id)
    }

    handleConfirmSend() {
        const {order, actions} = this.props

        actions.sendOrder(order.id)
    }

    render() {
        const {order, actions} = this.props

        return (
            <section className={styles.sectionMain}>
                {order.buyer && <div className={styles.order}>
                    <div className={styles.title}>买家信息</div>
                    <div className={styles.buyer}>
                        <p className={styles.receiver}>买家昵称: {order.buyer.nickname}<span className={styles.mobile}>买家手机: {order.buyer.mobile}</span></p>
                        <p className={styles.address}>收货地址: {order.buyer.address}</p>
                    </div>
                    <div className={styles.title}>卖家信息</div>
                    <div className={styles.buyer}>
                        <p className={styles.receiver}>卖家昵称: {order.seller.nickname}<span className={styles.mobile}>卖家手机: {order.seller.mobile}</span></p>
                        <p className={styles.address}>卖家地址: {order.seller.address}</p>
                    </div>
                    <div className={styles.title}>店铺信息</div>
                    <div className={styles.buyer}>
                        <p className={styles.receiver}>店铺名称: {order.shop.shopName}<span className={styles.mobile}>店铺类型: 普通</span></p>
                        <p className={styles.address}>营业时间: {order.shop.openTime}</p>
                    </div>
                    <div className={styles.title}>订单信息</div>
                    <div className={styles.buyer}>
                        <p className={styles.receiver}>订单号: {order.id}
                            <span className={`${styles.mobile} ${styles.offset}`}>
                                {'订单状态: '}
                                <select ref="select" defaultValue={order.status}>
                                    <option value="100">待接单</option>
                                    <option value="101">待发货</option>
                                    <option value="102">待收货</option>
                                    <option value="103">待评价</option>
                                    <option value="104">已完成</option>
                                    <option value="200">已取消</option>
                                    <option value="201">已拒单</option>
                                </select>
                                <a className={styles.link} onClick={this.handleSet}>变更</a>
                            </span>
                        </p>
                        <p className={styles.address}>下单时间: {formatDate(order.create)}<span className={`${styles.mobile}`}>支付状态: {switchPayType(order.payType)}</span></p>
                        <p className={styles.remark}>备注: {order.remark || '无'}</p>
                    </div>
                    <div className={styles.title}>商品信息</div>
                    <div className={styles.panel}>
                        {order.item.map(item =>
                            <Item key={item.id} actions={actions} item={item}/>
                        )}
                        <div className={styles.footer}>
                            <div className={styles.colLeft}>
                            </div>
                            <div className={styles.colRight} style={{fontSize: 18,marginTop: 15}}>
                               实付: <span className={styles.amount}>￥{order.amount}</span>
                            </div>
                        </div>
                    </div>

                </div>}
            </section>
        )
    }
}

export default SectionMain
