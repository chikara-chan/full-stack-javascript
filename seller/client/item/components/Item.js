import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import styles from '../sass/Item'
import Item from './Item'

class SectionMain extends Component {
    constructor() {
        super()

        this.handleClickItem = this.handleClickItem.bind(this)
    }

    handleClickItem(e) {
        const {actions, item} = this.props
console.log(actions)
        actions.replaceItem(item)
        browserHistory.push('/editItem')
    }

    render() {
         const {item} = this.props

        return (
            <div className={styles.item} onClick={this.handleClickItem}>
                <img className={styles.img} src={item.pic}/>
                <div className={styles.content}>
                    <p className={styles.contentInfo}>{item.brand && `[${item.brand}]`}{item.itemName} {item.property}</p>
                    <p className={styles.contentInfo}>{item.price}元 / {item.unit}</p>
                    <p className={styles.contentInfo}>
                        <span className={styles.strong}>￥{item.price}</span>
                        <span className={styles.quantity}>库存{item.quantity}</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default SectionMain
