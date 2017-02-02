import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'
import Actionbar from '../../shared/components/Actionbar'

class App extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        const {actions, cart} = this.props

        if (cart.items.length === 0) {
            browserHistory.goBack()
        }

        actions.updateActionbar({
            title: '购物车',
            action: '',
            back: true
        })
        actions.updateNavbar({
            show: false
        })
        actions.getUser()
    }

    componentWillUnmount() {
        const {actions} = this.props

        actions.updateNavbar({
            show: true
        })
    }

    render() {
        const {actions, actionbar, cart, user} = this.props

        return (
            <div className={styles.app}>
                <Actionbar title={actionbar.title} back={actionbar.back} action={actionbar.action}/>
                <SectionMain cart={cart} actions={actions} user={user}></SectionMain>
            </div>
        )
    }
}

export default App
