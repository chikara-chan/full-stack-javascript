import React, {Component} from 'react'
import styles from '../sass/SectionMain'
import {Menu} from '@blueprintjs/core/dist/components/menu/menu'
import {MenuItem} from '@blueprintjs/core/dist/components/menu/menuItem'
import Item from './Item'
import utils from '../../shared/utils'

class SectionMain extends Component {
    constructor() {
        super()

        this.handleClickItem = this.handleClickItem.bind(this)
        this.state = {
            activeKey: 0
        }
    }

    handleClickItem(e, eventKey, status) {
        const {actions} = this.props

        this.setState({ activeKey: eventKey })
        actions.getOrders(status)
    }

    componentDidMount() {
        const {actions} = this.props,
            activeKey = +utils.getURLParams().tagIndex

        if (activeKey === 0) {
            actions.getOrders([100])
            this.setState({
                activeKey: 0
            })
        } else if (activeKey === 1) {
            actions.getOrders([101])
            this.setState({
                activeKey: 1
            })
        } else if (activeKey === 2) {
            actions.getOrders([102])
            this.setState({
                activeKey: 2
            })
        } else {
            actions.getOrders([100])
        }
    }

    render() {
        const {orders, actions} = this.props,
            {activeKey} = this.state

        return (
            <section className={styles.sectionMain}>
                <Menu className={styles.menu}>
                    <MenuItem className={`${styles.item} ${activeKey === 0 ? styles.active : ''}`}
                        onClick={(e) => {this.handleClickItem(e, 0, [100])}}
                        text="待接单" />
                    <MenuItem className={`${styles.item} ${activeKey === 1 ? styles.active : ''}`}
                        onClick={(e) => {this.handleClickItem(e, 1, [101])}}
                        text="待发货" />
                    <MenuItem className={`${styles.item} ${activeKey === 2 ? styles.active : ''}`}
                        onClick={(e) => {this.handleClickItem(e, 2, [102])}}
                        text="待收货" />
                    <MenuItem className={`${styles.item} ${activeKey === 3 ? styles.active : ''}`}
                        onClick={(e) => {this.handleClickItem(e, 3, [103, 104])}}
                        text="已完成" />
                    <MenuItem className={`${styles.item} ${activeKey === 4 ? styles.active : ''}`}
                        onClick={(e) => {this.handleClickItem(e, 4, [200, 201])}}
                        text="已取消" />
                </Menu>
                <div className={styles.panel}>
                    {orders.map(order =>
                        <Item key={order.id} actions={actions} order={order}/>
                    )}
                </div>
            </section>
        )
    }
}

export default SectionMain
