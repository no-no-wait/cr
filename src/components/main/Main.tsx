import { FC, useRef, RefObject } from 'react';
import cx from 'classnames';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import GlarePink from '../../images/glare/glare-pink.png';
import GlareBlue from '../../images/glare/glare-blue.png';

import ArrowRightBMT from '../../images/arrows/arrow-main-bmt-right.png';
import CrazyMonkey from '../../images/main/crazy-monkey.png';
import Calculator from '../../images/main/template.png';
import Banana from '../../images/objects/banana.webp';
import Cherry from '../../images/objects/cherry.webp';
import GrapesHO from '../../images/objects/grapes-half-opacity.webp';
import { objectAppear, objectTransform } from '../../functions';

import s from './Main.module.scss'
import connectToContract from '../../blockchain/web3'; // remove

export const Main: FC = () => {
    const crazyMonkeyRef = useRef<HTMLImageElement>(null);
    const bananaRef = useRef<HTMLImageElement>(null);
    const cherryRef = useRef<HTMLImageElement>(null);
    const grapeRef = useRef<HTMLImageElement>(null);
    const crazyMonkeyFull = useRef<HTMLDivElement>(null);
    const mainText = useRef<HTMLDivElement>(null);
    const monkeText = useRef<HTMLDivElement>(null);
    const btrText = useRef<HTMLDivElement>(null);
    const btlText = useRef<HTMLDivElement>(null);

    connectToContract(); // remove

    useGSAP(() => {
        gsap.to(`.${s.objects}`, {
            y: -600,
            duration: 3,
            ease: "none",
            scrollTrigger: {
                trigger: `.${s.objects}`,
                start: 'top 100%',
                end: 'bottom 0',
                markers: true,
                scrub: true,
            }
        })

        const handleMouseMove = (e: MouseEvent) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
    
            const offsetX = (window.innerWidth / 2 - mouseX) * 0.04;
            const offsetY = (window.innerHeight / 2 - mouseY) * 0.04;
    
            gsap.to(crazyMonkeyRef.current, {
                x: offsetX,
                y: offsetY,
                duration: 0.5,
                ease: "power2.out",
            });
        };
    
        window.addEventListener("mousemove", handleMouseMove);
    });

    objectAppear(grapeRef, 200)
    objectAppear(bananaRef, 400)
    objectAppear(cherryRef, 600)
    objectAppear(crazyMonkeyFull, 400)
    objectAppear(crazyMonkeyRef, 500)
    objectAppear(mainText, 500)

    if (window.innerWidth > 1366) {
        objectTransform(monkeText, -400, 450, true);
        objectTransform(btrText, -250, 450, true);
        objectTransform(btlText, -150, 450, true);
    }

    return (
        <div className={s.root}>
            {/* <img src={GlarePink} className={cx(s.glare, s.glarePink)} alt="glare pink44" />
            <img src={GlarePink} className={cx(s.glare, s.glarePink1)} alt="glare pink55" />
            <img src={GlareBlue} className={cx(s.glare, s.glareBlue)} alt="glare blue 111" /> */}
            <div className={s.objects}>
                <img src={Banana} ref={bananaRef} className={s.objectBanana} alt="banana" />
                <img src={GrapesHO} ref={grapeRef} className={s.objectGrapesHO} alt="grapes" />
                <img src={Cherry} ref={cherryRef} className={s.objectCherry} alt="cherry" />
            </div>
            <div className={s.mainSection}>
                <div className={s.mainText} ref={mainText}>
                    <div className={s.monkeText} ref={monkeText}>MONKE:</div>
                    <div className={s.btrText} ref={btrText}>Born to Rise,</div>
                    <div className={s.btlText} ref={btlText}>Built to Lead</div>
                    <img src={Calculator} className={s.calculatorDesktop} alt="calculator desktop" />
                </div>
                <div className={s.crazyMonkeyFull} ref={crazyMonkeyFull}>
                    <img src={CrazyMonkey} ref={crazyMonkeyRef} className={s.crazyMonkey} alt="crazy monkey" />
                    <div className={s.bmt}>
                        <div className={s.bmtText}>Buy $MONKE tokens now:</div>
                        <img src={ArrowRightBMT} className={s.bmtArrow} alt="bmt arrow" />
                    </div>
                </div>
                <img src={Calculator} className={s.calculatorMobile} alt="calculator mobile" />
            </div>
        </div>
    )
}
