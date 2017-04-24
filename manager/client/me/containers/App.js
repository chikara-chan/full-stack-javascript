import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import SectionMain from '../components/SectionMain'
import Form from '../components/Form'
import styles from '../sass/App'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        const {actions, users} = this.props

        return (
            <div className={styles.app}>
                <h1 className={styles.title}>用户管理</h1>
                <Form actions={actions}/>
                <SectionMain actions={actions} users={users}></SectionMain>
            </div>
        )
    }
}

export default App
