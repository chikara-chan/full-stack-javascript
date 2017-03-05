import React, {Component} from 'react'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        const {actions, cats, items} = this.props

        return (
            <div className={styles.app}>
                <SectionMain cats={cats} items={items} actions={actions}></SectionMain>
            </div>
        )
    }
}

export default App
