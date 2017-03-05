import React from 'react'
import styles from '../sass/Header'
import {Dropdown, Menu, Icon} from 'antd'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
          <a className={styles.link} href="javascript:void(0)">
            <Icon type="question-circle-o"/> 客服
          </a>
          <Dropdown overlay={(
              <Menu>
                <Menu.Item key="">
                  <a href="/member.html">注销</a>
                </Menu.Item>
              </Menu>
            )}>
            <a className={styles.link} href="javascript:void(0)">
              13336971320 <Icon type="down"/>
            </a>
          </Dropdown>
      </div>
    </header>
  )
}

export default Header
