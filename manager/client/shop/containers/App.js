import React, {Component} from 'react'
import {Row, Col} from 'antd'
import Form from '../components/Form'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'

class App extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        const {actions} = this.props

        actions.getSchools()
    }

    render() {
        const {actions, orders, schools} = this.props

        return (
            <div className={styles.app}>
                <Row>
                    <Col span="12">
                        <h1 className={styles.title}>学校开通</h1>
                        <Form actions={actions}/>
                    </Col>
                    <Col span="12">
                        <h1 className={styles.title}>已开通学校</h1>
                        <SectionMain actions={actions} schools={schools}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default App
