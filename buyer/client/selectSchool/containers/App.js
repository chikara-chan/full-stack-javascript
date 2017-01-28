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
        const {actions} = this.props

        actions.updateActionbar({
            title: '选择学校',
            action: '',
            back: true
        })

        actions.updateNavbar({
            show: false
        })

        actions.getSchools()
    }

    componentWillUnmount() {
        const {actions} = this.props

        actions.updateNavbar({
            show: true
        })
    }

    render() {
        const {schools, actions, actionbar} = this.props

        return (
            <div className={styles.app}>
                <Actionbar title={actionbar.title} back={actionbar.back} action={actionbar.action} handle/>
                <SectionMain schools={schools} actions={actions}></SectionMain>
            </div>
        )
    }
}

export default App
