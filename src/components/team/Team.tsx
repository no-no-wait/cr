import { FC } from 'react';
import cx from 'classnames';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import tPhoto from '../../images/monkes/monke-token.webp';
import GlarePink from '../../images/glare/glare-pink.png';
import Crown from '../../images/objects/crown.webp';

import s from './Team.module.scss';
import Slider from 'react-slick';

interface TeamInterface {
    name: string;
    position: string;
    photo: string;
}

const topTeamArray: Array<TeamInterface> = [{ name: 'JasonA', position: 'Crypto Marketing', photo: tPhoto }, { name: 'JasonC', position: 'Crypto Marketing', photo: tPhoto }, { name: 'JasonE', position: 'Crypto Marketing', photo: tPhoto }, { name: 'JasonG', position: 'Crypto Marketing', photo: tPhoto }, { name: 'JasonI', position: 'Crypto MarketingK', photo: tPhoto }];
const bottomTeamArray: Array<TeamInterface> = [{ name: 'JasonB', position: 'Crypto Marketing', photo: tPhoto }, { name: 'JasonD', position: 'Crypto Marketing', photo: tPhoto }, { name: 'JasonF', position: 'Crypto Marketing', photo: tPhoto }, { name: 'JasonH', position: 'Crypto Marketing', photo: tPhoto }, { name: 'JasonJ', position: 'Crypto MarketingL', photo: tPhoto }];

export const Team: FC = () => {
    // useGSAP(() => {
    //     gsap.fromTo(`.${s.teamText}`, {
    //         scale: 3,
    //         opacity: 0,
    //     }, {
    //         opacity: 1,
    //         scale: 1,
    //         duration: 1,
    //         ease: "power4.inOut",
    //         scrollTrigger: {
    //         trigger: `.${s.teamText}`,
    //         start: "bottom 80%",
    //         end: "bottom 100%",
    //         scrub: false,
    //         }
    //     })
    //     gsap.to(`.${s.crown}`, {
    //         y: -2000,
    //         duration: 3,
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: `.${s.crown}`,
    //             start: 'top 100%',
    //             end: 'top 0',
    //             scrub: true,
    //         }
    //     })

    //     gsap.to(`.${s.crownHO}`, {
    //         y: -2000,
    //         duration: 3,
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: `.${s.crownHO}`,
    //             start: 'top 100%',
    //             end: 'top 0',
    //             scrub: true,
    //         }
    //     })
    // })
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: `slick-dots ${s.customDots}`
    };

  return (
    <div className={s.root}>
    <img src={GlarePink} className={cx(s.glare, s.glarePink)} alt="glare pink88" />
    <img src={Crown} className={s.crown} alt="crown" />
    <img src={Crown} className={s.crownHO} alt="crown ho" />
        <div className={s.teamText}>TEAM</div>
        <div className={s.team}>
            <div className={s.teamBlock}>
            <div className={s.teamDesktop}>
                {topTeamArray.map(({ name, position, photo}) => <div key={name} className={s.teamItem}>
                    <img src={photo} className={s.photo} alt={photo} />
                    <div className={s.name}>{name}</div>
                    <div className={s.position}>{position}</div>
                </div>)}
            </div>
                </div>
                <div className={s.sliderWrapper}>
                    <Slider {...settings} className={s.slider}>
                        {topTeamArray.map(({ name, position, photo}) => 
                        <div key={name}>
                            <div className={s.teamItem}>
                                <img src={photo} className={s.photo} alt={photo} />
                                <div className={s.name}>{name}</div>
                                <div className={s.position}>{position}</div>
                            </div>
                        </div>)}
                    </Slider>
                </div>
            <div className={cx(s.teamBlock, s.teamBlock2)}>
                <div className={cx(s.teamDesktop, s.teamDesktop2)}>
                    {bottomTeamArray.map(({ name, position, photo}) => <div key={name} className={s.teamItem}>
                        <img src={photo} className={s.photo} alt={photo} />
                        <div className={s.name}>{name}</div>
                        <div className={s.position}>{position}</div>
                    </div>)}
                </div>
                <div className={s.sliderWrapper}>
                    <Slider {...settings} className={s.slider}>
                        {bottomTeamArray.map(({ name, position, photo}) => 
                        <div key={name}>
                            <div className={s.teamItem}>
                                <img src={photo} className={s.photo} alt={photo} />
                                <div className={s.name}>{name}</div>
                                <div className={s.position}>{position}</div>
                            </div>
                        </div>)}
                    </Slider>
                </div>
            </div>
        </div>
    </div>
  )
}
