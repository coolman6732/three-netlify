'use client';

import styles from "../assets/css/style.module.css";

export default function Footer() {

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.inner}>
                    <div className={styles.column}>
                        <h2>Contact</h2>
                        <ul>
                            <li>Repp Technology Co., Limited</li>
                            <li>email  gloria.xiao@ariel.com.tw</li>
                            <li>Tel  +886 2 2788-3611</li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h2>Navigation</h2>
                        <ul className={styles.footerMu}>
                            <li>公司簡介</li>
                            <li>公司目標</li>
                            <li>營業項目</li>
                            <li>聯絡我們</li>
                        </ul>
                    </div>
                    <h5 className={styles.h5}>Copyright © 2024 Repp</h5>
                </div>
            </footer>
        </>
    );
}
