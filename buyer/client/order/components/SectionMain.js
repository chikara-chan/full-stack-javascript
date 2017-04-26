import React, {Component} from 'react'
import styles from '../sass/SectionMain'
import {Menu} from '@blueprintjs/core/dist/components/menu/menu'
import {MenuItem} from '@blueprintjs/core/dist/components/menu/menuItem'
import Item from './Item'

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
        const {actions} = this.props

        actions.getOrders([100, 101, 102, 105])
    }

    render() {
        const {orders, actions} = this.props,
            {activeKey} = this.state

        return (
            <section className={styles.sectionMain}>
                <Menu className={styles.menu}>
                    <MenuItem className={`${styles.item} ${activeKey === 0 ? styles.active : ''}`}
                        onClick={(e) => {this.handleClickItem(e, 0, [100, 101, 102, 105])}}
                        text="未完成" />
                    <MenuItem className={`${styles.item} ${activeKey === 1 ? styles.active : ''}`}
                        onClick={(e) => {this.handleClickItem(e, 1, [103, 104, 202])}}
                        text="已完成" />
                    <MenuItem className={`${styles.item} ${activeKey === 2 ? styles.active : ''}`}
                        onClick={(e) => {this.handleClickItem(e, 2, [200, 201])}}
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
