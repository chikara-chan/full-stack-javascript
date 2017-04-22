import React, {Component} from 'react'
import {Link} from 'react-router'
import styles from '../sass/SectionMain'
import Item from './Item'
import utils from '../../shared/date-fns'
import {switchStatus} from '../../shared/switcher'
import {Table} from 'antd'

class SectionMain extends Component {
    constructor() {
        super()
        this.columns = [
          {
            title: '订单ID',
            dataIndex: 'id'
          }, {
            title: '买家昵称',
            dataIndex: 'buyer.nickname'
          }, {
            title: '下单手机',
            dataIndex: 'buyer.mobile'
          }, {
            title: '收货地址',
            dataIndex: 'buyer.address'
          }, {
            title: '卖家昵称',
            dataIndex: 'seller.nickname'
          }, {
            title: '卖家手机',
            dataIndex: 'seller.mobile'
          }, {
            title: '订单创建时间',
            dataIndex: 'create',
            render: timestamp => utils.formatDate(timestamp)
          }, {
            title: '备注',
            dataIndex: 'remark'
          }, {
            title: '订单状态',
            dataIndex: 'status',
            render: text => `${switchStatus(text)}`
          }, {
            title: '操作',
            render: order => <Link to={`/orderDetail?id=${order.id}`}>查看详情</Link>
          }
        ]
    }

    render() {
        const {orders, actions} = this.props

        return (
            <section className={styles.sectionMain}>
                <Table className={styles.table}
                  columns={this.columns}
                  rowKey={order => order.id}
                  dataSource={orders}/>
            </section>
        )
    }
}

export default SectionMain
