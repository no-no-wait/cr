import { FC } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { Socials } from '../../helpComponents';
import MonkeLight from '../../images/monkes/monke-light.png';

import s from './Footer.module.scss';

export const Footer: FC = () => {
  // useGSAP(() => {
  //   gsap.fromTo(`.${s.headerText}`, {
  //       scale: 3,
  //       opacity: 0,
  //   }, {
  //       opacity: 1,
  //       scale: 1,
  //       duration: 1,
  //       ease: "power4.inOut",
  //       scrollTrigger: {
  //       trigger: `.${s.headerText}`,
  //       start: "top 75%",
  //       end: "top 50%",
  //       scrub: false,
  //       }
  //   })
  // })

  return (
    <div className={s.root}>
        <div className={s.main}>
            <div className={s.headerText}>CONTACTS</div>
            <div className={s.mainText}>Disclaimer: This game is for entertainment purposes only. No real money is involved, and all outcomes are purely based on chance. Play responsibly</div>
            <Socials bigIcons className={s.socialsDesktop} />
            <Socials className={s.socialsMobile} />
        </div>
        <img src={MonkeLight} className={s.monkeLight} alt="monke light" />
    </div>
  )
}
