import { FC } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import cx from 'classnames';
import Marquee from "react-fast-marquee";

import VioletTextBG from '../../images/backgrounds/violet-text-bg.webp'
import FireMonkey from '../../images/objects/fire-monkey.png';
import WildHO from '../../images/objects/wild-half-opacity.webp';
import BonusHO from '../../images/objects/bonus-half-opacity.webp';
import FireMonkeyHO from '../../images/backgrounds/fire-monke-ho.webp';
import SVGVelvetLine from '../../images/other/velvet-line.svg';

import s from './Whoismonke.module.scss';

export const Whoismonke: FC = () => {
  const mm = gsap.matchMedia();

  useGSAP(() => {
      gsap.fromTo(`.${s.fireMonkey}`, {
        y: 400
      }, {
        y: 0,
        duration: 1,
        ease: "none",
        scrollTrigger: {
            trigger: `.${s.fireMonkey}`,
            start: 'top 100%',
            end: 'top 80%',
            scrub: true,
        }
    })

    gsap.fromTo(`.${s.objects}`, {
      y: 0,
    }, {
      y: -800,
      duration: 3,
      ease: "none",
      scrollTrigger: {
          trigger: `.${s.objects}`,
          start: 'top 100%',
          end: 'top 0',
          // markers: true,
          scrub: true,
      }
  })
  
    // gsap.fromTo(`.${s.whoismonkeTxt}`, {
    //   scale: 3,
    //   opacity: 0,
    // }, {
    //   opacity: 1,
    //   scale: 1,
    //   duration: 1,
    //   ease: "power4.inOut",
    //   scrollTrigger: {
    //     trigger: `.${s.whoismonkeTxt}`,
    //     start: "bottom 100%",
    //     end: "bottom 100%",
    //     scrub: false,
    //   }
    // })
  
    gsap.to(`.${s.violetTextBGWrapper}`, {
      "--main-text": 1,
      duration: 1,
      delay: 0.2,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: `.${s.violetTextBGWrapper}`,
        start: "top 50%",
        end: "top 50%",
        scrub: false,
      }
    })
})

  return (
    <div className={s.root}>
      <div className={s.objects}>
        <img src={WildHO} className={s.wildHO} alt="wild ho" />
        <img src={BonusHO} className={s.bonusHO} alt="bonus ho" />
      </div>
        <div className={s.whoismonkeTxt}>WHO IS MONKE?</div>
          <div className={s.mainInfo}>
            <div className={s.textWithButton}>
                <div className={s.violetTextBGWrapper}>
                    <img src={VioletTextBG} className={s.violetTextBG} alt="violet text bg" />
                </div>
                <button type="button" className={s.whitePaperButton}>WHITE PAPER</button>
            </div>
            <div className={s.fireMonkeyHOWrapper}>
              <img src={FireMonkeyHO} className={s.fireMonkeyHO} alt="fire monkey" />
              <img src={FireMonkey} className={cx(s.fireMonkeyHO, s.fireMonkey)} alt="fire monkey2" />
            </div>
          </div>
          <div className={s.marqueeLine}>
            <div className={s.marque}>
              <Marquee speed={50} gradient={false} direction='right' autoFill>
                <div className={s.cmMarque}>
                  <span key="a" className={s.crazyMonkeyTextItem}> CRAZY MONKE </span>
                  <span key="b" className={s.crazyMonkeyTextItem}> CRAZY MONKE </span>
                  <span key="c" className={s.crazyMonkeyTextItem}> CRAZY MONKE </span>
                  <span key="d" className={s.crazyMonkeyTextItem}> CRAZY MONKE </span>
                  <span key="e" className={s.crazyMonkeyTextItem}> CRAZY MONKE </span>
                  <span key="f" className={s.crazyMonkeyTextItem}> CRAZY MONKE </span>
                  <span key="g" className={s.crazyMonkeyTextItem}> CRAZY MONKE </span>
                  <span key="h" className={s.crazyMonkeyTextItem}> CRAZY MONKE </span>
                  <span key="i" className={s.crazyMonkeyTextItem}> CRAZY MONKE </span>
                  <span key="j" className={s.crazyMonkeyTextItem}> CRAZY MONKE </span>
                </div>
              </Marquee>
            </div>
            <img src={SVGVelvetLine} className={s.velvetLine} alt="velvet line" />
        </div>
    </div>
  )
}
