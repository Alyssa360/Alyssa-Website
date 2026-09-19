import { useState } from 'react'
import styles from './carousel.module.css'

import biking_pic from '../../assets/biking_pic.jpg'
import hackathon_pic from '../../assets/hackathon_pic.jpg'
import hiking_pic_with_bf from '../../assets/hiking_pic_with_bf.jpg'
import hiking_pic_with_gang from '../../assets/hiking_with_gang.jpg'
import route_66_pic from '../../assets/route_66_pic.jpg'
import ski_pic from '../../assets/ski_pic.jpg'
import running_pic from '../../assets/running_pic.jpg'
import friends from '../../assets/friends.jpg'
const slides = [
    {
        image: biking_pic,
        title: 'Mountain Biking!',
        
    },
    {
        image: hiking_pic_with_bf,
         title: 'Hiking with my boyfriend',
        
    },
    {
        image: friends,
        title: 'Hiking with friends',
        
    },
    {
        image: route_66_pic,
        title: 'Biking on Route 66',
        
    },
    {
        image: ski_pic,
        title: 'Skiing with my friends',
        
    },
    {
        image: running_pic,
        title: 'Running with my 2 dogs!',
        
    },
    {
        image: hackathon_pic,
        title: 'ConUHacks 2026',
        
    }
]

export default function Carousel() {

    const [currentSlide, setCurrentSlide] = useState(0)

    function nextSlide() {
        setCurrentSlide((currentSlide + 1) % slides.length)
    }

    function previousSlide() {
        setCurrentSlide(
            (currentSlide - 1 + slides.length) % slides.length
        )
    }

    return (
        <div className={styles.carousel}>

            <button
                className={styles.arrow}
                onClick={previousSlide}
            >
                ‹
            </button>

            <div className={styles.slide}>
                <div className={styles.image_container}>

                <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                />

                </div>

                <div className={styles.text}>
                    <h2>{slides[currentSlide].title}</h2>
                </div> 

            </div>

            <button
                className={styles.arrow}
                onClick={nextSlide}
            >
                ›
            </button>

            <div className={styles.dots}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={
                            index === currentSlide
                                ? styles.active_dot
                                : styles.dot
                        }
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>

        </div>
    )
}