import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import styles from '../sass/Item'

class SectionMain extends Component {
    constructor() {
        super()

        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd() {
        const { item, actions } = this.props

        actions.addToCart(item)
    }

    render() {
         const {item} = this.props

        return (
            <div className={styles.item}>
                <img className={styles.img} src={item.pic}/>
                <div className={styles.content}>
                    <p className={styles.contentInfo}>{item.brand && `[${item.brand}]`}{item.itemName} {item.property}</p>
                    <p className={styles.contentInfo}>{item.price}元 / {item.unit}</p>
                    <p className={styles.contentInfo}>
                        <span className={styles.strong}>￥{item.price}</span>
                        <span className={styles.addonGroup}>
                            <a className={styles.addonRight}
                                onClick={this.handleAdd}>
                                +
                            </a>
                        </span>
                    </p>
                </div>
            </div>
        )
    }
}

export default SectionMain
