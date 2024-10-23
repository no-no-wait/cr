import { FC, ReactNode } from 'react';
import cx from 'classnames';

import Telegram from '../../images/socials/telegram.png';
import X from '../../images/socials/x.png';
import Instagram from '../../images/socials/instagram.png';
import YouTube from '../../images/socials/youtube.png';

import s from './Socials.module.scss';

interface SocialsProps {
  bigIcons?: boolean;
  className?: string;
}

interface Social {
    name: string,
    iconPhotoLink: string,
    iconLink: string;
}

const socials: Array<Social> = [
    {
      name: 'Telegram',
      iconPhotoLink: Telegram,
      iconLink: '/'
    }, {
      name: 'X',
      iconPhotoLink: X,
      iconLink: '/'
    }, {
      name: 'Instagram',
      iconPhotoLink: Instagram,
      iconLink: '/'
    }, {
      name: 'YouTube',
      iconPhotoLink: YouTube,
      iconLink: '/'
    }
  ];

export const Socials: FC<SocialsProps> = ({ bigIcons = false, className }) => {
  return (
    <div className={cx(s.socials, className)}>
        {socials.map(({ name, iconPhotoLink, iconLink }): ReactNode => {
          return (
            <a key={name} href={iconLink} className={s.socialLink}>
              <img src={iconPhotoLink} alt={name} className={cx(s.socialIcon, { [s.bigSocialIcon]: bigIcons })} />
            </a>
          )
        })}
      </div>
  )
}
