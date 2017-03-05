import React, {Component} from 'react'
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
                <SectionMain actions={actions} orders={orders}></SectionMain>
            </div>
        )
    }
}

export default App
