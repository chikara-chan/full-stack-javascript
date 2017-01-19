import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        const {actions} = this.props

        return (
            <div className={styles.app}>
                <SectionMain actions={actions}></SectionMain>
            </div>
        )
    }
}

export default App
