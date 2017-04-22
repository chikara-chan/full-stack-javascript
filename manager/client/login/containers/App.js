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
        canvas.init()
    }

    render() {
        const {...props} = this.props

        return (
            <div className={styles.app}>
                <SectionMain {...props}></SectionMain>
                <canvas id="canvas" width="0" height="0"></canvas>
            </div>
        )
    }
}

export default App
