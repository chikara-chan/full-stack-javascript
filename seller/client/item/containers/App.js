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

        actions.updateActionbar({
            title: '商品管理',
            action: '',
            back: false
        })
    }

    render() {
        const {user, actions, actionbar} = this.props

        return (
            <div className={styles.app}>
                <Actionbar title={actionbar.title} back={actionbar.back} action={actionbar.action}/>
                <SectionMain user={user} actions={actions}></SectionMain>
            </div>
        )
    }
}

export default App
