import { FC } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import GlarePink from '../../images/glare/glare-pink.png';
import cx from 'classnames';

import SVGBlueInfo from '../../images/monke-info/blue-info.svg';
import SVGPinkInfo from '../../images/monke-info/pink-info.svg';
import SVGGreenInfo from '../../images/monke-info/green-info.svg';
import SVGYellowInfo from '../../images/monke-info/yellow-info.svg';
import SVGBussinessMonkey from '../../images/monkes/bussiness-monkey.svg';

import s from './MonkeInfo.module.scss';
import Slider from 'react-slick';

const monkeInfoArray = [{key: 'SVGBlueInfo', item: SVGBlueInfo}, {key: 'SVGPinkInfo', item: SVGPinkInfo}, {key: 'SVGGreenInfo', item: SVGGreenInfo}, {key: 'SVGYellowInfo', item: SVGYellowInfo}];

export const MonkeInfo: FC = () => {
    // const mm = gsap.matchMedia();
    // const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // useGSAP(() => {
    //     tl.to(`.${s.bussinessMonkey}`, { rotate: -5, scale: 1, duration: 0.5 })
    //     .to(`.${s.bussinessMonkey}`, { rotate: 5, scale: 1.11, duration: 0.5 })
    //     .to(`.${s.bussinessMonkey}`, { rotate: -5, scale: 1, duration: 0.5 });

    //     gsap.fromTo(`.${s.whereToBuyMonkeyText}`, {
    //         opacity: 0,
    //     }, {
    //         opacity: 1,
    //         delay: 0.4,
    //         duration: 0.5,
    //         ease: "power4.out",
    //         scrollTrigger: {
    //             trigger: `.${s.whereToBuyMonkeyText}`,
    //             start: "top 100%",
    //             end: "top 100%",
    //             scrub: false,
    //           }
    //     })

    //     gsap.fromTo(`.${s.isMonkeySecureText}`, {
    //         opacity: 0,
    //     }, {
    //         duration: 0.5,
    //         opacity: 1,
    //         delay: 0.5,
    //         ease: "power4.out",
    //         scrollTrigger: {
    //             trigger: `.${s.isMonkeySecureText}`,
    //             start: "top 100%",
    //             end: "top 100%",
    //             scrub: false,
    //           }
    //     })

    //     mm.add("(min-width: 1238px)", () => {
    //         gsap.fromTo(`.${s.whereToBuyMonkeyText}`, {
    //             x: -475,
    //             opacity: 0,
    //         }, {
    //             x: -100,
    //             opacity: 1,
    //             scrollTrigger: {
    //                 trigger: `.${s.whereToBuyMonkeyText}`,
    //                 start: "top 100%",
    //                 end: "top 90%",
    //                 scrub: false,
    //               }
    //         })
    
    //         gsap.fromTo(`.${s.isMonkeySecureText}`, {
    //             opacity: 0,
    //             x: -350,
    //         }, {
    //             x: -100,
    //             opacity: 1,
    //             scrollTrigger: {
    //                 trigger: `.${s.whereToBuyMonkeyText}`,
    //                 start: "top 100%",
    //                 end: "top 90%",
    //                 scrub: false,
    //               }
    //         })
    //     })
    // })

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

  return (
    <div className={s.root}>
        <img src={GlarePink} className={cx(s.glare, s.glarePink)} alt="glare pink66" />
        <img src={GlarePink} className={cx(s.glare, s.glarePink1)} alt="glare pink177" />
        <div className={s.info}>
            <div className={s.whereToBuyMonkeyText}>WHERE CAN I BUY $MONKEY</div>
            <div className={s.isMonkeySecureText}>IS $MONKEY SECURE</div>
            <Slider {...settings} className={s.slider}>
                {monkeInfoArray.map(({ key, item }) => {
                    return <div key={key}><img className={s.sliderImg} src={item} alt={key}/></div>
                })}
            </Slider>
        </div>
        <img src={SVGBussinessMonkey} className={s.bussinessMonkey} rel='preload' alt="bussiness monkey" />
    </div>
  )
}
