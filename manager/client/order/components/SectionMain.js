import React, {Component} from 'react'
import styles from '../sass/SectionMain'
import Item from './Item'
import utils from '../../shared/utils'

class SectionMain extends Component {
    constructor() {
        super()
    }

    render() {
        const {orders, actions} = this.props

        return (
            <section className={styles.sectionMain}>
            </section>
        )
    }
}

export default SectionMain
