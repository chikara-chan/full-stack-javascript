import React, {Component} from 'react'
import {browserHistory, Link} from 'react-router'
import {Table} from 'antd'
import utils from '../../shared/date-fns'
import styles from '../sass/SectionMain'
import Item from './Item'

class SectionMain extends Component {
    constructor() {
        super()
        this.columns = [
          {
            title: '图片',
            dataIndex: 'pic',
            render: pic => <img width="40" height="40" src={pic} />
          },
          {
            title: '商品ID',
            dataIndex: 'id'
          }, {
            title: '商品名称',
            dataIndex: 'itemName'
          }, {
            title: '价格',
            dataIndex: 'price'
          }, {
            title: '规格',
            dataIndex: 'property'
          }, {
            title: '单位',
            dataIndex: 'unit'
          }, {
            title: '库存',
            dataIndex: 'quantity'
          }, {
            title: '创建时间',
            dataIndex: 'create',
            render: timestamp => utils.formatDate(timestamp)
          },, {
            title: '更新时间',
            dataIndex: 'update',
            render: timestamp => utils.formatDate(timestamp)
          }, {
            title: '操作',
            render: item => <span>
                    <Link to={`/editItem?id=${item.id}`}>编辑</Link>
                    {'  '}
                    <a style={{color: '#f04134'}} onClick={() => this.handleRemove(item.id)}>删除</a>
                </span>
          }
        ]
    }

    handleRemove(id) {
        const {actions, handleUpdate} = this.props

        actions.postRemoveItem(id)
        handleUpdate()
    }

    render() {
        const {items} = this.props

        return (
            <section className={styles.sectionMain}>
                <Table className={styles.table}
                  columns={this.columns}
                  rowKey={item => item.id}
                  dataSource={items}/>
            </section>
        )
    }
}

export default SectionMain
