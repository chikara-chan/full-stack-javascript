import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import styles from '../sass/SectionMain'
import Item from './Item'

class SectionMain extends Component {
    constructor() {
        super()

        this.handleClickHeader = this.handleClickHeader.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClickHeader() {
        browserHistory.push('/me')
    }

    handleSubmit(e) {
        const {actions, user, cart} = this.props

        if (user.nickname && user.mobile && user.address && cart.items.length !== 0) {
            actions.postCart()
            actions.clearCart()
        }
    }

    handleChange(e) {
        const {target} = e,
            {actions} = this.props

        actions.updateCart({
            [target.name]: target.value
        })
    }

    render() {
        const {cart, actions, user} = this.props

        return (
            <section className={styles.sectionMain}>
                <div className={styles.header} onClick={this.handleClickHeader}>
                    {user.nickname && user.mobile && user.address ?
                        <div>
                            <p className={styles.address}>{user.address}</p>
                            <p className={styles.receiver}>{user.nickname} {user.mobile}</p>
                        </div> :
                        '请完善个人信息'
                    }
                    <i className={`iconfont icon-more ${styles.icon}`}></i>
                </div>
                {cart.items.length !== 0 &&
                    <div className={styles.panel}>
                        {cart.items.map(item =>
                            <Item key={item.id} actions={actions} item={item}/>
                        )}
                    </div>
                }
                <textarea className={styles.textarea} name="remark" value={cart.remark} placeholder="备注" onChange={this.handleChange}/>
                <div className={styles.footer}>
                    <div className={styles.colLeft}>
                        合计: <span className={styles.amount}>￥{cart.amount}</span>
                        <span className={styles.delivery}>(免配送费)</span>
                    </div>
                    <div className={styles.colRight}>
                        <a className={styles.btn} onClick={this.handleSubmit}>提交订单</a>
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionMain
