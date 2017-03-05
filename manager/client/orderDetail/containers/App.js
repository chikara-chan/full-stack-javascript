import React, {Component} from 'react'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        const {actions, order, actionbar} = this.props

        return (
            <div className={styles.app}>
                <Actionbar title={actionbar.title} back={actionbar.back} action={actionbar.action}/>
                <SectionMain actions={actions} order={order}></SectionMain>
            </div>
        )
    }
}

export default App
