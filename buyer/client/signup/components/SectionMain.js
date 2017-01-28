import React, {Component} from 'react'
import {Link} from 'react-router'
import styles from '../sass/SectionMain'
import utils from '../../shared/utils'

class SectionMain extends Component {
    constructor() {
        super()

        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange(e) {
        const {target} = e,
            {actions} = this.props

        actions.updateUser({
            [target.name]: target.value
        })
    }

    componentDidMount() {
        const {actions} = this.props

        actions.updateUser({
            username: '',
            password: ''
        })
    }

    onSubmit(e) {
        const {actions} = this.props

        actions.postSignup()
        e.preventDefault()
    }

    render() {
        const {user} = this.props

        return (
            <section className={styles.sectionMain}>
                <h1 className={styles.title}>买家版</h1>
                <form className={styles.form} onSubmit={this.onSubmit}>
                    <div className={styles.field}>
                        <label className={styles.label}>
                            <span className={styles.title}>账号</span>
                            <input className={styles.input} type="text" name="username" placeholder="请输入账号" value={user.username} required onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>
                            <span className={styles.title}>密码</span>
                            <input className={styles.input} type="password" name="password" placeholder="请输入密码" value={user.password} required onChange={this.handleChange}/>
                        </label>
                    </div>
                    <input className={styles.submit} type="submit" value="注册"/>
                </form>
                <Link className={styles.link} to="/login">
                    前往登录
                </Link>
            </section>
        )
    }
}

export default SectionMain
