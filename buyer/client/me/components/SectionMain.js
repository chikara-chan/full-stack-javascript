import React, {Component} from 'react'
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu'
import Modal from 'semantic-ui-react/dist/commonjs/modules/Modal'
import 'semantic-ui-css/components/menu.css'
import 'semantic-ui-css/components/dimmer.css'
import 'semantic-ui-css/components/modal.css'
import styles from '../sass/SectionMain'
import switcher, {switchShopType, switchGender} from '../../shared/switcher'

class SectionMain extends Component {
    constructor() {
        super()

        this.handleChange = this.handleChange.bind(this)
        this.handleChangeUser = this.handleChangeUser.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleClickAvatar = this.handleClickAvatar.bind(this)
        this.handleChangeAvatar = this.handleChangeAvatar.bind(this)
        this.handleOpenModal = this.handleOpenModal.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)
        this.handleClickItem = this.handleClickItem.bind(this)
    }

    componentDidMount() {
        const {actions} = this.props

        actions.getUser()
    }

    componentDidUpdate(prevProps, prevState) {
        const {actionbar} = this.props,
            {actionbar: prevActionbar} = prevProps,
            {username} = this.refs

        if (prevActionbar.action === '编辑' && actionbar.action === '完成') {
            username.focus()
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
        actions.initUser()
    }

    handleClickItem(e, gender) {
        const {actions} = this.props

        actions.updateUser({
            gender
        })
        this.handleCloseModal()
    }

    handleOpenModal(e) {
        const {actions, actionbar} = this.props,
            readOnly = actionbar.action === '编辑'

        if (!readOnly) {
            actions.updateModal({
                show: true
            })
        }
    }

    handleCloseModal(e) {
        const {actions} = this.props

        actions.updateModal({
            show: false
        })
    }

    render() {
        const {nickname, mobile, email, address, avatar, gender, age} = this.props.user,
            {actionbar, modal} = this.props,
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
                                <span className={styles.title}>昵称</span>
                                <input className={styles.input} ref="username" type="text" name="nickname" readOnly={readOnly} value={nickname} onChange={this.handleChangeUser}/>
                            </label>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>性别</span>
                                <input className={styles.input} type="text" name="gender" readOnly value={switchGender(gender)}  onClick={this.handleOpenModal}/>
                            </label>
                            <Modal className={styles.modal} dimmer="blurring" basic open={modal.show} onClose={this.handleCloseModal}>
                                    <Menu className={styles.menu} vertical>
                                        <Menu.Item className={styles.item} onClick={e => {this.handleClickItem(e, 0)}}>
                                            男
                                        </Menu.Item>
                                        <Menu.Item className={styles.item} onClick={e => {this.handleClickItem(e, 1)}}>
                                            女
                                        </Menu.Item>
                                    </Menu>
                            </Modal>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>年龄</span>
                                <input className={styles.input} type="text" name="age"  readOnly={readOnly} value={age} onChange={this.handleChangeUser}/>
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
                                <span className={styles.title}>手机</span>
                                <input className={styles.input} type="text" name="mobile"  readOnly={readOnly} value={mobile} onChange={this.handleChangeUser}/>
                            </label>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>收货地址</span>
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
