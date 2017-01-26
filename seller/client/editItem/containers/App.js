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
            title: '添加商品',
            action: '',
            back: true
        })

        actions.updateNavbar({
            show: false
        })

        actions.getCats()
    }

    componentWillUnmount() {
        const {actions} = this.props

        actions.updateNavbar({
            show: true
        })
    }

    render() {
        const {item, cats, modal, actions, actionbar} = this.props

        return (
            <div className={styles.app}>
                <Actionbar title={actionbar.title} back={actionbar.back} action={actionbar.action}/>
                <SectionMain cats={cats} modal={modal} item={item} actions={actions}></SectionMain>
            </div>
        )
    }
}

export default App
