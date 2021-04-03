import React from 'react';
import style from './About.module.css'


export default function About () {
    return (
        <section className={style.description}>
            <div className={style.container}>
                <p>    
                This App was developed with <>❤️</> by <a href="https://www.linkedin.com/in/ivanbatistao/" target="_blank" rel="noopener noreferrer">Ivan E. Batista Ochoa</a>.
                </p>
                <p>I am passionate about programming, learning, contributing, collaborating and working in teams to deliver solutions that excel, satisfy customers and impact positively the business. </p>
                <p>
                I have been working for 5+ years in a mix of project management, customer service and software development projects in different sectors and businesses. The skills I have acquired during these years  are crucial to work in environments in which team collaboration, rapid and effective problem solving skills, critical thinking, innovation and new strategy design are required.
                </p>
                <p>
                Visit my <a href="https://www.linkedin.com/in/ivanbatistao/" target="_blank" rel="noopener noreferrer">LinkedIn</a> profile.
                </p>
            </div>
        </section>
    )
}