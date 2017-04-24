import React, {Component} from 'react'
import {Link} from 'react-router'
import styles from '../sass/SectionMain'
import utils from '../../shared/date-fns'
import {switchStatus} from '../../shared/switcher'
import {Table} from 'antd'

class SectionMain extends Component {
    render() {
        const {schools, actions} = this.props

        return (
            <section className={styles.sectionMain}>
                <ul>
                    {schools.map(school =>
                        <li className={styles.li} key={school.id}>{school.schoolName}</li>
                    )}
                </ul>
            </section>
        )
    }
}

export default SectionMain
