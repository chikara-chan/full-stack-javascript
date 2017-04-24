import React, {Component} from 'react'
import {IndexLink, Link, browserHistory} from 'react-router'
import styles from '../sass/Navbar'
import {Menu, Icon} from 'antd'

function isActive(path) {
  return typeof window !== 'undefined' ? ~window.location.pathname.toLowerCase().indexOf(path) : false
}

class Navbar extends Component {
    constructor() {
        super()
    }

    handleClick = () => {
        browserHistory.push('/')
    }

    render() {
        const {navbar} = this.props

        return (
            <nav className={`${styles.navbar} ${navbar.show ? '' : styles.hide}`}>
              <div className={styles.logo} onClick={this.handleClick}>C R M</div>
              <Menu className={styles.menu}
                theme ="dark">
                <Menu.Item className={`${styles.item} ${isActive('me') ? styles.active : ''}`}
                  key="0">
                  <Link to="/me" className={styles.link}>
                    <Icon type="user"/>用户管理
                  </Link>
                </Menu.Item>
                <Menu.Item className={`${styles.item} ${isActive('order') ? styles.active : ''}`}
                  key="1">
                  <Link to="/order" className={styles.link}>
                    <Icon type="file-text"/>订单管理
                  </Link>
                </Menu.Item>
                <Menu.Item className={`${styles.item} ${isActive('item') ? styles.active : ''}`}
                  key="2">
                  <Link to="/item" className={styles.link}>
                    <Icon type="appstore-o"/>商品管理
                  </Link>
                </Menu.Item>
                <Menu.Item className={`${styles.item} ${isActive('shop') ? styles.active : ''}`}
                  key="3">
                  <Link to="/shop" className={styles.link}>
                    <Icon type="shop"/>学校开通
                  </Link>
                </Menu.Item>
              </Menu>
            </nav>
        )
    }
}

export default Navbar
