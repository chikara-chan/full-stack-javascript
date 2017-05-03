import React, {Component} from 'react'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'
import Actionbar from '../../shared/components/Actionbar'

class App extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        const {actions} = this.props

        actions.getShop()
        actions.getStats()
    }

    render() {
        const {actions, actionbar, shop, stats} = this.props

        return (
            <div className={styles.app}>
                <SectionMain actions={actions} stats={stats} shop={shop}></SectionMain>
            </div>
        )
    }
}

export default App
