import {browserHistory} from 'react-router'
import React from 'react'
import styles from '../sass/Header'
import {Dropdown, Menu, Icon} from 'antd'


function Header({actions}) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
          <Dropdown overlay={(
              <Menu>
                <Menu.Item key="">
                  <a onClick={()=>{actions.postLogout()}}>注销</a>
                </Menu.Item>
              </Menu>
            )}>
            <a className={styles.link} href="javascript:void(0)">
              {new Date().getHours() > 12 ? '下午好 ' : '上午好 '}
              <Icon type="down"/>
            </a>
          </Dropdown>
      </div>
    </header>
  )
}

export default Header
