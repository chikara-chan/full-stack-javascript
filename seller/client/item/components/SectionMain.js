import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import {Menu} from '@blueprintjs/core/dist/components/menu/menu'
import {MenuItem} from '@blueprintjs/core/dist/components/menu/menuItem'
import styles from '../sass/SectionMain'
import Item from './Item'

class SectionMain extends Component {
    constructor() {
        super()

        this.handleClickAddItem = this.handleClickAddItem.bind(this)
        this.handleClickItem = this.handleClickItem.bind(this)
        this.state = {
            activeKey: 0
        }
    }

    handleClickAddItem() {
        browserHistory.push('/addItem')
    }

    handleClickItem(e, eventKey, catId) {
        const {actions} = this.props

        this.setState({ activeKey: eventKey })
        actions.getItems(catId)
    }

    render() {
        const {activeKey} = this.state,
            {cats, items, actions} = this.props

        return (
            <section className={styles.sectionMain}>
                <div className={styles.container}>
                    <Menu className={styles.menu}>
                        {cats.map((cat, index) =>
                            <MenuItem className={`${styles.item} ${activeKey === index ? styles.active : ''}`}
                                key={index}
                                onClick={(e) => {this.handleClickItem(e, index, cat.id)}}
                                text={cat.catName} />
                        )}
                    </Menu>
                    <div className={styles.panel}>
                        {cats[activeKey] &&
                            <div className={styles.header}>
                                {cats[activeKey].catName}
                            </div>
                        }
                        {items.map(item =>
                            <Item key={item.id} actions={actions} item={item}/>
                        )}
                    </div>
                </div>
                <a className={styles.fiexedBtn} onClick={this.handleClickAddItem}>
                    <i className={`iconfont icon-add ${styles.icon}`}></i>
                    <p className={styles.text}>添加商品</p>
                </a>
            </section>
        )
    }
}

export default SectionMain
