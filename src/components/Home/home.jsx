import styles from "./home.module.css"
import Home_picDesc from './home_picDesc/home_picDesc'
import Links from './links/links'

export default function Home(){
    return(
        <div className={styles.home}>
            <Home_picDesc/>
            <Links/>
        </div>
    )
}