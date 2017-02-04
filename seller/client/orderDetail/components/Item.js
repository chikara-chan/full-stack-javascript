import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import styles from '../sass/Item'
import Item from './Item'

class SectionMain extends Component {
    constructor() {
        super()
    }


    render() {
         const {item} = this.props

        return (
            <div className={styles.item}>
                <img className={styles.img} src={item.pic}/>
                <div className={styles.content}>
                    <p className={styles.contentInfo}>
                        {item.brand && `[${item.brand}]`}{item.itemName} {item.property}
                         <span className={styles.strong}>￥{item.price}</span>
                    </p>
                    <p className={styles.contentInfo}>
                        {item.price}元 / {item.unit}
                        <span className={styles.strong}>&times; {item.checkedNumber}</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default SectionMain
