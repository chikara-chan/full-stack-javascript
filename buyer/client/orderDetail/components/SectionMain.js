import React, {Component} from 'react'
import styles from '../sass/SectionMain'

class SectionMain extends Component {
    constructor() {
        super()
    }

    render() {
        const {order} = this.props

        return (
            <section className={styles.sectionMain}>
                {order.id}
            </section>
        )
    }
}

export default SectionMain
