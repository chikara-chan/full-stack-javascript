import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'
import styles from '../sass/Navbar'

class Navbar extends Component {
    constructor() {
        super()
    }

    render() {
        const {navbar} = this.props

        return (
            <nav className={`${styles.navbar} ${navbar.show ? '' : styles.hide}`}>
                <IndexLink className={styles.link} activeClassName={styles.active} to="/">
                    <i className={`iconfont icon-store ${styles.icon}`}></i>
                    <p className={styles.title}>首页</p>
                </IndexLink>
                <Link className={styles.link} activeClassName={styles.active} to="/item">
                    <i className={`iconfont icon-viewgallery ${styles.icon}`}></i>
                    <p className={styles.title}>分类</p>
                </Link>
                <Link className={styles.link} activeClassName={styles.active} to="/order">
                    <i className={`iconfont icon-manageorder ${styles.icon}`}></i>
                    <p className={styles.title}>订单</p>
                </Link>
                <Link className={styles.link} activeClassName={styles.active} to="/me">
                    <i className={`iconfont icon-account ${styles.icon}`}></i>
                    <p className={styles.title}>我的</p>
                </Link>
            </nav>
        )
    }
}

export default Navbar
