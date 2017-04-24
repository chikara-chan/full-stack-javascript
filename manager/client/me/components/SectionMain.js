import React, {Component} from 'react'
import {Link} from 'react-router'
import styles from '../sass/SectionMain'
import utils from '../../shared/date-fns'
import {switchStatus, switchGender,switchLevel} from '../../shared/switcher'
import {Table} from 'antd'

class SectionMain extends Component {
    constructor() {
        super()
        this.columns = [
          {
            title: '用户ID',
            dataIndex: 'id'
          }, {
            title: '昵称',
            dataIndex: 'nickname'
          }, {
            title: '年龄',
            dataIndex: 'age'
          }, {
            title: '性别',
            dataIndex: 'gender',
            render: gender => switchGender(gender)
          }, {
            title: '手机',
            dataIndex: 'mobile'
          }, {
            title: '邮箱',
            dataIndex: 'email'
          }, {
            title: '身份证',
            dataIndex: 'identity',
            render: identity => identity ? identity.slice(0, 9) + '*****' + identity.slice(14, 17) : ''
          }, {
            title: '地址',
            dataIndex: 'address'
          }, {
            title: '类型',
            dataIndex: 'level',
            render: level => switchLevel(level)
          }, {
            title: '创建时间',
            dataIndex: 'create',
            render: timestamp => utils.formatDate(timestamp)
          }, {
            title: '更新时间',
            dataIndex: 'update',
            render: timestamp => utils.formatDate(timestamp)
          }
        ]
    }

    render() {
        const {users, actions} = this.props

        return (
            <section className={styles.sectionMain}>
                <Table className={styles.table}
                  columns={this.columns}
                  rowKey={user => user.id}
                  dataSource={users}/>
            </section>
        )
    }
}

export default SectionMain
