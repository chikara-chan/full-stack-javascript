import React, {Component} from 'react'
import styles from '../sass/SectionMain'
import switcher from '../../shared/switcher'

class SectionMain extends Component {
    constructor() {
        super()

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        const {actions} = this.props

        actions.getShop()
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

    render() {
        const {shopName, schoolName, shopType} = this.props.shop,
            {actionbar} = this.props,
            {switchShopType} = switcher,
            readOnly = actionbar.action === '编辑'

        return (
            <section className={styles.sectionMain}>
                <div>
                    <img src="/assets/user-default.png"/>
                </div>
                <form className={styles.form}>
                    <div className={styles.card}>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>店铺名</span>
                                <input className={styles.input} ref="shopName" type="text" name="shopName" readOnly={readOnly} value={shopName} onChange={this.handleChange}/>
                            </label>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>所属学校</span>
                                <input className={styles.input} type="text" name="schoolName" readOnly value={schoolName}/>
                            </label>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>店铺类型</span>
                                <input className={styles.input} type="text" name="shopType" readOnly value={switchShopType(shopType)}/>
                            </label>
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}

export default SectionMain
