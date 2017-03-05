import React, {Component} from 'react'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'

class App extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        const {actions} = this.props

        actions.getShop()
    }

    render() {
        const {actions, shop} = this.props

        return (
            <div className={styles.app}>
                <SectionMain actions={actions} shop={shop}></SectionMain>
            </div>
        )
    }
}

export default App
