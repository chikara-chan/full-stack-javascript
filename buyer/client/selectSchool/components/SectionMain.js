import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu'
import 'semantic-ui-css/components/menu.css'
import styles from '../sass/SectionMain'

class SectionMain extends Component {
    constructor() {
        super()

        this.handleClickItem = this.handleClickItem.bind(this)
    }

    handleClickItem(e, school) {
        const {actions} = this.props

        actions.saveSchool(school)
        browserHistory.goBack()
    }

    render() {
        const {schools} = this.props

        return (
            <section className={styles.sectionMain}>
                <Menu className={styles.menu} vertical>
                    {schools.map(school =>
                        <Menu.Item className={styles.item} key={school.id} onClick={e => {this.handleClickItem(e, school)}}>
                            {school.schoolName}
                        </Menu.Item>
                    )}
                </Menu>
            </section>
        )
    }
}

export default SectionMain
