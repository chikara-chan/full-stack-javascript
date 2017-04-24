import React, {Component} from 'react'
import Form from '../components/Form'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'

class App extends Component {
    constructor() {
        super()

        this.handleUpdate = this.handleUpdate.bind(this)
    }

    componentDidMount() {
        const {actions} = this.props

        actions.getSchools()
        actions.getCats()
    }

    handleUpdate() {
        const {actions} = this.props

        this.refs.form.validateFields((err, values) => {
          if (!err) {
            actions.getItems(values)
          }
        })
    }

    render() {
        const {actions, schools, items, cats} = this.props

        return (
            <div className={styles.app}>
                <h1 className={styles.title}>商品管理</h1>
                <Form schools={schools} ref="form" cats={cats} actions={actions}></Form>
                <SectionMain handleUpdate={this.handleUpdate} items={items} actions={actions}></SectionMain>
            </div>
        )
    }
}

export default App
