import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'
import styles from '../sass/Navbar'
import {Menu, Icon} from 'antd'

class Navbar extends Component {
    constructor() {
        super()
    }

    render() {
        const {navbar} = this.props

        return (
            <nav className={`${styles.navbar} ${navbar.show ? '' : styles.hide}`}>
              <div className={styles.logo}>C R M</div>
              <Menu className={styles.menu}
                theme ="dark">
                <Menu.Item className={styles.item} activeClassName={styles.active}
                  key="0">
                  <Link to="/order" className={styles.link}>
                    <Icon type="file-text"/>订单管理
                  </Link>
                </Menu.Item>
                <Menu.Item className={styles.item} activeClassName={styles.active}
                  key="1">
                  <Link to="/item" className={styles.link}>
                    <Icon type="appstore-o"/>商品管理
                  </Link>
                </Menu.Item>
                <Menu.Item className={styles.item} activeClassName={styles.active}
                  key="2">
                  <Link to="/me" className={styles.link}>
                    <Icon type="user"/>店铺管理
                  </Link>
                </Menu.Item>
              </Menu>
            </nav>
        )
    }
}

export default Navbar
