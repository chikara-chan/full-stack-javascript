import React, {Component} from 'react'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'
import canvas from '../addon/canvas'
import '../sass/canvas'

class App extends Component {
    constructor() {
        super()
    }

    componentWillMount() {
        const {actions} = this.props

        actions.updateNavbar({
            show: false
        })
    }

    componentWillUnmount() {
        const {actions} = this.props

        actions.updateNavbar({
            show: true
        })
    }

    componentDidMount() {
        const el = document.createElement('canvas')

        el.width = 0
        el.height = 0
        el.id = 'canvas'
        document.body.appendChild(el)
        canvas.init()
    }

    render() {
        const {...props} = this.props

        return (
            <div className={styles.app}>
                <SectionMain {...props}></SectionMain>
            </div>
        )
    }
}

export default App
