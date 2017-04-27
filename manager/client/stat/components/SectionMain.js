import React, {Component} from 'react'
import {Link} from 'react-router'
import styles from '../sass/SectionMain'

class SectionMain extends Component {
    componentDidMount() {
        require('g2')
        this.createG2 = require('g2-react')
    }
    render() {
        const {actions, stats} = this.props
        let Pie1, Pie2, Pie3

        if (!this.createG2 || Object.keys(stats).length === 0) {
            return null
        }

        Pie1 = this.createG2(chart => {
            chart.line().position('日期*订单量').size(1);
            chart.render()
        })

        Pie2 = this.createG2(chart => {
            chart.setMode('select');
            chart.select('rangeX');
            chart.interval().position('日期*商品销量').size(1);
            chart.render()
            chart.on('plotdblclick', function(ev) {
                chart.get('options').filters = {};
                chart.repaint();
            });
        })

        Pie3 = this.createG2(chart => {
            chart.line().position('日期*交易额').size(1);
            chart.render()
        })

        return (
            <section className={styles.sectionMain}>
                <div className={styles.section}>
                    <h1 className={styles.title}>订单概况</h1>
                    <Pie1 height={400} width={400} forceFit={true} data={stats.orderStat}/>
                </div>
                <div className={styles.section}>
                    <h1 className={styles.title}>商品概况</h1>
                    <Pie2 height={400} width={400} forceFit={true} data={stats.itemStat}/>
                </div>
                <div className={styles.section}>
                    <h1 className={styles.title}>交易概况</h1>
                    <Pie3 height={400} width={400} forceFit={true} data={stats.tradeStat}/>
                </div>
            </section>
        )
    }
}

export default SectionMain
