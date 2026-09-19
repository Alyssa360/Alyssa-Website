import styles from './home_picDesc.module.css'
import pic_of_me from '../../../assets/me.jpg'

export default function Home_picDesc(){
    return(
        <div className={styles.main_div}>
            <div className={styles.intro_div}>
                <img className={styles.profile_pic} src={pic_of_me} alt="pciture of me"/>
                <div className={styles.text_box_intro}>
                    <p className={styles.intro_text}>Hi there! I'm currently completing my Bachelors of Computer Science,
                        Joint Major in Data Science. I'm the Head of Tech for Game Developement Concordia. I've taken part in 2 Hackathons and I've had 2 internships.
                        I'm interested in web developement, data, AI, and cybersecurity (although there is still so much to learn)!
                    </p>
                </div>
            </div>

        </div>
        
    )
}