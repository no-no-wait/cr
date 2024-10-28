import { FC } from 'react'
import cx from 'classnames';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import BYBIT from '../../images/crypto/BYBIT.webp';
import ARBITRUM from '../../images/crypto/ARBITRUM.webp';
import AVALANCHE from '../../images/crypto/AVALANCHE.webp';
import BASE from '../../images/crypto/BASE.webp';
import BNBCHAIN from '../../images/crypto/BNBCHAIN.webp';
import ETH from '../../images/crypto/ETH.webp';
import GATEIO from '../../images/crypto/GATEIO.webp';
import HTX from '../../images/crypto/HTX.webp';
import KUCOIN from '../../images/crypto/KUCOIN.webp';
import MEXC from '../../images/crypto/MEXC.webp';
import OKX from '../../images/crypto/OKX.webp';
import OPTIMISM from '../../images/crypto/OPTIMISM.webp';
import PINKSALE from '../../images/crypto/PINKSALE.webp';
import POLYGON from '../../images/crypto/POLYGON.webp';
import SOLANA from '../../images/crypto/SOLANA.webp';

import s from './Crypto.module.scss';
import Slider from 'react-slick';
import Marquee from 'react-fast-marquee';

const futureListingsArray = [BYBIT, GATEIO, OKX, HTX, KUCOIN, MEXC, OPTIMISM, POLYGON, SOLANA, PINKSALE];
const poweredByArray = [ARBITRUM, AVALANCHE, BASE, BNBCHAIN, ETH];

export const Crypto: FC = () => {
  const settings1 = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 5000,
    autoplay: true,
    // draggable: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    adaptiveHeight: true,
    dotsClass: `slick-dots ${s.customDots}`,
    responsive: [
      {
        breakpoint: 1238,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          speed: 500,
          autoplay: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          speed: 500,
          autoplay: false
        }
      }
    ]
  };

  const settings2 = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 5000,
    autoplay: true,
    // draggable: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    adaptiveHeight: true,
    dotsClass: `slick-dots ${s.customDots2}`,
    responsive: [
      {
        breakpoint: 1238,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          speed: 500,
          autoplay: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          speed: 500,
          autoplay: false
        }
      }
    ]
  };

  // useGSAP(() => {
  //   gsap.fromTo(`.${s.futureListings}`, {
  //     scale: 3,
  //     opacity: 0,
  //   }, {
  //     opacity: 1,
  //     scale: 1,
  //     duration: 1,
  //     ease: "power4.inOut",
  //     scrollTrigger: {
  //       trigger: `.${s.futureListings}`,
  //       start: "bottom 100%",
  //       end: "bottom 100%",
  //       scrub: false,
  //     }
  //   })

  //   gsap.fromTo(`.${s.poweredBy}`, {
  //     scale: 3,
  //     opacity: 0,
  //   }, {
  //     opacity: 1,
  //     scale: 1,
  //     duration: 1,
  //     ease: "power4.inOut",
  //     scrollTrigger: {
  //       trigger: `.${s.poweredBy}`,
  //       start: "bottom 100%",
  //       end: "bottom 100%",
  //       scrub: false,
  //     }
  //   })
  // })

  return (
    <div className={s.root}>
      <div className={s.futureListings}>
        FUTURE LISTINGS
      </div>
      <div className={s.futureListingsSlider}>
      <div className={cx(s.marque, s.firstMarque)}>
        <Marquee speed={50} gradient={false} direction='right' autoFill>
          {futureListingsArray.map((item) => {
              return <div key={item} className={s.m}><img src={item} className={cx(s.sliderItem1, s.slickDots)} alt={item} /></div>
          })}
        </Marquee>
      </div>
        <Slider {...settings1} className={s.dn}>
          {futureListingsArray.map((item) => {
              return <div key={item}><img src={item} className={cx(s.sliderItem1, s.slickDots)} alt={item} /></div>
          })}
        </Slider>
      </div>
      <div className={s.poweredBy}>
        POWERED BY
      </div>
      <div className={s.poweredBySlider}>
        <div className={cx(s.marque, s.poweredBySlider, s.firstMarque)}>
          <Marquee speed={50} gradient={false} direction='left' autoFill>
            {poweredByArray.map((item) => {
                return <div key={item} className={s.m}><img src={item} className={cx(s.sliderItem1, s.slickDots)} alt={item} /></div>
            })}
          </Marquee>
        </div>
        <Slider {...settings2} className={s.dn}>
            {poweredByArray.map((item) => {
                return <div key={item}><img src={item} className={cx(s.sliderItem2, s.slickDots)} alt={item} /></div>
            })}
          </Slider>
        </div>
    </div>
  )
}
