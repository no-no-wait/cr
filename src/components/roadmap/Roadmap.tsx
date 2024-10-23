import { FC } from 'react'
import cx from 'classnames';
import gsap from 'gsap';


import MiniSlot from '../../images/objects/mini-slot.png'
import SVGBigSlot from '../../images/objects/big-slot.svg';
import MonkeWithCoconut from '../../images/monkes/monke-with-coconut.png';
import GlarePink from '../../images/glare/glare-pink.png';
import LuckySeven from '../../images/objects/lucky-seven.png';
import LuckySevenHO from '../../images/objects/lucky-seven-half-opacity.png';

import s from './Roadmap.module.scss';
import { useGSAP } from '@gsap/react';

export const Roadmap: FC = () => {
  useGSAP(() => {
    gsap.fromTo(`.${s.roadmapText}`, {
        scale: 3,
        opacity: 0,
      }, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: `.${s.roadmapText}`,
          start: "top 100%",
          end: "bottom 0",
          scrub: false,
        }
      })

      gsap.to(`.${s.luckySeven}`, {
        y: -2000,
        duration: 3,
        ease: "none",
        scrollTrigger: {
            trigger: `.${s.luckySeven}`,
            start: 'top 100%',
            end: 'top 0',
            scrub: true,
        }
    })

    gsap.to(`.${s.luckySevenHO}`, {
      y: -2000,
      duration: 3,
      ease: "none",
      scrollTrigger: {
          trigger: `.${s.luckySevenHO}`,
          start: 'top 100%',
          end: 'top 0',
          scrub: true,
      }
    })

    gsap.to(`.${s.msWrapper1}`, {
        "--before-opacity-main-1": 1,
        duration: 1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: `.${s.msWrapper1}`,
          start: "top 100%",
          end: "top 90%",
          scrub: false,
        }
      })

      gsap.to(`.${s.msWrapper1}`, {
        "--before-opacity-1": 1,
        duration: 1,
        delay: 0.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: `.${s.msWrapper1}`,
          start: "top 100%",
          end: "top 90%",
          scrub: false,
        }
      })

      gsap.to(`.${s.msWrapper2}`, {
        "--before-opacity-main-2": 1,
        duration: 1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: `.${s.msWrapper2}`,
          start: "top 100%",
          end: "top 90%",
          scrub: false,
        }
      })

      gsap.to(`.${s.msWrapper2}`, {
        "--before-opacity-2": 1,
        duration: 1,
        delay: 0.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: `.${s.msWrapper2}`,
          start: "top 25%",
          end: "top 25%",
          scrub: false,
        }
      })

      gsap.to(`.${s.msWrapper3}`, {
        "--before-opacity-main-3": 1,
        duration: 1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: `.${s.msWrapper3}`,
          start: "top 100%",
          end: "top 90%",
          scrub: false,
        }
      })

      gsap.to(`.${s.msWrapper3}`, {
        "--before-opacity-3": 1,
        duration: 1,
        delay: 0.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: `.${s.msWrapper3}`,
          start: "top 100%",
          end: "top 90%",
          scrub: false,
        }
      })

      gsap.to(`.${s.bigSlotWrapper}`, {
        "--before-opacity-main-1-D": 1,
        duration: 1,
        delay: 0.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: `.${s.bigSlotWrapper}`,
          start: "top 80%",
          end: "top 50%",
          scrub: false,
        }
      })

      gsap.to(`.${s.bigSlotWrapper}`, {
        "--before-opacity-1-D": 1,
        duration: 1,
        delay: 0.4,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: `.${s.bigSlotWrapper}`,
          start: "top 80%",
          end: "top 50%",
          scrub: false,
        }
      })

      gsap.to(`.${s.before2}`, {
        "--before-opacity-main-2-D": 1,
        duration: 1,
        delay: 0.6,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: `.${s.before2}`,
          start: "top 80%",
          end: "top 50%",
          scrub: false,
        }
      })

      gsap.to(`.${s.before2}`, {
        "--before-opacity-2-D": 1,
        duration: 1,
        delay: 0.8,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: `.${s.before2}`,
          start: "top 80%",
          end: "top 50%",
          scrub: false,
        }
      })

      gsap.to(`.${s.before3}`, {
        "--before-opacity-main-3-D": 1,
        duration: 1,
        delay: 1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: `.${s.before3}`,
          start: "top 75%",
          end: "top 30%",
          scrub: false,
        }
      })

      gsap.to(`.${s.before3}`, {
        "--before-opacity-3-D": 1,
        duration: 1,
        delay: 1.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: `.${s.before3}`,
          start: "top 75%",
          end: "top 30%",
          scrub: false,
        }
      })
  })

  return (
    <div className={s.root}>
    <img src={LuckySeven} className={s.luckySeven} alt="lucky seven" />
    <img src={LuckySevenHO} className={s.luckySevenHO} alt="lucky seven ho" />
    <img src={GlarePink} className={cx(s.glare, s.glarePink)} alt="glare pink445" />
        <div className={s.roadmapText}>ROADMAP</div>
        <div className={s.main}>
            <div className={s.slots}>
                <div className={s.msWrapper1}>
                    <img src={MiniSlot} className={s.miniSlot} alt="mini slot" />
                </div>
                <div className={s.msWrapper2}>
                    <img src={MiniSlot} className={s.miniSlot} alt="mini slot1" />
                </div>
                <div className={s.msWrapper3}>
                    <img src={MiniSlot} className={s.miniSlot} alt="mini slot2" />
                </div>
            </div>
            <div className={s.bigSlotWrapper}>
                <img src={SVGBigSlot} className={s.bigSlot} alt="big slot" />
                <div className={s.before2}></div>
                <div className={s.before3}></div>
            </div>
            <img src={MonkeWithCoconut} className={s.monkeWithCoconut} alt="monke coconut" />
        </div>
        <svg className={s.rightTriangle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 682.9488067626953 716.04296875" fill="none"> <path d="M4.444419307984157 321.64470322304504C-3.093213035069359 314.10772061987103 -0.7045147562658863 301.34935615104047 9.049613139505366 297.05024394779326L682.8982714387276 0.00034497758423210454L286.69591703342337 603.8971214133136L4.444419307984157 321.64470322304504Z" fill="#FF008A"></path> <path d="M682.8982714387276 0.00034497758423210454L286.69591703342337 603.8971214133136L667.7358694154365 603.8971214133136C676.1102945300742 603.8971214133136 682.8982714387276 597.1091445046601 682.8982714387276 588.7347193900223L682.8982714387276 0.00034497758423210454Z" fill="#FF008A"></path> </svg>
    </div>
  )
}
