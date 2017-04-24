import React, {Component} from 'react'
import {getURLParams} from '../../shared/utils'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'

class App extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        const {actions} = this.props

        actions.getCats()
        actions.getItem(getURLParams().id)
    }

    render() {
        const {item, cats, modal, actions} = this.props

        return (
            <div className={styles.app}>
                <h1 className={styles.title}>商品管理 / 商品编辑</h1>
                <SectionMain cats={cats} modal={modal} item={item} actions={actions}></SectionMain>
            </div>
        )
    }
}

export default App
