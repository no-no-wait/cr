import { FC } from 'react';
import cx from 'classnames';

import logoIndex from '../../images/header/logo-index.png';
import { Socials, Navigation } from '../../helpComponents';

import s from './Header.module.scss'

export const Header: FC = () => {
  return (
    <div className={cx(s.root)}>
      <a href="/" className={s.logoLink}>
        <img src={logoIndex} className={s.logoIndex} alt="logo index" />
      </a>
      <Navigation className={s.navigation} />
      <Socials />
    </div>
  )
}
