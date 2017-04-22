import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import styles from '../sass/Form'
import {Button, Form, Input, DatePicker} from 'antd'

class FormComponent extends Component {
  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit(e) {
    e.preventDefault()

    const {form, actions} = this.props

    form.validateFields((err, values) => {
      if (!err) {
        actions.getOrders({
            id: values.id,
            nickname: values.nickname,
            mobile: values.mobile,
            timeStart: values.timeStart?values.timeStart._d.getTime():'',
            timeEnd: values.timeEnd?values.timeEnd._d.getTime():'',
        })
      }
    })
  }

  render() {
    const {form} = this.props

    return (
      <Form onSubmit={this.handleSubmit}
        className={styles.form}
        inline>
        <Form.Item
          label="订单id">
          {form.getFieldDecorator('id')(<Input/>)}
        </Form.Item>
        <Form.Item
          label="买家昵称">
          {form.getFieldDecorator('nickname')(<Input/>)}
        </Form.Item>
        <Form.Item
          label="下单手机">
          {form.getFieldDecorator('mobile')(<Input/>)}
        </Form.Item>
          <Form.Item className={`${styles.item} ${styles.last}`}>
            {form.getFieldDecorator('timeStart')(
              <DatePicker
                className={styles.start}
                disabledDate={this.disabledStartDate}
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="开始时间"
              />
            )}
          </Form.Item>
          <Form.Item className={`${styles.item} ${styles.last}`}>
            {form.getFieldDecorator('timeEnd')(
              <DatePicker
                className={styles.end}
                disabledDate={this.disabledEndDate}
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="结束时间"
              />
            )}
          </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">查询</Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create()(FormComponent)
