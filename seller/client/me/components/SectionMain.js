import React, {Component} from 'react'
import styles from '../sass/SectionMain'
import switcher, {switchShopType} from '../../shared/switcher'

class SectionMain extends Component {
    constructor() {
        super()

        this.handleChange = this.handleChange.bind(this)
        this.handleChangeUser = this.handleChangeUser.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleClickAvatar = this.handleClickAvatar.bind(this)
        this.handleChangeAvatar = this.handleChangeAvatar.bind(this)
    }

    componentDidMount() {
        const {actions} = this.props

        actions.getShop()
        actions.getUser()
    }

    componentDidUpdate(prevProps, prevState) {
        const {actionbar} = this.props,
            {actionbar: prevActionbar} = prevProps,
            {shopName} = this.refs

        if (prevActionbar.action === '编辑' && actionbar.action === '完成') {
            shopName.focus()
        }
    }

    handleChange(e) {
        const {target} = e,
            {actions} = this.props

        actions.updateShop({
            [target.name]: target.value
        })
    }

    handleChangeUser(e) {
        const {target} = e,
            {actions} = this.props

        actions.updateUser({
            [target.name]: target.value
        })
    }

    handleChangeAvatar(e) {
        const {target} = e,
            {actions} = this.props

        actions.postUserAvatar({
            [target.name]: target.files[0]
        })
    }


    handleClickAvatar(e) {
        const {file} = this.refs,
            {actionbar} = this.props,
            readOnly = actionbar.action === '编辑'

        if (readOnly) {
            e.preventDefault()
        }
    }

    handleLogout() {
        const {actions} = this.props

        actions.postLogout()
    }

    render() {
        const {shopName, school, shopType, openTime} = this.props.shop,
            {nickname, mobile, email, identity, address, avatar} = this.props.user,
            {actionbar} = this.props,
            readOnly = actionbar.action === '编辑'

        return (
            <section className={styles.sectionMain}>
                <form className={styles.form}>
                    <label className={styles.imgWrap} onClick={this.handleClickAvatar}>
                        <img className={styles.img} src={avatar}/>
                        <input className={styles.file} ref="file" type="file" accept="image/*" name="file" onChange={this.handleChangeAvatar}/>
                    </label>
                    <div className={styles.card}>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>超市名</span>
                                <input className={styles.input} ref="shopName" type="text" name="shopName" readOnly={readOnly} value={shopName} onChange={this.handleChange}/>
                            </label>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>所属学校</span>
                                <input className={`${styles.input} ${readOnly ? '' : styles.disabled}`} type="text" name="school.id" readOnly value={school.schoolName}/>
                            </label>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>超市类型</span>
                                <input className={`${styles.input} ${readOnly ? '' : styles.disabled}`} type="text" name="shopType" readOnly value={switchShopType(shopType)}/>
                            </label>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>营业时间</span>
                                <input className={styles.input} type="text" name="openTime" value={openTime} onChange={this.handleChange}/>
                            </label>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>店长名</span>
                                <input className={styles.input} type="text" name="nickname" readOnly={readOnly} value={nickname} onChange={this.handleChangeUser}/>
                            </label>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>身份证</span>
                                <input className={styles.input} type="text" name="identity"  readOnly={readOnly} value={identity} onChange={this.handleChangeUser}/>
                            </label>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>手机</span>
                                <input className={styles.input} type="text" name="mobile"  readOnly={readOnly} value={mobile} onChange={this.handleChangeUser}/>
                            </label>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>邮箱</span>
                                <input className={styles.input} type="text" name="email"  readOnly={readOnly} value={email} onChange={this.handleChangeUser}/>
                            </label>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>地址</span>
                                <input className={styles.input} type="text" name="address"  readOnly={readOnly} value={address} onChange={this.handleChangeUser}/>
                            </label>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.field}>
                            <input className={styles.logout} type="button" value="退出登录" onClick={this.handleLogout}/>
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}

export default SectionMain
