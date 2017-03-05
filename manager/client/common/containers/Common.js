import React, {Children, Component, cloneElement} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Alert from '../components/Alert'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Header from '../components/Header'
import actions from '../actions'
import styles from '../sass/Common'
import 'antd/dist/antd.min.css'
import '../sass/global'
import '../sass/blueprint'

class Common extends Component {
    constructor() {
        super()
    }

    render() {
        const {children, alert, navbar, ...props} = this.props

        return (
            <div className={`${styles.app} ${navbar.show ? '' : styles.noNavbar}`}>
                <Header/>
                <Navbar navbar={navbar}/>
                <Main>
                    {Children.map(children, child =>
                        cloneElement(child, {...props})
                    )}
                </Main>
                <Alert alert={alert}/>
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
