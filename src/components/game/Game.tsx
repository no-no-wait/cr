import { FC } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import MonkeyVideo from '../../video/monkey-video.mp4'

import s from './Game.module.scss';

export const Game: FC = () => {
  // useGSAP(() => {
  //   gsap.fromTo(`.${s.gameText}`, {
  //     scale: 3,
  //     opacity: 0,
  //   }, {
  //     opacity: 1,
  //     scale: 1,
  //     duration: 1,
  //     ease: "power4.inOut",
  //     scrollTrigger: {
  //       trigger: `.${s.gameText}`,
  //       start: "bottom 80%",
  //       end: "bottom 100%",
  //       scrub: false,
  //     }
  //   })
  // })
  
  return (
    <div className={s.root}>
      <div className={s.gameText}>GAME</div>
      <video className={s.monkeyVideo} preload="auto" playsInline={true} autoPlay={true} loop={true} muted={true}>
        <source src={MonkeyVideo} type="video/mp4" />
      </video>
    </div>
  )
}
