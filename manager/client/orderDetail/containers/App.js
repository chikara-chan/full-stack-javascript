import React, {Component} from 'react'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'
import {getURLParams} from '../../shared/utils'

class App extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        const {actions} = this.props

        actions.getOrder(getURLParams().id)
    }

    render() {
        const {actions, order} = this.props

        return (
            <div className={styles.app}>
                <h1 className={styles.title}>
                    订单管理／订单详情
                </h1>
                <SectionMain actions={actions} order={order}></SectionMain>
            </div>
        )
    }
}

export default App
