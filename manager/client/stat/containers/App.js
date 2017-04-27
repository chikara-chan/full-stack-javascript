import React, {Component} from 'react'
import {Row, Col} from 'antd'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'

class App extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        const {actions} = this.props

        actions.getStats()
    }

    render() {
        const {actions, stats} = this.props

        return (
            <div className={styles.app}>
                <SectionMain stats={stats} />
            </div>
        )
    }
}

export default App
