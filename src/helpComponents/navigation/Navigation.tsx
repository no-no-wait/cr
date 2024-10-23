import { FC } from 'react'
import cx from 'classnames';

import s from './Navigation.module.scss';

interface NavigationProps {
    className?: string;
}

interface NavButton {
    name: string,
    navLink: string
  }
  
  const navigation: Array<NavButton> = [
    {
      name: 'WHO IS MONKE?',
      navLink: '/',
    },
    {
      name: 'HOW TO BUY?',
      navLink: '/',
    },
    {
      name: 'TOKENOMICS',
      navLink: '/',
    },
    {
      name: 'ROAD MAP',
      navLink: '/',
    },
    {
      name: 'FAQ',
      navLink: '/',
    },
  ]

export const Navigation: FC<NavigationProps> = ({ className }) => {
  return (
    <div className={cx(s.nav, className)}>
        {navigation.map(({ name, navLink }) => {
          return (
            <a key={name} href={navLink} className={s.navLink}>
              <span className={s.navButton}>{name}</span>
            </a>
          )
        })}
      </div>
  )
}
