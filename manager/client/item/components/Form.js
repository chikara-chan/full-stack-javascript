import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import styles from '../sass/Form'
import {Button, Form, Input, DatePicker, Select} from 'antd'

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
        actions.getItems(values)
      }
    })
  }

  render() {
    const {form, schools, cats} = this.props

    return (
      <Form onSubmit={this.handleSubmit}
        className={styles.form}
        inline>
        <Form.Item
          label="学校">
           {form.getFieldDecorator('school',{initialValue: schools[0]?schools[0].id:''})(
            <Select className={styles.select}>
              {schools.map(school =>
                <Select.Option key={school.id} value={school.id}>{school.schoolName}</Select.Option>
              )}
            </Select>
            )}
        </Form.Item>
        <Form.Item
          label="分类">
           {form.getFieldDecorator('cat',{initialValue: ''})(
            <Select className={styles.select}>
              <Select.Option value="">全部</Select.Option>
              {cats.map(cat =>
                <Select.Option key={cat.id} value={cat.id}>{cat.catName}</Select.Option>
              )}
            </Select>
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
