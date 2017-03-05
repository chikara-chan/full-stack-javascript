import React, {Component} from 'react'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'

class App extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        const {actions} = this.props

        actions.getCats()
    }

    componentWillUnmount() {
        const {actions} = this.props

        actions.updateNavbar({
            show: true
        })
    }

    render() {
        const {item, cats, modal, actions} = this.props

        return (
            <div className={styles.app}>
                <SectionMain cats={cats} modal={modal} item={item} actions={actions}></SectionMain>
            </div>
        )
    }
}

export default App
