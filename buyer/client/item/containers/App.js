import React, {Component} from 'react'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'
import Actionbar from '../../shared/components/Actionbar'

class App extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        const {actions, cats} = this.props

        actions.updateActionbar({
            title: '商品分类',
            action: '',
            back: false
        })
        actions.getCats()
    }

    componentWillUnmount() {
        const {actions} = this.props

        actions.replaceItems([])
    }

    render() {
        const {actions, actionbar, cats, items, cart} = this.props

        return (
            <div className={styles.app}>
                <Actionbar title={actionbar.title} back={actionbar.back} action={actionbar.action}/>
                <SectionMain cats={cats} items={items} actions={actions} cart={cart}></SectionMain>
            </div>
        )
    }
}

export default App
