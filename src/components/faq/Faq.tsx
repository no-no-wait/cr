import { FC } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { FaqItem } from '../../helpComponents';

import s from './Faq.module.scss';

const node = <div>
    You can buy $FROP using multiple currencies and blockchains, all you need to do is connect your wallet to the presale widget! Step By Step guides here: <a href="https://telegra.ph/How-to-buy-FROP-tokens-using-smartphone-with-Trust-Wallet-06-22" target="_blank" rel="noreferrer noopener">Trust Wallet</a>, <a href="https://telegra.ph/How-to-buy-using-computer-with-MetaMask-06-22" target="_blank" rel="noreferrer noopener">Metamask</a>, <a href="https://telegra.ph/How-to-buy-FROP-tokens-with-Card-06-22" target="_blank" rel="noreferrer noopener">Card</a>
    </div>

export const Faq: FC = () => {
  // useGSAP(() => {
  //   gsap.fromTo(`.${s.faqText}`, {
  //       scale: 3,
  //       opacity: 0,
  //   }, {
  //       opacity: 1,
  //       scale: 1,
  //       duration: 1,
  //       ease: "power4.inOut",
  //       scrollTrigger: {
  //       trigger: `.${s.faqText}`,
  //       start: "bottom 100%",
  //       end: "bottom 100%",
  //       scrub: false,
  //       }
  //   })
  // })

  return (
    <div className={s.root}>
        <div className={s.faqText}>FAQ</div>
        <div className={s.faq}>
            <FaqItem header='Who is MONKE?' text="Popo, a blue poison dart frog, seeks vengeance against Pepe for the destruction of their shared homeland, the motherground. Once a tribal warrior, Popo's resolve is fueled by Pepe's abandonment of their tribe in the face of peril. Left with nothing but a burning desire for retribution, Popo retreats into exile, determined to orchestrate Pepe's downfall and rallying allies to his cause." />
            <FaqItem header='Why buy $MONKE?' text="If you missed Pepe, or you’d like to be a part of something legendary that may bring you huge returns. Popo is a better version of his cousin Pepe, emerging from many struggles and hardships, yet determined to make things right for his supporters and the motherground. Popo is here with the sole intention of taking over Pepe as the biggest frog coin, and to perhaps go even further with the backing of a loyal army." />
            <FaqItem header='How to buy $MONKE?' text={node} />
            <FaqItem header='How do I join the Popo Army?' text="It's very simple! Join our social media to make new friends, have fun and take over the meme world with Popo!" />
        </div>
    </div>
  )
}
