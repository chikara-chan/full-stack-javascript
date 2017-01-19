import React, {Component} from 'react'
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

        actions.updateUserInfo({
            [target.name]: target.value
        })
    }

    onSubmit(e) {
        const {actions} = this.props

        actions.submitLogin()
        e.preventDefault()
    }

    render() {
        const {username, password} = this.props.userInfo

        return (
            <section className={styles.sectionMain}>
                <h1 className={styles.title}>卖家版</h1>
                <form className={styles.form} onSubmit={this.onSubmit}>
                    <div className={styles.field}>
                        <label className={styles.label}>
                            <span className={styles.title}>账号</span>
                            <input className={styles.input} type="text" name="username" placeholder="请输入账号" value={username} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>
                            <span className={styles.title}>密码</span>
                            <input className={styles.input} type="password" name="password" placeholder="请输入密码" value={password} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <input className={styles.submit} type="submit" value="登录"/>
                </form>
            </section>
        )
    }
}

export default SectionMain
