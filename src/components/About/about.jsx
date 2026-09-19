import styles from './about.module.css'
import Carousel from '../carousel/carousel'

export default function About() {
    return (
        <div className={styles.main_container}>

            <div className={styles.header}>
                <h1>About Me!</h1>
                <p>
                    I have many hobbies outside of school and coding.
                    I enjoy going to the gym, running, biking, skiing,
                    hiking, reading, traveling, and spending time with friends.
                </p>
            </div>

            <div className={styles.carousel_container}>
                <Carousel />
            </div>

        </div>
    )
}