import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import Banner from '../components/Banner'
import SectionMain from '../components/SectionMain'
import Actionbar from '../../shared/components/Actionbar'
import styles from '../sass/App'

class App extends Component {
    constructor() {
        super()

        this.handleClickTitle = this.handleClickTitle.bind(this)
    }

    componentDidMount() {
        const {actions} = this.props,
            schoolName = localStorage.getItem('schoolName')

        actions.updateActionbar({
            title: schoolName || '请选择学校',
            action: '',
            back: false
        })
        actions.getRecommendItems()
    }

    componentWillUnmount() {
        const {actions} = this.props

        actions.replaceItems([])
    }

    handleClickTitle() {
        browserHistory.push('/selectSchool')
    }

    render() {
        const {actions, actionbar, items, cart} = this.props

        return (
            <div className={styles.app}>
                <Actionbar title={actionbar.title} back={actionbar.back} action={actionbar.action} handleClickTitle={this.handleClickTitle}/>
                <Banner actions={actions}></Banner>
                <SectionMain items={items} actions={actions} cart={cart}></SectionMain>
            </div>
        )
    }
}

export default App
