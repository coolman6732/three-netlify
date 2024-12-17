'use client';
import styles from "../assets/css/style.module.css";
import { useEffect, useState } from 'react';
export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/js/animatescroll.js';
        document.body.appendChild(script);

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            const sections = document.querySelectorAll('dd.scroll-target');
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();

                if (rect.top <= 0 && rect.bottom >= 0) {
                    setActiveLink(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            document.body.removeChild(script);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (sectionId, event) => {
        event.preventDefault();
        setActiveLink(sectionId);
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <header className={`${styles.header} ${isScrolled ? styles.fixNav : ''}`}>
                <div className={styles.inner}>
                    <a href="" className={styles["logo"]}>Repp</a>
                    <ul>
                        <li>
                            <a
                                href="#"
                                className={activeLink === 'About' ? styles.active : ''}
                                onClick={(e) => handleClick('About', e)}
                            >
                                公司簡介
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={activeLink === 'Target' ? styles.active : ''}
                                onClick={(e) => handleClick('Target', e)}
                            >
                                公司目標
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={activeLink === 'Service' ? styles.active : ''}
                                onClick={(e) => handleClick('Service', e)}
                            >
                                業務項目
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={activeLink === 'Contact' ? styles.active : ''}
                                onClick={(e) => handleClick('Contact', e)}
                            >
                                聯絡我們
                            </a>
                        </li>
                    </ul>
                </div>
            </header >
        </>
    );
}
