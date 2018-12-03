import React from 'react';

import styles from './Footer.module.css';

const footer = () => (
    <footer className={styles['footer']}>
        <h1>Image Gallery</h1>
        <div className={styles["FooterContainer"]}>
            <ul className={styles["FooterColumn1"]}>
                <li><a href="#!">About</a></li>
                <li><a href="#!">Terms & Conditions</a></li>
                <li><a href="#!">Create Account</a></li>
            </ul>
            <ul className={styles["FooterColumn2"]}>
                <li><a href="https://www.linkedin.com/in/justin-myers-712901173/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://tender-varahamihira-ff1ef7.netlify.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-home"></i></a></li>
                <li><a href="https://github.com/Devman0451" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
            </ul>
            <ul className={styles["FooterColumn3"]}>
                <li><a href="https://www.linkedin.com/in/justin-myers-712901173/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                <li><a href="https://tender-varahamihira-ff1ef7.netlify.com/" target="_blank" rel="noopener noreferrer">My Portfolio Site</a></li>
                <li><a href="https://github.com/Devman0451" target="_blank" rel="noopener noreferrer">My Github</a></li>
            </ul>
        </div>
        <h2>Newsletter</h2>
        <form className={styles["FooterSubscribe"]} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name@Email.com" />
            <input type="submit" value="Subscribe" />
        </form>
        <p><span>&copy;2018</span> Justin Myers, All Rights Reserved</p>
    </footer>
)

export default footer;