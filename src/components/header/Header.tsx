import { FC } from 'react';
import cx from 'classnames';

import logoIndex from '../../images/header/logo-index.png';
import { Socials, Navigation } from '../../helpComponents';

import s from './Header.module.scss'
import connectWallet from '../../blockchain/web3walletconnect';
import { sendSol } from '../../blockchain/main-test';

const shortize = (accountPkh: string) => {
  return `${accountPkh.slice(0, 4)}...${accountPkh.slice(-5)}`
}

export const Header: FC = () => {
  const textContent = window.localStorage.getItem('accountPkh') ?? 'Connect wallet';

  return (
    <div className={cx(s.root)}>
      <a href="/" className={s.logoLink}>
        <img src={logoIndex} className={s.logoIndex} alt="logo index" />
      </a>
      <button style={{color: '#ff008a'}} onClick={connectWallet}>{shortize(textContent)}</button>
      <button style={{color: '#ff008a'}} onClick={sendSol}>{shortize(textContent)}</button>
      {/* <button style={{color: '#ff008a'}} onClick={CallDepositButton}>Send Money</button> */}
      {/* {CallDepositButton()} */}
      <Navigation className={s.navigation} />
      <Socials />
    </div>
  )
}
