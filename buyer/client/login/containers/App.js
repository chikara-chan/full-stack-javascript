import React, {Component} from 'react'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        const {...props} = this.props

        return (
            <div className={styles.app}>
                <SectionMain {...props}></SectionMain>
            </div>
        )
    }
}

export default App
