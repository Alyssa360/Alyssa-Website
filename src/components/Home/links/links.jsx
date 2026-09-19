import CGD_pic from '../../../assets/CGD_pic.png'
import github from '../../../assets/github.png'
import linkedIn_pic from '../../../assets/linkedIn_pic.png'
import resume_pic from '../../../assets/resume_pic.png'
import resume_AlyssaGarofalo from '../../../assets/resume_AlyssaGarofalo.pdf'

import styles from './links.module.css'

const links = [
    {
        name: 'Concordia Game Dev',
        image: CGD_pic,
        url: 'https://www.concordiagamedev.ca/'
    },
    {
        name: 'GitHub',
        image: github,
        url: 'https://github.com/Alyssa360'
    },
    {
        name: 'LinkedIn',
        image: linkedIn_pic,
        url: 'https://www.linkedin.com/in/alyssa-garofalo-0423a6333/'
    },
    {
        name: 'Resume',
        image: resume_pic,
        url: resume_AlyssaGarofalo
    }
]

export default function Links() {
    return (
        <div className={styles.main_container}>
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                >
                    <div className={styles.circle}>
                        <img src={link.image} alt={link.name} />
                    </div>

                    <p>{link.name}</p>
                </a>
            ))}
        </div>
    )
}