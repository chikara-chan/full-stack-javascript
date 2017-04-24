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
        actions.getUsers({
            id: values.id,
            nickname: values.nickname,
            mobile: values.mobile,
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
          label="用户id">
          {form.getFieldDecorator('id')(<Input/>)}
        </Form.Item>
        <Form.Item
          label="用户昵称">
          {form.getFieldDecorator('nickname')(<Input/>)}
        </Form.Item>
        <Form.Item
          label="用户手机">
          {form.getFieldDecorator('mobile')(<Input/>)}
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">查询</Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create()(FormComponent)
