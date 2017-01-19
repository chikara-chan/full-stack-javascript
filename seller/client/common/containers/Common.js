import React, {Children, Component, cloneElement} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Alert from '../components/Alert'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import actions from '../actions'
import styles from '../sass/Common'
import '../sass/global'

class Common extends Component {
    constructor() {
        super()
    }

    componentDidUpdate(prevProps, prevState) {
        const {alert, actions} = this.props

        if (alert.show) {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                actions.hideAlert()
                alert.callback && alert.callback()
            }, alert.time)
        }
    }

    render() {
        const {children, alert, ...props} = this.props

        return (
            <div className={styles.app}>
                <Alert alert={alert}/>
                <Navbar/>
                <Main>
                    {Children.map(children, child =>
                        cloneElement(child, {...props})
                    )}
                </Main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Common)
