import { FC, useRef } from 'react';
import cx from 'classnames';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import GlarePink from '../../images/glare/glare-pink.png';
import GlareBlue from '../../images/glare/glare-blue.png';

import ArrowRightBMT from '../../images/arrows/arrow-main-bmt-right.png';
import CrazyMonkey from '../../images/main/crazy-monkey.png';
import Calculator from '../../images/main/template.png';
import Banana from '../../images/objects/banana.png';
import Cherry from '../../images/objects/cherry.png';
import GrapesHO from '../../images/objects/grapes-half-opacity.png';

import s from './Main.module.scss'

export const Main: FC = () => {
    const mm = gsap.matchMedia();
    const crazyMonkeyRef = useRef(null);

    useGSAP(() => {
        gsap.to(`.${s.mainText}`, {
            opacity: 1,
            duration: 2.5,
            ease: "power4.inOut"
        })

        gsap.to(`.${s.crazyMonkeyFull}`, {
            opacity: 1,
            duration: 1,
            ease: "power4.inOut"
        })

        gsap.to(`.${s.crazyMonkey}`, {
            opacity: 1,
            delay: 1.2,
            duration: 1,
            ease: "power4.inOut"
        })
        gsap.fromTo(`.${s.objectCherry}`, {
            scale: 2,
            opacity: 0,
        }, {
            scale: 1,
            opacity: 1,
            delay: 1,
            duration: 0.2,
            ease: 'power4.out',
        })

        gsap.fromTo(`.${s.objectBanana}`, {
            scale: 2,
            opacity: 0,
        }, {
            scale: 1,
            opacity: 1,
            delay: 1,
            duration: 0.2,
            ease: 'power4.out',
        })

        gsap.fromTo(`.${s.objectGrapesHO}`, {
            scale: 2,
            opacity: 0,
        }, {
            scale: 1,
            opacity: 1,
            delay: 1,
            duration: 0.2,
            ease: 'power4.out',
        })

        gsap.to(`.${s.objectCherry}`, {
            y: -600,
            duration: 3,
            ease: "none",
            scrollTrigger: {
                trigger: `.${s.objectCherry}`,
                start: 'top 100%',
                end: 'bottom 0',
                scrub: true,
            }
        })

        gsap.to(`.${s.objectGrapesHO}`, {
            y: -600,
            duration: 3,
            ease: "none",
            scrollTrigger: {
                trigger: `.${s.objectCherry}`,
                start: 'top 100%',
                end: 'bottom 0',
                scrub: true,
            }
        })

        gsap.to(`.${s.objectBanana}`, {
            y: -600,
            duration: 3,
            ease: "none",
            scrollTrigger: {
                trigger: `.${s.objectCherry}`,
                start: 'top 100%',
                end: 'bottom 0',
                scrub: true,
            }
        })

        gsap.to(`.${s.crazyMonkeyFull}`, {
            opacity: 1,
            duration: 1,
            ease: "power4.inOut"
        })

        gsap.to(`.${s.crazyMonkey}`, {
            opacity: 1,
            delay: 1.2,
            duration: 1,
            ease: "power4.inOut"
        })
        
        mm.add("(min-width: 1238px)", () => {
            gsap.to(`.${s.mainText}`, {
                opacity: 1,
                duration: 2.5,
                ease: "power4.inOut"
            })
            
            gsap.fromTo(`.${s.monkeText}`, {
                x: -950,
            }, {
                x: -475,
                opacity: 1,
                delay: 0.4,
                duration: 0.5,
                ease: "power4.out"
            })
    
            gsap.to(`.${s.btrText}`, {
                x: -350,
                duration: 0.5,
                opacity: 1,
                delay: 0.5,
                ease: "power4.out"
            })
    
            gsap.to(`.${s.btlText}`, {
                x: -225,
                duration: 0.5,
                opacity: 1,
                delay: 0.6,
                ease: "power4.out"
            })
        });

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

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    });

    return (
        <div className={s.root}>
            <img src={GlarePink} className={cx(s.glare, s.glarePink)} alt="glare pink44" />
            <img src={GlarePink} className={cx(s.glare, s.glarePink1)} alt="glare pink55" />
            <img src={GlareBlue} className={cx(s.glare, s.glareBlue)} alt="glare blue 111" />
            <img src={Banana} className={s.objectBanana} alt="banana" />
            <img src={GrapesHO} className={s.objectGrapesHO} alt="grapes" />
            <img src={Cherry} className={s.objectCherry} alt="cherry" />
            <div className={s.mainSection}>
                <div className={s.mainText}>
                    <div id="monkeText" className={s.monkeText}>MONKE:</div>
                    <div id="btrText" className={s.btrText}>Born to Rise,</div>
                    <div id="btlText" className={s.btlText}>Built to Lead</div>
                    <img src={Calculator} className={s.calculatorDesktop} alt="calculator desktop" />
                </div>
                <div className={s.crazyMonkeyFull}>
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
