import { FC, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import cx from 'classnames';

import { MarketingInfo } from '../../helpComponents';

import SVG25hp from '../../images/hp-lines/25hp.svg';
import SVG15hp from '../../images/hp-lines/15hp.svg';
import SVG10hp from '../../images/hp-lines/10hp.svg';

import LineRS from '../../images/lines/line-rs.png';
import LineLS from '../../images/lines/line-ls.png';

import s from './Tokenomics.module.scss';

export const Tokenomics: FC = () => {
  const monkeText = useRef<HTMLDivElement>(null);
  const btrText = useRef<HTMLDivElement>(null);
  const btlText = useRef<HTMLDivElement>(null);
  // useGSAP(() => {
  //   gsap.fromTo(`.${s.tokenomicsText}`, {
  //     scale: 3,
  //     opacity: 0,
  //   }, {
  //     opacity: 1,
  //     scale: 1,
  //     duration: 1,
  //     ease: "power4.inOut",
  //     scrollTrigger: {
  //       trigger: `.${s.tokenomicsText}`,
  //       start: "bottom 100%",
  //       end: "bottom 100%",
  //       scrub: false,
  //     }
  //   })

  //   gsap.fromTo(`.${s.presaleDP}`, {
  //     opacity: 0,
  //   }, {
  //     opacity: 1,
  //     duration: 1,
  //     ease: "power4.inOut",
  //     scrollTrigger: {
  //       trigger: `.${s.presaleDP}`,
  //       start: "bottom 75%",
  //       end: "bottom 75%",
  //       scrub: false,
  //     }
  //   })

  //   gsap.fromTo(`.${s.marketingDP}`, {
  //     opacity: 0,
  //   }, {
  //     opacity: 1,
  //     duration: 1,
  //     ease: "power4.inOut",
  //     scrollTrigger: {
  //       trigger: `.${s.marketingDP}`,
  //       start: "bottom 75%",
  //       end: "bottom 75%",
  //       scrub: false,
  //     }
  //   })

  //   gsap.fromTo(`.${s.liquidityDP}`, {
  //     opacity: 0,
  //   }, {
  //     opacity: 1,
  //     duration: 1,
  //     ease: "power4.inOut",
  //     scrollTrigger: {
  //       trigger: `.${s.liquidityDP}`,
  //       start: "bottom 75%",
  //       end: "bottom 75%",
  //       scrub: false,
  //     }
  //   })

  //   gsap.fromTo(`.${s.stakingDP}`, {
  //     opacity: 0,
  //   }, {
  //     opacity: 1,
  //     duration: 1,
  //     ease: "power4.inOut",
  //     scrollTrigger: {
  //       trigger: `.${s.stakingDP}`,
  //       start: "bottom 75%",
  //       end: "bottom 75%",
  //       scrub: false,
  //     }
  //   })

  //   gsap.fromTo(`.${s.rewardsDP}`, {
  //     opacity: 0,
  //   }, {
  //     opacity: 1,
  //     duration: 1,
  //     ease: "power4.inOut",
  //     scrollTrigger: {
  //       trigger: `.${s.rewardsDP}`,
  //       start: "bottom 75%",
  //       end: "bottom 75%",
  //       scrub: false,
  //     }
  //   })

    ///

  //   gsap.fromTo(`.${s.one}`, {
  //     opacity: 0,
  //   }, {
  //     opacity: 1,
  //     duration: 1,
  //     ease: "power4.inOut",
  //     scrollTrigger: {
  //       trigger: `.${s.one}`,
  //       start: "bottom 50%",
  //       end: "bottom 50%",
  //       scrub: false,
  //     }
  //   })

  //   gsap.fromTo(`.${s.two}`, {
  //     opacity: 0,
  //   }, {
  //     opacity: 1,
  //     duration: 1,
  //     ease: "power4.inOut",
  //     scrollTrigger: {
  //       trigger: `.${s.two}`,
  //       start: "bottom 50%",
  //       end: "bottom 50%",
  //       scrub: false,
  //     }
  //   })

  //   gsap.fromTo(`.${s.three}`, {
  //     opacity: 0,
  //   }, {
  //     opacity: 1,
  //     duration: 1,
  //     ease: "power4.inOut",
  //     scrollTrigger: {
  //       trigger: `.${s.three}`,
  //       start: "bottom 50%",
  //       end: "bottom 50%",
  //       scrub: false,
  //     }
  //   })

  //   gsap.fromTo(`.${s.four}`, {
  //     opacity: 0,
  //   }, {
  //     opacity: 1,
  //     duration: 1,
  //     ease: "power4.inOut",
  //     scrollTrigger: {
  //       trigger: `.${s.four}`,
  //       start: "bottom 50%",
  //       end: "bottom 50%",
  //       scrub: false,
  //     }
  //   })

  //   gsap.fromTo(`.${s.five}`, {
  //     opacity: 0,
  //   }, {
  //     opacity: 1,
  //     duration: 1,
  //     ease: "power4.inOut",
  //     scrollTrigger: {
  //       trigger: `.${s.five}`,
  //       start: "bottom 50%",
  //       end: "bottom 50%",
  //       scrub: false,
  //     }
  //   })
  // })

  return (
    <div className={s.root}>
        <div className={s.tokenomicsText}>TOKENOMICS</div>
          <MarketingInfo
            headerText="Presale: 25%"
            text="With big plans ahead, 25% of $FROP is available for early supporters who decide to join Popo’s army."
            line={LineRS}
            hpline={SVG25hp}
            className={cx(s.mb, s.mobile)}
          />
        <MarketingInfo
          headerText="Marketing: 25%"
          text="Popo understands the importance of being known so 25% of the $FROP supply will be going to marketing, ensuring Popo’s Army keeps growing."
          line={LineLS}
          hpline={SVG25hp}
          right={false}
          className={cx(s.mb, s.mobile, s.two)}
        />
        <MarketingInfo
          headerText="Liquidity: 10%"
          text="To get $FROP to as many places as possible, Popo has reserved 10% of supply for CEX and DEX listings."
          line={LineRS}
          hpline={SVG10hp}
          className={cx(s.mobile, s.mb, s.three)}
        />
        <div className={s.monketToken2}>
          <MarketingInfo
            headerText="Presale: 25%"
            text="With big plans ahead, 25% of $FROP is available for early supporters who decide to join Popo’s army."
            line={LineRS}
            hpline={SVG25hp}
            className={s.presaleDP}
          />
          <MarketingInfo
            headerText="Marketing: 25%"
            text="Popo understands the importance of being known so 25% of the $FROP supply will be going to marketing, ensuring Popo’s Army keeps growing."
            line={LineLS}
            hpline={SVG25hp}
            right={false}
            className={s.marketingDP}
          />
          <MarketingInfo
            headerText="Liquidity: 10%"
            text="To get $FROP to as many places as possible, Popo has reserved 10% of supply for CEX and DEX listings."
            line={LineRS}
            hpline={SVG10hp}
            className={s.liquidityDP}
          />
          <MarketingInfo
            headerText="Staking: 25%"
            text="To get $FROP to as many places as possible, Popo has reserved 10% of supply for CEX and DEX listings."
            line={LineLS}
            hpline={SVG25hp}
            right={false}
            className={s.stakingDP}
          />
          <MarketingInfo
            headerText="Rewards: 15%"
            text="To get $FROP to as many places as possible, Popo has reserved 10% of supply for CEX and DEX listings."
            line={LineRS}
            hpline={SVG15hp}
            className={s.rewardsDP}
          />
        </div>
        <MarketingInfo
          headerText="Staking: 25%"
          text="To get $FROP to as many places as possible, Popo has reserved 10% of supply for CEX and DEX listings."
          line={LineLS}
          hpline={SVG25hp}
          right={false}
          className={cx(s.mb, s.mobile, s.four)}
        />
        <MarketingInfo
          headerText="Rewards: 15%"
          text="To get $FROP to as many places as possible, Popo has reserved 10% of supply for CEX and DEX listings."
          line={LineRS}
          hpline={SVG15hp}
          className={cx(s.mobile, s.five)}
        />
    </div>
  )
}
