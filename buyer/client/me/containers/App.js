import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import SectionMain from '../components/SectionMain'
import Actionbar from '../../shared/components/Actionbar'
import styles from '../sass/App'

class App extends Component {
    constructor() {
        super()

        this.handleClickAction = this.handleClickAction.bind(this)
    }

    componentDidMount() {
        const {actions} = this.props

        actions.updateActionbar({
            title: '个人中心',
            action: '编辑',
            back: false
        })
    }

    handleClickAction() {
        const {actions, actionbar} = this.props

        if (actionbar.action === '编辑') {
            actions.updateActionbar({
                action: '完成'
            })
        } else if (actionbar.action === '完成') {
            actions.postShop()
            actions.postUser()
            actions.updateActionbar({
                action: '编辑'
            })
        }
    }

    render() {
        const {actions, shop, user, actionbar} = this.props

        return (
            <div className={styles.app}>
                <Actionbar title={actionbar.title} back={actionbar.back} action={actionbar.action} handleClickAction={this.handleClickAction}/>
                <SectionMain actions={actions} actionbar={actionbar} shop={shop} user={user}></SectionMain>
            </div>
        )
    }
}

export default App
