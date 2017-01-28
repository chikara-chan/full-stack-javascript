import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import styles from '../sass/Item'
import Item from './Item'

class SectionMain extends Component {
    constructor() {
        super()

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }

    handleAdd() {
        const { item, actions } = this.props

        if (item.quantity > item.checkedNumber) {
            actions.updateCheckedNumber(item, item.checkedNumber + 1)
        }
    }

    handleRemove() {
        const { item, actions } = this.props

        if (item.checkedNumber > 0) {
            actions.updateCheckedNumber(item, item.checkedNumber - 1)
        }
    }

    handleChange(event) {
        const { item, actions } = this.props
        let value = event.target.value

        if (value.match(/^\d+$/)) {
            if (item.quantity >= +value) {
                actions.updateCheckedNumber(item, +value)
            } else {
                actions.updateCheckedNumber(item, item.quantity)
            }
        } else if (value === ''){
            actions.updateCheckedNumber(item, 0)
        }
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
                            <input className={styles.number}
                                type="number"
                                value={item.checkedNumber}
                                onChange={this.handleChange}
                                maxLength="3" />
                            <a className={styles.addonLeft}
                                onClick={this.handleRemove}>
                                —
                            </a>
                        </span>
                    </p>
                </div>
            </div>
        )
    }
}

export default SectionMain
