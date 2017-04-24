import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import styles from '../sass/SectionMain'
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu'
import Modal from 'semantic-ui-react/dist/commonjs/modules/Modal'
import 'semantic-ui-css/components/menu.css'
import 'semantic-ui-css/components/dimmer.css'
import 'semantic-ui-css/components/modal.css'

class SectionMain extends Component {
    constructor() {
        super()

        this.handleClickSubmitBtn = this.handleClickSubmitBtn.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleChangePic = this.handleChangePic.bind(this)
        this.handleClickItem = this.handleClickItem.bind(this)
        this.handleOpenModal = this.handleOpenModal.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)
    }

    handleClickSubmitBtn(e) {
        const {actions} = this.props

        actions.postEditItem()
        e.preventDefault()
    }

    handleChange(e) {
        const {target} = e,
            {actions} = this.props

        if (~target.name.indexOf('.')) {

        }

        actions.updateItem({
            [target.name]: target.dataset.value ? target.dataset.value : target.value
        })
    }

    handleChangePic(e) {
        const {target} = e,
            {actions} = this.props

        actions.postItemPic({
            [target.name]: target.files[0]
        })
    }

    handleOpenModal(e) {
        const {actions} = this.props

        actions.updateModal({
            show: true
        })
    }

    handleClickItem(e, cat) {
        const {actions} = this.props

        actions.updateItem({
            cat
        })
        this.handleCloseModal()
    }

    handleCloseModal(e) {
        const {actions} = this.props

        actions.updateModal({
            show: false
        })
    }

    render() {
        const {itemName, brand, price, quantity, property, unit, desc, pic, cat} = this.props.item,
            {cats, modal} = this.props

        return (
            <section className={styles.sectionMain}>
                <form className={styles.form}>
                    <div className={styles.card}>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>* 商品名</span>
                                <input className={styles.input} type="text" name="itemName" placeholder="请输入商品名" value={itemName} required onChange={this.handleChange}/>
                            </label>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>* 品牌</span>
                                <input className={styles.input} type="text" name="brand" placeholder="请输入品牌" value={brand} required onChange={this.handleChange}/>
                            </label>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>* 图片</span>
                                <img className={styles.img} src={pic}/>
                                <input className={styles.file} ref="file" type="file" accept="image/*" name="file" onChange={this.handleChangePic}/>
                            </label>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>* 价格</span>
                                <input className={styles.input} type="number" name="price" placeholder="请输入价格" value={price} required onChange={this.handleChange}/>
                            </label>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>* 库存</span>
                                <input className={styles.input} type="number" name="quantity" placeholder="请输入库存" value={quantity} required onChange={this.handleChange}/>
                            </label>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>* 分类</span>
                                <input className={styles.input} type="text" name="cat" value={cat.catName} placeholder="请选择分类" required readOnly onClick={this.handleOpenModal}/>
                            </label>
                            <Modal className={styles.modal} dimmer="blurring" basic open={modal.show} onClose={this.handleCloseModal}>
                                    <Menu className={styles.menu} vertical>
                                        {cats.map(cat =>
                                            <Menu.Item className={styles.item} key={cat.id} onClick={e => {this.handleClickItem(e, cat)}}>
                                                {cat.catName}
                                            </Menu.Item>
                                        )}
                                    </Menu>
                            </Modal>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>规格</span>
                                <input className={styles.input} type="text" name="property" value={property} placeholder="请输入规格" onChange={this.handleChange}/>
                            </label>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>单位</span>
                                <input className={styles.input} type="text" name="unit" value={unit} placeholder="请输入单位" onChange={this.handleChange}/>
                            </label>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                <span className={styles.title}>描述</span>
                                <textarea className={styles.input} name="desc" value={desc} placeholder="请输入商品描述" onChange={this.handleChange}/>
                            </label>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.field}>
                            <input type="submit" value="保存" className={styles.submitBtn} onClick={this.handleClickSubmitBtn}/>
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}

export default SectionMain
