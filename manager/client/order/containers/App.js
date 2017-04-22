import React, {Component} from 'react'
import Form from '../components/Form'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        const {actions, orders} = this.props

        return (
            <div className={styles.app}>
                <h1 className={styles.title}>订单管理</h1>
                <Form actions={actions}/>
                <SectionMain actions={actions} orders={orders}></SectionMain>
            </div>
        )
    }
}

export default App
