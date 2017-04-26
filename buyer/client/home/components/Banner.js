import React, {Component} from 'react'
import {Carousel} from 'antd'
import styles from '../sass/Banner'

class Banner extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <section className={styles.sectionMain}>
              <Carousel className={styles.carousel} autoplay autoplaySpeed={3000}>
                <div className={styles.container}>
                    <img className={styles.img} src="/assets/banner1.jpg"/>
                </div>
                <div className={styles.container}>
                    <img className={styles.img} src="/assets/banner2.jpg"/>
                </div>
              </Carousel>
            </section>
        )
    }
}

export default Banner
