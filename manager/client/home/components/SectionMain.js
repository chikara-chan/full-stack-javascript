import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import { Card, Col, Row, Icon } from 'antd';
import styles from '../sass/SectionMain'

class SectionMain extends Component {
    constructor() {
        super()

    }

    handleClickItem(link) {
        browserHistory.push(link)
    }

    render() {
        const {shop} = this.props

        return (
            <section className={styles.sectionMain}>
                <h1 className={styles.title}>常用链接</h1>
                <Row className={styles.row}>
                  <Col span="8" className={styles.col}>
                    <Card className={styles.card} onClick={() => this.handleClickItem('/me')}>
                        <div span="8" className={styles.subCol} style={{color: '#fff', background: '#00a65a'}}>
                            <Icon type="user"/>
                        </div>
                        <div span="16" className={styles.subCol}>用户管理</div>
                    </Card>
                  </Col>
                  <Col span="8" className={styles.col}>
                    <Card className={styles.card} onClick={() => this.handleClickItem('/order')}>
                        <div span="8" className={styles.subCol} style={{color: '#fff', background: '#dd4b39'}}>
                            <Icon type="file-text"/>
                        </div>
                        <div span="16" className={styles.subCol}>订单管理</div>
                    </Card>
                  </Col>
                  <Col span="8" className={styles.col}>
                    <Card className={styles.card} onClick={() => this.handleClickItem('/shop')}>
                        <div span="8" className={styles.subCol} style={{color: '#fff', background: '#00c0ef'}}>
                            <Icon type="environment-o" />
                        </div>
                        <div span="16" className={styles.subCol}>地标管理</div>
                    </Card>
                  </Col>
                </Row>
                <Row className={styles.row}>
                  <Col span="8" className={styles.col}>
                    <Card className={styles.card} onClick={() => this.handleClickItem('/item')}>
                        <div span="8" className={styles.subCol} style={{color: '#fff', background: '#001f3f'}}>
                            <Icon type="appstore-o"/>
                        </div>
                        <div span="16" className={styles.subCol}>商品管理</div>
                    </Card>
                  </Col>
                  <Col span="8" className={styles.col}>
                    <Card className={styles.card} onClick={() => this.handleClickItem('/stat')}>
                        <div span="8" className={styles.subCol} style={{color: '#fff', background: '#6556E2'}}>
                            <Icon type="line-chart"/>
                        </div>
                        <div span="16" className={styles.subCol}>天机平台</div>
                    </Card>
                  </Col>
                </Row>
            </section>
        )
    }
}

export default SectionMain
