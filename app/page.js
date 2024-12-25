'use client';
import { Yeseva_One } from "next/font/google";
import { useEffect } from 'react';
import Image from "next/image";
import styles from "./assets/css/style.module.css";
import "./assets/css/masterslider.css";

const yesevaOne = Yeseva_One({
    variable: "--font-yeseva-sans",
    subsets: ['latin'],
    weight: '400',
});
const loadScript = (src, onLoad) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = onLoad;
    document.body.appendChild(script);
};
export default function Home() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js', () => {

                loadScript('/js/animatescroll.js');

                loadScript('/js/masterslider.js', () => {
                    const slider = new MasterSlider();
                    slider.setup('masterslider', {
                        width: 1680,
                        height: 700,
                        fullwidth: true,
                        autoHeight: true,
                        mouse: true,
                        view: 'basic',
                    });

                    loadScript('/js/wow.min.js', () => {
                        const wow = new WOW({
                            boxClass: 'wow',
                            animateClass: 'animated',
                            offset: 0,
                            mobile: true,
                            live: true,
                        });
                        wow.init();
                    });
                });
            });
        }
    }, []);

    return (
        <>
            <div className={styles.banner}>
                <div className="master-slider ms-skin-default" id="masterslider">
                    <div className="ms-slide" data-delay="1">
                        <Image
                            src="/images/banBg.png"
                            alt=""
                            width={1680}
                            height={700}
                        />
                        <div
                            className="ms-layer ms-caption"
                            data-offset-x="0"
                            data-offset-y="0"
                            data-origin="mc"
                        >
                            <h2 className={styles.title}>服務至上</h2>
                            <p className={styles.info}> 沒有不吸引人的廣告，只有不夠創意的行銷。沒有憤怒的玩家，只有不夠細心的服務。用心傾聽，用創意打動，打造真正讓人難以抗拒的體驗，才能贏得顧客的心。讓每一次互動，都成為品牌的精彩故事。</p>
                        </div>
                    </div>
                </div>
            </div >
            <dl>
                <dd id='About' className={`${styles.row1} ${styles.ddBg} scroll-target `}>
                    <div className={styles.inner}>
                        <div className={styles.left}>
                            <h2 className={styles.title}>公司簡介 <b>About Us</b></h2>
                            <p className={styles.info}>Repp 攜手一支堅強的經營團隊，秉持熱情、效率、品質、服務四大核心價值，致力於打造卓越的客服與社群互動，為玩家帶來前所未有的遊戲體驗。我們用心傾聽每一位玩家的需求，並持續精進，只為成為您最信賴的夥伴。未來，我們將不斷努力，與玩家攜手共創更多精彩時刻，共同邁向成長的每一步。Repp，讓遊戲不僅是娛樂，更是情感與熱情的延伸。</p>
                        </div>
                    </div>
                </dd>

                <dd id='Target' className={`${styles.row2} ${styles.ddBg} scroll-target `}>
                    <div className={styles.inner}>
                        <div className={styles.left}>
                            <h2 className={styles.title}>公司目標 <b>Target</b></h2>
                            <p className={styles.info}>將高品質的海外遊戲帶入玩家的手中是Repp的初衷，我們致力於挑選最優秀的遊戲作品，提供給玩家前所未有的體驗。而除了深耕代理遊戲的領域，我們也期待在未來能自主開發出更多不僅屬於Repp，更屬於台灣的遊戲，展現台灣的創意與實力。透過與玩家攜手合作，我們將共同建造屬於大家的遊戲新世紀，為台灣遊戲產業開創全新篇章。</p>
                        </div>
                    </div>
                </dd>

                <dd id="Service" className={`${styles.row3} ${styles.ddBg} scroll-target `}>
                    <div className={styles.inner}>
                        <h2 className={styles.title}>業務項目 <b>Service</b></h2>
                        <ul>
                            <li>
                                <Image src="/images/row3Icn1.png" alt="" width={125} height={100} />
                                <h2>遊戲代理</h2>
                                <p>專業遊戲代理<br />助力品牌成功！</p>
                            </li>
                            <li>
                                <Image src="/images/row3Icn2.png" alt="" width={125} height={100} />
                                <h2>市場推廣</h2>
                                <p>精準市場推廣策略 <br />結合創意與數據</p>
                            </li>
                            <li>
                                <Image src="/images/row3Icn3.png" alt="" width={125} height={100} />
                                <h2>客戶服務</h2>
                                <p>以客為尊，提供快速<br />細心的服務</p>
                            </li>
                            <li>
                                <Image src="/images/row3Icn4.png" alt="" width={125} height={100} />
                                <h2>社群操作</h2>
                                <p>打造活躍社群<br />與玩家深度互動</p>
                            </li>
                            <li>
                                <Image src="/images/row3Icn5.png" alt="" width={125} height={100} />
                                <h2>遊戲本地化運營</h2>
                                <p>打造活躍社群<br />與玩家深度互動</p>
                            </li>
                        </ul>
                    </div>
                </dd>
            </dl>
        </>
    );
}
