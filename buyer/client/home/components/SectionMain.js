import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import {Carousel} from 'antd'
import styles from '../sass/SectionMain'
import utils from '../../shared/date-fns'
import Item from './Item'

class SectionMain extends Component {
    constructor() {
        super()
    }

    handleClickCart() {
        browserHistory.push('/cart')
    }

    render() {
        const {items, actions, cart} = this.props

        return (
            <section className={styles.sectionMain}>
                <h1 className={styles.title}>新品上架</h1>
                    {items.map(item =>
                        <Item key={item.id} actions={actions} item={item}/>
                    )}
                <a className={styles.fiexedBtn} onClick={this.handleClickCart}>
                    <i className={`iconfont icon-cart ${styles.icon}`}></i>
                    {!!cart.count &&
                        <span className={styles.badge}>{cart.count}</span>
                    }
                </a>
                <h1 className={styles.title}>已至底部</h1>
            </section>
        )
    }
}

export default SectionMain
