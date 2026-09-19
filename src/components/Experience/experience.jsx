
import styles from './experience.module.css'

const experiences = [
    {
        year: '2026 — Present',
        title: 'Head of Tech',
        organization: 'Game Development Concordia',
        type: 'Leadership',
        description:
            'Leading the technical team and helping coordinate the development and maintenance of the club’s web projects.',
        skills: ['React', 'JavaScript', 'GitHub']
    },
    {
        year: 'May 2026 — Aug 2026',
        title: 'Data Analyst Intern',
        organization: 'Charles River Laboratories',
        type: 'Internship',
        description:
            'Worked with Power BI, Power Automate, and SharePoint to organize and analyze training feedback and automate data workflows.',
        skills: ['Power BI', 'Power Automate', 'SharePoint']
    },
    {
       year: '2026',
        title: 'ConUHacks 2026',
        organization: 'Concordia University',
        type: 'Hackathon',
        description:
            'Collaborated with a team to build FairGrade, an AI-powered learning analytics platform designed to help instructors better understand student performance.',
        skills: ['Next.js', 'React', 'AI']
    },
    {
        year: 'May 2025 — Aug 2025',
        title: 'Data Analyst Administrator Intern',
        organization: 'Charles River Laboratories',
        type: 'Internship',
        description:
            'Reviewed and validated project data, supported data organization, and assisted with project coordination and reporting.',
        skills: ['Excel', 'SharePoint', 'Data Analysis']
    },
    {
        year: '2025',
        title: 'Web Development Project',
        organization: 'Freelance Project',
        type: 'Project',
        description:
            'Helped a friend design and develop a responsive website, gaining hands-on experience working with a real client and adapting to their needs.',
        skills: ['React', 'JavaScript', 'CSS']
    },
    {
        year: '2025',
        title: 'ConUHacks 2025',
        organization: 'Concordia University',
        type: 'Hackathon',
        description:
            'Worked with a team to develop Study Buddy, an AI-powered tool that helps students find useful learning resources.',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python']
    }
]

export default function Experience() {
    return (
        <div className={styles.main_container}>

            <div className={styles.header}>
                <h1>Experience</h1>
                <p>
                    A collection of my work, projects, leadership, and
                    experiences in technology.
                </p>
            </div>

            <div className={styles.timeline}>

                {experiences.map((experience, index) => (
                    <div
                        className={`${styles.timeline_item} ${
                            index % 2 === 0
                                ? styles.left
                                : styles.right
                        }`}
                        key={experience.title}
                    >
                        <div className={styles.dot}></div>

                        <div className={styles.card}>
                            <span className={styles.year}>
                                {experience.year}
                            </span>

                            <span className={styles.type}>
                                {experience.type}
                            </span>

                            <h2>{experience.title}</h2>

                            <h3>{experience.organization}</h3>

                            <p>{experience.description}</p>

                            <div className={styles.skills}>
                                {experience.skills.map((skill) => (
                                    <span key={skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}
