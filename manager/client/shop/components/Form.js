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
        delete values.rePassword
        actions.signupShop(values)
      }
    })
  }

  checkPassword = (rule, value, callback) => {
    const { form } = this.props

    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码不相同')
    } else {
      callback()
    }
  }

  render() {
    const {form} = this.props

    return (
      <Form onSubmit={this.handleSubmit}
        className={styles.form}>
        <Form.Item
          label="学校">
          {form.getFieldDecorator('schoolName', {
              rules: [{
                required: true,
                message: '不能为空'
            }]})(<Input/>)}
        </Form.Item>
        <Form.Item
          label="店铺名称">
          {form.getFieldDecorator('shopName', {
              rules: [{
                required: true,
                message: '不能为空'
            }]})(<Input/>)}
        </Form.Item>
        <Form.Item
          label="营业时间">
          {form.getFieldDecorator('openTime', {
              rules: [{
                required: true,
                message: '不能为空'
            }]})(<Input/>)}
        </Form.Item>
        <Form.Item
          label="分配账号">
          {form.getFieldDecorator('username', {
              rules: [{
                required: true,
                message: '不能为空'
            }]})(<Input/>)}
        </Form.Item>
        <Form.Item
          label="分配密码">
          {form.getFieldDecorator('password', {
              rules: [{
                required: true,
                message: '不能为空'
            }]})(<Input type="password"/>)}
        </Form.Item>
        <Form.Item
          label="确认密码">
          {form.getFieldDecorator('rePassword', {
              rules: [{
                required: true,
                message: '不能为空'
              }, {
                validator: this.checkPassword
              }]})(<Input type="password"/>)}
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">开通</Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create()(FormComponent)
